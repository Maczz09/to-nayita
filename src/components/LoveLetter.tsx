interface LoveLetterProps {
  onClose: () => void;
}

const LoveLetter = ({ onClose }: LoveLetterProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm">
      <div className="animate-letter-open w-full max-w-lg">
        <div className="relative bg-warm-cream rounded-2xl shadow-2xl border-2 border-golden/30 p-8 md:p-10 overflow-hidden">
          {/* Decorative corner elements */}
          <div className="absolute top-3 left-3 w-10 h-10 border-t-2 border-l-2 border-golden/40 rounded-tl-lg" />
          <div className="absolute top-3 right-3 w-10 h-10 border-t-2 border-r-2 border-golden/40 rounded-tr-lg" />
          <div className="absolute bottom-3 left-3 w-10 h-10 border-b-2 border-l-2 border-golden/40 rounded-bl-lg" />
          <div className="absolute bottom-3 right-3 w-10 h-10 border-b-2 border-r-2 border-golden/40 rounded-br-lg" />

          {/* Header */}
          <div className="text-center mb-6">
            <span className="text-3xl animate-heartbeat inline-block">💛</span>
            <h3 className="text-xl font-bold text-foreground mt-2" style={{ fontFamily: "'Georgia', serif" }}>
              Para ti, con todo mi corazón
            </h3>
            <div className="w-24 h-0.5 bg-golden mx-auto mt-3 rounded-full" />
          </div>

          {/* Letter content */}
          <div className="space-y-4 text-foreground/85 leading-relaxed text-[15px]" style={{ fontFamily: "'Georgia', serif" }}>
            <p>
              Te quiero demasiado, de mucho, de cochosientas veces y yo sé que soy hostigante y cargoso, ¿un poco? verdad, jeje.
            </p>
            <p>
              Bueno, te mando este detalle por este medio porque no estoy presente físicamente pero siempre quiero que sientas que estoy ahí contigo.
            </p>
            <p className="italic text-golden font-semibold text-center text-lg">
              "Estar presente sin estar"
            </p>
            <p>
              Creo que se entiende. Total, me gustas mucho y te quiero. Me gusta quererte con todo mi ser. Al carajo la sequedad y el desinterés, yo te quiero completamente.
            </p>
            <p>
              Te has vuelto especial para mí, te quiero con todo mi corazón.
            </p>
            <p className="text-center font-bold text-foreground text-base">
              ¿Ya te dije que te quiero?
            </p>
          </div>

          {/* Signature */}
          <div className="mt-8 text-right">
            <p className="text-xl font-bold animate-shimmer inline-block">
              TE QUIEREEE TU MAXIN
            </p>
            <p className="text-2xl mt-1">💛🌻</p>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="mt-6 w-full py-3 rounded-xl bg-golden text-foreground font-semibold text-sm tracking-wide
                       transition-all duration-200 hover:shadow-lg hover:shadow-golden/30 active:scale-[0.97]"
          >
            Guardar en mi corazón 💛
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoveLetter;
