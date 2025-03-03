export default function BlogHero() {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
      <div className="container-custom mx-auto text-center">
        <div className="max-w-3xl mx-auto"> {/* Ensure it's centered */}
          <h1 className="text-3xl md:text-4.8xl font-bold mb-6">
            SwahiliPot Hub Blogs and News
          </h1>
          <p className="text-lg mb-8"> {/* Increased text size slightly for better readability */}
            Stories, insights, and updates from our community of innovators, creators, and change-makers.
          </p>
        </div>
      </div>
    </section>
  );
}
