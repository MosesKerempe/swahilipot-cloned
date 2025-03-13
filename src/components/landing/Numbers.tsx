export default function Numbers() {
  const stats = [
    { number: "4,000+", label: "Community Members" },
    { number: "25", label: "Program and Activities" },
    { number: "65%", label: "of our members are Youths" }
  ];

  return (
    <section className="py-16 bg-blue-50 dark:bg-gray-800 text-blue-900 dark:text-blue-100">
      <div className="container-custom mx-auto flex flex-col items-center justify-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            Swahilipot Hub in Numbers
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-blue-700 dark:text-gray-300">
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
              <div className="text-4xl md:text-5xl font-bold mb-2 text-blue-800 dark:text-gray-100">
                {stat.number}
              </div>
              <div className="text-xl text-blue-800 dark:text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
