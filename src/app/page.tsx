"use client";
import { SiInstagram, SiGoogle } from "react-icons/si";

const featuredItems = [
  {
    name: "Signature Mocktails",
    desc: "Refreshing, handcrafted drinks with unique flavors.",
    emoji: "🍹",
    color: "bg-gradient-to-br from-[var(--lion)] to-[var(--rust)]",
  },
  {
    name: "Pudding",
    desc: "Creamy pudding in Lotus, Blueberry, or Tiramisu.",
    emoji: "🍮",
    color: "bg-gradient-to-br from-[var(--rust)] to-[var(--kobicha)]",
  },
  {
    name: "Tea",
    desc: "Green, black, or a pot to share. Always fresh and soothing.",
    emoji: "🍵",
    color: "bg-gradient-to-br from-[var(--prussian-blue)] to-[var(--lion)]",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen w-full max-w-full flex flex-col items-center relative overflow-x-hidden bg-[var(--platinum)]">
      {/* Modern Hero Section */}
      <section
        className="relative w-full flex flex-col items-center justify-center min-h-[60vh] md:min-h-[70vh] px-4 py-12 md:py-24 overflow-hidden"
        style={{ position: 'relative' }}
      >
        {/* Hero Background */}
        <img
          src="/hero.jpg"
          alt="Hayati Lounge Hero"
          style={{ objectFit: 'cover', zIndex: 0 }}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        {/* Logo Top Left */}
        <div className="absolute top-4 left-4 z-20 sm:top-6 sm:left-6">
          <img
            src="/logo.jpg"
            alt="Hayati Lounge Logo"
            width={64}
            height={64}
            className="rounded-full object-cover shadow-xl border-4 border-[var(--lion)] bg-white sm:w-[90px] sm:h-[90px] w-[64px] h-[64px]"
          />
        </div>
        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center max-w-2xl mx-auto pt-28 sm:pt-0">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight" style={{ color: 'var(--kobicha)' }}>
            Welcome to Hayati Lounge
          </h1>
          <p className="text-lg md:text-2xl mb-8 drop-shadow max-w-xl mx-auto" style={{ color: 'var(--kobicha)' }}>
            Artisan drinks, decadent desserts, and a vibrant community in the heart of Ajax.
          </p>
          <a
            href="/menu"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[var(--lion)] to-[var(--rust)] text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform"
          >
            View Menu
          </a>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="w-full max-w-3xl mx-auto px-4 py-12 sm:py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[var(--prussian-blue)]">About Us</h2>
        <p className="text-lg sm:text-xl text-[var(--kobicha)] mb-4">
          Welcome to Hayati Lounge, your destination for artisan drinks, decadent desserts, and a vibrant community. Whether you&apos;re catching up with friends or making new ones, our lounge is designed for memorable moments and great vibes.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-6">
          <span className="px-4 py-2 rounded-full bg-[var(--lion)] text-white font-medium shadow">Signature Drinks</span>
          <span className="px-4 py-2 rounded-full bg-[var(--rust)] text-white font-medium shadow">Exotic Desserts</span>
          <span className="px-4 py-2 rounded-full bg-[var(--prussian-blue)] text-white font-medium shadow">Modern Lounge</span>
        </div>
        <div className="mt-8">
          <a 
            href="/menu" 
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[var(--lion)] to-[var(--rust)] text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform"
          >
            View Full Menu →
          </a>
        </div>
      </section>
      {/* Signature Items Section */}
      <section id="signature" className="w-full max-w-4xl mx-auto px-4 py-12 sm:py-20 text-center animate-fadein max-w-full overflow-x-hidden bg-gradient-to-br from-[var(--lion)]/10 via-white/80 to-[var(--prussian-blue)]/10 rounded-3xl shadow-xl my-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[var(--prussian-blue)] drop-shadow">Signature Items</h2>
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-8">
          {featuredItems.map((item, idx) => (
            <a
              key={item.name}
              href="/menu"
              className={`flex-1 min-w-[220px] max-w-xs p-6 rounded-2xl shadow-2xl ${item.color} bg-opacity-90 text-white transition-transform duration-300 hover:scale-105 cursor-pointer animate-popin`}
              style={{ animationDelay: `${idx * 0.15 + 0.2}s` }}
            >
              <div className="text-4xl mb-2">{item.emoji}</div>
              <div className="text-xl font-bold mb-1 drop-shadow">{item.name}</div>
              <div className="text-base opacity-90">{item.desc}</div>
            </a>
          ))}
        </div>
      </section>
      {/* Visit Us Section */}
      <section className="w-full max-w-2xl mx-auto px-4 py-12 sm:py-20 text-center animate-fadein max-w-full overflow-x-hidden bg-gradient-to-br from-[var(--lion)]/10 via-white/80 to-[var(--rust)]/10 rounded-3xl shadow-xl my-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[var(--prussian-blue)] drop-shadow">Visit Us</h2>
        <p className="text-lg text-[var(--kobicha)] mb-6">Come relax at Hayati Lounge! We&apos;re located in the heart of Ajax. Check out our reviews or find us on the map below.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <a href="https://maps.app.goo.gl/59yp4oFmusYqcsj26" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[var(--lion)] to-[var(--rust)] text-white font-bold text-xl shadow-lg hover:scale-105 transition-transform flex items-center gap-2 justify-center">
            <SiGoogle className="inline-block text-2xl" /> Reviews
          </a>
          <a href="https://instagram.com/hayatilounge" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[var(--prussian-blue)] to-[var(--lion)] text-white font-bold text-xl shadow-lg hover:scale-105 transition-transform flex items-center gap-2 justify-center">
            <SiInstagram className="inline-block text-2xl" /> Instagram
          </a>
        </div>
        <iframe
          title="Hayati Lounge Location"
          src="https://maps.google.com/maps?q=Hayati%20Lounge&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="220"
          className="rounded-2xl border-4 border-[var(--lion)] shadow-lg mx-auto"
          style={{ minHeight: 180 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      {/* Footer */}
      <footer className="z-10 mt-10 mb-0 text-sm text-white w-full text-center animate-fadein bg-gradient-to-r from-[var(--prussian-blue)] via-[var(--kobicha)] to-[var(--rust)] py-6 max-w-full overflow-x-hidden">
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-2">
          <a href="https://instagram.com/hayatilounge" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--lion)] transition flex items-center gap-2 justify-center">
            <SiInstagram className="inline-block text-lg" /> Instagram
          </a>
          <a href="https://maps.app.goo.gl/59yp4oFmusYqcsj26" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--lion)] transition flex items-center gap-2 justify-center">
            <SiGoogle className="inline-block text-lg" /> Google Reviews
          </a>
        </div>
        <div>&copy; {new Date().getFullYear()} Hayati Lounge. All rights reserved.</div>
      </footer>
      {/* Animations */}
      <style jsx global>{`
        html, body, #__next {
          box-sizing: border-box;
          overflow-x: hidden !important;
          max-width: 100vw;
        }
        *, *::before, *::after {
          box-sizing: inherit;
        }
        @keyframes blob1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.1); }
          66% { transform: translate(-20px, 30px) scale(0.95); }
        }
        @keyframes blob2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-40px, 20px) scale(1.05); }
          66% { transform: translate(20px, -30px) scale(1.1); }
        }
        @keyframes blob3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(10px, 40px) scale(1.08); }
          66% { transform: translate(-30px, -10px) scale(0.92); }
        }
        .animate-blob1 { animation: blob1 16s ease-in-out infinite; }
        .animate-blob2 { animation: blob2 18s ease-in-out infinite; }
        .animate-blob3 { animation: blob3 22s ease-in-out infinite; }
        @keyframes fadein { from { opacity: 0; } to { opacity: 1; } }
        .animate-fadein { animation: fadein 1.2s cubic-bezier(.4,0,.2,1) both; }
        @keyframes slidein-up { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: none; } }
        .animate-slidein-up { animation: slidein-up 1.2s cubic-bezier(.4,0,.2,1) both; }
        @keyframes popin { 0% { opacity: 0; transform: scale(0.8); } 80% { opacity: 1; transform: scale(1.05); } 100% { opacity: 1; transform: scale(1); } }
        .animate-popin { animation: popin 0.8s cubic-bezier(.4,0,.2,1) both; }
      `}</style>
    </div>
  );
}
