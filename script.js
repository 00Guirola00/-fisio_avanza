const translations = {
    es: {
        navHome: "Inicio",
        navServices: "Servicios",
        navBook: "Reservar",
        navContact: "Contacto",

        heroTitle: "Recupera tu bienestar",
        heroText: "Fisioterapia avanzada • Hydrafacial • Masajes terapéuticos",
        btnReserve: "Reservar Cita",
        btnServices: "Ver Servicios",

        servicesTitle: "Nuestros Servicios",
        servicesSubtitle: "Tratamientos de vanguardia para tu salud y belleza",

        service1Title: "Hydrafacial Premium",
        service1Text: "Limpieza profunda, extracción y sueros revitalizantes. Piel radiante en una sola sesión.",

        service2Title: "Fisioterapia Clínica",
        service2Text: "Rehabilitación avanzada, alivio del dolor y recuperación funcional.",

        service3Title: "Masaje Terapéutico",
        service3Text: "Relajación muscular profunda y reducción de estrés.",

        bookingTitle: "Reserva tu Cita",
        bookingSubtitle: "Agenda en segundos",
        findUs: "Encuéntranos",

        address: "7ª Calle Oriente y 11ª Avenida Norte, Casa #1<br>Urbanización Santa Mónica, Santa Tecla",

        footerDescription: "Centro integral de bienestar en Santa Tecla, El Salvador.",
        footerContact: "Contacto",

        copyright: "© 2026 Fisio Avanza • Todos los derechos reservados",
        designer: "Diseño: <strong>@0Guirola0</strong>",

        // Traducciones del Banner de Cookies
        cookieMessage: "Usamos cookies para mejorar tu experiencia. Al continuar navegando, aceptas nuestra",
        cookiePolicy: "Política de Privacidad",
        cookieAccept: "Aceptar",
        cookieReject: "Rechazar"
    },

    en: {
        navHome: "Home",
        navServices: "Services",
        navBook: "Book",
        navContact: "Contact",

        heroTitle: "Recover your wellbeing",
        heroText: "Advanced Physiotherapy • Hydrafacial • Therapeutic Massage",
        btnReserve: "Book Appointment",
        btnServices: "View Services",

        servicesTitle: "Our Services",
        servicesSubtitle: "State-of-the-art treatments for your health and beauty",

        service1Title: "Premium Hydrafacial",
        service1Text: "Deep cleansing, extraction and revitalizing serums. Radiant skin in a single session.",

        service2Title: "Clinical Physiotherapy",
        service2Text: "Advanced rehabilitation, pain relief and functional recovery.",

        service3Title: "Therapeutic Massage",
        service3Text: "Deep muscle relaxation and stress reduction.",

        bookingTitle: "Book Your Appointment",
        bookingSubtitle: "Schedule in Seconds",
        findUs: "Find Us",

        address: "7th East Street and 11th North Avenue, House #1<br>Santa Monica Residential Area, Santa Tecla",

        footerDescription: "Comprehensive wellness center in Santa Tecla, El Salvador.",
        footerContact: "Contact",

        copyright: "© 2026 Fisio Avanza • All Rights Reserved",
        designer: "Design: <strong>@0Guirola0</strong>",

        // English Cookies
        cookieMessage: "We use cookies to improve your experience. By continuing to browse, you accept our",
        cookiePolicy: "Privacy Policy",
        cookieAccept: "Accept",
        cookieReject: "Reject"
    }
};

function switchLang(lang) {
    document.querySelectorAll("[data-translate]").forEach(element => {
        const key = element.getAttribute("data-translate");
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    document.getElementById("btn-es").classList.remove("active");
    document.getElementById("btn-en").classList.remove("active");
    document.getElementById(`btn-${lang}`).classList.add("active");

    document.documentElement.lang = lang;
}

// ==================== COOKIE BANNER ====================

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = name + "=" + value + ";path=/;expires=" + date.toUTCString();
}

function getCookie(name) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
}

function acceptCookies() {
    setCookie("cookie_consent", "accepted", 365);
    document.getElementById("cookie-banner").classList.add("hidden");
}

function rejectCookies() {
    setCookie("cookie_consent", "rejected", 365);
    document.getElementById("cookie-banner").classList.add("hidden");
}

function updateCookieBannerLanguage(lang) {
    const banner = document.getElementById("cookie-banner");
    if (!banner) return;

    banner.querySelector(".cookie-text").innerHTML = `
        ${translations[lang].cookieMessage} 
        <a href="politica-privacidad.html" class="text-[#0047AB] hover:underline" data-translate="cookiePolicy">${translations[lang].cookiePolicy}</a>.
    `;
    banner.querySelector(".btn-accept").textContent = translations[lang].cookieAccept;
    banner.querySelector(".btn-reject").textContent = translations[lang].cookieReject;
}

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
    switchLang("es");

    // Mostrar banner de cookies si no ha aceptado/rechazado antes
    if (!getCookie("cookie_consent")) {
        const banner = document.getElementById("cookie-banner");
        if (banner) {
            banner.classList.remove("hidden");
            updateCookieBannerLanguage("es");
        }
    }
});