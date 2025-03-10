import Image from 'next/image';
import PageHero from '@/components/engineering/PageHero';

const CommunityDepartment = () => {
  return (
    <section className="community-department py-8">
      {/* Full-width Hero Section */}
      <div className="w-screen mx-auto">
        <PageHero title="Community Department" subtitle="Tujenge Pamoja, Tufanye Tofauti" />
      </div>

      <div className="image-container text-center my-8 px-4 md:px-16">
        <Image src="/images/community-main.jpg" alt="Community Gathering" width={1000} height={500} className="rounded-lg mx-auto" />
      </div>

      <div className="content-section grid gap-8 px-4 md:px-16">
        <div className="content-block flex flex-col md:flex-row items-center">
          <Image src="/images/community2.jpg" alt="Platform for Expression" width={350} height={250} className="rounded-lg md:mr-4" />
          <div className="text-center md:text-left max-w-lg">
            <h3 className="text-xl font-bold text-black-900">Platform for Expression</h3>
            <p className="text-sm md:text-base text-gray-700">
              We believe in providing a platform for every individual to express their thoughts, ideas, and opinions.
              We value and respect the voices of all community members, irrespective of their tribe, religion, political
              affiliation, or social status. Our aim is to create a safe space where everyone feels included and valued.
            </p>
          </div>
        </div>

        <div className="content-block flex flex-col md:flex-row-reverse items-center">
          <Image src="/images/community3.jpg" alt="Love, Unity, and Coexistence" width={350} height={250} className="rounded-lg md:ml-4" />
          <div className="text-center md:text-left max-w-lg">
            <h3 className="text-xl font-bold text-black-900">Love, Unity, and Coexistence</h3>
            <p className="text-sm md:text-base text-gray-700">
              At the core of our community lies our commitment to love, unity, and peaceful coexistence. We strongly
              believe that by fostering togetherness and understanding, we can build a stronger and more harmonious society.
              We encourage meaningful partnerships among our members, recognizing that collaboration often leads to
              remarkable achievements.
            </p>
          </div>
        </div>

        <div className="content-block flex flex-col md:flex-row items-center">
          <Image src="/images/community4.jpg" alt="People-Powered Community" width={350} height={250} className="rounded-lg md:mr-4" />
          <div className="text-center md:text-left max-w-lg">
            <h3 className="text-xl font-bold text-black-900">People-Powered Community</h3>
            <p className="text-sm md:text-base text-gray-700">
              Swahilipot Hub is not just a physical building; it is the people who make up our community. Each and every
              member contributes to the vibrant tapestry of ideas, skills, and experiences that make our hub unique.
              Together, we can explore limitless possibilities, support each other’s growth, and make a positive impact
              on our society. Join us in an environment that celebrates diversity, encourages personal and professional
              development, and fosters a sense of belonging.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityDepartment;
