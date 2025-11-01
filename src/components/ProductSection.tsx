"use client";

import { Monitor, Tablet, Smartphone, CheckCircle } from "lucide-react";

const ProductSection = () => {
  const benefits = [
    <>Prepare a sermon <strong>in 30 minutes</strong>, even if you’ve never done it before</>,
    <>Step onto the pulpit <strong>without fear or nerves</strong> using anti-panic techniques</>,
    <>Always have a powerful message for <strong>any occasion</strong></>,
    <>Be recognized as <strong>a woman of God</strong> with authority and wisdom</>,
    <>Grow spiritually through <strong>real intimacy</strong> with the Word</>,
    <>Impact lives and <strong>transform</strong> environments with your voice</>,
    <>Discover <strong>your unique style</strong> and build your ministerial identity</>
  ];

  const bonusItems1 = [
    "Clear structure for fluent and impactful messages.",
    "Tips for connecting every point with the Word of God.",
    "Methods to keep attention from beginning to end.",
    "Ready-to-use adaptable examples.",
    "Strategies to never get stuck again when preparing your sermon."
  ];

  const bonusItems2 = [
    "Deep connection prayer with God.",
    "Keys to maintaining a pure heart.",
    "How to ensure Christ remains the center.",
    "Exercises to activate inner peace.",
    "Anchor verse and faith declarations.",
    "Visualization of souls transformed by your voice."
  ];

  const bonusItems3 = [
    "Key leadership skills for clarity and direction.",
    "Self-discovery exercises.",
    "Strategies to develop new female leaders.",
    "Short- and long-term action plans.",
    "Practical tools to measure your progress."
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-8 sm:space-y-12">
          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground px-2">
            What is the <span className="text-primary">Esther Method</span>?
          </h2>

          {/* Method Image */}
          <div className="max-w-2xl mx-auto">
            <img
              src="https://i.imgur.com/jKPwAio.png"
              alt="Visual guide to the Esther Method"
              className="w-full max-h-[500px] object-contain rounded-lg mx-auto"
            />
          </div>

          <p className="text-xl sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            It’s the <strong>first practical and spiritual guide</strong> that teaches any woman
            how to preach with authority — without years of study, without fear, and without complications.
          </p>

          {/* Access on all devices */}
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-primary mb-4">Access on All Devices</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
              Our members area offers maximum convenience and flexibility. 
              Access all exclusive content from anywhere, on any device:
            </p>
          </div>

          {/* Product Mockups */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            <div className="text-center space-y-3 sm:space-y-4">
              <div className="bg-accent p-4 sm:p-6 rounded-lg">
                <Monitor className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-primary mx-auto mb-3 sm:mb-4" />
                <p className="font-semibold text-accent-foreground text-sm sm:text-base">Desktop Access</p>
              </div>
            </div>
            <div className="text-center space-y-3 sm:space-y-4">
              <div className="bg-accent p-4 sm:p-6 rounded-lg">
                <Tablet className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-primary mx-auto mb-3 sm:mb-4" />
                <p className="font-semibold text-accent-foreground text-sm sm:text-base">Available on Tablet</p>
              </div>
            </div>
            <div className="text-center space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
              <div className="bg-accent p-4 sm:p-6 rounded-lg">
                <Smartphone className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-primary mx-auto mb-3 sm:mb-4" />
                <p className="font-semibold text-accent-foreground text-sm sm:text-base">Take It on Your Phone</p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-card border border-border p-4 sm:p-6 lg:p-8 rounded-lg">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-card-foreground mb-4 sm:mb-6">
              In just 3 modules, you’ll learn how to:
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center p-3 sm:p-4 bg-success-light border border-success/20 rounded-lg">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-success mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-success-foreground font-medium text-sm sm:text-base">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bonus 1 */}
          <div className="bg-accent/10 border border-accent p-6 sm:p-8 rounded-lg mt-10 space-y-6">
            <h3 className="text-2xl font-bold text-black text-center">EXCLUSIVE BONUS</h3>
            <img src="https://i.imgur.com/0J72exD.png" alt="Sermon Guide" className="w-64 h-80 object-cover mx-auto rounded-lg shadow" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A practical and spiritual guide that shows you how to prepare impactful sermons that touch your audience’s hearts.
            </p>
            <div className="bg-card border border-border p-4 rounded-lg text-left space-y-3">
              <h4 className="text-lg font-bold text-card-foreground">Includes:</h4>
              <ul className="space-y-2">
                {bonusItems1.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success mr-2 mt-1 flex-shrink-0" />
                    <span className="text-success-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary/10 border border-primary p-4 rounded-lg">
              <p className="text-primary font-semibold">💡 Why is it valuable?</p>
              <p className="text-muted-foreground">
                Many women feel insecure when preparing their content. With this guide, you’ll know what to say and how to say it with anointing and clarity.
              </p>
            </div>
          </div>

          {/* Bonus 2 */}
          <div className="bg-accent/10 border border-accent p-6 sm:p-8 rounded-lg mt-10 space-y-6">
            <h3 className="text-2xl font-bold text-black text-center">SPECIAL BONUS</h3>
            <img src="https://i.imgur.com/hOcXFA2.png" alt="Preaching Checklist" className="w-64 h-80 object-cover mx-auto rounded-lg shadow" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A practical and spiritual checklist to step onto the pulpit with peace, confidence, and authority.
            </p>
            <div className="bg-card border border-border p-4 rounded-lg text-left space-y-3">
              <h4 className="text-lg font-bold text-card-foreground">Includes:</h4>
              <ul className="space-y-2">
                {bonusItems2.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success mr-2 mt-1 flex-shrink-0" />
                    <span className="text-success-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary/10 border border-primary p-4 rounded-lg">
              <p className="text-primary font-semibold">💡 Why is it valuable?</p>
              <p className="text-muted-foreground">
                Many women prepare the message but not the heart. This checklist will remind you of Esther’s divine steps to preach with confidence and anointing.
              </p>
            </div>
            <p className="text-muted-foreground text-center">
              ✨ When you activate your access to the <strong>Esther Method</strong>, you’ll receive it completely <strong>FREE</strong>.
            </p>
          </div>

          {/* Bonus 3 */}
          <div className="bg-accent/10 border border-accent p-6 sm:p-8 rounded-lg mt-10 space-y-6">
            <h3 className="text-2xl font-bold text-black text-center">PREMIUM BONUS</h3>
            <img src="https://i.imgur.com/3hiGgJK.png" alt="Ministerial Leadership Plan" className="w-64 h-80 object-cover mx-auto rounded-lg shadow" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A plan designed to help you grow as a leader, strengthen your gifts, and guide other women with wisdom.
            </p>
            <div className="bg-card border border-border p-4 rounded-lg text-left space-y-3">
              <h4 className="text-lg font-bold text-card-foreground">Includes:</h4>
              <ul className="space-y-2">
                {bonusItems3.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success mr-2 mt-1 flex-shrink-0" />
                    <span className="text-success-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary/10 border border-primary p-4 rounded-lg">
              <p className="text-primary font-semibold">💡 Why is it valuable?</p>
              <p className="text-muted-foreground">
                Many women feel the calling but don’t know how to grow or multiply leaders. This plan will guide you with clarity, purpose, and spiritual authority.
              </p>
            </div>
            <p className="text-muted-foreground text-center">
              ✨ When you activate your access to the <strong>Esther Method</strong>, you’ll also receive it completely <strong>FREE</strong>.
            </p>
          </div>

          {/* Video moved to the end */}
          <div className="max-w-3xl mx-auto mt-16">
            <img
              src="https://i.imgur.com/nisxujy.gif"
              alt="Presentation of the Esther Method"
              className="w-full max-h-[400px] sm:max-h-[450px] object-contain rounded-lg shadow-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
