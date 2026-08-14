const PHONE = '+34602127026';
const MAP_URL = 'https://maps.app.goo.gl/PwqVrGvxxgDSQeHF8';

function siteHeader(title, eyebrow, copy) {
  return `
    <section class="section page-intro" data-section-status="loaded">
      <div class="site-shell page-intro-content">
        <p class="eyebrow">${eyebrow}</p>
        <h1>${title}</h1>
        <p class="lede">${copy}</p>
      </div>
    </section>`;
}

function pourStoriesMarkup() {
  return `
    <section class="section pour-stories" data-section-status="loaded" data-pour-stories aria-label="Two cocktails, told through the pour">
      <article class="pour-story is-video-left is-short" data-video-story>
        <div class="pour-story-sticky">
          <div class="pour-story-copy">
            <div>
              <p class="eyebrow">01 · The Bright Pour</p>
              <h2>Citrus makes the <em>first move.</em></h2>
              <p>A clean measure of agave meets fresh acidity—bright, precise, and built for the first sip.</p>
            </div>
          </div>
          <div class="pour-story-media">
            <video class="pour-story-video" muted playsinline preload="auto" poster="/media/cocktail-1.png" aria-label="The Bright Pour: Citrus makes the first move">
              <source src="/media/pour-story-agave.mp4" type="video/mp4">
            </video>
          </div>
          <div class="pour-story-progress" aria-hidden="true"><span>01</span><i></i></div>
        </div>
      </article>
      <article class="pour-story is-video-right" data-video-story>
        <div class="pour-story-sticky">
          <div class="pour-story-copy">
            <div>
              <p class="eyebrow">02 · The Slow Stir</p>
              <h2>Time rounds <em>every edge.</em></h2>
              <p>Whiskey, cold glass and patient movement. The drink settles into silk before it reaches you.</p>
            </div>
          </div>
          <div class="pour-story-media">
            <video class="pour-story-video" muted playsinline preload="auto" poster="/media/cocktail-2.png" aria-label="The Slow Stir: Time rounds every edge">
              <source src="/media/pour-story-whiskey.mp4" type="video/mp4">
            </video>
          </div>
          <div class="pour-story-progress" aria-hidden="true"><span>02</span><i></i></div>
        </div>
      </article>
    </section>`;
}

