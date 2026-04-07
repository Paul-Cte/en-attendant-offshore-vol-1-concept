import Track from './classes/Track.js';

// ─── DATA ───────────────────────────────────────────────────────────────────

const tracksData = [
    new Track("Mauvais Opps", "Prod. ThatBoyDaymon", { spotify: "#", appleMusic: "#", youtube: "#", deezer: "#", genius: "#" }, "https://www.instagram.com/thatboydaymon/", "lyrics/mauvaisopps.txt"),
    new Track("Gitarka", "Prod. ThatBoyDaymon", { spotify: "#", appleMusic: "#", youtube: "#", deezer: "#", genius: "#" }, "https://www.instagram.com/thatboydaymon/", "lyrics/gitarka.txt"),
    new Track("Nemo", "Prod. Achille G", { spotify: "#", appleMusic: "#", youtube: "#", deezer: "#", genius: "#" }, "https://www.instagram.com/achillegx/", "lyrics/nemo.txt"),
    new Track("Maison Hantée", "Prod. ThatBoyDaymon", { spotify: "#", appleMusic: "#", youtube: "#", deezer: "#", genius: "#" }, "https://www.instagram.com/thatboydaymon/", "lyrics/maisonhantee.txt"),
    new Track("Psychiatrie", "Prod. Achille G", { spotify: "#", appleMusic: "#", youtube: "#", deezer: "#", genius: "#" }, "https://www.instagram.com/achillegx/", "lyrics/psychiatrie.txt")
];

