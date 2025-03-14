import Link from 'next/link';

export default function Attachment() {
  return (
    <section className="py-16 bg-orange-100 dark:bg-gray-900">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            Attachment & Internship Opportunities
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Gain practical experience and develop your skills through our attachment and internship programs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-blue-50 dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg">
            <div className="text-4xl text-primary mb-4">🎓</div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Student Attachments</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              We offer attachment opportunities for students looking to fulfill their academic requirements while gaining practical experience in various fields including technology, arts, communications, and community development.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Flexible duration (3-4 months)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Hands-on project experience</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Mentorship from professionals</span>
              </li>
            </ul>
            <Link href="/about/work-with-us" className="text-primary dark:text-blue-400 font-medium hover:underline">
              Apply for Attachment →
            </Link>
          </div>
          
          <div className="bg-blue-50 dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg">
            <div className="text-4xl text-primary mb-4">💼</div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Professional Internships</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Our internship program is designed for recent graduates and young professionals seeking to build their careers in innovation, technology, creative arts, and community development.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>3-12 month structured programs</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Leadership development opportunities</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Networking with industry professionals</span>
              </li>
            </ul>
            <Link href="/about/work-with-us" className="text-primary dark:text-blue-400 font-medium hover:underline">
              Apply for Internship →
            </Link>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-light-700 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            Both our attachment and internship programs provide valuable experience, skills development, and networking opportunities to help launch your career.
          </p>
          <Link href="/about/work-with-us" className="btn text-light dark:text-light-600">
            View All Opportunities
          </Link>
        </div>
      </div>
    </section>
  );
}