function homeMarkup() {
  return `
    <section class="section home-hero" data-section-status="loaded" aria-labelledby="home-title">
      <div class="home-hero-backdrop" aria-hidden="true">
        <video class="home-hero-video" autoplay loop muted playsinline preload="auto" poster="/media/hero-image.jpeg" aria-hidden="true">
          <source src="/media/hero-ice-loop.mp4" type="video/mp4">
        </video>
      </div>
      <div class="site-shell home-hero-content">
        <p class="eyebrow">Barcelona · El Raval</p>
        <h1 id="home-title">A Hidden World of <em>Artisanal Spirits</em></h1>
        <p class="home-hero-copy">Barcelona's premier speakeasy in the heart of El Raval. Step behind the curtain for unforgettable nights, rare ingredients, and masterful mixology.</p>
        <p class="hero-actions">
          <a class="button" href="/contact/">Book Your Table</a>
          <a class="text-link" href="/menu/">View Menu <span aria-hidden="true">↗</span></a>
        </p>
      </div>
      <a class="scroll-cue" href="#ritual"><span>Discover</span><i aria-hidden="true"></i></a>
    </section>

    <section id="ritual" class="section scroll-ritual" data-section-status="loaded" data-scroll-video aria-labelledby="ritual-title">
      <div class="ritual-sticky">
        <video class="ritual-video" muted playsinline preload="auto" poster="/media/cocktail-craft.png" aria-label="A bartender making a cocktail as the page scrolls">
          <source src="/media/cocktail-making.mp4" type="video/mp4">
        </video>
        <div class="ritual-shade" aria-hidden="true"></div>
        <div class="site-shell ritual-layout">
          <div class="ritual-heading">
            <p class="eyebrow">The Tequila Ritual</p>
            <h2 id="ritual-title">You scroll.<br><em>We mix.</em></h2>
            <p>Move through the craft from the first measured pour to the final reveal.</p>
          </div>
          <div class="ritual-steps" role="group" aria-label="Cocktail making steps">
            <button type="button" class="ritual-step is-active" data-step="0" aria-pressed="true" aria-label="Step 01: Measure the agave">
              <span>01</span>
              <div><h3>Measure the agave</h3><p>Precision first. Character follows.</p></div>
            </button>
            <button type="button" class="ritual-step" data-step="1" aria-pressed="false" aria-label="Step 02: Shake the night">
              <span>02</span>
              <div><h3>Shake the night</h3><p>Ice, citrus and movement become texture.</p></div>
            </button>
            <button type="button" class="ritual-step" data-step="2" aria-pressed="false" aria-label="Step 03: Pour the reveal">
              <span>03</span>
              <div><h3>Pour the reveal</h3><p>The final detail is always yours.</p></div>
            </button>
          </div>
          <p class="ritual-hint">One scroll · one chapter · each part loops</p>
        </div>
        <div class="ritual-progress" aria-hidden="true"><i></i></div>
      </div>
    </section>

    ${pourStoriesMarkup()}

    <section class="section philosophy" data-section-status="loaded" aria-labelledby="philosophy-title">
      <div class="site-shell split-layout">
        <figure class="editorial-image image-frame">
          <img src="/media/cocktail-craft.png" alt="Crafting a cocktail at LY Brothers" loading="lazy" width="859" height="798">
          <figcaption>Every pour is a performance.</figcaption>
        </figure>
        <div class="editorial-copy">
          <p class="eyebrow">Our Philosophy</p>
          <h2 id="philosophy-title">The Alchemy of <em>Taste &amp; Time</em></h2>
          <p>Hidden away in the vibrant alleys of El Raval, LY Brothers is a sanctuary for those who appreciate the finer things. We bypass the ordinary, sourcing rare, artisanal spirits and blending them with fresh, local botanicals to craft cocktails that tell a story.</p>
          <p>Here, there are no rushed orders. Every pour is a performance, every ingredient has a purpose, and every sip is a revelation.</p>
          <a class="text-link" href="/contact/">Discover Our Story <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>

    <section class="section collection" data-section-status="loaded" aria-labelledby="collection-title">
      <div class="site-shell">
        <header class="section-heading">
          <p class="eyebrow">The Collection</p>
          <h2 id="collection-title">Signature Cocktails</h2>
        </header>
        <div class="cocktail-gallery">
          <figure><button type="button" class="cocktail-card" data-cocktail-zoom aria-label="View Smoke &amp; Orchard"><img src="/media/cocktail-1.png" alt="Rustic cocktail presentation" loading="lazy" width="718" height="652"><figcaption><span>01</span> Smoke &amp; Orchard</figcaption></button></figure>
          <figure><button type="button" class="cocktail-card" data-cocktail-zoom aria-label="View Golden Hour"><img src="/media/cocktail-2.png" alt="Signature cocktail presentation" loading="lazy" width="832" height="822"><figcaption><span>02</span> Golden Hour</figcaption></button></figure>
          <figure><button type="button" class="cocktail-card" data-cocktail-zoom aria-label="View After Midnight"><img src="/media/cocktail-3.jpeg" alt="Classic cocktail presentation" loading="lazy" width="1206" height="1760"><figcaption><span>03</span> After Midnight</figcaption></button></figure>
        </div>
        <div class="collection-footer">
          <p>Our mixologists craft bespoke drinks tailored to your exact palate. Ask about our off-menu creations.</p>
          <a class="button button-outline" href="/menu/">Explore Full Menu</a>
        </div>
        <dialog class="cocktail-dialog" aria-label="Cocktail detail"><button type="button" class="dialog-close" aria-label="Close cocktail detail">×</button><button type="button" class="cocktail-dialog-nav previous" aria-label="Previous cocktail">←</button><img alt=""><p class="cocktail-dialog-caption"></p><button type="button" class="cocktail-dialog-nav next" aria-label="Next cocktail">→</button></dialog>
      </div>
    </section>

    <section class="section private-events" data-section-status="loaded" aria-labelledby="events-title">
      <div class="site-shell events-grid">
        <div>
          <p class="eyebrow">Exclusivity Redefined</p>
          <h2 id="events-title">Host Your Night <em>Behind the Curtain</em></h2>
          <p>From intimate masterclasses to full-venue buyouts, LY Brothers offers a sophisticated backdrop for your most important milestones.</p>
          <a class="button" href="/contact/">Plan Your Event</a>
        </div>
        <ul class="event-list" aria-label="Private event options">
          <li><button type="button" class="event-option" data-event-option aria-expanded="true"><span>01</span><strong>Bespoke Mixology</strong><i>+</i></button><small>A menu shaped around your guests.</small></li>
          <li><button type="button" class="event-option" data-event-option aria-expanded="false"><span>02</span><strong>Private Buyouts</strong><i>+</i></button><small hidden>The hidden room, entirely yours.</small></li>
          <li><button type="button" class="event-option" data-event-option aria-expanded="false"><span>03</span><strong>Masterclasses</strong><i>+</i></button><small hidden>Learn the craft behind the bar.</small></li>
        </ul>
      </div>
    </section>

    <section class="section hidden-door" data-section-status="loaded" aria-labelledby="door-title">
      <div class="site-shell split-layout door-layout">
        <div class="editorial-copy">
          <p class="eyebrow">Experience the Mystery</p>
          <h2 id="door-title">Find the <em>Hidden Door</em></h2>
          <p>Deep in the winding streets of El Raval, down a quiet alleyway, a world of artisanal spirits awaits. We don't have a neon sign: just a door and a promise of a better drink.</p>
          <dl class="visit-details">
            <div><dt>Find us</dt><dd>Carrer de Lancaster, 20<br>08001 Barcelona</dd></div>
            <div><dt>Open</dt><dd>Sun–Thu 20:00–02:00<br>Fri 20:00–03:00 · Sat 20:00–02:00</dd></div>
          </dl>
          <p class="door-actions"><a class="button" href="${MAP_URL}" target="_blank" rel="noopener noreferrer">Get Directions</a><a class="text-link" href="tel:${PHONE}">Call the Bar</a></p>
        </div>
        <figure class="image-frame door-image"><img src="/media/miguel.jpeg" alt="Miguel, the owner, standing at the LY Brothers entrance" loading="lazy" width="1206" height="1514"><figcaption>Look for the Fresh Juice sign.</figcaption></figure>
      </div>
    </section>`;
}

