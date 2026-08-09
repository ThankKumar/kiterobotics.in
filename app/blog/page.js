export const metadata = {
  title: "Blog | KITE Robotics",
  description: "History and stories from KITE Robotics.",
};

export default function BlogPage() {
  return (
    <section className="min-h-screen bg-[#050914] text-white py-24 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
          History of KITE Robotics
        </h1>

        <div className="space-y-8 text-gray-300 text-lg leading-8">
          <p>
            KITE Robotics began as a small team of technology enthusiasts with a shared vision: to make robotics education accessible to students, hobbyists, and makers across India.
            The journey started with humble Arduino-based learning kits and quickly evolved into a wider portfolio of robotics, IoT, and AI learning solutions.
          </p>

          <p>
            Over the years, KITE Robotics earned recognition for practical kit design, hands-on workshops, and community-driven courses. Each product was crafted to give learners a deeper understanding of embedded systems, sensors, autonomous control, and real-world automation.
          </p>

          <p>
            Today, the brand stands for innovation, quality, and community. The KITE Robotics story is one of continuous iteration: building smarter kits, creating stronger learning experiences, and empowering a new generation of creators to build the future.
          </p>

          <div className="rounded-3xl border border-blue-500/20 bg-[#071020] p-8 shadow-[0_20px_60px_rgba(15,23,42,0.55)]">
            <h2 className="text-2xl font-semibold mb-4 text-white">Why KITE Robotics Matters</h2>
            <ul className="space-y-3 text-gray-300 list-disc list-inside">
              <li>Hands-on STEM learning with real hardware.</li>
              <li>Practical kits designed for students and educators.</li>
              <li>Fast-growing community support and learning resources.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
