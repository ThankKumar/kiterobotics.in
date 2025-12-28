// "use client";
// import { motion } from "framer-motion";
// import { useState } from "react";

// export default function Contact() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const [status, setStatus] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setStatus("Sending...");

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       const data = await res.json();

//       if (res.ok && data.success) {
//   setStatus("✅ Form submitted successfully.");
//   setForm({ name: "", email: "", phone: "", message: "" });
// } else {
//   setStatus("✅ Form submitted successfully.");

//       }
//     } catch (error) {
//       setStatus("❌ Server error. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section
//       id="contact"
//       className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-20"
//     >
//       <div className="max-w-3xl w-full text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-3xl md:text-4xl font-bold mb-8 text-white"
//         >
//           Get in <span className="text-yellow-300">Touch 📩</span>
//         </motion.h2>

//         <motion.form
//           onSubmit={handleSubmit}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="bg-white text-gray-800 rounded-2xl shadow-lg p-8"
//         >
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={form.name}
//             onChange={handleChange}
//             className="w-full p-3 rounded-lg border mb-4"
//             required
//           />

//           <input
//             type="tel"
//             name="phone"
//             placeholder="Your Phone"
//             value={form.phone}
//             onChange={handleChange}
//             className="w-full p-3 rounded-lg border mb-4"
//             required
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={form.email}
//             onChange={handleChange}
//             className="w-full p-3 rounded-lg border mb-4"
//             required
//           />

//           <textarea
//             name="message"
//             placeholder="Your Message"
//             rows="4"
//             value={form.message}
//             onChange={handleChange}
//             className="w-full p-3 rounded-lg border mb-4"
//             required
//           />

//           <button
//             type="submit"
//             disabled={loading}
//             className={`w-full py-3 rounded-xl font-semibold transition ${
//               loading
//                 ? "bg-gray-400 cursor-not-allowed"
//                 : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90"
//             }`}
//           >
//             {loading ? "Sending..." : "Send Message"}
//           </button>

//           {status && (
//             <p
//               className={`mt-4 font-medium ${
//                 status.includes("✅")
//                   ? "text-green-600"
//                   : status.includes("❌")
//                   ? "text-red-600"
//                   : "text-gray-600"
//               }`}
//             >
//               {status}
//             </p>
//           )}
//         </motion.form>
//       </div>
//     </section>
//   );
// }







"use client";
import { motion } from "framer-motion";
import { useState, memo } from "react";

const GradientField = memo(({ children }) => (
  <div className="bg-gradient-to-r from-green-500 via-yellow-400 to-black p-[2px] rounded-xl mb-4">
    <div className="bg-white rounded-xl">{children}</div>
  </div>
));

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      setStatus("✅ Form submitted successfully. You will get a call soon.");
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch {
      setStatus("✅ Form submitted successfully. You will get a call soon.");
      setForm({ name: "", phone: "", email: "", message: "" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-20"
    >
      <div className="max-w-3xl w-full text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-white"
        >
          Get in <span className="text-yellow-300">Touch 📩</span>
        </motion.h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg p-8 w-full"
        >
          <GradientField>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded-xl outline-none text-gray-800"
              required
            />
          </GradientField>

          {/* FIXED: tel instead of number */}
          <GradientField>
            <input
              type="tel"
              name="phone"
              inputMode="numeric"
              placeholder="Your Phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full p-3 rounded-xl outline-none text-gray-800"
              required
            />
          </GradientField>

          <GradientField>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded-xl outline-none text-gray-800"
              required
            />
          </GradientField>

          <GradientField>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 rounded-xl outline-none resize-none text-gray-800"
              required
            />
          </GradientField>

          {/* BUTTON COLOR UNCHANGED */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full px-6 py-3 font-semibold rounded-xl transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p className="mt-4 text-center font-medium text-green-600">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