function menuMarkup() {
  return `${siteHeader('Our Menus', 'The Collection', 'Explore our selection of handcrafted cocktails and revitalizing fresh juices.')}
    <section class="section menu-viewer" data-section-status="loaded" aria-label="LY Brothers menus">
      <div class="site-shell">
        <div class="menu-tabs" role="tablist" aria-label="Choose a menu">
          <button type="button" role="tab" aria-selected="true" aria-controls="cocktail-menu" id="cocktail-tab" data-menu-tab="cocktails">Cocktails</button>
          <button type="button" role="tab" aria-selected="false" aria-controls="juice-menu" id="juice-tab" data-menu-tab="juice">Fresh Juice</button>
        </div>
        <div class="menu-panels">
          <figure id="cocktail-menu" role="tabpanel" aria-labelledby="cocktail-tab" data-menu-panel="cocktails">
            <button class="menu-image-button" type="button" data-menu-zoom="/media/menu-cocktails.png" aria-label="Open the cocktail menu full screen"><img src="/media/menu-cocktails.png" alt="LY Brothers official cocktail menu" width="1711" height="1093"></button>
            <figcaption>Tap the menu to view it full screen.</figcaption>
          </figure>
          <figure id="juice-menu" role="tabpanel" aria-labelledby="juice-tab" data-menu-panel="juice" hidden>
            <button class="menu-image-button" type="button" data-menu-zoom="/media/menu-juice.png" aria-label="Open the fresh juice menu full screen"><img src="/media/menu-juice.png" alt="LY Brothers fresh juice menu" width="1711" height="1093"></button>
            <figcaption>Tap the menu to view it full screen.</figcaption>
          </figure>
        </div>
      </div>
      <dialog class="menu-dialog" aria-label="Full screen menu"><button type="button" class="dialog-close" aria-label="Close full screen menu">×</button><img alt=""></dialog>
    </section>`;
}

