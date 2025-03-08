export default function Numbers() {
  const stats = [
    { number: "4,000+", label: "Community Members" },
    { number: "25", label: "Program and Activities" },
    { number: "65%", label: "of our members are Youths" }
  ];

  return (
    <section className="py-16 bg-orange-100 text-blue-900">
      <div className="container-custom mx-auto flex flex-col items-center justify-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[calc(3rem*0.6)]">Swahilipot Hub in Numbers</h2>
          <p className="text-lg max-w-3xl mx-auto text-[calc(1.125rem*0.6)]">
            Since our inception, we've made significant strides in empowering youth across East Africa.
          </p>
        </div>

        {/* Updated grid for strict centering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center items-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center flex flex-col items-center justify-center" 
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 text-[calc(4rem*0.6)]">
                {stat.number}
              </div>
              <div className="text-xl text-[calc(1.25rem*0.6)]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
