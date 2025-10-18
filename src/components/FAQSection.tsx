import { useState } from "react";

const faqs = [
  {
    question: "Is this just an e-book?",
    answer:
      "No, not at all. The Esther Method is not a PDF that you download and forget about. It is an exclusive members-only area with a personal username and password, where you will have access to all the content",
  },
  {
    question: "How do I access the content after purchase?",
    answer:
      "It's very simple: 1) Once you make your purchase on Hotmart, you will be automatically directed to a welcome page. 2) There you will see a registration button to create your account on the platform. 3) With your email and password, you will have immediate access to the Esther Method. 4) In minutes, you can begin your transformation process!",
  },
  {
    question: "Do I need to study theology or have previous experience?",
    answer:
      "No! The Esther Method was designed for ordinary women who feel God's calling, even if they have never preached before. Everything is explained step by step, without complicated technicalities or years of theory.",
  },
  {
    question: "What if I'm not good at public speaking?",
    answer:
      "That's exactly what the Esther Method is for. We give you anti-panic strategies and practical techniques so you can step up to the pulpit with confidence and without fear.",
  },
  {
    question: "How long will it take to see results?",
    answer:
      "It depends on your commitment, but most of our students feel a real change in their confidence in less than 7 days. Many preach their first sermon in just 2 weeks.",
  },
  {
    question: "What if it doesn't work for me?",
    answer:
      "There is no risk involved. You have a 7-day unconditional guarantee. If you do not see progress in your confidence and preparation for preaching, simply request a refund and receive a full refund.",
  },
  {
    question: "Can I access it from my cell phone?",
    answer:
      "Yes, of course. The platform is optimized so you can access it from your computer, tablet, or cell phone, whenever and wherever you want.",
  },
  {
    question: "Why does it cost only $9?",
    answer:
      "Because our mission is to reach as many women as possible. We don't want anything to hold you back, not even the price. The value you receive here is equivalent to hundreds of dollars worth of mentoring, but today you have full access for less than the cost of a fast food meal.",
  },
];

// Ícone Chevron em SVG inline (sem dependência externa)
const ChevronDownIcon = ({ open }: { open: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-5 w-5 transform transition-transform duration-200 ${
      open ? "rotate-180" : ""
    }`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full px-4 py-3 text-left"
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDownIcon open={openIndex === index} />
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