function contactMarkup() {
  return `
    <section class="section contact-page" data-section-status="loaded" aria-labelledby="contact-title">
      <div class="site-shell contact-grid">
        <div class="contact-copy">
          <p class="eyebrow">Get in Touch</p>
          <h1 id="contact-title">Find the <em>Hidden Door</em></h1>
          <p class="lede">Look for the “Fresh Juice” sign on Carrer de Lancaster. Step through the curtains, ask for Miguel, and leave the ordinary world behind. We highly recommend booking a table in advance to secure your spot.</p>
          <dl class="contact-list">
            <div><dt>Location</dt><dd>Carrer de Lancaster, 20<br>Ciutat Vella, 08001 Barcelona, Spain</dd></div>
            <div><dt>Reservations &amp; Inquiries</dt><dd><a href="tel:${PHONE}">+34 602 12 70 26</a></dd></div>
            <div><dt>Hours of Operation</dt><dd>Sun–Thu: 20:00–02:00<br>Friday: 20:00–03:00<br>Saturday: 20:00–02:00</dd></div>
          </dl>
          <p class="contact-actions"><a class="button" href="tel:${PHONE}">Call to Reserve</a><a class="button button-outline" href="${MAP_URL}" target="_blank" rel="noopener noreferrer">Get Directions</a></p>
        </div>
        <figure class="contact-image image-frame"><img src="/media/miguel.jpeg" alt="Miguel at the LY Brothers Fresh Juice entrance" width="1206" height="1514"><figcaption><span>Look for</span> this sign</figcaption></figure>
      </div>
    </section>`;
}

export function renderFallbackPage(main) {
  const hasContent = main.textContent.trim() || main.querySelector('img, picture, video, .block');
  if (hasContent) return false;

  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  if (path === '/menu') {
    main.innerHTML = menuMarkup();
    document.title = 'Cocktail & Juice Menu | LY Brothers Barcelona';
  } else if (path === '/contact') {
    main.innerHTML = contactMarkup();
    document.title = 'Contact & Reservations | LY Brothers Barcelona';
  } else {
    main.innerHTML = homeMarkup();
    document.title = 'Hidden Speakeasy Cocktail Bar in Barcelona | LY Brothers';
  }

  return true;
}

function ensurePourStories(root) {
  if (root.querySelector('[data-pour-stories]')) return;
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  if (path !== '/') return;
  const ritual = root.querySelector('[data-scroll-video]')?.closest('.section');
  ritual?.insertAdjacentHTML('afterend', pourStoriesMarkup());
}

function clamp(value, minimum = 0, maximum = 1) {
  return Math.max(minimum, Math.min(maximum, value));
}

