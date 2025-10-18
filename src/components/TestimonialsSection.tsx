import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Lauren Carter",
      location: "California, USA",
      text: "For years I prayed for boldness but didn’t know where to start. The Esther Method helped me organize my messages and speak with clarity. Now I lead the women’s Bible study every week!",
      rating: 5
    },
    {
      name: "Natalie Brown",
      location: "Vancouver, Canada",
      text: "Before this training, I was terrified to share anything in public. Now I feel the Holy Spirit guiding every word I speak. My husband says he’s never seen me so confident!",
      rating: 5
    },
    {
      name: "Hannah Walker",
      location: "London, England",
      text: "I used to hide behind others in ministry, afraid of making mistakes. The Esther Method taught me to trust God’s calling. Today, I preach with conviction and peace.",
      rating: 5
    },
    {
      name: "Megan Davis",
      location: "Nashville, USA",
      text: "The teachings on structure and spiritual preparation were life-changing. I went from trembling before people to speaking with divine authority. All glory to God!",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
    ));
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8 sm:space-y-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground px-2">
            Testimonials from Women Who Have Already Experienced the Transformation
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card border border-border p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-primary mr-2 sm:mr-3 flex-shrink-0" />
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                
                <p className="text-card-foreground italic mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-border pt-3 sm:pt-4">
                  <p className="font-semibold text-card-foreground text-sm sm:text-base">
                    {testimonial.name}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-success-light border border-success/20 p-4 sm:p-6 rounded-lg max-w-2xl mx-auto">
            <p className="text-sm sm:text-base lg:text-lg font-semibold text-success-foreground px-2">
              Join over 2,000 women who are already preaching with authority!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