const PLATFORMS_CONF = [
    { key: 'spotify', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64"><path fill="currentColor" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>' },
    { key: 'appleMusic', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 50 50"><path fill="currentColor" d="M37,4H13c-4.962,0-9,4.037-9,9v24c0,4.963,4.038,9,9,9h24c4.962,0,9-4.037,9-9V13C46,8.037,41.962,4,37,4z M35,27v4v0.021h-0.002C34.986,33.768,32.749,36,30,36h-0.5c-0.987,0-1.933-0.42-2.596-1.152c-0.662-0.731-0.985-1.718-0.887-2.705C26.195,30.38,27.787,29,29.643,29H31c1.103,0,2-0.897,2-2v-9.795l-12,2.25V30v4c0,2.757-2.243,5-5,5h-0.5c-0.987,0-1.933-0.42-2.596-1.152c-0.662-0.731-0.985-1.718-0.887-2.705C12.195,33.38,13.787,32,15.643,32H17c1.103,0,2-0.897,2-2V15.353c0-0.963,0.687-1.79,1.633-1.966l12.591-2.36c0.439-0.083,0.891,0.033,1.234,0.319C34.803,11.632,35,12.053,35,12.5V27z"></path></svg>' },
    { key: 'youtube', svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="64" width="64"><path fill="currentColor" fill-rule="evenodd" d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-6 5a6 6 0 1 1 12 0 6 6 0 0 1-12 0Zm9 0-5-3v6l5-3Z" clip-rule="evenodd" stroke-width="1"></path></svg>' },
    { key: 'deezer', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 14" height="64" width="64"><path d="M12.449744444444445 7.6122194444444435H15.84v-1.9793277777777776H12.449744444444445Zm0-4.733672222222222v1.9782388888888889H15.84v-1.9782388888888889Zm0 7.487744444444445H15.84v-1.9785111111111109H12.449744444444445ZM0.15999999999999998 13.121452777777776h3.390255555555555v-1.9782388888888889H0.15999999999999998Zm4.096127777777777 0H7.646111111111111v-1.9782388888888889H4.2561277777777775Zm4.097488888888889 0h3.390255555555555v-1.9782388888888889H8.35388888888889Zm4.096127777777777 0H15.84v-1.9782388888888889H12.449744444444445ZM8.35388888888889 10.366291666666667h3.3899833333333333v-1.9785111111111109H8.35388888888889Zm-4.097488888888889 0H7.646111111111111v-1.9785111111111109H4.2561277777777775Zm0-2.7540722222222223H7.646111111111111v-1.9793277777777776H4.2561277777777775Z" fill="currentColor" stroke-width="0.0278"></path></svg>' },
];

const SVG_MICRO = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="64" height="64"><rect width="100" height="100" rx="15" fill="currentColor"/><g fill="none" stroke="#0c0c0c" stroke-width="6" stroke-linecap="round"><rect x="40" y="20" width="20" height="35" rx="10"/><line x1="50" y1="55" x2="50" y2="70"/><line x1="35" y1="75" x2="65" y2="75"/></g></svg>`;
const SVG_RETOUR = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="64" height="64"><rect width="100" height="100" rx="15" fill="currentColor"/><g fill="none" stroke="#0c0c0c" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"><polyline points="55,30 30,50 55,70"/><line x1="30" y1="50" x2="70" y2="50"/></g></svg>`;

// ─── HELPERS ─────────────────────────────────────────────────────────────────


function wrapElement(el) {
    const wrapper = document.createElement("div");
    wrapper.style.overflow = "hidden";
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
    return wrapper;
}


function saveSize(el) {
    el._originalHeight = el.offsetHeight + "px";
    el._originalMarginBottom = getComputedStyle(el).marginBottom;
}

function hideElement(el, targetRect) {
    const rect = el.getBoundingClientRect();
    const dx = targetRect.left + targetRect.width / 2 - (rect.left + rect.width / 2);
    const dy = targetRect.top + targetRect.height / 2 - (rect.top + rect.height / 2);
    gsap.to(el, { x: dx, y: dy, scale: 0, autoAlpha: 0, height: 0, marginBottom: 0, duration: 0.3, ease: "power2.in" });
}

function showElement(el) {
    const defaultHeight = (el._originalHeight && el._originalHeight !== "0px") ? el._originalHeight : "auto";
    const defaultMargin = el._originalMarginBottom || "0px";

    gsap.fromTo(el,
        { scale: 0, autoAlpha: 0, height: 0, marginBottom: 0 },
        {
            x: 0, y: 0, scale: 1, autoAlpha: 1,
            height: defaultHeight,
            marginBottom: defaultMargin,
            duration: 0.3, ease: "power2.out",
            onComplete: () => gsap.set(el, { clearProps: "height,marginBottom,x,y,scale" })
        }
    );
}

// ─── BUILDERS ────────────────────────────────────────────────────────────────

function buildLyricsContainer(track) {
    const container = document.createElement("div");
    container.classList.add("lyrics-container");

    const inner = document.createElement("div");
    inner.classList.add("lyrics-inner");

    inner.innerHTML = "<p style='opacity: 0.6; text-align: center;'>Chargement des paroles...</p>";

    fetch(track.lyrics)
        .then(response => {
            if (!response.ok) throw new Error("Fichier introuvable");
            return response.text();
        })
        .then(texte => {
            const texteAvecBalises = texte
                .split('\n')
                .filter(ligne => ligne.trim() !== '')
                .map(ligne => `<p>${ligne.trim()}</p>`)
                .join('\n');

            inner.innerHTML = texteAvecBalises;
        })
        .catch(error => {
            console.error("Erreur lors du chargement des paroles :", error);
            inner.innerHTML = "<p>Désolé, impossible de charger les paroles.</p>";
        });

    container.appendChild(inner);
    return container;
}

function buildPlatformLinks(platforms) {
    const container = document.createElement('div');
    container.classList.add('platforms-links');
    PLATFORMS_CONF.forEach(({ key, svg }) => {
        if (!platforms[key]) return;
        const a = document.createElement('a');
        a.href = platforms[key];
        a.innerHTML = svg;
        a.classList.add('platform-link');
        a.target = '_blank';
        a.addEventListener('click', e => e.stopPropagation());
        container.appendChild(a);
    });
    return container;
}


function buildGeniusBtn(elmtAMasquer, lyricsContainer) {
    const btn = document.createElement("a");
    btn.classList.add("genius-btn");
    btn.href = "#";
    btn.innerHTML = `${SVG_MICRO}<span class="genius-text">VOIR LES PAROLES</span>`;

    let isRetourMode = false;

    btn.addEventListener("click", e => {
        e.preventDefault();
        isRetourMode ? modeRetour() : modeLyrics();
    });

    btn.addEventListener('click', e => e.stopPropagation());

    function modeLyrics() {
        const btnRect = btn.getBoundingClientRect();
        elmtAMasquer.forEach(el => hideElement(el, btnRect));

        gsap.delayedCall(0.3, () => {
            btn.innerHTML = `${SVG_RETOUR}<span class="genius-text">Retour</span>`;
            isRetourMode = true;
            // lyricsContainer.style.overflowY = "auto";
            gsap.fromTo(lyricsContainer,
                { autoAlpha: 0, maxHeight: 0, y: 20 },
                { autoAlpha: 1, maxHeight: "50vh", y: 0, duration: 0.4, ease: "power2.out", onComplete: () => lyricsContainer.style.overflowY = "auto" }

            );
        });
    }

    function modeRetour() {
        gsap.to(lyricsContainer, {
            autoAlpha: 0, maxHeight: 0, y: 20,
            duration: 0.2, ease: "power2.in",
            onStart: () => lyricsContainer.style.overflowY = "hidden",
            onComplete: () => {
                elmtAMasquer.forEach(el => showElement(el));
                gsap.delayedCall(0.3, () => {
                    btn.innerHTML = `${SVG_MICRO}<span class="genius-text">VOIR LES PAROLES</span>`;
                    isRetourMode = false;
                });
            }
        });
    }

    return btn;
}

function buildLeftPanel(track) {
    const panel = document.createElement("div");
    panel.classList.add("left-panel");

    const titleEl = document.createElement("div");
    titleEl.classList.add("detail-title");
    titleEl.innerText = track.title;

    const prodEl = document.createElement("a");
    prodEl.classList.add("detail-prod");
    prodEl.innerText = track.producer;
    prodEl.href = track.producerUrl && track.producerUrl !== "#" ? track.producerUrl : "#";
    if (prodEl.href === "#") prodEl.addEventListener("click", e => e.preventDefault());
    prodEl.target = "_blank";
    prodEl.addEventListener('click', e => e.stopPropagation());

    const linksContainer = buildPlatformLinks(track.platforms);
    const lyricsContainer = buildLyricsContainer(track);

    panel.appendChild(titleEl);
    panel.appendChild(prodEl);
    panel.appendChild(linksContainer);
    panel.appendChild(lyricsContainer);

    const titleWrapper = wrapElement(titleEl);
    const prodWrapper = wrapElement(prodEl);
    const linksWrapper = wrapElement(linksContainer);

    // Mesure après insertion dans le panel
    const elmtAMasquer = [linksWrapper, prodWrapper, titleWrapper];

    if (track.platforms.genius) {
        const geniusBtn = buildGeniusBtn(elmtAMasquer, lyricsContainer);
        panel.appendChild(geniusBtn);
    }

    return { panel, elmtAMasquer };
}

// ─── DETAILS VIEW ─────────────────────────────────────────────────────────────

function createDetails(track, cursor) {
    document.body.style.overflow = "hidden";

    const btnClose = document.createElement("button");
    btnClose.innerHTML = "<div><svg width='65' height='65' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M7.172 11.5l4.608 3.763-.679.737-6.101-5 6.112-5 .666.753-4.604 3.747h11.826v1h-11.828z'/></svg></div>";
    btnClose.classList.add("btn-close");
    btnClose.addEventListener("click", e => { e.stopPropagation(); destroyDetails(e, cursor); });

    const img = document.createElement("img");
    img.src = "images/pp_so_la_lune_sans_fond-converti-depuis-png3.svg";
    img.classList.add("img-so-la-lune-details");

    cursor.appendChild(btnClose);
    cursor.appendChild(img);

    if (!track?.platforms) return;

    const { panel, elmtAMasquer } = buildLeftPanel(track);
    cursor.appendChild(panel);
    elmtAMasquer.forEach(saveSize);

    gsap.fromTo(".left-panel",
        { x: -1500, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, delay: 0.1, duration: 0.5 }
    );
}

function destroyDetails(e, cursor) {
    gsap.fromTo(".left-panel",
        { x: 0, autoAlpha: 1 },
        { x: -1500, autoAlpha: 0, duration: 0.5 }
    );

    document.body.style.overflow = "auto";

    const targetX = e?.clientX ?? window.innerWidth / 2;
    const targetY = e?.clientY ?? window.innerHeight / 2;

    gsap.to(Array.from(cursor.children), {
        opacity: 0, duration: 0.2,
        onComplete: () => {
            cursor.innerHTML = "";
            cursor.classList.remove("clicked");
            gsap.to(cursor, { x: targetX, y: targetY, width: 90, height: 90, borderRadius: "50%", duration: 0.3, ease: "power2.out" });
        }
    });

    document.querySelectorAll("#boat-container table td.title").forEach(td => td.classList.remove("hovered"));
}

// ─── APP SETUP ───────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.getElementById("cursor");

    // Tracks
    const trackListContainer = document.getElementById('track-list');
    if (trackListContainer) {
        trackListContainer.innerHTML = tracksData.map(t => t.getHTML()).join('');
    }

    gsap.registerPlugin(ScrollTrigger);

    // Titre animé
    const h1 = document.getElementById("h1-titre-ep");
    if (h1) {
        h1.innerHTML = h1.textContent.split(' ').map(mot =>
            `<span style="white-space:nowrap">${mot.split('').map(l => `<span class="lettre">${l}</span>`).join('')}</span>`
        ).join(' ');
        gsap.from(".lettre", {
            opacity: 0, y: 30, duration: 0.1, stagger: 0.05, clearProps: "transform",
            onComplete: () => document.querySelectorAll(".lettre").forEach(l => l.style.transition = "transform 0.15s ease")
        });
    }

    // Bateau scroll
    const container = document.getElementById("boat-container");
    if (container) {
        const leftStart = -container.offsetWidth + 350;
        const leftEnd = (window.innerWidth - container.offsetWidth) / 2;
        const scrollNeeded = (leftEnd - leftStart);
        container.style.left = leftStart + "px";
        document.body.style.height = `calc(100vh + ${scrollNeeded}px)`;

        window.addEventListener("scroll", () => {
            container.style.left = Math.min(leftStart + window.scrollY, leftEnd) + "px";
        });

        const btnScroll = document.querySelector("#section10 a");
        if (btnScroll) {
            btnScroll.addEventListener("click", () => window.scrollTo({ top: scrollNeeded, behavior: "smooth" }));
            btnScroll.addEventListener("mouseenter", () => gsap.to(cursor, { width: 0, height: 0, duration: 0.3 }));
            btnScroll.addEventListener("mouseleave", () => gsap.to(cursor, { width: 90, height: 90, duration: 0.3 }));
        }
    }

    // Cursor
    document.addEventListener("mousemove", e => {
        if (cursor.classList.contains("clicked")) return;
        gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.3, ease: "power2.out" });
    });

    // Track clicks
    document.querySelectorAll("#boat-container table td.title").forEach(td => {
        td.addEventListener("click", () => {
            if (cursor.classList.contains("clicked")) return;
            cursor.classList.add("clicked");
            gsap.to(cursor, { x: window.innerWidth / 2, y: window.innerHeight / 2, width: window.innerWidth, height: window.innerHeight, borderRadius: "0%", duration: 0.3, ease: "power2.out" });
            const track = tracksData.find(t => t.title === td.dataset.trackTitle);
            createDetails(track, cursor);
        });

        td.addEventListener("mouseenter", () => {
            if (cursor.classList.contains("clicked")) return;
            td.classList.add("hovered");
            const rect = td.getBoundingClientRect();
            gsap.to(cursor, { width: Math.max(rect.width + 40, 90), height: Math.max(rect.height * 2, 90), borderRadius: "0px", duration: 0.3 });
        });

        td.addEventListener("mouseleave", () => {
            if (cursor.classList.contains("clicked")) return;
            td.classList.remove("hovered");
            gsap.to(cursor, { width: 90, height: 90, borderRadius: "50%", duration: 0.3 });
        });
    });


});