function observeVideoPlayback(video, container, sync) {
  let animationFrame;
  let alignmentFrame;
  let inView = false;
  let started = false;
  let retryPlayback = () => {};
  const description = video.getAttribute('aria-label') || 'Cocktail film';

  const updateControlLabel = () => {
    let action = 'Pause';
    if (video.paused) action = video.ended ? 'Replay' : 'Play';
    video.setAttribute('aria-label', `${description}. ${action} film`);
  };

  const render = () => {
    animationFrame = null;
    sync();
    if (!video.paused && !video.ended) animationFrame = window.requestAnimationFrame(render);
  };

  const requestRender = () => {
    if (!animationFrame) animationFrame = window.requestAnimationFrame(render);
  };

  const play = (time) => {
    if (Number.isFinite(time)) {
      video.currentTime = time;
    } else if (video.ended) {
      video.currentTime = 0.01;
    }
    started = true;
    container.classList.add('is-playing');
    container.classList.remove('is-complete');
    video.play().catch(() => {
      started = false;
      container.classList.remove('is-playing');
      updateControlLabel();
      if (inView) window.setTimeout(retryPlayback, 250);
    });
  };

  const checkAlignment = () => {
    alignmentFrame = null;
    const rect = container.getBoundingClientRect();
    const visibleHeight = Math.max(
      0,
      Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top),
    );
    inView = visibleHeight / rect.height >= 0.9;
    if (inView && !started) play();
  };

  const requestAlignmentCheck = () => {
    if (alignmentFrame) return;
    alignmentFrame = window.requestAnimationFrame(checkAlignment);
  };
  retryPlayback = requestAlignmentCheck;

  const observer = new IntersectionObserver((entries) => {
    inView = entries.some((entry) => (
      entry.isIntersecting && entry.intersectionRatio >= 0.9
    ));
    if (inView && !started) play();
  }, { threshold: [0, 0.9] });

  observer.observe(container);
  window.addEventListener('scroll', requestAlignmentCheck, { passive: true });
  window.addEventListener('resize', requestAlignmentCheck);
  video.addEventListener('canplay', () => {
    requestAlignmentCheck();
  });
  const showFirstFrame = () => {
    if (video.dataset.firstFrameReady) return;
    video.dataset.firstFrameReady = 'true';
    video.currentTime = Math.min(0.01, video.duration || 0.01);
    video.removeAttribute('poster');
    container.classList.add('has-first-frame');
    sync();
  };
  video.addEventListener('loadeddata', showFirstFrame, { once: true });
  video.addEventListener('play', () => {
    requestRender();
    updateControlLabel();
  });
  video.addEventListener('pause', () => {
    window.cancelAnimationFrame(animationFrame);
    animationFrame = null;
    sync();
    updateControlLabel();
  });
  video.addEventListener('ended', () => {
    container.classList.remove('is-playing');
    container.classList.add('is-complete');
    sync();
    updateControlLabel();
  });
  video.addEventListener('loadedmetadata', sync);
  video.addEventListener('click', () => {
    if (video.paused) play();
    else video.pause();
  });
  video.tabIndex = 0;
  video.setAttribute('role', 'button');
  video.addEventListener('keydown', (event) => {
    if (!['Enter', ' '].includes(event.key)) return;
    event.preventDefault();
    if (video.paused) play();
    else video.pause();
  });
  if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) showFirstFrame();
  updateControlLabel();
  sync();
  requestAlignmentCheck();
  return play;
}

