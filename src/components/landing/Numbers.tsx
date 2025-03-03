export default function Numbers() {
  const stats = [
    { number: "4,000+", label: "Community Members" },
    { number: "100+", label: "Events Hosted" },
    { number: "25", label: "Programs and Activities" },
    { number: "65%", label: "of our members are Youths" }
  ];

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Swahilipot Hub in Numbers</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Since our inception, we've made significant strides in empowering youth across East Africa.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-xl">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}