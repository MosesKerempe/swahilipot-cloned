import Link from 'next/link';

export default function CaseManagement() {
  return (
    <section className="py-16 bg-orange-50 dark:bg-gray-900"> {/* Light blue for light mode, dark gray for dark mode */}
      <div className="container-custom mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 text-[calc(3rem*0.8)]">
            Case Management Program
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 text-[calc(1.125rem*0.8)]">
            Our primary objective is to connect 60,000 youths in the Kenyan Coast to a wide range of opportunities and sustainable employment. We understand that each young person is unique, and to empower them effectively, we emphasize a personalized mentorship approach.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-[calc(1.125rem*0.8)]">
            Through this program, we offer mentorship, counseling, skills development, and access to educational and employment opportunities tailored to individual needs.
          </p>
          <Link href="/programs/case-management" className="btn text-light-500 dark:text-light-400 hover:underline">
            Learn More
          </Link>
        </div>

        {/* Directly placing the image without any extra div */}
        <img 
          src="/images/casemanagement.png" 
          alt="Case Management Image" 
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>
    </section>
  );
}
