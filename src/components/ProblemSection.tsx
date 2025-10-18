import { TrendingDown } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="pt-6 sm:pt-10 lg:pt-14 pb-6 sm:pb-8 lg:pb-10 px-4 bg-accent/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-8">

          {/* Título Principal */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Why can other women do it... but you still can't?
          </h2>

          {/* GIF abaixo do título */}
          <div className="flex justify-center">
            <div className="p-2 rounded-full bg-background">
              <img 
                src="https://i.imgur.com/WJ7qUkF.gif" 
                alt="Mulher confusa com o chamado" 
                className="w-41 h-41 md:w-52 md:h-52 rounded-full object-cover"
              />
            </div>
          </div>

          {/* Nova frase abaixo do GIF */}
          <p className="text-xl font-semibold text-muted-foreground max-w-xl mx-auto">
            Let me tell you something that very few dare to say:
          </p>

          {/* Estatística em destaque */}
<div className="bg-highlight p-6 rounded-r-lg max-w-2xl mx-auto">
  <div className="text-lg sm:text-xl font-bold text-highlight-foreground mb-2">
    ✅ REVEALING STATISTICS
  </div>
            <p className="text-lg font-semibold text-highlight-foreground">
              82% of Christian women feel called to ministry, 
              but only 7% actually act on it.
            </p>
          </div>

          {/* Texto explicativo */}
          <div className="text-lg text-muted-foreground leading-relaxed space-y-4 max-w-2xl mx-auto">
            <p>
              The problem is not that you lack anointing.
            </p>
            <p>
              The problem is not that you lack faith.
            </p>
            <p className="text-xl font-bold text-foreground">
              The problem is that no one taught you the <span className="text-primary">RIGHT METHOD</span>.
            </p>
          </div>

          {/* Bloco final de reforço */}
          <div className="bg-card border border-border p-6 rounded-lg">
            <p className="text-lg text-card-foreground">
              While other women step up to the pulpit with confidence, 
              you keep waiting for the “perfect moment” that never comes. 
              But it's not because they are more special... 
              <strong>es because they know something you don't yet know.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
