import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

const PetalParticles = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const newPetals: Petal[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 4 + Math.random() * 4,
      size: 8 + Math.random() * 14,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.left}%`,
            top: "-20px",
            width: petal.size,
            height: petal.size,
            borderRadius: "50% 0 50% 50%",
            background: `hsl(${45 + Math.random() * 10}, ${80 + Math.random() * 20}%, ${55 + Math.random() * 15}%)`,
            animation: `petal-fall ${petal.duration}s ${petal.delay}s ease-in infinite`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
};

export default PetalParticles;