function initScrollVideo(root) {
  const section = root.querySelector('[data-scroll-video]');
  if (!section) return;

  const scrollRegion = section.closest('main > .section') || section;
  const video = section.querySelector('video');
  const steps = [...section.querySelectorAll('[data-step]')];
  const segmentCount = Math.max(steps.length, 1);
  const frameRate = 25;
  const description = video.getAttribute('aria-label') || 'Cocktail ritual';
  let activeIndex = 0;
  let animationFrame;
  let snapActive = false;
  let snapLocked = false;
  let scrollFrame;
  let touchStartY = null;
  let touchLatestY = null;
  let userPaused = false;
  let wheelDelta = 0;

  const snapTrack = document.createElement('div');
  snapTrack.className = 'ritual-snap-track';
  snapTrack.setAttribute('aria-hidden', 'true');
  Array.from({ length: segmentCount + 1 }).forEach((unused, index) => {
    const snapPoint = document.createElement('i');
    snapPoint.className = 'ritual-snap-point';
    snapPoint.dataset.snap = `${index}`;
    snapPoint.style.top = index === segmentCount
      ? 'calc(100% - 1px)'
      : `${index * 100}svh`;
    snapTrack.append(snapPoint);
  });
  scrollRegion.append(snapTrack);

  const getSegmentBounds = (index) => {
    const duration = Number.isFinite(video.duration) ? video.duration : 0;
    const segmentDuration = duration / segmentCount;
    const rawStart = index * segmentDuration;
    const rawEnd = (index + 1) * segmentDuration;
    const openingOffset = index === 0 ? Math.min(0.65, segmentDuration * 0.25) : 0.08;
    return {
      start: Math.min(rawStart + openingOffset, Math.max(rawStart, rawEnd - 0.3)),
      end: Math.max(rawStart + openingOffset + 0.25, rawEnd - 0.06),
      duration,
    };
  };

  const updateControlLabel = () => {
    const action = video.paused ? 'Play' : 'Pause';
    video.setAttribute('aria-label', `${description}. ${action} chapter ${activeIndex + 1}`);
  };

  const updateSteps = () => {
    steps.forEach((step, index) => {
      const isActive = index === activeIndex;
      step.classList.toggle('is-active', isActive);
      step.setAttribute('aria-pressed', String(isActive));
    });
    section.dataset.segment = `${activeIndex + 1}`;
  };

  const sync = () => {
    const bounds = getSegmentBounds(activeIndex);
    if (!video.paused && video.currentTime >= bounds.end) video.currentTime = bounds.start;
    const segmentProgress = clamp(
      (video.currentTime - bounds.start) / Math.max(bounds.end - bounds.start, 0.01),
    );
    const totalProgress = (activeIndex + segmentProgress) / segmentCount;
    section.style.setProperty('--scroll-progress', totalProgress);
    section.dataset.frame = `${Math.round(video.currentTime * frameRate)}/${Math.round(bounds.duration * frameRate)}`;
  };

  const render = () => {
    animationFrame = null;
    sync();
    if (!video.paused) animationFrame = window.requestAnimationFrame(render);
  };

  const requestRender = () => {
    if (!animationFrame) animationFrame = window.requestAnimationFrame(render);
  };

  const playActiveSegment = (restart = false) => {
    const bounds = getSegmentBounds(activeIndex);
    if (restart || video.currentTime < bounds.start || video.currentTime >= bounds.end) {
      video.currentTime = bounds.start;
    }
    section.classList.add('is-playing');
    video.play().catch(() => section.classList.remove('is-playing'));
  };

  const setActiveSegment = (index, shouldPlay) => {
    const nextIndex = Math.max(0, Math.min(segmentCount - 1, index));
    if (nextIndex !== activeIndex) {
      activeIndex = nextIndex;
      userPaused = false;
      video.currentTime = getSegmentBounds(activeIndex).start;
      updateSteps();
      updateControlLabel();
    }
    if (shouldPlay && !userPaused && video.paused) playActiveSegment();
    sync();
  };

  const checkScroll = () => {
    scrollFrame = null;
    const rect = scrollRegion.getBoundingClientRect();
    const snapDistance = Math.max(window.innerHeight, 1);
    const nextIndex = Math.max(
      0,
      Math.min(segmentCount - 1, Math.round(-rect.top / snapDistance)),
    );
    snapActive = rect.top < window.innerHeight && rect.bottom > 1;
    document.documentElement.classList.toggle('ritual-snap-active', snapActive);
    const aligned = rect.top <= 1 && rect.bottom >= window.innerHeight - 1;
    setActiveSegment(nextIndex, aligned);
    if (!aligned && (rect.bottom <= 0 || rect.top >= window.innerHeight)) video.pause();
  };

  const requestScrollCheck = () => {
    if (!scrollFrame) scrollFrame = window.requestAnimationFrame(checkScroll);
  };

  const scrollToSnap = (index) => {
    const regionTop = window.scrollY + scrollRegion.getBoundingClientRect().top;
    const nextIndex = Math.max(0, Math.min(segmentCount, index));
    snapLocked = true;
    window.scrollTo({
      top: regionTop + (window.innerHeight * nextIndex),
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
    window.setTimeout(() => {
      snapLocked = false;
    }, 650);
  };

  const moveOneSnap = (direction) => {
    if (!snapActive || snapLocked) return;
    const rect = scrollRegion.getBoundingClientRect();
    const currentIndex = Math.max(
      0,
      Math.min(segmentCount, Math.round(-rect.top / Math.max(window.innerHeight, 1))),
    );
    scrollToSnap(currentIndex + direction);
  };

  video.pause();
  video.tabIndex = 0;
  video.setAttribute('role', 'button');
  video.addEventListener('loadeddata', () => {
    video.currentTime = getSegmentBounds(0).start;
    video.dataset.firstFrameReady = 'true';
    section.classList.add('has-first-frame');
    sync();
  }, { once: true });
  video.addEventListener('play', () => {
    section.classList.add('is-playing');
    requestRender();
    updateControlLabel();
  });
  video.addEventListener('pause', () => {
    window.cancelAnimationFrame(animationFrame);
    animationFrame = null;
    section.classList.remove('is-playing');
    sync();
    updateControlLabel();
  });
  video.addEventListener('ended', () => playActiveSegment(true));
  video.addEventListener('canplay', requestScrollCheck);
  video.addEventListener('click', () => {
    if (video.paused) {
      userPaused = false;
      playActiveSegment();
    } else {
      userPaused = true;
      video.pause();
    }
  });
  video.addEventListener('keydown', (event) => {
    if (!['Enter', ' '].includes(event.key)) return;
    event.preventDefault();
    if (video.paused) {
      userPaused = false;
      playActiveSegment();
    } else {
      userPaused = true;
      video.pause();
    }
  });

  steps.forEach((step, index) => step.addEventListener('click', () => {
    userPaused = false;
    scrollToSnap(index);
  }));

  root.querySelectorAll('.scroll-cue[href="#ritual"]').forEach((cue) => {
    cue.addEventListener('click', (event) => {
      event.preventDefault();
      userPaused = false;
      scrollRegion.scrollIntoView({
        block: 'start',
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      });
    });
  });

  window.addEventListener('scroll', requestScrollCheck, { passive: true });
  window.addEventListener('resize', requestScrollCheck);
  window.addEventListener('wheel', (event) => {
    if (!snapActive) return;
    event.preventDefault();
    if (snapLocked) return;
    wheelDelta += event.deltaY;
    if (Math.abs(wheelDelta) < 18) return;
    moveOneSnap(wheelDelta > 0 ? 1 : -1);
    wheelDelta = 0;
  }, { passive: false });
  window.addEventListener('keydown', (event) => {
    const interactiveTarget = event.target instanceof Element
      && event.target.closest('a, button, input, select, textarea');
    if (!snapActive || interactiveTarget) return;
    const downKeys = ['ArrowDown', 'PageDown'];
    const upKeys = ['ArrowUp', 'PageUp'];
    let direction = 0;
    if (downKeys.includes(event.key) || (event.key === ' ' && !event.shiftKey)) direction = 1;
    if (upKeys.includes(event.key) || (event.key === ' ' && event.shiftKey)) direction = -1;
    if (!direction) return;
    event.preventDefault();
    moveOneSnap(direction);
  });
  window.addEventListener('touchstart', (event) => {
    if (!snapActive || event.touches.length !== 1) return;
    touchStartY = event.touches[0].clientY;
    touchLatestY = touchStartY;
  }, { passive: true });
  window.addEventListener('touchmove', (event) => {
    if (!snapActive || touchStartY === null || event.touches.length !== 1) return;
    event.preventDefault();
    touchLatestY = event.touches[0].clientY;
  }, { passive: false });
  window.addEventListener('touchend', () => {
    if (touchStartY === null || touchLatestY === null) return;
    const distance = touchStartY - touchLatestY;
    touchStartY = null;
    touchLatestY = null;
    if (Math.abs(distance) < 36) return;
    moveOneSnap(distance > 0 ? 1 : -1);
  });
  if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
    video.currentTime = getSegmentBounds(0).start;
    video.dataset.firstFrameReady = 'true';
    section.classList.add('has-first-frame');
  }
  updateSteps();
  updateControlLabel();
  sync();
  requestScrollCheck();
}

function initPourStories(root) {
  const stories = [...root.querySelectorAll('[data-video-story]')];
  if (!stories.length) return;

  const frameRate = 25;
  const states = stories.map((story) => {
    const video = story.querySelector('video');
    video?.pause();
    return { story, video };
  });

  states.forEach((state) => {
    const sync = () => {
      const duration = Number.isFinite(state.video?.duration) ? state.video.duration : 0;
      const progress = duration ? clamp(state.video.currentTime / duration) : 0;
      state.story.style.setProperty('--story-progress', progress);
      const currentFrame = Math.round(state.video.currentTime * frameRate);
      const totalFrames = Math.round(duration * frameRate);
      state.story.dataset.frame = `${currentFrame}/${totalFrames}`;
    };
    observeVideoPlayback(state.video, state.story, sync);
  });
}

function initHeroVideo(root) {
  root.querySelectorAll('.home-hero-video').forEach((video) => {
    const hero = video.closest('.home-hero');
    const markReady = () => hero?.classList.add('is-video-ready');
    video.addEventListener('canplay', markReady, { once: true });
    video.addEventListener('error', () => hero?.classList.remove('is-video-ready'));
    if (video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) markReady();
    video.play().catch(() => {});
  });
}

function initCollection(root) {
  root.querySelectorAll('.collection').forEach((collection) => {
    const cards = [...collection.querySelectorAll('[data-cocktail-zoom]')];
    const dialog = collection.querySelector('.cocktail-dialog');
    const dialogImage = dialog?.querySelector('img');
    const dialogCaption = dialog?.querySelector('.cocktail-dialog-caption');
    if (!cards.length || !dialog || !dialogImage || !dialogCaption) return;
    let activeIndex = 0;

    const showCocktail = (index) => {
      activeIndex = (index + cards.length) % cards.length;
      const card = cards[activeIndex];
      const image = card.querySelector('img');
      dialogImage.src = image?.currentSrc || image?.src || '';
      dialogImage.alt = image?.alt || '';
      dialogCaption.textContent = card.querySelector('figcaption')?.textContent?.trim() || '';
    };

    cards.forEach((card, index) => card.addEventListener('click', () => {
      showCocktail(index);
      dialog.showModal();
    }));
    dialog.querySelector('.dialog-close')?.addEventListener('click', () => dialog.close());
    dialog.querySelector('.previous')?.addEventListener('click', () => showCocktail(activeIndex - 1));
    dialog.querySelector('.next')?.addEventListener('click', () => showCocktail(activeIndex + 1));
    dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
    dialog.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') showCocktail(activeIndex - 1);
      if (event.key === 'ArrowRight') showCocktail(activeIndex + 1);
    });
  });
}

