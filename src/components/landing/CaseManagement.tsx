import Link from 'next/link';

export default function CaseManagement() {
  return (
    <section className="py-16 bg-light">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Case Management Program</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our Case Management Program provides personalized support to youth facing various challenges, connecting them with resources and opportunities to help them thrive.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Through this program, we offer mentorship, counseling, skills development, and access to educational and employment opportunities tailored to individual needs.
            </p>
            <Link href="/programs/case-management" className="btn">
              Learn More
            </Link>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-5xl text-primary mb-6">🤝</div>
            <h3 className="text-2xl font-semibold mb-4">How We Help</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary mr-3">✓</span>
                <div>
                  <h4 className="font-medium">Personalized Assessment</h4>
                  <p className="text-gray-600">Understanding individual needs and challenges</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">✓</span>
                <div>
                  <h4 className="font-medium">Resource Connection</h4>
                  <p className="text-gray-600">Linking youth to relevant services and opportunities</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">✓</span>
                <div>
                  <h4 className="font-medium">Skills Development</h4>
                  <p className="text-gray-600">Training in both technical and soft skills</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">✓</span>
                <div>
                  <h4 className="font-medium">Ongoing Support</h4>
                  <p className="text-gray-600">Continuous mentorship and guidance</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}