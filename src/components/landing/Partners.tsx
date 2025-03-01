export default function Partners() {
  // This would typically come from your data file
  const partners = [
    "Google",
    "Microsoft",
    "IBM",
    "Meta",
    "UNESCO",
    "UNDP",
    "Kenya ICT Authority",
    "Safaricom"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We collaborate with leading organizations to create meaningful impact.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all">
              {/* This would typically be an image */}
              <div className="h-16 flex items-center justify-center px-6 border border-gray-200 rounded-md">
                <span className="text-gray-500 font-medium">{partner}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}