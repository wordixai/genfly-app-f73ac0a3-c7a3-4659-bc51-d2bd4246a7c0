const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex items-center gap-12">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Cafe interior" 
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-10 -right-10 hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1459755486867-b55449bb39ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Coffee beans" 
                  className="w-64 h-64 object-cover rounded-lg shadow-xl border-4 border-white"
                />
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <div className="w-24 h-1 bg-amber-800 mb-6"></div>
            
            <p className="text-gray-600 mb-6 text-lg">
              Founded in 2010, Café Aroma began as a small passion project by two friends who shared a love for exceptional coffee and community gathering spaces.
            </p>
            
            <p className="text-gray-600 mb-6 text-lg">
              We source our beans directly from sustainable farms around the world, ensuring fair compensation for farmers while bringing you the freshest, most flavorful coffee possible.
            </p>
            
            <p className="text-gray-600 mb-6 text-lg">
              Our pastries and food items are made fresh daily using locally sourced ingredients. We believe in supporting our local community and providing a warm, welcoming space for everyone.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-amber-800">10+</h3>
                <p className="text-gray-600 mt-2">Years of Experience</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-amber-800">15</h3>
                <p className="text-gray-600 mt-2">Coffee Varieties</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;