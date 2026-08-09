import Link from "next/link";

export const metadata = {
  title: "Buy | KITE Robotics",
  description: "Explore our products and buy KITE Robotics kits.",
};

export default function BuyPage() {
  const products = [
    {
      title: "Arduino Starter Kit",
      price: "₹2,499",
      description: "Everything you need to begin learning electronics and microcontroller programming.",
    },
    {
      title: "Robotics Kit",
      price: "₹4,999",
      description: "Build your first autonomous rover with motors, sensors, and controller boards.",
    },
    {
      title: "IoT Bundle",
      price: "₹3,499",
      description: "Connect sensors and actuators to the cloud using ESP32 and WiFi modules.",
    },
  ];

  return (
    <section className="min-h-screen bg-[#050914] text-white py-24 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <Link href="/" className="rounded-full border border-blue-500/40 bg-[#0b1320] px-5 py-2 text-sm uppercase tracking-[0.24em] text-blue-300 hover:bg-blue-500/10 transition">
            Home
          </Link>
          <Link href="/blog" className="rounded-full border border-blue-500/40 bg-[#0b1320] px-5 py-2 text-sm uppercase tracking-[0.24em] text-blue-300 hover:bg-blue-500/10 transition">
            Blog
          </Link>
          <Link href="/carriers" className="rounded-full border border-blue-500/40 bg-[#0b1320] px-5 py-2 text-sm uppercase tracking-[0.24em] text-blue-300 hover:bg-blue-500/10 transition">
            Carriers
          </Link>
        </div>
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-blue-300 mb-3">Buy KITE Robotics</p>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">Choose Your Next Robotics Kit</h1>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Select the best solution for your learning path. Each kit includes hardware, documentation, and support resources.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.title}
              className="rounded-[2rem] border border-blue-500/20 bg-[#071020] p-7 shadow-[0_25px_60px_rgba(15,23,42,0.6)]"
            >
              <h2 className="text-2xl font-semibold text-white mb-3">{product.title}</h2>
              <p className="text-blue-300 text-xl font-bold mb-4">{product.price}</p>
              <p className="text-gray-300 mb-6">{product.description}</p>
              <button className="w-full rounded-2xl bg-blue-600 px-5 py-3 text-white font-semibold hover:bg-blue-500 transition">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
