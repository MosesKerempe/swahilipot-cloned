import Link from 'next/link';

export default function Attachment() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Attachment & Internship Opportunities</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Gain practical experience and develop your skills through our attachment and internship programs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-light p-8 rounded-lg">
            <div className="text-4xl text-primary mb-4">🎓</div>
            <h3 className="text-2xl font-semibold mb-4">Student Attachments</h3>
            <p className="text-gray-700 mb-6">
              We offer attachment opportunities for students looking to fulfill their academic requirements while gaining practical experience in various fields including technology, arts, communications, and community development.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Flexible duration (3-6 months)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Hands-on project experience</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Mentorship from professionals</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Certificate upon completion</span>
              </li>
            </ul>
            <Link href="/about/work-with-us" className="text-primary font-medium hover:underline">
              Apply for Attachment →
            </Link>
          </div>
          
          <div className="bg-light p-8 rounded-lg">
            <div className="text-4xl text-primary mb-4">💼</div>
            <h3 className="text-2xl font-semibold mb-4">Professional Internships</h3>
            <p className="text-gray-700 mb-6">
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
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Potential for permanent roles</span>
              </li>
            </ul>
            <Link href="/about/work-with-us" className="text-primary font-medium hover:underline">
              Apply for Internship →
            </Link>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
            Both our attachment and internship programs provide valuable experience, skills development, and networking opportunities to help launch your career.
          </p>
          <Link href="/about/work-with-us" className="btn">
            View All Opportunities
          </Link>
        </div>
      </div>
    </section>
  );
}