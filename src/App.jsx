import React from "react";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen text-gray-900">
      
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed top-0 left-0 w-full px-10 py-4 flex justify-between items-center z-50">
        <h1 className="font-bold text-2xl text-purple-600">Tamanna Vaikkath</h1>
        <div className="space-x-6 font-semibold">
          <a href="#about" className="hover:text-purple-600">About</a>
          <a href="#skills" className="hover:text-purple-600">Skills</a>
          <a href="#projects" className="hover:text-purple-600">Projects</a>
          <a href="#certs" className="hover:text-purple-600">Certifications</a>
          <a href="#contact" className="hover:text-purple-600">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-10 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
        <h1 className="text-5xl font-bold mb-4">Hello, I'm Tamanna 👋</h1>
        <h2 className="text-2xl font-light max-w-2xl">
          AI & ML Enthusiast | Research-driven Developer | Cloud & Simulation Specialist
        </h2>
      </section>

      {/* About */}
      <section id="about" className="px-10 py-20">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg max-w-3xl leading-relaxed">
          I am a Computer Science Engineering student specializing in Artificial Intelligence 
          and Machine Learning. Passionate about research, simulations, data-driven systems, and 
          solving real-world problems using advanced technologies.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="px-10 py-20 bg-white">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Programming", skills: "C, C++, Python" },
            { title: "Web Development", skills: "HTML, CSS, JavaScript" },
            { title: "Databases", skills: "MySQL" },
            { title: "AI & ML", skills: "ML Models, Data Science, Algorithms" },
            { title: "Cloud & DevOps", skills: "AWS, ServiceNow, Ubuntu" },
            { title: "Simulation Tools", skills: "NS-3, NetAnim" }
          ].map((item, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p>{item.skills}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-10 py-20">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>

        <div className="space-y-6">
          {[
            {
              title: "Alpha Node — Smart Data Retrieval System",
              desc: "ML-based data retrieval using Python + NS-3. Improved accuracy via hyperparameter tuning. Published in IEEE CONIT 2024."
            },
            {
              title: "Underwater Node Localization Technique",
              desc: "DV-Hop based localization using Python & C++. Visualized using NS-3 and NetAnim."
            },
            {
              title: "Traffic Density Predictor",
              desc: "Random Forest congestion predictor integrated with Folium + Leaflet.js for map visualization."
            }
          ].map((proj, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold">{proj.title}</h3>
              <p className="mt-2 text-gray-700">{proj.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section id="certs" className="px-10 py-20 bg-white">
        <h2 className="text-3xl font-bold mb-4">Certifications</h2>

        <ul className="list-disc ml-6 text-lg">
          <li>ServiceNow Certified System Administrator</li>
          <li>AWS Academy Cloud Foundations</li>
          <li>AWS Academy Cloud Security</li>
          <li>Red Hat System Administration</li>
          <li>Google Cloud Certification</li>
        </ul>
      </section>

      {/* Contact */}
      <section id="contact" className="px-10 py-20">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>

        <div className="bg-white p-6 rounded-xl shadow max-w-md">
          <p><strong>Phone:</strong> +91 8530162111</p>
          <p><strong>Email:</strong> vaikkathtamanna@gmail.com</p>
          <p><strong>LinkedIn:</strong> linkedin.com/in/tamanna-vaikkath</p>
          <p><strong>GitHub:</strong> github.com/tamannaa-a</p>
        </div>
      </section>

      <footer className="text-center py-6 bg-gray-900 text-white">
        © 2025 Tamanna Vaikkath — Portfolio Website
      </footer>
    </div>
  );
}

export default App;
