import Image from "next/image";

export default function About() {
  return (
    // pt-20 bg-gradient-to-br from-[#4CAF50] via-[#45a649] to-[#FFD700]
    <main >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#4CAF50] via-[#45a649] to-[#FFD700] py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute w-full h-full bg-grid-pattern opacity-10" />
          {/* Enhanced animated circles */}
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-yellow-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/20 rounded-full blur-xl animate-float" />
          <div className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-yellow-300/20 rounded-full blur-xl animate-float-delay" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight animate-fadeIn">
              Transforming Grocery Shopping
              <span className="block mt-3 text-yellow-300">in Alwar</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto animate-fadeIn delay-200">
              From a simple idea to Alwar's leading grocery delivery platform, 
              we're making daily essentials accessible to everyone.
            </p>
          </div>
        </div>
        
        {/* Fixed Wave Divider */}
        <div className=" absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none">
          <svg 
            className="relative block w-full h-[50px]" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 100" 
            preserveAspectRatio="none"
          >
            <path 
              fill="#ffffff" 
              fillOpacity="1" 
              d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"
            />
          </svg>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto">
            <div className="lg:w-1/2">
              <div className="relative">
                {/* Enhanced glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#4CAF50]/30 to-[#FFD700]/30 rounded-[32px] blur-2xl" />
                <div className="relative">
                  <Image
                    src="/about-vision.jpg"
                    alt="Alwar Mart Vision"
                    width={600}
                    height={450}
                    className="rounded-[32px] shadow-2xl"
                    priority
                  />
                  {/* Redesigned Achievement Card */}
                  <div className="absolute -right-8 top-1/3 bg-white p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] animate-float">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-800">30 Min</div>
                        <div className="text-sm text-gray-600 font-medium">Delivery Time</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our Vision & Mission
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Founded in 2023, Alwar Mart emerged from a simple yet powerful vision: 
                to revolutionize how Alwar shops for groceries. We understood the 
                challenges faced by busy families and working professionals in managing 
                their daily grocery needs.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: "30-Minute Delivery Promise",
                    description: "Setting new standards in quick commerce with our guaranteed 30-minute delivery"
                  },
                  {
                    title: "Quality First Approach",
                    description: "Partnering with trusted suppliers to ensure only the freshest products reach you"
                  },
                  {
                    title: "Technology-Driven Growth",
                    description: "Leveraging cutting-edge technology to provide a seamless shopping experience"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section with Enhanced Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-16">
              Meet Our Founders
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  name: "Ashok Jain",
                  role: "Founder",
                  image: "/team/ashok-jain.jpg",
                  description: "With over 20 years of retail experience, Ashok brings deep industry knowledge and a vision for innovation in grocery delivery."
                },
                {
                  name: "Ronak Jain",
                  role: "Co-Founder",
                  image: "/team/ronak-jain.jpg",
                  description: "A tech enthusiast and business strategist, Ronak leads our technological advancement and business expansion initiatives."
                }
              ].map((founder, index) => (
                <div key={index} className="group bg-white rounded-[32px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] 
                                         hover:shadow-[0_8px_40px_rgb(0,0,0,0.12)] transition-all duration-300">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="relative w-56 h-56 flex-shrink-0">
                      {/* Enhanced image container */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#4CAF50]/20 to-[#FFD700]/20 rounded-full blur-xl 
                                    group-hover:from-[#4CAF50]/30 group-hover:to-[#FFD700]/30 transition-all duration-300" />
                      <div className="absolute inset-2 bg-white rounded-full" /> {/* White background for image */}
                      <Image
                        src={founder.image}
                        alt={founder.name}
                        fill
                        className="rounded-full object-cover p-2 transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{founder.name}</h3>
                      <p className="text-[#4CAF50] font-semibold mb-4">{founder.role}</p>
                      <p className="text-gray-600 leading-relaxed">{founder.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section with Enhanced Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-16">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "30k+", label: "Happy Customers" },
                { number: "3000+", label: "Products Available" },
                { number: "50+", label: "Local Partners" },
                { number: "100+", label: "Team Members" }
              ].map((stat, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4CAF50]/20 to-[#FFD700]/20 rounded-[28px] blur-xl 
                                group-hover:from-[#4CAF50]/30 group-hover:to-[#FFD700]/30 transition-all duration-300" />
                  <div className="relative bg-white p-8 rounded-[28px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] 
                                group-hover:shadow-[0_8px_40px_rgb(0,0,0,0.12)] transition-all duration-300">
                    <div className="text-4xl font-bold text-[#4CAF50] mb-3">{stat.number}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#4CAF50] to-[#FFD700]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Be Part of Our Journey
            </h2>
            <p className="text-xl mb-10 text-white/90">
              Join thousands of satisfied customers who have made Alwar Mart their trusted grocery partner
            </p>
            <button className="bg-white text-[#4CAF50] px-12 py-5 rounded-full font-semibold text-lg 
                             shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.2)]
                             transform hover:-translate-y-1 transition-all duration-300">
              Download App Now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
} 