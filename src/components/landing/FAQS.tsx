import { useState } from 'react';

export default function FAQS() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // This would typically come from your data file
  const faqs = [
    {
      question: "What is SwahiliPot Hub?",
      answer: "SwahiliPot Hub is an innovation and technology hub locate in Mombasa, Kenya. It serves as a community-driven space that promotes technology, entrepreneurship, and skills development in the coastla region of Kenya."
    },
    {
      question: "Who can benefit from SwahiliPot Hub?",
      answer: "Swahilipot Hub is open to entterpreneurs, developers, creatives and anyone intrested in technology and innovation. It caters to individuals who are looking to enahance their digital skills, collaborate on projects, and connect with like-minded individuals in the tech ecosystem"
    },
    {
      question: "What programs and services does SwahiliPot Hub offer?",
      answer: "Swahilipot hub offers a range of programs and services, including training workshops, mentorship programs, networking events, access to co-working spaces, and maker labs. These initiatives aim to empower individuals by providing them with the neccesary resources and skills to participate in the digital economy."
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
      question: "Can I visit Swahilipot Hub as a visitor?",
      answer: "Yes, Swahilipot HUb welcomes visitors who are interested in learning more about their initiatives and the local tech echosystem.You can visit the hub to attend events, participate in workshops, or simply network with professionals in the field. Swahilipot Hub promotes an inclusive and vibrant community where individuals can exchange ideas and explore opprotunities in technology and innovation."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-orange-50">
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
                className="flex justify-between items-center w-full p-5 bg-light rounded-lg hover:bg-blue-200 transition-colors"
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
                <div className="p-5 border border-blue-200 border-t-0 rounded-b-lg bg-white">
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