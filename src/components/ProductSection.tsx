"use client";

import { Monitor, Tablet, Smartphone, CheckCircle } from "lucide-react";

const ProductSection = () => {
  const benefits = [
    <>Put together a sermon <strong>in 30 minutes</strong>, even if you've never done it before</>,
    <>Step up to the pulpit <strong>without fear or nerves</strong> using anti-panic techniques</>,
    <>Always have a powerful word for <strong>any occasion</strong></>,
    <>Be recognized as <strong>a woman of God</strong> with authority and wisdom</>,
    <>Grow spiritually with <strong>real intimacy</strong> with the Word</>,
    <>Impact lives and <strong>transform </strong> environments with your voice</>,
    <>Discover  <strong>your unique style</strong> and build your ministerial identity</>
  ];

  const bonusItems1 = [
    "A clear structure for creating messages with fluidity and impact.",
    "Tips for connecting each point of the sermon with the Word of God.",
    "Methods for maintaining the church's attention from beginning to end.",
    "Examples and models ready for you to adapt and use immediately.",
    "Strategies so you never get stuck again when preparing a sermon."
  ];

  const bonusItems2 = [
    "A prayer of deep connection to align your heart with God.",
    "Keys to maintaining a pure and humble heart before speaking.",
    "How to ensure that Christ is always at the center of your message.",
    "Spiritual exercises to activate inner peace and strength.",
    "The power of an anchor verse to sustain your preaching.",
    "Techniques for visualizing souls being transformed by your voice.",
    "Declarations of faith to surrender everything to the Holy Spirit."
  ];

  const bonusItems3 = [
    "Essential skills for leading with clarity and confidence.",
    "Self-discovery exercises to identify your strengths and areas for growth.",
    "Strategies for training and equipping new leaders in your ministry.",
    "Short- and long-term action plans for your ministry development.",
    "Spaces for reflection and practical tools to evaluate your progress."
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
              src="https://i.imgur.com/90KF0D8.png"
              alt="Guía visual del Método Esther"
              className="w-full max-h-[500px] object-contain rounded-lg mx-auto"
            />
          </div>

          <p className="text-xl sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            It is the <strong>first practical and spiritual guide</strong> that teaches any woman 
            to preach with authority, without years of study, without fear, and without complications.
          </p>

          {/* Texto sobre Acceso a Todos los Dispositivos */}
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Access to All Devices
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
              Our members area has been developed to offer maximum convenience and flexibility for you. 
              Now, you can access all exclusive content from anywhere and on any device:
            </p>
          </div>

          {/* Product Mockups */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            <div className="text-center space-y-3 sm:space-y-4">
              <div className="bg-accent p-4 sm:p-6 rounded-lg">
                <Monitor className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-primary mx-auto mb-3 sm:mb-4" />
                <p className="font-semibold text-accent-foreground text-sm sm:text-base">
                  Computer Access
                </p>
              </div>
            </div>
            <div className="text-center space-y-3 sm:space-y-4">
              <div className="bg-accent p-4 sm:p-6 rounded-lg">
                <Tablet className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-primary mx-auto mb-3 sm:mb-4" />
                <p className="font-semibold text-accent-foreground text-sm sm:text-base">
                  Available on Tablet
                </p>
              </div>
            </div>
            <div className="text-center space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
              <div className="bg-accent p-4 sm:p-6 rounded-lg">
                <Smartphone className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-primary mx-auto mb-3 sm:mb-4" />
                <p className="font-semibold text-accent-foreground text-sm sm:text-base">
                  Carry it on your cell phone
                </p>
              </div>
            </div>
          </div>

          {/* Video de Presentación (GIF temporal) */}
          <div className="max-w-3xl mx-auto mb-10">
            <img
              src="https://i.imgur.com/pQU3kcH.gif"
              alt="Presentación del Método Esther"
              className="w-full rounded-lg shadow-lg object-contain"
            />
          </div>

          {/* Content Overview */}
          <div className="bg-card border border-border p-4 sm:p-6 lg:p-8 rounded-lg">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-card-foreground mb-4 sm:mb-6">
              In just 3 modules, you will learn how to:
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center p-3 sm:p-4 bg-success-light border border-success/20 rounded-lg"
                >
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-success mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-success-foreground font-medium text-sm sm:text-base">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bonus 1 */}
          <div className="bg-accent/10 border border-accent p-6 sm:p-8 rounded-lg mt-10 space-y-6">
            <div className="flex items-center justify-center gap-2">
              <h3 className="text-2xl font-bold text-black">EXCLUSIVE BONUS</h3>
            </div>

            <div className="max-w-xl mx-auto">
              <img
                src="https://i.imgur.com/wVvh788.png"
                alt="Exclusive Bonus - Sermon Preparation Guide"
                className="w-64 h-80 object-cover mx-auto rounded-lg shadow"
              />
            </div>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Imagine that, in addition to the <strong>Esther Method</strong>, you have in your hands a practical and spiritual guide 
              that shows you step by step how to prepare powerful sermons that deeply touch the hearts of your audience.
            </p>

            <div className="bg-card border border-border p-4 rounded-lg text-left space-y-3">
              <h4 className="text-lg font-bold text-card-foreground">What you will find in this guide:</h4>
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
              <p className="text-primary font-semibold">💡 Why is this bonus so valuable?</p>
              <p className="text-muted-foreground">
                Many women who receive the call to preach still feel insecure when preparing 
                their content, and that slows down the whole process. With this guide, you will not only know <strong>what to say</strong>, 
                but <strong>how to say it</strong> with anointing and clarity.
              </p>
            </div>
          </div>

          {/* Bonus 2 */}
          <div className="bg-accent/10 border border-accent p-6 sm:p-8 rounded-lg mt-10 space-y-6">
            <div className="flex items-center justify-center gap-2">
              <h3 className="text-2xl font-bold text-black">SPECIAL BONUS</h3>
            </div>

            <div className="max-w-xl mx-auto">
              <img
                src="https://i.imgur.com/g1X7tFt.png"
                alt="Pre-Sermon Checklist"
                className="w-64 h-80 object-cover mx-auto rounded-lg shadow"
              />
            </div>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Imagine that, before each sermon, you could have a practical and spiritual checklist in your hands 
              to guide you to the pulpit with peace, confidence, and authority, leaving behind nerves and fear.
            </p>

            <div className="bg-card border border-border p-4 rounded-lg text-left space-y-3">
              <h4 className="text-lg font-bold text-card-foreground">What you will find in this checklist:</h4>
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
              <p className="text-primary font-semibold">💡 Why is this bonus so valuable?</p>
              <p className="text-muted-foreground">
                Many women come to the pulpit with a prepared message, but without adequate spiritual preparation. 
                This checklist will remind you of Esther's divine steps to preach with confidence, authority, and anointing, 
                ensuring that you do not go up alone, but accompanied by the presence of God.
              </p>
            </div>

            <p className="text-muted-foreground">
              ✨ Today, when you activate your access to the <strong>Esther Method</strong>, you receive it completely <strong>FREE</strong>.
            </p>
          </div>

          {/* Bonus 3 */}
          <div className="bg-accent/10 border border-accent p-6 sm:p-8 rounded-lg mt-10 space-y-6">
            <div className="flex items-center justify-center gap-2">
              <h3 className="text-2xl font-bold text-black">PREMIUM BONUS</h3>
            </div>

            <div className="max-w-xl mx-auto">
              <img
                src="https://i.imgur.com/r82Athv.png"
                alt="Ministerial Leadership Development Plan"
                className="w-64 h-80 object-cover mx-auto rounded-lg shadow"
              />
            </div>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Imagine that, in addition to the <strong>Esther Method</strong>, you have a plan designed specifically to help you you 
              grow as a leader in ministry, strengthen your gifts, and wisely guide other women in their calling.
            </p>

            <div className="bg-card border border-border p-4 rounded-lg text-left space-y-3">
              <h4 className="text-lg font-bold text-card-foreground">What you will find in this plan:</h4>
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
              <p className="text-primary font-semibold">💡 Why is this bonus so valuable?</p>
              <p className="text-muted-foreground">
                Many women feel called to lead, but they don't know how to structure their growth or how to multiply leaders. 
                With this plan, you will have a clear, practical, and spiritual guide to move forward with purpose, humility, and authority.
              </p>
            </div>

            <p className="text-muted-foreground text-center">
              ✨ Today, when you activate your access to the <strong>Esther Method</strong>, you also receive this plan completely <strong>FREE</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
