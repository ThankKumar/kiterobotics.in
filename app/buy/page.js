import Link from "next/link";
import { ShoppingCart, Check } from "lucide-react";
import Footer from "../components/Footer";

export const metadata = {
  title: "Buy Robotics Kits | KITE Robotics",
  description: "Explore our products and buy genuine KITE Robotics kits.",
};

export default function BuyPage() {
  const products = [
    {
      title: "Arduino Starter Kit",
      price: "₹2,499",
      accent: "#FF7A00",
      description: "Everything you need to begin learning electronics and microcontroller programming.",
      features: ["Arduino Uno R3 Compatible", "30+ Sensors & Components", "Beginner Learning Manual", "Code Examples Included"]
    },
    {
      title: "Robotics Rover Kit",
      price: "₹4,999",
      accent: "#22C55E",
      popular: true,
      description: "Build your first autonomous rover with high-torque motors, sensors, and controller boards.",
      features: ["4WD Robot Chassis & Wheels", "Ultrasonic & IR Obstacle Sensors", "Motor Driver Shield", "Bluetooth App Control"]
    },
    {
      title: "IoT Smart Home Bundle",
      price: "₹3,499",
      accent: "#06B6D4",
      description: "Connect sensors and relays to cloud dashboards using ESP32 & WiFi IoT modules.",
      features: ["ESP32 NodeMCU Development Board", "Relay Modules & OLED Display", "MQTT & Cloud Integrations", "IoT Home Automation Projects"]
    },
  ];

  return (
    <>
    <section 
      className="min-h-screen py-28 px-6 lg:px-20 transition-colors duration-300"
      style={{ backgroundColor: 'var(--background)', color: 'var(--text-primary)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <Link 
            href="/" 
            className="rounded-full border px-5 py-2 text-xs font-bold uppercase tracking-wider hover:opacity-80 transition shadow-sm"
            style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)', color: 'var(--text-primary)' }}
          >
            Home
          </Link>
          <Link 
            href="/blog" 
            className="rounded-full border px-5 py-2 text-xs font-bold uppercase tracking-wider hover:opacity-80 transition shadow-sm"
            style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)', color: 'var(--text-primary)' }}
          >
            Blog
          </Link>
          <Link 
            href="/#products" 
            className="rounded-full border px-5 py-2 text-xs font-bold uppercase tracking-wider hover:opacity-80 transition shadow-sm"
            style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--primary-accent)', color: 'var(--primary-accent)' }}
          >
            All Products
          </Link>
        </div>

        <div className="mb-14 text-center">
          <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: 'var(--primary-accent)' }}>
            Official Store • KITE Robotics
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-green-500 to-cyan-500">Next Kit</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Select the best solution for your learning path. Each kit includes premium hardware, documentation, and expert mentor support.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.title}
              className={`rounded-3xl border p-7 shadow-xl backdrop-blur-md relative flex flex-col justify-between transition-transform hover:-translate-y-1 ${product.popular ? 'ring-2 ring-orange-500/40' : ''}`}
              style={{
                backgroundColor: 'var(--card-bg)',
                borderColor: product.popular ? 'var(--primary-accent)' : 'var(--card-border)'
              }}
            >
              {product.popular && (
                <div 
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-white shadow-md"
                  style={{ background: 'linear-gradient(135deg, #FF7A00, #22C55E)' }}
                >
                  Most Popular
                </div>
              )}

              <div>
                <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{product.title}</h2>
                <div className="flex items-baseline gap-2 mb-4">
                  <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-500">{product.price}</p>
                  <span className="text-xs line-through" style={{ color: 'var(--text-muted)' }}>₹{parseInt(product.price.replace(/[^\d]/g, '')) + 1000}</span>
                </div>
                <p className="text-sm mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{product.description}</p>

                <div className="space-y-2.5 mb-8 border-t pt-5" style={{ borderColor: 'var(--card-border)' }}>
                  {product.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
                      <Check size={14} className="text-green-500 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={`https://wa.me/919564866985?text=${encodeURIComponent(`Hello, I want to order the ${product.title} (${product.price})`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-xl py-3.5 text-white font-extrabold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95 cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, #FF7A00 0%, #22C55E 100%)',
                  boxShadow: '0 4px 20px rgba(255, 122, 0, 0.25)'
                }}
              >
                <ShoppingCart size={16} />
                Order Kit Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}
