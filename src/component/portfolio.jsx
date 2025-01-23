import React from 'react';
import { Mail, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const personalInfo = {
    name: "Mohammed React Developer",
    title: "Frontend React Developer",
    about: "React specialist with a passion for creating intuitive user interfaces and exceptional web experiences. Experienced in modern React practices including hooks, context, and state management. Strong focus on component reusability, performance optimization, and responsive design.",
    email: "harunamohammed231@gmail.com",
    github: "https://github.com/mohammedZato",
    linkedin: "https://www.linkedin.com/in/mohammed-haruna-231-zato/"
  };

  const projects = [
    {
      title: "Shopping Cart Application Frontend",
      description: "Built a responsive product page website with a product list page, product details page and a cart list page, and complex state management using react context.",
      technologies: ["React", "Tailwind CSS"],
      features: ["Custom hooks", "Context API", "React Router dom", "Performance optimization"],
      github: "https://github.com/mohammedZato/my-react-shopping-cart-app",
      live: " https://mohammedzato.github.io/react-shopping-cart/"
    },
    {
      title: "Habit Tracker App",
      description: "Developed a habit tracker application, where users can add, remove and track their daily habits by marking them as completed.",
      technologies: ["React", "React Redux", "Tailwind CSS"],
      features: ["Custom hooks", "Performance optimization"],
      github: "https://github.com/mohammedZato/my-react-habit-tracker",
      live: "https://mohammedzato.github.io/my-react-habit-tracker/"
    },
    {
      title: "Weather App",
      description: "Created a weather app displaying weather conditions of searched cities.",
      technologies: ["React", "Tailwind CSS"],
      features: ["Context API"],
      github: "https://github.com/mohammedZato/my-react-weather-app",
      live: "https://mohammedzato.github.io/my-react-weather-app/"
    },
    {
        title: "Blog Editor",
        description: "Developed a blog editor application, where users can add, remove and edit already added blogs to the blog list",
        technologies: ["React", "React Redux", "Tailwind CSS"],
        features: ["Performance optimization"],
        github: "https://github.com/mohammedZato/react-blog-editor-app",
        live: "https://mohammedzato.github.io/react-blog-editor-app/"
    },
    {
        title: "Tenzies Game",
        description: "Developed a tenzies, where users can roll dice multiple times to obtian the same number on all dice, and a counter for keeping track of the number of rolls needed to win",
        technologies: ["React", "Tailwind CSS"],
        features: ["Custom themes"],
        github: "https://github.com/mohammedZato/react-tenzies-game",
        live: "https://mohammedzato.github.io/react-tenzies-game/"
    },
  ];

  const skills = {
    core: ["React", "JavaScript (ES6+)", "HTML5", "CSS3"],
    styling: ["Tailwind CSS", "Material UI", "Styled Components", "CSS Modules"],
    state: ["Redux", "React Query", "Zustand", "Context API"],
    tools: ["Vite", "Git", "npm"]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900">{personalInfo.name}</h1>
          <p className="text-xl text-gray-600 mt-2">{personalInfo.title}</p>
          <p className="mt-4 text-gray-600 max-w-2xl">{personalInfo.about}</p>
          
          <div className="flex gap-4 mt-6">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <Mail size={20} />
              <span>Email</span>
            </a>
            <a href="https://github.com/mohammedZato" target="_blank" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <ion-icon class="size-7" name="logo-github"></ion-icon>
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/mohammed-haruna-231-zato/" target="_blank" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <ion-icon class="size-7" name="logo-linkedin"></ion-icon>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Technical Expertise</h2>
          <div className="grid gap-6">
            {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                    <h3 className="text-lg font-semibold text-gray-700 mb-3 capitalize">{category}:</h3>
                    <div className="flex flex-wrap gap-3">
                    {items.map((skill) => (
                        <span key={skill} className="px-4 py-2 bg-gray-100 rounded-full text-gray-700">
                        {skill}
                        </span>
                    ))}
                    </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Personal React Projects</h2>
          <div className="grid gap-8">
            {projects.map((project) => (
              <div key={project.title} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-700">Technologies:</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-700">Key Features:</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.features.map((feature) => (
                      <span key={feature} className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 mt-4">
                  <a href={project.github} target="_blank" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                    <ion-icon class="size-7" name="logo-github"></ion-icon>
                    <span>Code</span>
                  </a>
                  <a href={project.live} target="_blank" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;