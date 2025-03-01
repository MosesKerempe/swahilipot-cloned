import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "SwahiliPot Hub has been instrumental in my tech journey. The mentorship and resources provided helped me launch my startup.",
      name: "Jane Doe",
      title: "Tech Entrepreneur",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      quote: "The creative community at SwahiliPot Hub gave me the confidence to pursue my passion for digital art. I've found my tribe here.",
      name: "John Smith",
      title: "Digital Artist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      quote: "As a young woman in tech, the support I've received from SwahiliPot Hub has been invaluable. Their programs are truly transformative.",
      name: "Mary Johnson",
      title: "Software Developer",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Community Says</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from the individuals whose lives have been impacted by SwahiliPot Hub.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-light p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}