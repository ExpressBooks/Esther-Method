import { Book, Crown } from "lucide-react"; // Removido Sparkles e Gift

const SolutionSection = () => {
  return (
    <section className="pt-6 sm:pt-10 lg:pt-14 pb-6 sm:pb-8 lg:pb-10 px-4 bg-accent/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-8">
          {/* Ícone do livro */}
          <div className="flex justify-center mb-6">
            <div className="bg-primary p-4 rounded-full shadow-lg">
              <Book className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>

          {/* Título principal */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            The Secret Is in the Bible
          </h2>

          {/* Estratégia da Rainha Ester */}
          <div className="bg-primary/10 border border-primary/20 p-8 rounded-lg max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Crown className="w-8 h-8 text-primary mr-2" />
              <h3 className="text-2xl font-bold text-primary">
                Queen Esther's Strategy
              </h3>
            </div>

            <p className="text-lg text-foreground mb-6 leading-relaxed">
              When Esther was called to save her people, she did not rush into it unprepared.
              She followed a divine four-step process that transformed her from an ordinary young woman
              into a woman of authority who changed history.
            </p>

            <div className="grid grid-cols-1 gap-6">
  <div className="flex items-center justify-center">
    <span className="font-bold text-xl text-purple-700 uppercase">Selection</span>
  </div>
  <div className="flex items-center justify-center">
    <span className="font-bold text-xl text-purple-700 uppercase">Purification</span>
  </div>
  <div className="flex items-center justify-center">
    <span className="font-bold text-xl text-purple-700 uppercase">Unction</span>
  </div>
  <div className="flex items-center justify-center">
    <span className="font-bold text-xl text-purple-700 uppercase">Surrender</span>
  </div>
</div>

            {/* Revelación Divina sem ícone e sem borda */}
            <div className="bg-highlight p-6 rounded-lg max-w-2xl mx-auto mt-8">
              <div className="flex justify-center mb-2">
                
              </div>
              <p className="text-lg font-semibold text-highlight-foreground">
                Inspired by this divine strategy, I adapted each step for women like you
                and created the <strong>ESTHER METHOD</strong>.
              </p>
            </div>

            {/* Texto final */}
            <div className="text-lg text-muted-foreground mt-6">
              <p>
                It is no coincidence that this method bears Ester's name.
                She showed us that any woman, regardless of her background,
                can be transformed into a voice of authority when she follows the right process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
