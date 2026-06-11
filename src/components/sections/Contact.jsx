import Container from "../layout/Container";
import SectionTittle from "../ui/SectionTittle";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
    const form = useRef();

    const [loading, setLoading] = useState(false);

    const [status, setStatus] = useState({
        type: "",
        message: "",
    });

    const sendEmail = async (e) => {
        e.preventDefault();

        setStatus({
            type: "",
            message: "",
        });

        const formData = new FormData(form.current);

        const name = formData.get("name")?.trim();
        const email = formData.get("email")?.trim();
        const message = formData.get("message")?.trim();

        if (!name || !email || !message) {
            setStatus({
                type: "error",
                message: "Todos los campos son obligatorios.",
            });

            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            setStatus({
                type: "error",
                message: "Introduce un correo válido.",
            });

            return;
        }

        try {
            setLoading(true);

            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            );

            setStatus({
                type: "success",
                message: "Mensaje enviado correctamente.",
            });

            form.current.reset();
        } catch (error) {
            setStatus({
                type: "error",
                message: "No se pudo enviar el mensaje.",
            });

            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <section id="contact" className="py-24 bg-slate-900 scroll-mt-24">
                <Container>
                    <SectionTittle title="Contacto" subtitle="¿Tienes un proyecto o una oportunidad laboral? Hablemos." />

                    <div className="max-w-2xl mx-auto">
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <input
                                name="name"
                                type="text"
                                required
                                placeholder="Nombre"
                                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-4 text-white outline-none focus:border-emerald-400"
                            />

                            <input
                                name="email"
                                type="email"
                                required
                                placeholder="Correo electrónico"
                                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-4 text-white outline-none focus:border-emerald-400"
                            />

                            <textarea
                                name="message"
                                rows="6"
                                required
                                placeholder="Escribe tu mensaje..."
                                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-4 text-white outline-none focus:border-emerald-400"
                            />

                            {status.message && (
                                <div
                                    className={`rounded-lg p-4 ${
                                        status.type === "success"
                                            ? "bg-green-500/20 border border-green-500 text-green-400"
                                            : "bg-red-500/20 border border-red-500 text-red-400"
                                    }`}>
                                    {status.message}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:cursor-not-allowed text-white py-4 rounded-lg font-semibold transition">
                                {loading ? "Enviando..." : "Enviar Mensaje"}
                            </button>
                        </form>
                    </div>
                </Container>
            </section>
        </>
    );
}

export default Contact;
