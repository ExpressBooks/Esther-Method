import { CheckCircle } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-4xl text-center text-yellow-900 space-y-6 sm:space-y-8">

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          You're one step away from <span className="text-yellow-700">unlocking your voice</span>
        </h2>

        <p className="text-base sm:text-lg lg:text-xl max-w-2xl mx-auto text-yellow-800 leading-relaxed">
          Today you can access the <strong>Esther Method</strong> with all the exclusive bonuses
          and begin your ministerial transformation <strong>immediately</strong>.
        </p>
              
        <a
          href="https://pay.hotmart.com/W102495510V?checkoutMode=10"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full sm:w-auto text-lg font-bold py-4 px-8 border-2 border-yellow-600 bg-yellow-500 text-black rounded-lg shadow-md hover:bg-yellow-600 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 mt-4"
        >
          YES, I WANT TO ACCESS NOW!
        </a>

        {/* Direitos reservados */}
        <p className="text-xs sm:text-sm text-muted-foreground mt-4">
          © 2025 Esther Method. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default FinalCTASection;
