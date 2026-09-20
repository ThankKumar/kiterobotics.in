import Link from "next/link";
import { Sparkles, CheckCircle2 } from "lucide-react";
import Footer from "../components/Footer";

export const metadata = {
  title: "Blog & History | KITE Robotics",
  description: "History, innovation stories, and vision of KITE Robotics.",
};

export default function BlogPage() {
  return (
    <>
    <section 
      className="min-h-screen py-28 px-6 lg:px-20 transition-colors duration-300"
      style={{ backgroundColor: 'var(--background)', color: 'var(--text-primary)' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap justify-center sm:justify-start gap-3 mb-8">
          <Link 
            href="/" 
            className="rounded-full border px-5 py-2 text-xs font-bold uppercase tracking-wider hover:opacity-80 transition shadow-sm"
            style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)', color: 'var(--text-primary)' }}
          >
            Home
          </Link>
          <Link 
            href="/buy" 
            className="rounded-full border px-5 py-2 text-xs font-bold uppercase tracking-wider hover:opacity-80 transition shadow-sm"
            style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)', color: 'var(--text-primary)' }}
          >
            Store / Buy
          </Link>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-4 text-xs font-bold uppercase tracking-wider shadow-sm" style={{ borderColor: 'var(--primary-accent)', backgroundColor: 'var(--card-bg)', color: 'var(--primary-accent)' }}>
          <Sparkles size={14} /> Our Journey & Vision
        </div>

        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tight"
          style={{ color: 'var(--text-primary)' }}
        >
          History of <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-green-500 to-cyan-500">KITE Robotics</span>
        </h1>

        <div className="space-y-6 text-base sm:text-lg leading-relaxed font-light" style={{ color: 'var(--text-secondary)' }}>
          <p>
            KITE Robotics began as a small team of technology enthusiasts and IIT mentors with a shared vision: to make high-impact robotics, AI, and IoT education accessible to students, hobbyists, and makers across India.
            The journey started with humble Arduino-based learning kits and quickly evolved into a wider portfolio of robotics, IoT, and KMS-AI learning solutions.
          </p>

          <p>
            Over the years, KITE Robotics earned recognition for practical kit design, hands-on workshops, and community-driven courses. Each product was crafted to give learners a deeper understanding of embedded systems, sensors, autonomous control, and real-world automation.
          </p>

          <p>
            Today, the brand stands for innovation, quality, and community. The KITE Robotics story is one of continuous iteration: building smarter kits, creating stronger learning experiences, and empowering a new generation of creators to build the future.
          </p>

          <div 
            className="rounded-3xl border p-8 shadow-xl backdrop-blur-md transition-colors"
            style={{
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--card-border)'
            }}
          >
            <h2 className="text-2xl font-bold mb-5" style={{ color: 'var(--text-primary)' }}>Why KITE Robotics Matters</h2>
            <ul className="space-y-3.5 text-base">
              <li className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-orange-500 flex-shrink-0" />
                <span>Hands-on STEM and Robotics learning with real hardware components.</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-green-500 flex-shrink-0" />
                <span>Practical kits and curriculum designed by industry and academic mentors.</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-cyan-500 flex-shrink-0" />
                <span>Integrated KMS-AI intelligence assistant for rapid troubleshooting and concept learning.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}
