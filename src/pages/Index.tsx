import { useState } from "react";
import bouquetImage from "@/assets/yellow-bouquet.png";
import PetalParticles from "@/components/PetalParticles";
import LoveLetter from "@/components/LoveLetter";

const Index = () => {
  const [revealed, setRevealed] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  if (!revealed) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 relative overflow-hidden">
        {/* Subtle background dots */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(hsl(var(--golden)) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />

        <div className="relative z-10 text-center max-w-md">
          <div className="text-6xl mb-6 animate-bounce-gentle">🎁</div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-balance" style={{ lineHeight: "1.2" }}>
            Tienes una sorpresa
          </h1>
          <p className="text-muted-foreground mb-10 text-lg">
            Alguien especial te dejó algo aquí...
          </p>
          <button
            onClick={() => setRevealed(true)}
            className="px-8 py-4 rounded-2xl bg-golden text-foreground font-bold text-lg
                       shadow-lg shadow-golden/25 transition-all duration-200
                       hover:shadow-xl hover:shadow-golden/35 hover:-translate-y-0.5
                       active:scale-[0.97] animate-float"
          >
            Abrir sorpresa 🌻
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-6 py-12 relative overflow-hidden">
      <PetalParticles />

      {/* Bouquet */}
      <div className="animate-bloom relative z-20 mt-4">
        <img
          src={bouquetImage}
          alt="Ramo de flores amarillas"
          className="w-64 md:w-80 drop-shadow-2xl"
        />
      </div>

      {/* Message */}
      <div className="relative z-20 text-center mt-8 max-w-md animate-fade-in" style={{ animationDelay: "0.5s", animationFillMode: "both" }}>
        <h2
          className="text-2xl md:text-3xl font-bold text-balance mb-2 animate-shimmer inline-block"
          style={{ lineHeight: "1.3" }}
        >
          Feliz día de las flores amarillas
        </h2>
        <p className="text-lg text-muted-foreground mt-3" style={{ fontFamily: "'Georgia', serif" }}>
          Siempre serás especial para mí 💛
        </p>
      </div>

      {/* Open letter button */}
      <div className="relative z-20 mt-10 animate-fade-in" style={{ animationDelay: "1.2s", animationFillMode: "both" }}>
        <button
          onClick={() => setShowLetter(true)}
          className="px-8 py-4 rounded-2xl bg-golden text-foreground font-bold text-base
                     shadow-lg shadow-golden/25 transition-all duration-200
                     hover:shadow-xl hover:shadow-golden/35 hover:-translate-y-0.5
                     active:scale-[0.97]"
        >
          Abrir mi carta 💌
        </button>
      </div>

      {/* Letter modal */}
      {showLetter && <LoveLetter onClose={() => setShowLetter(false)} />}
    </div>
  );
};

export default Index;
