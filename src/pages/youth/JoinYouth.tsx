import React, { useState } from 'react';

export default function JoinYouthDatabase() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    education: '',
    skills: [],
    interests: [],
    location: '',
    howHeard: '',
    agreeTerms: false
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      if (name === 'agreeTerms') {
        setFormData({
          ...formData,
          [name]: target.checked
        });
      } else if (name.startsWith('skill-') || name.startsWith('interest-')) {
        const field = name.startsWith('skill-') ? 'skills' : 'interests';
        const item = name.split('-')[1];
        
        if (target.checked) {
          setFormData({
            ...formData,
            [field]: [...formData[field as 'skills' | 'interests'], item]
          });
        } else {
          setFormData({
            ...formData,
            [field]: formData[field as 'skills' | 'interests'].filter(i => i !== item)
          });
        }
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/youth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error('Error submitting form:', data.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }

    setIsSubmitting(false);
  };

  const skills = [
    "Programming",
    "Web Development",
    "Mobile App Development",
    "Graphic Design",
    "Digital Marketing",
    "Content Creation",
    "Photography",
    "Videography",
    "Music Production",
    "Project Management",
    "Public Speaking",
    "Leadership"
  ];

  const interests = [
    "Technology",
    "Arts & Culture",
    "Entrepreneurship",
    "Community Development",
    "Education",
    "Environment",
    "Health",
    "Sports",
    "Media",
    "Social Impact"
  ];

    return (
      <>
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container-custom mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-[calc(4rem*0.5)] md:text-[calc(6rem*0.5)] font-bold mb-6">
             Youth Database
            </h1>
            <p className="text-[calc(1.25rem*0.8)] mb-8">
              Join our youth Database to connect with opportunities, resources, and a community of like-minded individuals.
            </p>
          </div>
        </div>
      </section>
    
      
      <section className="py-16 bg-blue-50 dark:bg-gray-800">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-center">Why Join Our Youth Database?</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary text-white p-2 rounded-full mr-4">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Access to Opportunities</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Receive notifications about relevant opportunities including jobs, internships, training programs, and events.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary text-white p-2 rounded-full mr-4">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Skill Development</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Get recommendations for workshops, courses, and resources based on your interests and career goals.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary text-white p-2 rounded-full mr-4">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Networking</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Connect with peers, mentors, and potential employers who share your interests and aspirations.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary text-white p-2 rounded-full mr-4">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Community Support</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Become part of a supportive community that celebrates your achievements and helps you overcome challenges.
                    </p>
                  </div>
                </div>
              </div>
              
              <p className="text-center text-gray-700 dark:text-gray-300 mb-4">
                Join over 5,000 youth who are already part of our database and benefiting from these opportunities.
              </p>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-orange-50 dark:bg-gray-700 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-center">Registration Form</h2>
              
              {isSubmitted ? (
                <div className="text-center">
                  <div className="text-5xl text-primary mb-4">✓</div>
                  <h3 className="text-xl font-semibold mb-2">Thank You for Registering!</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Your information has been submitted successfully. You are now part of our youth database.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    We'll be in touch with opportunities and resources that match your interests and skills.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="firstName" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">First Name *</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Last Name *</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="dob" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Date of Birth *</label>
                      <input
                        type="date"
                        id="dob"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="gender" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Gender</label>
                      <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                      >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="non-binary">Non-binary</option>
                        <option value="prefer-not-to-say">Prefer not to say</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="education" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Highest Education Level *</label>
                    <select
                      id="education"
                      name="education"
                      value={formData.education}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                      required
                    >
                      <option value="">Select education level</option>
                      <option value="primary">Primary School</option>
                      <option value="secondary">Secondary School</option>
                      <option value="diploma">Diploma</option>
                      <option value="undergraduate">Undergraduate Degree</option>
                      <option value="postgraduate">Postgraduate Degree</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Skills (Select all that apply)</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      {skills.map((skill, index) => (
                        <label key={index} className="flex items-center">
                          <input
                            type="checkbox"
                            name={`skill-${skill}`}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Interests (Select all that apply)</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {interests.map((interest, index) => (
                        <label key={index} className="flex items-center">
                          <input
                            type="checkbox"
                            name={`interest-${interest}`}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          <span className="text-gray-700 dark:text-gray-300">{interest}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="location" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Location *</label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="City, Country"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="howHeard" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">How did you hear about us?</label>
                    <select
                      id="howHeard"
                      name="howHeard"
                      value={formData.howHeard}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                    >
                      <option value="">Select an option</option>
                      <option value="social-media">Social Media</option>
                      <option value="friend">Friend or Family</option>
                      <option value="event">Event</option>
                      <option value="school">School or University</option>
                      <option value="search">Search Engine</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        className="mt-1 mr-2"
                        required
                      />
                      <span className="text-gray-700 dark:text-gray-300">
                        I agree to the <a href="#" className="text-primary hover:underline">Terms and Conditions</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>. I consent to receiving communications about opportunities and resources.
                      </span>
                    </label>
                  </div>
                  
                  <div className="text-center">
                  <button
                    type="submit"
                    className="btn px-8 py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Youth Database - SwahiliPot Hub",
      description: "Join our youth database to connect with opportunities, resources, and a community of like-minded individuals."
    }
  };
}
