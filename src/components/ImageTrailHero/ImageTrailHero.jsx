import { useAnimate } from "framer-motion";
import React, { useState, useRef, createPortal } from "react";
import { motion } from "framer-motion";
import { FiArrowDownCircle, FiDollarSign } from "react-icons/fi";
import { SiApple } from "react-icons/si";
import Image from "next/image";
import { CornerNav } from "./CornerNav";

export const ImageTrailHero = () => {
  const [navActive, setNavActive] = useState(false);

  return (
    <MouseImageTrail
      renderImageBuffer={50}
      rotationRange={25}
      images={[
        "/imgs/active/1.jpg",
        "/imgs/active/2.jpg",
        "/imgs/active/3.jpg",
        "/imgs/active/4.jpg",
        "/imgs/active/5.jpg",
        "/imgs/active/6.jpg",
        "/imgs/active/7.jpg",
        "/imgs/active/8.jpg",
        "/imgs/active/9.jpg",
        "/imgs/active/10.jpg",
        "/imgs/active/11.jpg",
        "/imgs/active/12.jpg",
        "/imgs/active/13.jpg",
        "/imgs/active/14.jpg",
        "/imgs/active/15.jpg",
        "/imgs/active/16.jpg",
      ]}
    >
      <section className="min-h-screen bg-[var(--platinum)] relative overflow-hidden flex flex-col justify-end">
        <WatermarkWrapper />
        <NavBar navActive={navActive} setNavActive={setNavActive} />
        <Copy navActive={navActive} />
      </section>
    </MouseImageTrail>
  );
};

const NavBar = ({ navActive, setNavActive }) => {
  return (
    <nav className="absolute left-0 right-0 top-0 z-20">
      <div className="bg-[var(--prussian-blue)] text-center">
        <p className="flex items-center justify-center gap-1 py-0.5 text-sm font-medium uppercase text-[var(--platinum)]">
        </p>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4 md:p-6">
        <Image
          src="/logo.jpg"
          alt="Hayati Lounge Logo"
          width={56}
          height={56}
          className="rounded-full object-cover shadow-lg border-4 border-[var(--lion)] bg-white"
          priority
        />
        <CornerNav active={navActive} setActive={setNavActive} />
      </div>
    </nav>
  );
};

const Copy = ({ navActive }) => (
  <div className={`absolute bottom-0 left-0 right-0 z-[999999] transition-opacity duration-300 ${navActive ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
    <div className="mx-auto flex max-w-7xl items-end justify-between p-2 sm:p-4 md:p-8">
      <div>
        <h1 className="mb-4 max-w-full text-2xl xs:text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] text-[var(--prussian-blue)] break-words">
          Welcome to <span className="text-[var(--lion)]">Hayati Lounge</span>
        </h1>
        <p className="max-w-xs sm:max-w-xl text-[var(--kobicha)] text-sm sm:text-base md:text-lg">
          Drinks, desserts, and a vibrant community. Experience the best lounge vibes in town.
        </p>
      </div>
      <FiArrowDownCircle className="hidden sm:block text-4xl sm:text-8xl text-[var(--lion)]" />
    </div>
  </div>
);

const WatermarkWrapper = () => (
  <>
    <Watermark text="Sip & Savor" />
    <Watermark text="Meet & Mingle" reverse />
    <Watermark text="Chill in Style" />
    <Watermark text="Taste the Lounge" reverse />
  </>
);

const Watermark = ({ reverse, text }) => (
  <div className="flex -translate-y-12 select-none overflow-hidden">
    <TranslateWrapper reverse={reverse}>
      <span className="w-fit whitespace-nowrap text-[5vmax] xs:text-[6vmax] sm:text-[8vmax] md:text-[15vmax] xl:text-[20vmax] font-black uppercase leading-[0.75] text-[var(--lion)] opacity-40">
        {text}
      </span>
    </TranslateWrapper>
    <TranslateWrapper reverse={reverse}>
      <span className="ml-8 xs:ml-12 sm:ml-24 md:ml-48 w-fit whitespace-nowrap text-[5vmax] xs:text-[6vmax] sm:text-[8vmax] md:text-[15vmax] xl:text-[20vmax] font-black uppercase leading-[0.75] text-[var(--lion)] opacity-40">
        {text}
      </span>
    </TranslateWrapper>
  </div>
);

const TranslateWrapper = ({ children, reverse }) => (
  <motion.div
    initial={{ translateX: reverse ? "-100%" : "0%" }}
    animate={{ translateX: reverse ? "0%" : "-100%" }}
    transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
    className="flex"
  >
    {children}
  </motion.div>
);

const MouseImageTrail = ({
  children,
  images,
  renderImageBuffer,
  rotationRange,
}) => {
  const [scope, animate] = useAnimate();
  const lastRenderPosition = useRef({ x: 0, y: 0 });
  const imageRenderCount = useRef(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const distance = calculateDistance(
      clientX,
      clientY,
      lastRenderPosition.current.x,
      lastRenderPosition.current.y
    );
    if (distance >= renderImageBuffer) {
      lastRenderPosition.current.x = clientX;
      lastRenderPosition.current.y = clientY;
      renderNextImage();
    }
  };

  const calculateDistance = (x1, y1, x2, y2) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  };

  const renderNextImage = () => {
    const imageIndex = imageRenderCount.current % images.length;
    const selector = `[data-mouse-move-index=\"${imageIndex}\"]`;
    const el = document.querySelector(selector);
    el.style.top = `${lastRenderPosition.current.y}px`;
    el.style.left = `${lastRenderPosition.current.x}px`;
    el.style.zIndex = imageRenderCount.current.toString();
    const rotation = Math.random() * rotationRange;
    animate(
      selector,
      {
        opacity: [0, 1],
        transform: [
          `translate(-50%, -25%) scale(0.5) ${
            imageIndex % 2
              ? `rotate(${rotation}deg)`
              : `rotate(-${rotation}deg)`
          }`,
          `translate(-50%, -50%) scale(1) ${
            imageIndex % 2
              ? `rotate(-${rotation}deg)`
              : `rotate(${rotation}deg)`
          }`,
        ],
      },
      { type: "spring", damping: 15, stiffness: 200 }
    );
    animate(
      selector,
      {
        opacity: [1, 0],
      },
      { ease: "linear", duration: 0.5, delay: 1 }
    );
    imageRenderCount.current = imageRenderCount.current + 1;
  };

  return (
    <div
      ref={scope}
      className="relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {children}
      {images.map((img, index) => (
        <img
          className="pointer-events-none absolute left-0 top-0 h-36 w-auto rounded-xl border-2 border-[var(--prussian-blue)] bg-[var(--lion)] object-cover opacity-0"
          src={img}
          alt={`Mouse move image ${index}`}
          key={index}
          data-mouse-move-index={index}
        />
      ))}
    </div>
  );
};