export default function Home() {
  const services = [
    {
      title: "Travel Website Design",
      desc: "Professional and mobile-friendly travel websites for tour operators, safaris, hotels, and travel agencies.",
      icon: "🌍",
    },
    {
      title: "SEO Services",
      desc: "Boost your Google rankings and attract more travelers with advanced SEO strategies.",
      icon: "🔎",
    },
    {
      title: "Social Media Marketing",
      desc: "Grow your travel brand through Facebook, Instagram, TikTok, and YouTube marketing.",
      icon: "📱",
    },
    {
      title: "Google & Facebook Ads",
      desc: "High-converting ad campaigns that generate bookings and travel leads.",
      icon: "🚀",
    },
    {
      title: "Graphic Design & Branding",
      desc: "Logos, flyers, brochures, banners, and complete travel brand identity design.",
      icon: "🎨",
    },
    {
      title: "Video Creation & Marketing",
      desc: "Promotional travel videos and social media video marketing for tourism businesses.",
      icon: "🎥",
    },
  ];

  return (
    <main className="bg-white text-gray-900 min-h-screen">
      <section className="bg-gradient-to-br from-black via-gray-900 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
            Grow Your Travel Business With
            <span className="text-orange-400"> GetTourBookings</span>
          </h1>

          <p className="text-lg text-gray-300 max-w-3xl mb-8">
            Websites, SEO, social media marketing, OTA management, branding, and travel business growth solutions.
          </p>

          <button className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-2xl font-bold">
            Start Your Project
          </button>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black mb-12 text-center">
            Our Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
              >
                <div className="text-5xl mb-6">{service.icon}</div>

                <h3 className="text-2xl font-bold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
