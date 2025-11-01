"use client";

import { Monitor, Tablet, Smartphone, CheckCircle } from "lucide-react";

const ProductSection = () => {
  const benefits = [
    <>Put together a sermon <strong>in 30 minutes</strong>, even if you've never done it before</>,
    <>Step up to the pulpit <strong>without fear or nerves</strong> using anti-panic techniques</>,
    <>Always have a powerful word for <strong>any occasion</strong></>,
    <>Be recognized as <strong>a woman of God</strong> with authority and wisdom</>,
    <>Grow spiritually with <strong>real intimacy</strong> with the Word</>,
    <>Impact lives and <strong>transform</strong> environments with your voice</>,
    <>Discover <strong>your unique style</strong> and build your ministerial identity</>,
  ];

  const bonusItems1 = [
    "A clear structure for creating messages with fluidity and impact.",
    "Tips for connecting each point of the sermon with the Word of God.",
    "Methods for maintaining the church's attention from beginning to end.",
    "Examples and models ready for you to adapt and use immediately.",
    "Strategies so you never get stuck again when preparing a sermon.",
  ];

  const bonusItems2 = [
    "A prayer of deep connection to align your heart with God.",
    "Keys to maintaining a pure and humble heart before speaking.",
    "How to ensure that Christ is always at the center of your message.",
    "Spiritual exercises to activate inner peace and strength.",
    "The power of an anchor verse to sustain your preaching.",
    "Techniques for visualizing souls being transformed by your voice.",
    "Declarations of faith to surrender everything to the Holy Spirit.",
  ];

  const bonusItems3 = [
    "Essential skills for leading with clarity and confidence.",
    "Self-discovery exercises to identify your strengths and areas for growth.",
    "Strategies for training and equipping new leaders in your ministry.",
    "Short- and long-term action plans for your ministry development.",
    "Spaces for reflection and practical tools to evaluate your progress.",
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

          {/* Acceso a todos los dispositivos */}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="text-center space-y-4">
              <div className="bg-accent p-6 rounded-lg">
                <Monitor className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="font-semibold text-accent-foreground text-base">
                  Computer Access
                </p>
              </div>
            </div>
            <div className="text-center space-y-4">
              <div className="bg-accent p-6 rounded-lg">
                <Tablet className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="font-semibold text-accent-foreground text-base">
                  Available on Tablet
                </p>
              </div>
            </div>
            <div className="text-center space-y-4">
              <div className="bg-accent p-6 rounded-lg">
                <Smartphone className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="font-semibold text-accent-foreground text-base">
                  Carry it on your cell phone
                </p>
              </div>
            </div>
          </div>

          {/* Content Overview */}
          <div className="bg-card border border-border p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-card-foreground mb-6">
              In just 3 modules, you will learn how to:
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-success-light border border-success/20 rounded-lg"
                >
                  <CheckCircle className="w-6 h-6 text-success mr-3 flex-shrink-0" />
                  <span className="text-success-foreground font-medium text-base">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* BONUS 1 */}
          <div className="bg-accent border border-border p-8 rounded-lg text-left mt-12">
            <h3 className="text-2xl font-bold text-primary mb-4">
              🎁 Bonus 1: The Preacher’s Structure
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              {bonusItems1.map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* BONUS 2 */}
          <div className="bg-accent border border-border p-8 rounded-lg text-left mt-12">
            <h3 className="text-2xl font-bold text-primary mb-4">
              🎁 Bonus 2: The Prayer of the Preacher
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              {bonusItems2.map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* BONUS 3 */}
          <div className="bg-accent border border-border p-8 rounded-lg text-left mt-12">
            <h3 className="text-2xl font-bold text-primary mb-4">
              🎁 Bonus 3: The Leadership Manual
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              {bonusItems3.map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 🔹 Video after the 3rd bonus */}
          <div className="max-w-3xl mx-auto mt-12">
            <img
              src="https://i.imgur.com/pQU3kcH.gif"
              alt="Presentation of Método Esther"
              className="w-full rounded-lg shadow-lg object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
