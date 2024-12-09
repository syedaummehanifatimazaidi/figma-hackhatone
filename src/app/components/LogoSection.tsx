import React from "react";
import Image from "next/image";

const LogoSection = () => {
  const logos = [
    { src: "/zapier.png", alt: "Zapier Logo", width: 85, height: 87 },
    { src: "/pip.png", alt: "Pipedrive Logo", width: 107, height: 109 },
    { src: "/cib.png", alt: "CIB Bank Logo", width: 135, height: 139 },
    { src: "/z.png", alt: "Z Logo", width: 63, height: 65 },
    { src: "/bur.png", alt: "Burnt Toast Logo", width: 98, height: 101 },
    { src: "/pd.png", alt: "PandaDoc Logo", width: 113, height: 115 },
    { src: "/moz.png", alt: "Moz Logo", width: 84, height: 87 },
  ];

  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-8 px-4">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex justify-center transform transition-transform duration-200 hover:scale-110"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="object-contain w-20 h-auto md:w-24 lg:w-28" // Responsive width
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoSection;

