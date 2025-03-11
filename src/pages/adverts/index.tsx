import Head from 'next/head';
import { useState } from 'react';

export default function Adverts() {
  const [formData, setFormData] = useState({
    title: '',
    organization: '',
    email: '',
    deadline: '',
    description: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setMessage('Submitting...');
    try {
      const response = await fetch('/api/advertsform', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (response.ok) {
        setMessage('Advert submitted successfully!');
        setFormData({ title: '', organization: '', email: '', deadline: '', description: '' });
      } else {
        setMessage(result.error || 'Submission failed');
      }
    } catch (error) {
      setMessage('Error submitting form');
    }
  };

  const adverts = [
    {
      title: "Tech Bootcamp Instructor",
      organization: "SwahiliPot Hub",
      deadline: "Pending",
      description: "We're looking for experienced instructors to lead our upcoming coding bootcamps. If you have expertise in web development, mobile app development, or data science, we want to hear from you!",
      link: "#"
    },
    {
      title: "Call for Artists - Cultural Exhibition",
      organization: "SwahiliPot Hub Arts Department",
      deadline: "Pending",
      description: "Calling all local artists! Submit your work for our upcoming cultural exhibition celebrating East African heritage. All mediums welcome.",
      link: "#"
    },
    {
      title: "Volunteer Mentors Needed",
      organization: "Swahili Tech Women",
      deadline: "Pending",
      description: "Share your expertise and inspire the next generation of women in technology. We're seeking volunteer mentors for our Swahili Tech Women program.",
      link: "#"
    }
  ];

  return (
    <>
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container-custom mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-[calc(4rem*0.5)] md:text-[calc(6rem*0.5)] font-bold mb-6">
              Adverts & Opportunities
            </h1>
            <p className="text-[calc(1.25rem*0.8)] mb-8">
              Discover opportunities to work with us, participate in our programs, or contribute to our community.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-blue-50 dark:bg-gray-800">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {adverts.map((advert, index) => (
              <div key={index} className="bg-orange-50 dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-2xl font-bold mb-1">{advert.title}</h2>
                      <p className="text-gray-600 dark:text-gray-300">{advert.organization}</p>
                    </div>
                    <div className="bg-light dark:bg-gray-600 px-3 py-1 rounded-full text-sm">
                      Deadline: {advert.deadline}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    {advert.description}
                  </p>
                  
                  <a 
                    href={advert.link} 
                    className="btn inline-block"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-yellow-50 dark:bg-gray-700 rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Submit an Advert</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              If you'd like to post an opportunity or announcement on our platform, please fill out the form below. All submissions will be reviewed before publishing.
            </p>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="title" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Advert Title *</label>
                  <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white" />
                </div>
                <div>
                  <label htmlFor="organization" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Organization *</label>
                  <input type="text" id="organization" name="organization" value={formData.organization} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Contact Email *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white" />
                </div>
                <div>
                  <label htmlFor="deadline" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Deadline</label>
                  <input type="date" id="deadline" name="deadline" value={formData.deadline} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white" />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="description" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Description *</label>
                <textarea id="description" name="description" rows={5} value={formData.description} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md"></textarea>
              </div>
              <button type="submit" className="btn">Submit Advert</button>
              <p className="mt-2 text-green-600">{message}</p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}


export async function getStaticProps() {
  return {
    props: {
      title: "Adverts - SwahiliPot Hub",
      description: "Opportunities, announcements, and calls for participation from SwahiliPot Hub."
    }
  };
}