function initEvents(root) {
  root.querySelectorAll('.event-list:not([data-event-list-ready])').forEach((list) => {
    const options = [...list.querySelectorAll('[data-event-option]')];
    options.forEach((option) => option.addEventListener('click', () => {
      const willOpen = option.getAttribute('aria-expanded') !== 'true';
      options.forEach((item) => {
        const isOpen = item === option && willOpen;
        item.setAttribute('aria-expanded', String(isOpen));
        const detail = item.closest('li')?.querySelector('small');
        if (detail) detail.hidden = !isOpen;
      });
    }));
  });
}

function initMenu(root) {
  const tabs = [...root.querySelectorAll('[data-menu-tab]')];
  const panels = [...root.querySelectorAll('[data-menu-panel]')];
  const dialog = root.querySelector('.menu-dialog');
  if (!tabs.length) return;

  const selectTab = (selected) => {
    tabs.forEach((tab) => tab.setAttribute('aria-selected', String(tab === selected)));
    panels.forEach((panel) => {
      panel.hidden = panel.dataset.menuPanel !== selected.dataset.menuTab;
    });
  };

  tabs.forEach((tab) => tab.addEventListener('click', () => selectTab(tab)));
  tabs.forEach((tab, index) => tab.addEventListener('keydown', (event) => {
    let nextIndex;
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = tabs.length - 1;
    if (nextIndex === undefined) return;
    event.preventDefault();
    selectTab(tabs[nextIndex]);
    tabs[nextIndex].focus();
  }));
  root.querySelectorAll('[data-menu-zoom]').forEach((button) => {
    button.addEventListener('click', () => {
      const image = dialog?.querySelector('img');
      if (!dialog || !image) return;
      image.src = button.dataset.menuZoom;
      image.alt = button.querySelector('img')?.alt || 'LY Brothers menu';
      dialog.showModal();
    });
  });
  dialog?.querySelector('.dialog-close')?.addEventListener('click', () => dialog.close());
  dialog?.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
}

export function initSiteExperience(root) {
  initHeroVideo(root);
  initScrollVideo(root);
  ensurePourStories(root);
  initPourStories(root);
  initCollection(root);
  initEvents(root);
  initMenu(root);
}
