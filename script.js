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
        designer: "Diseño: <strong>@0Guirola0</strong>"
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
        designer: "Design: <strong>@0Guirola0</strong>"
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

document.addEventListener("DOMContentLoaded", () => {
    switchLang("es");
});