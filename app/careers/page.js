import Link from "next/link";
import Footer from "../components/Footer";

export const metadata = {
  title: "Careers | KITE Robotics",
  description: "Career and joining opportunities at KITE Robotics.",
};

export default function CareersPage() {
  const roles = [
    {
      title: "Robotics Instructor",
      type: "Full-time",
      description: "Teach robotics and automation skills to students and hobbyists across hands-on workshops.",
    },
    {
      title: "Product Designer",
      type: "Full-time",
      description: "Design innovative educational kits and improve user experience for learners.",
    },
    {
      title: "Community Specialist",
      type: "Part-time",
      description: "Grow the KITE Robotics community, manage events, and support learners online.",
    },
  ];

  return (
    <>
    <section className="min-h-screen bg-[#050914] text-white py-24 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <Link href="/" className="rounded-full border border-blue-500/40 bg-[#0b1320] px-5 py-2 text-sm uppercase tracking-[0.24em] text-blue-300 hover:bg-blue-500/10 transition">
            Home
          </Link>
          <Link href="/blog" className="rounded-full border border-blue-500/40 bg-[#0b1320] px-5 py-2 text-sm uppercase tracking-[0.24em] text-blue-300 hover:bg-blue-500/10 transition">
            Blog
          </Link>
          <Link href="/buy" className="rounded-full border border-blue-500/40 bg-[#0b1320] px-5 py-2 text-sm uppercase tracking-[0.24em] text-blue-300 hover:bg-blue-500/10 transition">
            Buy
          </Link>
        </div>
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-blue-300 mb-3">Join Our Team</p>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">Careers at KITE Robotics</h1>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Explore open positions and discover how you can build the future with our robotics education team.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {roles.map((role) => (
            <div key={role.title} className="rounded-[2rem] border border-blue-500/20 bg-[#071020] p-7 shadow-[0_25px_60px_rgba(15,23,42,0.6)]">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-2xl font-semibold text-white">{role.title}</h2>
                <span className="text-sm uppercase tracking-[0.18em] text-blue-300">{role.type}</span>
              </div>
              <p className="text-gray-300 mb-6">{role.description}</p>
              <button className="w-full rounded-2xl bg-blue-600 px-5 py-3 text-white font-semibold hover:bg-blue-500 transition">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}
