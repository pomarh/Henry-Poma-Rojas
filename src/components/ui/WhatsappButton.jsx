import { FaWhatsapp } from "react-icons/fa";

function WhatsappButton() {
    return (
        <>
            <a
                href="https://wa.me/59175879437?text=Hola%20Henry,%20vi%20tu%20portafolio%20y%20me%20gustaría%20contactarte."
                target="_blank"
                rel="noreferrer"
                aria-label="Contactar por WhatsApp"
                className="fixed bottom-5 right-5 z-50 w-14 h-14 flex items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300">
                <FaWhatsapp size={30} />
            </a>
        </>
    );
}

export default WhatsappButton;
