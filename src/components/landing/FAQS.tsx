import { useState } from 'react';

export default function FAQS() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // This would typically come from your data file
  const faqs = [
    {
      question: "What is SwahiliPot Hub?",
      answer: "SwahiliPot Hub is a collaborative space for technology, arts, and culture in Mombasa, Kenya. We provide resources, mentorship, and opportunities for youth to develop skills, innovate, and create positive change in their communities."
    },
    {
      question: "How can I join SwahiliPot Hub?",
      answer: "You can join SwahiliPot Hub by visiting our facility in Mombasa, registering on our website, or attending one of our events. We welcome individuals of all backgrounds who are interested in technology, arts, and community development."
    },
    {
      question: "What programs does SwahiliPot Hub offer?",
      answer: "We offer a variety of programs including coding bootcamps, arts workshops, entrepreneurship training, mentorship programs, and community events. Our specific programs include Swahili Tech Women, Case Management, Campus Ambassador Program, and more."
    },
    {
      question: "Is SwahiliPot Hub only for tech enthusiasts?",
      answer: "No, SwahiliPot Hub is for everyone interested in innovation and creativity. While we have strong technology programs, we also focus on arts, culture, and community development. We believe in the power of interdisciplinary collaboration."
    },
    {
      question: "How can I support SwahiliPot Hub?",
      answer: "You can support us by volunteering, becoming a mentor, partnering with us on projects, sponsoring our programs, or making a donation. Every contribution helps us expand our impact and reach more youth in East Africa."
    },
    {
      question: "Do I need to pay to use SwahiliPot Hub facilities?",
      answer: "Many of our resources and events are free for community members. Some specialized programs or workshops may have a nominal fee to cover costs. We strive to keep our services accessible to all, regardless of financial background."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about SwahiliPot Hub.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full p-5 bg-light rounded-lg hover:bg-gray-200 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-left">{faq.question}</span>
                <svg
                  className={`w-5 h-5 transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="p-5 border border-gray-200 border-t-0 rounded-b-lg bg-white">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}