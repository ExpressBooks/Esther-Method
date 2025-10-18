const EmpathySection = () => {
  return (
    <section className="pt-4 sm:pt-8 lg:pt-12 pb-8 sm:pb-12 lg:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
            Hello, woman of God.
          </h2>
          
          <div className="text-xl sm:text-base lg:text-lg text-muted-foreground leading-relaxed space-y-3 sm:space-y-4 px-2">
            <p>
              I know exactly how you feel when you think about stepping up to the pulpit. 
              That mixture of excitement and terror that paralyzes you. You know God has called you, 
              but every time you imagine all those people looking at you, 
              your heart races and your mind goes blank.
            </p>
            
            <p>
              You lie awake at night wondering: 
              <em>"What if I'm not good enough? What if I make a mistake? What if I don't have the necessary anointing?"</em>
            </p>
            
            <p>
              Quiero que sepas algo: <strong>No estás sola.</strong>
            </p>
          </div>

          <div className="bg-accent border border-accent-foreground/20 p-4 sm:p-6 lg:p-8 rounded-lg">
            <p className="text-xl sm:text-base lg:text-lg font-bold text-accent-foreground mb-3 sm:mb-4">
              En los últimos 10 años, ayudé a más de 2.000 mujeres a descubrir su llamado, 
              a vencer el miedo y a predicar con autoridad.
            </p>
            <p className="text-base sm:text-lg lg:text-xl font-bold text-primary">
              Hoy, tú puedes ser la próxima.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmpathySection;
