import Link from "next/link";
import { ShoppingCart, Check, Star, ShieldCheck, Truck, BookOpen, Zap } from "lucide-react";
import Footer from "../components/Footer";

export const metadata = {
  title: "Buy Robotics Kits | KITE Robotics Store",
  description: "Explore our genuine hardware and robotics kits. Order directly with mentor support and express shipping.",
};

export default function BuyPage() {
  const products = [
    {
      id: "arduino",
      title: "Arduino Uno Starter Kit",
      price: "₹2,499",
      originalPrice: "₹3,499",
      accent: "#FF7A00",
      badge: "Beginner Friendly",
      description: "Everything you need to begin learning electronics, sensors, and microcontroller programming from scratch.",
      features: [
        "ATmega328P Uno R3 Board",
        "30+ Sensors, Breadboard & LEDs",
        "Beginner Learning Project Manual",
        "15+ Code Examples & Tutorials",
      ],
    },
    {
      id: "robot",
      title: "4WD Autonomous Rover Kit",
      price: "₹4,999",
      originalPrice: "₹6,499",
      accent: "#22C55E",
      popular: true,
      badge: "Most Popular 🔥",
      description: "Build your own autonomous rover with high-torque gear motors, ultrasonic radar, and mobile app control.",
      features: [
        "Dual-Deck 4WD Acrylic Chassis",
        "Ultrasonic Collision Radar & Servo",
        "L298N High-Torque Motor Driver",
        "Bluetooth BLE Android App Control",
      ],
    },
    {
      id: "iot",
      title: "ESP32 IoT Cloud Station",
      price: "₹3,499",
      originalPrice: "₹4,499",
      accent: "#06B6D4",
      badge: "Cloud Telemetry",
      description: "Connect sensors and 4-channel relays to live cloud dashboards using dual-core ESP32 Wi-Fi & BLE.",
      features: [
        "ESP32 Dual-Core NodeMCU Board",
        "4-Channel Optocoupled Relays",
        "0.96-inch OLED Live Telemetry HUD",
        "MQTT & Cloud Integration Code",
      ],
    },
    {
      id: "sensor",
      title: "16-in-1 Sensor Master Pack",
      price: "₹1,899",
      originalPrice: "₹2,699",
      accent: "#A855F7",
      badge: "Lab Essential",
      description: "Comprehensive sensor laboratory kit for measuring acoustics, environment, motion, gas, and distance.",
      features: [
        "16 Calibrated Plug & Play Sensors",
        "Ultrasonic, PIR, Gas & Sound Modules",
        "Soil Moisture & Flame Detectors",
        "40x Multi-Color Jumper Wires",
      ],
    },
    {
      id: "ai",
      title: "Edge AI & Vision Pro Kit",
      price: "₹6,999",
      originalPrice: "₹8,999",
      accent: "#3B82F6",
      badge: "Next-Gen AI ⚡",
      description: "Smart vision camera module with on-device TPU neural acceleration for real-time tracking and detection.",
      features: [
        "Smart Machine Vision Neural Camera",
        "Face, Object & Gesture Recognition",
        "Pan-Tilt Dual Micro Servo Gantry",
        "Pre-Trained Models & Python Repo",
      ],
    },
  ];

  return (
    <>
      <section
        className="min-h-screen py-24 px-4 sm:px-6 lg:px-12 transition-colors duration-300"
        style={{ backgroundColor: "var(--background)", color: "var(--text-primary)" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Navigation Pills */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-10">
            <Link
              href="/"
              className="rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wider hover:opacity-80 transition shadow-sm"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--card-border)",
                color: "var(--text-primary)",
              }}
            >
              Home
            </Link>
            <Link
              href="/#services"
              className="rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wider hover:opacity-80 transition shadow-sm"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--card-border)",
                color: "var(--text-primary)",
              }}
            >
              Services
            </Link>
            <Link
              href="/#products"
              className="rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wider hover:opacity-80 transition shadow-sm"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--primary-accent)",
                color: "var(--primary-accent)",
              }}
            >
              Hardware Kits
            </Link>
            <Link
              href="/blog"
              className="rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wider hover:opacity-80 transition shadow-sm"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--card-border)",
                color: "var(--text-primary)",
              }}
            >
              Blog
            </Link>
          </div>

          {/* Heading */}
          <div className="mb-12 text-center">
            <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: "var(--primary-accent)" }}>
              Official Hardware Store • KITE Robotics
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight" style={{ color: "var(--text-primary)" }}>
              Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-green-500 to-cyan-500">Next Kit</span>
            </h1>
            <p className="mt-3 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Laboratory-grade STEM kits for students, educators, and engineers. Every package includes verified components, documentation, and mentor support.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mb-14">
            {products.map((product) => {
              const whatsappUrl = `https://wa.me/919564866985?text=${encodeURIComponent(
                `Hello Kite Robotics, I want to order the "${product.title}" (${product.price}). Please share delivery and payment details.`
              )}`;

              return (
                <div
                  key={product.title}
                  className={`rounded-2xl border p-5 shadow-xl backdrop-blur-md relative flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1.5 ${
                    product.popular ? "ring-2 ring-orange-500/50" : ""
                  }`}
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--card-bg) 94%, transparent)",
                    borderColor: product.popular ? product.accent : "color-mix(in srgb, var(--card-border) 80%, transparent)",
                  }}
                >
                  {/* Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border"
                      style={{
                        borderColor: `${product.accent}60`,
                        backgroundColor: `${product.accent}15`,
                        color: product.accent,
                      }}
                    >
                      {product.badge}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] font-bold text-amber-400">
                      <Star size={11} className="fill-amber-400" />
                      <span>5.0</span>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-base font-bold mb-1.5 leading-snug" style={{ color: "var(--text-primary)" }}>
                      {product.title}
                    </h2>

                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-2xl font-black" style={{ color: product.accent }}>
                        {product.price}
                      </span>
                      <span className="text-xs line-through" style={{ color: "var(--text-muted)" }}>
                        {product.originalPrice}
                      </span>
                    </div>

                    <p className="text-xs mb-4 leading-relaxed font-light" style={{ color: "var(--text-secondary)" }}>
                      {product.description}
                    </p>

                    <div className="space-y-1.5 mb-5 border-t pt-3" style={{ borderColor: "var(--card-border)" }}>
                      {product.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-[11px]" style={{ color: "var(--text-secondary)" }}>
                          <Check size={12} className="text-green-400 shrink-0" />
                          <span className="leading-tight">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full rounded-xl py-2.5 text-white font-extrabold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-1.5 shadow-md transition-transform active:scale-95 cursor-pointer"
                    style={{
                      background: `linear-gradient(135deg, ${product.accent} 0%, #22C55E 100%)`,
                      boxShadow: "0 4px 15px rgba(255, 122, 0, 0.25)",
                    }}
                  >
                    <ShoppingCart size={14} />
                    <span>Order Now</span>
                  </a>
                </div>
              );
            })}
          </div>

          {/* Trust Guarantees */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl border"
            style={{
              backgroundColor: "color-mix(in srgb, var(--card-bg) 60%, transparent)",
              borderColor: "var(--card-border)",
            }}
          >
            <div className="flex items-center gap-3">
              <ShieldCheck size={22} className="text-orange-400 shrink-0" />
              <div>
                <p className="text-xs font-bold" style={{ color: "var(--text-primary)" }}>100% Tested Kits</p>
                <p className="text-[10px]" style={{ color: "var(--text-muted)" }}>Strict Quality Checked</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <BookOpen size={22} className="text-green-400 shrink-0" />
              <div>
                <p className="text-xs font-bold" style={{ color: "var(--text-primary)" }}>Video Tutorials</p>
                <p className="text-[10px]" style={{ color: "var(--text-muted)" }}>Code &amp; Step Guides</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Truck size={22} className="text-cyan-400 shrink-0" />
              <div>
                <p className="text-xs font-bold" style={{ color: "var(--text-primary)" }}>Fast Delivery</p>
                <p className="text-[10px]" style={{ color: "var(--text-muted)" }}>Pan-India Dispatch</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Zap size={22} className="text-purple-400 shrink-0" />
              <div>
                <p className="text-xs font-bold" style={{ color: "var(--text-primary)" }}>Mentor Hotline</p>
                <p className="text-[10px]" style={{ color: "var(--text-muted)" }}>Instant WhatsApp Help</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
