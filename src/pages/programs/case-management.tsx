import React from 'react';

export default function CaseManagementPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Case Management Program
            </h1>
            <p className="text-xl mb-8">
              Providing personalized support to youth facing various challenges and connecting them with resources and opportunities.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Our Case Management Program</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Our Case Management Program offers individualized support to youth facing various challenges, helping them navigate obstacles and access opportunities. Through personalized assessment, resource connection, skills development, and ongoing support, we help young people overcome barriers and achieve their goals.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                We believe that every young person deserves the chance to reach their full potential, regardless of the challenges they face. Our case managers work one-on-one with youth to understand their unique situations, identify their strengths and needs, and develop personalized plans to support their success.
              </p>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Case Management Program" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">How Our Program Works</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-primary text-white p-4 rounded-full mr-6 text-xl font-bold">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Initial Assessment</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    We begin with a comprehensive assessment to understand the individual's situation, challenges, strengths, and goals. This helps us develop a personalized support plan.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary text-white p-4 rounded-full mr-6 text-xl font-bold">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Resource Connection</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    We connect youth with relevant resources and services based on their needs, including educational opportunities, healthcare, housing support, legal assistance, and more.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary text-white p-4 rounded-full mr-6 text-xl font-bold">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Skills Development</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    We provide training in both technical and soft skills to help youth build the capabilities they need to succeed in education, employment, and life.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary text-white p-4 rounded-full mr-6 text-xl font-bold">4</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Our case managers provide continuous mentorship, guidance, and support, regularly checking in with participants and adjusting plans as needed to ensure progress toward goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-light dark:bg-gray-800 p-6 rounded-lg">
              <div className="text-4xl text-primary mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3">Educational Support</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We help youth access educational opportunities, from basic education to specialized training programs, and provide tutoring and academic support.
              </p>
            </div>
            
            <div className="bg-light dark:bg-gray-800 p-6 rounded-lg">
              <div className="text-4xl text-primary mb-4">💼</div>
              <h3 className="text-xl font-semibold mb-3">Employment Assistance</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We support youth in developing job skills, creating resumes, preparing for interviews, and connecting with employment opportunities.
              </p>
            </div>
            
            <div className="bg-light dark:bg-gray-800 p-6 rounded-lg">
              <div className="text-4xl text-primary mb-4">🏠</div>
              <h3 className="text-xl font-semibold mb-3">Life Skills Development</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We provide training in essential life skills such as financial literacy, communication, problem-solving, and self-advocacy.
              </p>
            </div>
          </div>
          
          <div className="bg-primary text-white p-8 rounded-lg mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Impact</h2>
                <p className="mb-6">
                  Since launching our Case Management Program, we've made a significant difference in the lives of youth in our community:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Served over 300 youth facing various challenges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Helped 150+ youth secure employment or educational opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Connected youth with 20+ partner organizations for specialized support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Provided over 1,000 hours of one-on-one mentorship and guidance</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <blockquote className="italic mb-4">
                  "The Case Management Program at SwahiliPot Hub changed my life. My case manager helped me navigate challenges, connect with resources, and develop the skills I needed to pursue my education and career goals. I'm now employed and working toward a better future."
                </blockquote>
                <div className="font-semibold">- John, Program Participant</div>
              </div>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              There are several ways you can support our Case Management Program and help make a difference in the lives of youth in our community.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-light dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Refer a Youth</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  If you know a young person who could benefit from our program, please refer them to us.
                </p>
                <a href="/contact" className="text-primary font-medium hover:underline">
                  Contact Us →
                </a>
              </div>
              
              <div className="bg-light dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Volunteer</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Share your skills and time as a mentor, tutor, or workshop facilitator for our program participants.
                </p>
                <a href="/about/work-with-us" className="text-primary font-medium hover:underline">
                  Learn More →
                </a>
              </div>
              
              <div className="bg-light dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Donate</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Support our program financially to help us reach more youth and provide the resources they need.
                </p>
                <a href="/stwdonate/support-stw" className="text-primary font-medium hover:underline">
                  Donate Now →
                </a>
              </div>
            </div>
            
            <a href="/contact" className="btn px-8 py-3">
              Contact Us to Learn More
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Case Management Program - SwahiliPot Hub",
      description: "Our Case Management Program provides personalized support to youth facing various challenges, connecting them with resources and opportunities to help them thrive."
    }
  };
}