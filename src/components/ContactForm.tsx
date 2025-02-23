import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", phone: "", message: "" });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    emailjs.init("ENmFvfByf_iHbB7Ko");
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear messages when user starts typing again
    setSuccess(false);
    setError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    emailjs.send(
      "service_lf5iahp",
      "template_qsqmb1l",
      {
        to_name: "Jyothi Diagnostics",
        from_name: formData.name,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      },
      "ENmFvfByf_iHbB7Ko"
    )
      .then(() => {
        setSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        // Keep success message visible for 5 seconds
        setTimeout(() => setSuccess(false), 5000);
      })
      .catch((err) => {
        console.error("Email Error:", err);
        setError("Failed to send the message. Please try again later.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section className="w-full py-16 px-6 md:px-20 bg-gradient-to-r from-[#1c1c2b] via-[#2b2b3d] to-[#38384f] rounded-2xl shadow-2xl">
      <motion.div 
        initial={{ opacity: 0, y: 60 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="max-w-3xl mx-auto text-white text-center"
      >
        <h2 className="text-4xl font-extrabold mb-5">Get in Touch with Us</h2>
        <p className="text-lg mb-10">Appointments, queries, or feedback – we're here to help with all your diagnostic needs.</p>
        <Card className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <motion.input
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Your Name" 
                required 
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1c1c2b] focus:border-transparent outline-none text-gray-900 placeholder-gray-500" 
                whileFocus={{ scale: 1.02 }}
                disabled={isSubmitting}
              />
              <motion.input 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="Your Email" 
                type="email" 
                required 
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1c1c2b] focus:border-transparent outline-none text-gray-900 placeholder-gray-500" 
                whileFocus={{ scale: 1.02 }}
                disabled={isSubmitting}
              />
              <motion.input 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                placeholder="Your Phone Number" 
                required 
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1c1c2b] focus:border-transparent outline-none text-gray-900 placeholder-gray-500" 
                whileFocus={{ scale: 1.02 }}
                disabled={isSubmitting}
              />
              <motion.textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="Your Message" 
                rows={4} 
                required 
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1c1c2b] focus:border-transparent outline-none resize-none text-gray-900 placeholder-gray-500" 
                whileFocus={{ scale: 1.02 }}
                disabled={isSubmitting}
              ></motion.textarea>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button 
                  type="submit" 
                  className="w-full bg-[#1c1c2b] text-white hover:bg-[#10101a] disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </motion.div>
              {success && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-semibold mt-2 p-3 bg-green-50 rounded-lg">
                  ✅ Message sent successfully! We'll get back to you soon.
                </motion.p>
              )}
              {error && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 font-semibold mt-2 p-3 bg-red-50 rounded-lg">❌ {error}</motion.p>
              )}
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}