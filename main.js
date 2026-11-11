(function () {
  const S = window.SITE;
  const app = document.getElementById("app");
  if (window.SITE_VERSION) console.info("Portfolio build " + window.SITE_VERSION);
  const CASES = ["app", "redesign", "reorder", "favorites"];
  const VQ = window.SITE_VERSION ? "?v=" + window.SITE_VERSION : "";
  const IMG = (n) => (window.ASSETS && window.ASSETS[n + ".webp"]) || `assets/${n}.webp${VQ}`;
  const FILE = (f) => (window.ASSETS && window.ASSETS[f]) || `assets/${f}${VQ}`;
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
  };
  let lang = store.get("lang") || ((navigator.language || "").toLowerCase().startsWith("uk") ? "uk" : "en");
  let muted = store.get("muted") === "1";
  if (store.get("theme")) document.documentElement.dataset.theme = store.get("theme");
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const reduce = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- іконки ---------- */
  const arrow = `<svg viewBox="0 0 72 26" aria-hidden="true"><path d="M4 15 C 22 5, 44 5, 62 12" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><path d="M54 5 L63 12 L54 19" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  /* плавна стрілка від нотатки до імені */
  const noteArrow = `<svg viewBox="0 0 60 56" aria-hidden="true"><path d="M56 8 C 34 6, 16 16, 12 40" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/><path d="M4 31 L12 42 L21 33" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const I = {
    sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>`,
    moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z"/></svg>`,
    sound: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9v6h4l5 4V5L8 9H4Z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/></svg>`,
    mute: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9v6h4l5 4V5L8 9H4Z"/><path d="M17 9l5 6M22 9l-5 6"/></svg>`,
    burger: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>`,
    close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>`,
    down: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v12M6 11l6 6 6-6M5 20h14"/></svg>`,
    play: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.5v15l13-7.5z"/></svg>`,
    stop: `<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="1.5"/></svg>`,
    eject: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 5l8 9H4z"/><rect x="4" y="16" width="16" height="3" rx="1"/></svg>`,
    prev: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11 5.5v13L3 12zM21 5.5v13L13 12z"/></svg>`,
    next: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 5.5v13l8-6.5zM3 5.5v13L11 12z"/></svg>`,
    loop: `<svg viewBox="0 0 32 32" fill="none" stroke="var(--pen)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 14a10 10 0 0 1 17-6l3 3M26 18a10 10 0 0 1-17 6l-3-3"/><path d="M26 5v6h-6M6 27v-6h6"/></svg>`,
    heart: `<svg viewBox="0 0 56 56" fill="none" stroke="#17192E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M28 47 C 11 36, 6 26, 9 17 C 12 9, 23 7, 28 16 C 33 7, 44 9, 47 17 C 50 26, 45 36, 28 47 Z" fill="#FF6B9A"/></svg>`,
    chart: `<svg viewBox="0 0 56 56" fill="none" stroke="#17192E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M7 47 H49"/><rect x="11" y="30" width="8" height="17" fill="#2446F0"/><rect x="24" y="20" width="8" height="27" fill="#2446F0"/><rect x="37" y="25" width="8" height="22" fill="#2446F0"/><path d="M9 18 C 20 12, 30 16, 47 7"/></svg>`,
    scale: `<svg viewBox="0 0 56 56" fill="none" stroke="#17192E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M28 8 V47 M18 47 H38 M10 15 H46"/><path d="M10 15 L4 31 H16 Z M46 15 L40 31 H52 Z" fill="#22B58A"/></svg>`,
  };

  /* ---------- реалістична касета ---------- */
  function cassetteSVG(color) {
    const reel = (cx) => `<g class="reel"><circle cx="${cx}" cy="110" r="9" fill="#FBFAF6"/>${[0, 60, 120, 180, 240, 300].map((a) => `<rect x="${cx - 1.5}" y="102" width="3" height="5" fill="#24263A" transform="rotate(${a} ${cx} 110)"/>`).join("")}<circle cx="${cx}" cy="110" r="3" fill="#24263A"/></g>`;
    const screw = (x, y) => `<circle cx="${x}" cy="${y}" r="6" fill="#4A4E68" stroke="#0E0F1C" stroke-width="1.5"/><path d="M${x - 3.5} ${y} h7 M${x} ${y - 3.5} v7" stroke="#0E0F1C" stroke-width="1.6"/>`;
    return `<svg class="body" viewBox="0 0 300 190" aria-hidden="true">
      <defs><pattern id="rib" width="4" height="4" patternUnits="userSpaceOnUse"><rect width="4" height="2" fill="rgba(255,255,255,.04)"/></pattern></defs>
      <rect x="2" y="32" width="10" height="44" rx="3" fill="#1C1E30"/><rect x="288" y="32" width="10" height="44" rx="3" fill="#1C1E30"/>
      <rect x="8" y="8" width="284" height="174" rx="14" fill="#24263A" stroke="#0E0F1C" stroke-width="3"/>
      <rect x="8" y="8" width="284" height="174" rx="14" fill="url(#rib)"/>
      <path d="M56 9 L66 40 M244 9 L234 40" stroke="#3A3D52" stroke-width="2"/>
      <circle cx="96" cy="24" r="7" fill="#ECEEF3"/><circle cx="204" cy="24" r="7" fill="#ECEEF3"/>
      <rect x="122" y="18" width="11" height="12" rx="3" fill="#ECEEF3"/><rect x="167" y="18" width="11" height="12" rx="3" fill="#ECEEF3"/>
      ${screw(22, 22)}${screw(278, 22)}${screw(22, 168)}${screw(278, 168)}${screw(150, 36)}
      <rect x="26" y="44" width="248" height="112" rx="5" fill="#FBFAF6"/>
      <rect x="26" y="92" width="248" height="11" fill="${color}" opacity=".55"/>
      <rect x="26" y="103" width="248" height="11" fill="${color}"/>
      <rect x="26" y="114" width="248" height="11" fill="${color}" opacity=".75" style="filter:brightness(.8)"/>
      <rect x="82" y="91" width="136" height="38" rx="19" fill="#17192E"/>
      <rect x="130" y="96" width="40" height="28" rx="3" fill="#2B2E44"/>
      <circle cx="110" cy="110" r="15" fill="#6B3E1F"/><circle cx="190" cy="110" r="11" fill="#6B3E1F"/>
      <path d="M130 100 Q 150 106 170 100" stroke="#8A5A33" stroke-width="2" fill="none"/>
      ${reel(110)}${reel(190)}
      <path d="M48 140 H252 M48 150 H252" stroke="#C9CCDA" stroke-width="1.4"/>
      <path d="M70 182 L84 160 H216 L230 182 Z" fill="#1C1E30" stroke="#0E0F1C" stroke-width="2"/>
      <circle cx="122" cy="171" r="3.5" fill="#0E0F1C"/><circle cx="178" cy="171" r="3.5" fill="#0E0F1C"/>
    </svg>`;
  }
  const cassette = (id, title) => `<div class="cassette" style="--tape:${S.tapes[id]}">${cassetteSVG(S.tapes[id])}<span class="ttl">${esc(title)}</span><span class="side">A</span></div>`;

  /* ---------- звуки (згенеровані в браузері, без чужої музики) ---------- */
  let ctx = null, master = null, live = [];
  const audio = () => {
    if (!ctx) { const C = window.AudioContext || window.webkitAudioContext; if (!C) return null; ctx = new C(); master = ctx.createGain(); master.gain.value = 0.18; master.connect(ctx.destination); }
    if (ctx.state === "suspended") ctx.resume();
    return ctx;
  };
  ["pointerdown", "keydown"].forEach((e) => window.addEventListener(e, () => audio(), { once: true, passive: true }));
  function tone(freq, start, dur, type = "sine", vol = 1, to) {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, ctx.currentTime + start);
    if (to) o.frequency.exponentialRampToValueAtTime(to, ctx.currentTime + start + dur);
    g.gain.setValueAtTime(0, ctx.currentTime + start);
    g.gain.linearRampToValueAtTime(vol, ctx.currentTime + start + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + start + dur);
    o.connect(g); g.connect(master); o.start(ctx.currentTime + start); o.stop(ctx.currentTime + start + dur + 0.05);
    live.push(o);
  }
  function say(word) {
    if (!("speechSynthesis" in window)) return;
    const u = new SpeechSynthesisUtterance(word); u.lang = "en-US"; u.rate = 0.95; u.pitch = 1.2; u.volume = 0.9;
    speechSynthesis.cancel(); speechSynthesis.speak(u);
  }
  const SOUNDS = {
    app() { /* поліфонічний рингтон у стилі старих телефонів: «Gran Vals» Тарреги (1902, суспільне надбання) */
      const n = { E6: 1318.5, D6: 1174.7, Fs5: 740, Gs5: 830.6, Cs6: 1108.7, B5: 987.8, D5: 587.3, E5: 659.3, A5: 880, Cs5: 554.4 };
      const e = 0.13, mel = [["E6",1],["D6",1],["Fs5",2],["Gs5",2],["Cs6",1],["B5",1],["D5",2],["E5",2],["B5",1],["A5",1],["Cs5",2],["E5",2],["A5",4]];
      const bass = [[0, 220], [6, 164.8], [12, 207.7], [18, 110]];
      let t = 0; mel.forEach(([k, d]) => { tone(n[k], t * e, d * e * 0.95, "square", 0.32); tone(n[k] * 2, t * e, d * e * 0.6, "sine", 0.12); t += d; });
      bass.forEach(([b, f]) => tone(f, b * e, 5 * e, "triangle", 0.5));
    },
    redesign() { /* оригінальний 8-бітний джингл у дусі старих ігрових приставок: стрибок і монетка */
      tone(300, 0, 0.18, "square", 0.4, 900);
      [523, 659, 784, 1047].forEach((f, i) => tone(f, 0.22 + i * 0.06, 0.09, "square", 0.38));
      tone(988, 0.52, 0.07, "square", 0.45); tone(1319, 0.59, 0.32, "square", 0.45);
    },
    reorder() { /* перемотка касети і слово repeat */
      tone(180, 0, 0.35, "sawtooth", 0.25, 900); tone(660, 0.42, 0.12, "triangle", 0.7); tone(880, 0.55, 0.18, "triangle", 0.7);
      setTimeout(() => say("Repeat!"), 380);
    },
    favorites() { /* іскорки і слово favorite */
      [1319, 1568, 2093, 2637].forEach((f, i) => tone(f, i * 0.07, 0.35, "sine", 0.5));
      setTimeout(() => say("Favorite!"), 250);
    },
  };
  let lastSound = 0;
  function playSound(id) {
    if (muted || !audio() || !SOUNDS[id]) return;
    const now = Date.now(); if (now - lastSound < 600) return; lastSound = now;
    stopSound(); SOUNDS[id]();
  }
  function stopSound() { live.forEach((o) => { try { o.stop(); } catch (e) {} }); live = []; if ("speechSynthesis" in window) speechSynthesis.cancel(); }

  /* ---------- шаблони ---------- */
  const phone = (inner, cls = "") => `<div class="phone ${cls}"><div class="scr">${inner}</div></div>`;
  const browser = (src, alt) => `<div class="browser"><div class="bar"><i></i><i></i><i></i></div><img src="${IMG(src)}" alt="${esc(alt)}" loading="lazy"></div>`;
  const block = (title, body) => `<section class="block"><h2>${esc(title)}</h2><div class="body">${body}</div></section>`;
  const Q = (s) => (lang === "uk" ? `«${s}»` : `“${s}”`);

  function tapeCard(id, t) {
    const c = t.cases[id];
    return `<article class="tape" data-id="${id}" style="--tape:${S.tapes[id]}">
      <button class="tape-art" type="button" aria-label="${esc(t.work.deck.load)}: ${esc(c.title)}">${cassette(id, c.title)}</button>
      <div class="tape-info">
        <div class="metric">${esc(c.metric)}</div>
        <div class="metric-label">${esc(c.short)}</div>
        <a class="open" href="#${id}">${esc(t.work.open)} ${arrow.replace('viewBox="0 0 72 26"', 'viewBox="0 0 72 26" width="34" height="14"')}</a>
      </div>
    </article>`;
  }

  function header(t) {
    const dark = document.documentElement.dataset.theme === "dark" || (!document.documentElement.dataset.theme && matchMedia("(prefers-color-scheme: dark)").matches);
    const cv = `<a class="ctrl cv" href="${FILE(S.cv.replace("assets/", ""))}" download="Yuliia-Chepizhna-CV.pdf" target="_blank" rel="noopener">${I.down}${esc(t.nav.cv)}</a>`;
    return `<header class="top"><div class="wrap">
      <a class="logo" href="#">Yuliia C.</a>
      <nav aria-label="Main"><a href="#work">${t.nav.work}</a><a href="#about">${t.nav.about}</a><a href="#contact">${t.nav.contact}</a></nav>
      <button class="ctrl" data-snd aria-label="${t.nav.sound}" aria-pressed="${!muted}">${muted ? I.mute : I.sound}</button>
      <button class="ctrl" id="lang" aria-label="Language">${t.nav.lang}</button>
      <button class="ctrl" id="theme" aria-label="${t.nav.theme}">${dark ? I.sun : I.moon}</button>
      ${cv}
      <button class="ctrl burger" id="burger" aria-label="${t.nav.menu}" aria-expanded="false" aria-controls="menu">${I.burger}</button>
    </div></header>
    <div class="menu-panel" id="menu" hidden><a href="#work">${t.nav.work}</a><a href="#about">${t.nav.about}</a><a href="#contact">${t.nav.contact}</a><button class="ctrl snd-m" data-snd data-label="${esc(t.nav.sound)}" aria-label="${t.nav.sound}" aria-pressed="${!muted}">${muted ? I.mute : I.sound}<span>${esc(t.nav.sound)}</span></button>${cv}</div>`;
  }

  function deck(t, kind) {
    const d = t.work.deck;
    return `<div class="deck" data-deck="${kind}">
      <div class="deck-top"><span>STEREO CASSETTE DECK</span><span class="leds"><i></i><i></i></span></div>
      <div class="door" data-door><p class="slot-hint">${esc(d.drag)}</p></div>
      <div class="display" data-disp>${esc(d.empty)}</div>
      <div class="keys">
        <button class="key" data-k="stop" type="button" disabled aria-label="${esc(d.stop)}">${I.stop}</button>
        <button class="key play" data-k="play" type="button" disabled>${I.play}${esc(d.play)}</button>
        <button class="key" data-k="eject" type="button" disabled aria-label="${esc(d.eject)}">${I.eject}</button>
      </div>
    </div>`;
  }

  /* ---------- головна ---------- */
  function home(t) {
    const h = t.hero, m = t.more, a = t.about;
    const [first, ...rest] = h.name.split(" ");
    return `${header(t)}<main>
    <section class="hero"><div class="wrap">
      <div>
        <div class="hero-title"><span class="hero-note hand">${noteArrow}${esc(h.note)}</span>
          <h1><span>${esc(first)}</span><span>${esc(rest.join(" "))}</span></h1></div>
        <div class="hero-meta"><span class="pill">${esc(h.open)}</span><p class="hero-role">${esc(h.role)}</p></div>
        <p class="hero-intro">${esc(h.intro)}</p>
        <div class="hero-actions"><a class="btn" href="#work">${esc(h.cta)}</a></div>
      </div>
      <figure class="polaroid"><span class="tape-strip"></span><div class="ph"><img src="${FILE("photo.webp")}" alt="${esc(h.name)}"></div><figcaption class="cap hand">${esc(h.photoNote)}</figcaption></figure>
    </div></section>

    <section class="section" id="work"><div class="wrap">
      <div class="sec-head"><div><h2>${esc(t.work.title)}</h2><p class="period">${esc(t.work.period)}</p></div><span class="hand">${esc(t.work.note)}</span></div>
      <div class="cases-layout" data-layout><div class="deck-col">${deck(t, "home")}</div><div class="tapes">${CASES.map((id) => tapeCard(id, t)).join("")}</div></div>
    </div></section>

    <section class="section" id="more"><div class="wrap">
      <div class="sec-head"><h2>${esc(m.title)}</h2><span class="hand">${esc(m.note)}</span></div>
      <div class="folders">
        <article class="folder" data-tab="${esc(m.pet.tab)}"><div class="folder-grid">
          ${phone(`<video src="${FILE("pet-scan.mp4")}" poster="${FILE("pet-poster.webp")}" muted loop playsinline autoplay preload="metadata" aria-label="${esc(m.pet.title)}"></video>`)}
          <div><h3>${esc(m.pet.title)}</h3><p>${esc(m.pet.text)}</p><p class="hand">${esc(m.pet.note)}</p></div></div></article>
        <article class="folder" data-tab="${esc(m.b2b.tab)}"><h3>${esc(m.b2b.title)}</h3><p class="lead">${esc(m.b2b.text)}</p>
          <div class="sheet"><p>${esc(m.b2b.highlight)}</p></div>
          <div class="b2b-shots">${browser("b2b-01-merchant", "Merchant center")}${browser("b2b-02-cart", "Cart")}</div></article>
        <article class="folder wide" data-tab="${esc(m.earlier.tab)}"><h3>${esc(m.earlier.title)}</h3>
          <div class="earlier">${m.earlier.items.map((i) => `<div class="sheet"><h4>${esc(i.t)}</h4><p class="period">${esc(i.p)}</p><p>${esc(i.d)}</p>${i.link ? `<a href="${i.link}" target="_blank" rel="noopener">${esc(i.linkText)}</a>` : ""}</div>`).join("")}</div></article>
      </div>
    </div></section>

    <section class="section" id="about"><div class="wrap">
      <h2>${esc(a.title)}</h2>
      <p class="about-intro">${esc(a.text[0])}</p>
      <div class="journey"><h3>${esc(a.journeyTitle)}</h3>
        <ol class="track">${a.journey.map((j) => `<li><h4>${esc(j.t)}</h4><p>${esc(j.d)}</p></li>`).join("")}</ol>
        <p class="loop">${I.loop}<span>${esc(a.journeyLoop)}</span></p></div>
      <div class="journey"><h3>${esc(a.valuesTitle)}</h3>
        <div class="values">${a.values.map((v, i) => `<div class="value">${[I.heart, I.chart, I.scale][i]}<h4>${esc(v.t)}</h4><p>${esc(v.d)}</p></div>`).join("")}</div></div>
      <div class="looking"><h3>${esc(a.lookingTitle)}</h3><p>${esc(a.looking)}</p>
        <div class="chips">${a.domains.map((d, i) => `<span class="chip${i === a.domains.length - 1 ? " fav" : ""}">${esc(d)}</span>`).join("")}<span class="hand">${esc(a.domainNote)}</span></div></div>
    </div></section>

    <section class="section"><div class="wrap">
      <div class="sec-head"><h2>${esc(t.recs.title)}</h2></div>
      <div class="recs">${t.recs.items.map((r) => `<figure class="rec"><blockquote>“${esc(r.q)}”</blockquote><figcaption class="who">${esc(r.who)}<span>${esc(r.role)}</span></figcaption></figure>`).join("")}</div>
      <a href="${S.contacts.linkedin}details/recommendations/" target="_blank" rel="noopener" class="hand recs-more">${esc(t.recs.more)}</a>
    </div></section>
    ${contact(t)}</main>`;
  }

  function contact(t) {
    const c = t.contact, k = S.contacts;
    return `<section class="contact" id="contact"><div class="wrap"><h2>${esc(c.title)}</h2><p>${esc(c.text)}</p>
      <div class="row"><a class="btn" href="${k.telegram}" target="_blank" rel="noopener">${esc(c.telegram)} ${esc(k.telegramLabel)}</a>
      <a class="btn ghost" href="mailto:${k.email}">${esc(c.email)}</a><a class="btn ghost" href="${k.linkedin}" target="_blank" rel="noopener">${esc(c.linkedin)}</a></div>
    </div></section><footer class="foot hand">${esc(c.footer)}</footer>`;
  }

  /* ---------- кейси ---------- */
  function bandVisual(id) {
    const v = { app: "app-01-home", reorder: "re-m-01-empty-cart", favorites: "fav-01-my-lists" }[id];
    if (v) { const fill = v.startsWith("re-m-"); return `<div class="band-visual" aria-hidden="true">${phone(`<img${fill ? ' class="fill"' : ""} src="${IMG(v)}" alt="">`, fill ? "pad" : "")}</div>`; }
    return `<div class="band-visual wide" aria-hidden="true">${browser("rd-home-b", "")}</div>`;
  }
  function caseHero(id, t) {
    const c = t.cases[id];
    return `<section class="case-hero" style="--tape:${S.tapes[id]}"><div class="wrap"><a class="crumbs" href="#work">← ${esc(t.nav.back)}</a>
      <div class="case-band"><div><div class="side">${esc(c.side)}</div><h1>${esc(c.title)}</h1><p class="tagline">${esc(c.tagline)}</p>
      <div class="kpi"><div class="metric">${esc(c.metric)}</div><div class="metric-label">${esc(c.metricLabel)}</div></div></div>${bandVisual(id)}</div></div></section>`;
  }
  function nextCase(id, t) {
    const n = CASES[(CASES.indexOf(id) + 1) % CASES.length];
    return `<div class="wrap next-wrap"><h2>${esc(t.caseLabels.next)}</h2><p class="next-hint">${esc(t.caseLabels.nextHint)}</p>
      <div class="next-layout" data-layout>${deck(t, "next")}${tapeCard(n, t)}</div></div>`;
  }
  const steps = (arr) => `<ol class="steps">${arr.map((s) => `<li><h3>${esc(s.t)}</h3><p>${esc(s.d)}</p></li>`).join("")}</ol>`;
  const quotes = (arr) => `<div class="quotes">${arr.map((q) => `<p class="quote">${Q(esc(q))}</p>`).join("")}</div>`;
  const notesCol = (arr, side) => `<ul class="notes ${side}">${arr.map((n) => `<li class="n">${esc(n)}${arrow}</li>`).join("")}</ul>`;

  function caseApp(t) {
    const c = t.caseApp, L = t.caseLabels;
    const scr = S.appFlow.map((n, i) => `<div class="sc${n === "app-03-product" ? " long" : ""}${i === 0 ? " on" : ""}"><img src="${IMG(n)}" alt="" ${i > 1 ? 'loading="lazy"' : ""}></div>`).join("");
    return caseHero("app", t) + `<div class="wrap">
      ${block(L.context, `<p>${esc(c.context)}</p>`)}
      ${block(L.role, `<p>${esc(c.role)}</p>`)}
      <section class="block"><h2>${esc(L.process)}</h2><div>${steps(c.steps)}</div></section>
      <section class="block"><h2>${esc(L.quotes)}</h2><div>${quotes(c.quotes)}</div></section>
      <section class="free flow-sec">
        <div class="annotated">
          <div class="col col-l">
            <div class="flow-head"><h2 class="sub-title">${esc(L.solution)}</h2><p class="hand flow-hint">${c.flowHint ? `<span class="h-mouse">${esc(c.flowHint)}</span>` : ""}<span class="h-touch">${esc(c.flowHintTouch)}</span></p></div>
            ${notesCol(c.notes.slice(0, 2), "left")}
          </div>
          <div class="stage">
            <button class="key stage-btn" data-fprev type="button" aria-label="Previous screen">${I.prev}</button>
            ${phone(scr, "flow")}
            <button class="key stage-btn" data-fnext type="button" aria-label="Next screen">${I.next}</button>
          </div>
          <div class="col col-r">${notesCol(c.notes.slice(2), "right")}</div>
        </div>
        <span class="visually-hidden" aria-live="polite" data-fcount></span>
        <ul class="notes-list">${c.notes.map((n) => `<li>${esc(n)}</li>`).join("")}</ul>
      </section>
      ${block(L.result, `<p class="result">${esc(c.result)}</p>`)}
      ${block(L.learned, `<p>${esc(c.learned)}</p>`)}
    </div>` + nextCase("app", t);
  }

  function caseRedesign(t) {
    const c = t.caseRedesign, L = t.caseLabels;
    const sc = { visual: [7.23, 8.5], usability: [7.59, 8.59], overall: [7.41, 8.55] };
    const fmt = (v) => (lang === "uk" ? v.toFixed(2).replace(".", ",") : v.toFixed(2));
    const scores = Object.keys(sc).map((k) => `<div class="score-row"><h3>${esc(c.scoreRows[k])}</h3>
      <div class="bar"><span>${esc(c.versionA)}</span><span class="track"><span class="fill" style="width:${sc[k][0] * 10}%"></span></span><b>${fmt(sc[k][0])}</b></div>
      <div class="bar b"><span>${esc(c.versionB)}</span><span class="track"><span class="fill" style="width:${sc[k][1] * 10}%"></span></span><b>${fmt(sc[k][1])}</b></div></div>`).join("");
    return caseHero("redesign", t) + `<div class="wrap">
      ${block(L.context, `<p>${esc(c.context)}</p><p>${esc(c.goal)}</p>`)}
      ${block(L.role, `<p>${esc(c.role)}</p>`)}
      <section class="free compare-sec"><div class="compare-tabs" role="group">${Object.keys(c.pages).map((p, i) => `<button data-p="${p}" aria-pressed="${i === 0}">${esc(c.pages[p])}</button>`).join("")}</div>
        <div class="compare" id="cmp" style="--ar:1.33"><img id="cmpB" src="${IMG("rd-home-b")}" alt="${esc(c.versionB)}"><div class="over"><img id="cmpA" src="${IMG("rd-home-a")}" alt="${esc(c.versionA)}"></div>
        <span class="handle"></span><span class="tag a">A</span><span class="tag b">B</span><input type="range" min="0" max="100" value="50" aria-label="${esc(c.compareHint)}"></div>
        <p class="hand compare-hint">${esc(c.compareHint)}</p></section>
      ${block(L.process, `<p>${esc(c.research)}</p>`)}
      <section class="block"><h2>${esc(c.scoresTitle)}</h2><div class="scores">${scores}</div></section>
      <section class="block"><h2>${esc(L.quotes)}</h2><div>${quotes(c.quotes)}</div></section>
      <section class="free"><p style="max-width:44em;font-size:18px">${esc(c.next)}</p>
        <div class="final"><span class="hand">${esc(c.finalNote)}</span><div class="browser"><div class="bar"><i></i><i></i><i></i></div><div class="scroller"><img src="${IMG("rd-final-home")}" alt="${esc(c.finalNote)}" loading="lazy"></div></div></div></section>
      ${block(L.learned, `<p>${esc(c.learned)}</p>`)}
    </div>` + nextCase("redesign", t);
  }

  function caseReorder(t) {
    const c = t.caseReorder, L = t.caseLabels;
    return caseHero("reorder", t) + `<div class="wrap">
      ${block(L.context, `<p>${esc(c.context)}</p>`)}
      ${block(L.role, `<p>${esc(c.role)}</p>`)}
      <section class="free"><h2 class="sub-title">${esc(L.solution)}</h2>
        <div class="entries">${c.entries.map((e) => `<figure>${browser(e.img, e.t)}<figcaption><h3>${esc(e.t)}</h3><p>${esc(e.d)}</p></figcaption></figure>`).join("")}</div>
        <div class="app-shots">${["re-m-01-empty-cart", "re-m-02-unavailable"].map((s, i) => `<figure>${phone(`<img class="fill" src="${IMG(s)}" alt="${esc(c.mobileShots[i])}" loading="lazy">`, "pad")}<figcaption class="hand">${esc(c.mobileShots[i])}</figcaption></figure>`).join("")}</div></section>
      <section class="block"><h2>${esc(c.iterTitle)}</h2><div>${steps(c.iter)}</div></section>
      ${block(L.result, `<p class="result">${esc(c.result)}</p><p class="note-small">${esc(c.resultNote)}</p>`)}
      ${block(L.learned, `<p>${esc(c.learned)}</p>`)}
    </div>` + nextCase("reorder", t);
  }

  function caseFavorites(t) {
    const c = t.caseFavorites, L = t.caseLabels;
    const shots = ["fav-01-my-lists", "fav-02-one-list", "fav-03-price-watch"];
    return caseHero("favorites", t) + `<div class="wrap">
      ${block(L.context, `<p>${esc(c.context)}</p>`)}
      ${block(L.role, `<p>${esc(c.role)}</p>`)}
      <section class="free"><h2 class="sub-title">${esc(L.solution)}</h2>
        <div class="phones">${shots.map((s, i) => `<figure>${phone(`<img src="${IMG(s)}" alt="${esc(c.notes[i])}" loading="lazy">`)}<figcaption class="hand">${esc(c.notes[i])}</figcaption></figure>`).join("")}</div></section>
      ${block(L.process, `<p>${esc(c.feedback)}</p><p>${esc(c.idea)}</p>`)}
      ${block(L.result, `<p class="result">${esc(c.result)}</p>`)}
      ${block(L.learned, `<p>${esc(c.learned)}</p>`)}
    </div>` + nextCase("favorites", t);
  }

  /* ---------- телефон з основним флоу ---------- */
  let flowT = null, raf = null;
  function startFlow() {
    clearTimeout(flowT); cancelAnimationFrame(raf);
    const ph = document.querySelector(".flow"); if (!ph) return;
    const scs = [...ph.querySelectorAll(".sc")], count = document.querySelector("[data-fcount]");
    const touch = matchMedia("(hover: none)").matches;
    let i = 0, paused = false, auto = !reduce(), visible = false, pageScrolling = false, st = null;
    new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(ph);
    window.addEventListener("scroll", () => { pageScrolling = true; clearTimeout(st); st = setTimeout(() => { pageScrolling = false; }, 160); }, { passive: true });
    const schedule = (ms, fn) => { clearTimeout(flowT); flowT = setTimeout(() => (visible && !pageScrolling ? fn() : schedule(400, fn)), ms); };
    const scrollLong = (el) => {
      el.scrollTop = 0; let last = null, pos = 0;
      const step = (ts) => {
        if (el.dataset.stop) return;
        raf = requestAnimationFrame(step);
        if (last === null) last = ts;
        const dt = Math.min((ts - last) / 1000, 0.1); last = ts;
        if (paused || !visible || pageScrolling) return;
        pos += 60 * dt; /* повільно, px за секунду; зупиняється під час скролу сторінки */
        el.scrollTop = pos;
        if (pos + el.clientHeight >= el.scrollHeight - 2) { cancelAnimationFrame(raf); if (auto) schedule(1500, next); }
      };
      flowT = setTimeout(() => { delete el.dataset.stop; raf = requestAnimationFrame(step); }, 1200);
    };
    const show = (n) => {
      clearTimeout(flowT); cancelAnimationFrame(raf); i = n;
      scs.forEach((s, k) => { s.classList.toggle("on", k === n); if (k !== n) s.dataset.stop = "1"; });
      if (count) count.textContent = `${n + 1} / ${scs.length}`;
      if (reduce()) return;
      if (scs[n].classList.contains("long")) scrollLong(scs[n]);
      else if (auto && !paused) schedule(4500, next);
    };
    const next = () => show((i + 1) % scs.length);
    const prev = () => show((i - 1 + scs.length) % scs.length);
    const manual = (fn) => () => { auto = false; fn(); };
    document.querySelector("[data-fprev]").onclick = manual(prev);
    document.querySelector("[data-fnext]").onclick = manual(next);
    /* свайп вліво-вправо; вертикальний жест лишається для скролу сторінки */
    let sx = null, sy = null;
    ph.addEventListener("pointerdown", (e) => { sx = e.clientX; sy = e.clientY; });
    ph.addEventListener("pointerup", (e) => {
      if (sx === null) return; const dx = e.clientX - sx, dy = e.clientY - sy; sx = null;
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.5) { auto = false; dx < 0 ? next() : prev(); }
    });
    ph.addEventListener("pointercancel", () => { sx = null; });
    /* клік на комп'ютері: пауза і ручний скрол усередині; на телефоні внутрішній скрол не вмикаємо */
    if (!touch) ph.addEventListener("click", () => {
      paused = !paused; ph.classList.toggle("paused", paused);
      if (paused) { clearTimeout(flowT); cancelAnimationFrame(raf); } else { auto = true; show(i); }
    });
    if (reduce()) { paused = true; if (!touch) ph.classList.add("paused"); }
    show(0);
  }

  function startCompare() {
    const cmp = document.getElementById("cmp"); if (!cmp) return;
    const input = cmp.querySelector("input");
    input.addEventListener("input", () => cmp.style.setProperty("--pos", input.value + "%"));
    document.querySelectorAll(".compare-tabs button").forEach((b) => b.addEventListener("click", () => {
      document.querySelectorAll(".compare-tabs button").forEach((x) => x.setAttribute("aria-pressed", x === b));
      const imgB = document.getElementById("cmpB");
      document.getElementById("cmpA").src = IMG(`rd-${b.dataset.p}-a`);
      imgB.onload = () => cmp.style.setProperty("--ar", (imgB.naturalWidth / imgB.naturalHeight).toFixed(3));
      imgB.src = IMG(`rd-${b.dataset.p}-b`);
    }));
  }

  /* ---------- повільний автоскрол фінальної ітерації ---------- */
  let scrollerRaf = null;
  function startScroller() {
    cancelAnimationFrame(scrollerRaf);
    const el = document.querySelector(".scroller"); if (!el) return;
    let pos = 0, dir = 1, hold = false, last = null, wait = 1.2, timer = null, visible = false;
    const SPEED = 34; /* px за секунду: повільно */
    const resume = (ms) => { clearTimeout(timer); timer = setTimeout(() => { hold = false; pos = el.scrollTop; last = null; }, ms); };
    el.addEventListener("pointerenter", (e) => { if (e.pointerType === "mouse") { hold = true; clearTimeout(timer); } });
    el.addEventListener("pointerleave", (e) => { if (e.pointerType === "mouse") resume(600); });
    el.addEventListener("wheel", () => { hold = true; resume(el.matches(":hover") ? 1e9 : 2000); }, { passive: true });
    el.addEventListener("touchstart", () => { hold = true; clearTimeout(timer); }, { passive: true });
    el.addEventListener("touchend", () => resume(3500), { passive: true });
    el.addEventListener("keydown", () => { hold = true; resume(3000); });
    new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(el);
    const step = (ts) => {
      scrollerRaf = requestAnimationFrame(step);
      if (last === null) last = ts;
      const dt = Math.min((ts - last) / 1000, 0.1); last = ts;
      if (hold || !visible || reduce()) return;
      const max = el.scrollHeight - el.clientHeight; if (max <= 0) return;
      if (wait > 0) { wait -= dt; return; }
      pos += dir * SPEED * dt;
      if (pos >= max) { pos = max; dir = -1; wait = 1.5; } else if (pos <= 0) { pos = 0; dir = 1; wait = 1.5; }
      el.scrollTop = pos;
    };
    scrollerRaf = requestAnimationFrame(step);
  }

  /* ---------- магнітофон (головна і кінець кожного кейсу) ---------- */
  let homeLoaded = null;
  function startDecks(t) { document.querySelectorAll("[data-deck]").forEach((root) => initDeck(root, t)); }
  function initDeck(root, t) {
    const layout = root.closest("[data-layout]"), d = t.work.deck, isHome = root.dataset.deck === "home";
    const door = root.querySelector("[data-door]"), disp = root.querySelector("[data-disp]");
    const kPlay = root.querySelector('[data-k="play"]'), kStop = root.querySelector('[data-k="stop"]'), kEject = root.querySelector('[data-k="eject"]');
    const tapes = [...layout.querySelectorAll(".tape")];
    let loaded = null, go = null;
    const keys = (on) => [kPlay, kStop, kEject].forEach((k) => (k.disabled = !on));
    function load(id) {
      loaded = id; if (isHome) homeLoaded = id;
      door.innerHTML = cassette(id, t.cases[id].title);
      disp.textContent = "▶ " + d.loaded + ": " + t.cases[id].title;
      root.classList.add("has"); keys(true);
      tapes.forEach((c) => c.classList.toggle("loaded", c.dataset.id === id));
    }
    function unload() {
      clearTimeout(go); stopSound(); loaded = null; if (isHome) homeLoaded = null;
      door.classList.remove("spin"); door.innerHTML = `<p class="slot-hint">${esc(d.drag)}</p>`;
      disp.textContent = d.empty; root.classList.remove("has", "playing"); keys(false);
      kPlay.classList.remove("down"); tapes.forEach((c) => c.classList.remove("loaded"));
    }
    function play() {
      if (!loaded) return;
      const id = loaded;
      root.classList.add("playing"); door.classList.add("spin"); kPlay.classList.add("down");
      disp.textContent = "▶▶ " + t.cases[id].title;
      lastSound = 0; playSound(id);
      clearTimeout(go); go = setTimeout(() => { location.hash = id; }, reduce() ? 0 : 1500);
    }
    kPlay.onclick = play; kEject.onclick = unload;
    kStop.onclick = () => { clearTimeout(go); stopSound(); root.classList.remove("playing"); door.classList.remove("spin"); kPlay.classList.remove("down"); if (loaded) disp.textContent = "■ " + t.cases[loaded].title; };
    tapes.forEach((card) => {
      const id = card.dataset.id, art = card.querySelector(".tape-art"); if (!art) return;
      let start = null, ghost = null, dragged = false;
      art.addEventListener("pointerdown", (e) => {
        if (e.pointerType !== "mouse" && e.pointerType !== "pen") return;
        start = { x: e.clientX, y: e.clientY }; dragged = false; art.setPointerCapture(e.pointerId);
      });
      art.addEventListener("pointermove", (e) => {
        if (!start) return;
        if (!ghost && Math.hypot(e.clientX - start.x, e.clientY - start.y) > 6) {
          ghost = document.createElement("div"); ghost.className = "drag-ghost"; ghost.innerHTML = cassette(id, t.cases[id].title); document.body.appendChild(ghost); dragged = true;
        }
        if (ghost) {
          ghost.style.left = e.clientX + "px"; ghost.style.top = e.clientY + "px";
          const r = root.getBoundingClientRect(); root.classList.toggle("over", e.clientX > r.left && e.clientX < r.right && e.clientY > r.top && e.clientY < r.bottom);
        }
      });
      const end = () => {
        if (ghost) { const over = root.classList.contains("over"); ghost.remove(); ghost = null; root.classList.remove("over"); if (over) load(id); }
        start = null;
      };
      art.addEventListener("pointerup", end); art.addEventListener("pointercancel", end);
      art.addEventListener("click", () => { if (dragged) { dragged = false; return; } load(id); });
    });
    if (isHome && homeLoaded) load(homeLoaded);
  }

  /* ---------- рендер ---------- */
  function render() {
    const t = window.CONTENT[lang];
    document.documentElement.lang = lang === "uk" ? "uk" : "en";
    const id = location.hash.slice(1);
    const views = { app: caseApp, redesign: caseRedesign, reorder: caseReorder, favorites: caseFavorites };
    stopSound();
    if (views[id]) {
      app.innerHTML = header(t) + `<main>${views[id](t)}${contact(t)}</main>`;
      document.title = `${t.cases[id].title}: ${t.hero.name}`; window.scrollTo(0, 0);
    } else {
      app.innerHTML = home(t);
      document.title = `${t.hero.name}, ${t.hero.role}`;
      const el = id && document.getElementById(id); if (el) el.scrollIntoView(); else window.scrollTo(0, 0);
    }
    const $ = (x) => document.getElementById(x);
    $("lang").onclick = () => { lang = lang === "en" ? "uk" : "en"; store.set("lang", lang); const y = scrollY; render(); scrollTo(0, y); };
    $("theme").onclick = () => {
      const r = document.documentElement, cur = r.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      r.dataset.theme = cur === "dark" ? "light" : "dark"; store.set("theme", r.dataset.theme); $("theme").innerHTML = r.dataset.theme === "dark" ? I.sun : I.moon;
    };
    const sndBtns = [...document.querySelectorAll("[data-snd]")];
    sndBtns.forEach((btn) => (btn.onclick = () => {
      muted = !muted; store.set("muted", muted ? "1" : "0"); if (muted) stopSound();
      sndBtns.forEach((x) => { x.innerHTML = (muted ? I.mute : I.sound) + (x.dataset.label ? `<span>${x.dataset.label}</span>` : ""); x.setAttribute("aria-pressed", !muted); });
    }));
    const menu = $("menu"), burger = $("burger");
    burger.onclick = () => { const open = menu.hidden; menu.hidden = !open; burger.setAttribute("aria-expanded", open); burger.innerHTML = open ? I.close : I.burger; };
    menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => { menu.hidden = true; burger.setAttribute("aria-expanded", false); burger.innerHTML = I.burger; }));
    startFlow(); startCompare(); startScroller(); startDecks(t);
  }

  let lastView = null;
  window.addEventListener("hashchange", () => {
    const id = location.hash.slice(1), view = CASES.includes(id) ? id : "home";
    if (view === "home" && lastView === "home") { const el = id && document.getElementById(id); if (el) el.scrollIntoView(); return; }
    lastView = view; render();
  });
  lastView = CASES.includes(location.hash.slice(1)) ? location.hash.slice(1) : "home";
  render();
})();
