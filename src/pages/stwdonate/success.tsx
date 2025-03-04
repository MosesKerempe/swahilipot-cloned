import React from 'react';
import Link from 'next/link';

export default function SuccessPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Thank You for Your Support!
            </h1>
            <p className="text-xl mb-8">
              Your contribution will help empower women in technology across East Africa.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-light dark:bg-gray-800">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md text-center">
              <div className="text-6xl text-primary mb-6">✓</div>
              <h2 className="text-3xl font-bold mb-4">Donation Successful</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                Your donation has been processed successfully. A confirmation email has been sent to your email address with the details of your contribution.
              </p>
              
              <div className="bg-light dark:bg-gray-800 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Your Impact</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Your support will help us:
                </p>
                <ul className="space-y-2 text-left mb-4">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Provide training and mentorship to women in technology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Create networking and career development opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Support women-led tech initiatives and startups</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Advocate for gender equality in the tech industry</span>
                  </li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300">
                  We are grateful for your commitment to our mission.
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/" className="btn">
                  Return to Home
                </Link>
                <Link href="/programs/swahili-tech-women" className="bg-transparent border border-primary text-primary px-6 py-3 rounded-md font-medium hover:bg-primary hover:text-white transition-colors">
                  Learn More About STW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Share Your Support</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Help us spread the word about Swahili Tech Women and inspire others to support our cause.
            </p>
            
            <div className="flex justify-center space-x-4">
              <a href="https://twitter.com/intent/tweet?text=I%20just%20supported%20Swahili%20Tech%20Women%20to%20help%20bridge%20the%20gender%20gap%20in%20technology.%20Join%20me!%20https://swahilipothub.co.ke/stwdonate/support-stw" target="_blank" rel="noopener noreferrer" className="bg-[#1DA1F2] text-white p-3 rounded-full hover:bg-opacity-90 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              
              <a href="https://www.facebook.com/sharer/sharer.php?u=https://swahilipothub.co.ke/stwdonate/support-stw" target="_blank" rel="noopener noreferrer" className="bg-[#1877F2] text-white p-3 rounded-full hover:bg-opacity-90 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              
              <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://swahilipothub.co.ke/stwdonate/support-stw" target="_blank" rel="noopener noreferrer" className="bg-[#0A66C2] text-white p-3 rounded-full hover:bg-opacity-90 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              
              <a href="mailto:?subject=Support%20Swahili%20Tech%20Women&body=I%20just%20supported%20Swahili%20Tech%20Women%20to%20help%20bridge%20the%20gender%20gap%20in%20technology.%20Join%20me!%20https://swahilipothub.co.ke/stwdonate/support-stw" className="bg-gray-500 text-white p-3 rounded-full hover:bg-opacity-90 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
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
      title: "Donation Successful - SwahiliPot Hub",
      description: "Thank you for your support of Swahili Tech Women. Your contribution will help empower women in technology across East Africa."
    }
  };
}