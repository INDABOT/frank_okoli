import React from 'react';
import './App.css';

function Header() {
  return (
    <header className="header" style={{ backgroundColor: 'white', padding: '10px 20px', borderBottom: '1px solid #ccc' }}>
      <h1>HNG Boilerplate</h1>
      <nav>
        <ul style={{ display: 'flex', gap: '15px', listStyle: 'none' }}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li><a href="#best-practices" className="active">Best Practices</a></li>
        <li><a href="#logging">Logging</a></li>
        <li><a href="#validation">Validation</a></li>
        <li><a href="#exception">Exception Handling</a></li>
        <li><a href="#modules">Modules</a></li>
        <li><a href="#dto">DTO</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#config">Configuration</a></li>
        <li><a href="#security">Security</a></li>
      </ul>
    </aside>
  );
}

function Content() {
  return (
    <section className="content">
      <h2 className="title">Top 3 Best NestJS Boilerplates for Beginners</h2>
      <p className="section-paragraph">
        NestJS is a powerful framework for building Node.js applications. However, setting up a new project from scratch can be time-consuming and complex, especially for beginners.
        Boilerplates offer a pre-configured starting point, saving valuable time and effort by providing a foundation with essential features already set up. Below are some of the best NestJS boilerplates tailored for beginners, each catering to different needs and project types.
      </p>

      <h3 className="section-title" id="best-practices">The Best NestJS Boilerplates with Easy Integration</h3>

      <h3 className="section-title" id="nestjs-typescript-starter">1. NestJS TypeScript Starter</h3>
      <p className="section-paragraph">
        <a href="#">NestJS TypeScript Starter</a> is the official starter template provided by the NestJS team and is designed to be a solid foundation for any NestJS application.
      </p>
      <p className="section-paragraph">
        It includes all the basic configurations and setups you need to get started with TypeScript, including environment configuration and a basic project structure. Being the official template, it's kept up-to-date with the latest features and best practices of the framework, making it an excellent choice for beginners who want to start learning NestJS the right way.
      </p>

      <h3 className="section-title" id="hng-tech-nestjs-boilerplate">2. HNG.Tech NestJS Boilerplate</h3>
      <p className="section-paragraph">
        The HNG.Tech NestJS Boilerplate offers a good foundation for building modern web applications. Tailored specifically for beginners and startups, this boilerplate includes essential features like admin authentication with login via email and password, user authentication, and pre-built landing pages.
      </p>
      <p className="section-paragraph">
        The well-structured codebase is easy to extend and customize, allowing developers to focus on building unique features rather than setting up the basics. With a strong emphasis on security and best practices, the HNG.Tech NestJS Boilerplate is an ideal choice for those looking to quickly launch robust applications with minimal setup time.
      </p>

      <h3 className="section-title" id="teanjs">3. TeanJS</h3>
      <p className="section-paragraph">
        <a href="#">TeanJS</a> is more than just a basic boilerplate; it’s a comprehensive starter kit designed to build modern applications with features like microservice architecture, event sourcing, and Command Query Responsibility Segregation (CQRS).
      </p>
      <p className="section-paragraph">
        Although it might be more advanced for absolute beginners, it’s a fantastic choice for those who want to dive deeper into complex application development patterns and learn about scalable architecture from the get-go. The project is actively maintained, and its detailed documentation helps in navigating the more complex aspects of the codebase.
      </p>

      <h3 className="section-title" id="boilerplates-comparison">The Various Boilerplates Comparison</h3>
      <p className="section-paragraph">
        <strong>1. Features:</strong> Consider the specific features you need for your project. Some boilerplates offer a wider range of functionalities than others. For instance, if you need GraphQL support, the NestJS GraphQL Boilerplate might be your best bet. If you're focusing on database-heavy applications, the NestJS Prisma Starter could be more suitable.
      </p>
      <p className="section-paragraph">
        <strong>2. Complexity:</strong> If you're a complete beginner, starting with a simpler boilerplate like the official NestJS TypeScript Starter may be more manageable. As you gain experience, you can explore more advanced options like TeanJS.
      </p>
      <p className="section-paragraph">
        <strong>3. Community and Support:</strong> A strong community and active maintenance are crucial. Ensure that the boilerplate you choose is well-supported by its developers and community. Regular updates and active issue resolution are good indicators of a reliable project.
      </p>
      <p className="section-paragraph">
        <strong>4. Documentation:</strong> Good documentation is essential for understanding the boilerplate and getting started quickly. Projects with comprehensive and clear documentation will save you a lot of time and frustration.
      </p>

      <h3 className="section-title" id="conclusion">Conclusion</h3>
      <p className="section-paragraph">
        Selecting the right boilerplate is a critical step in starting your NestJS journey. Whether you need a basic setup or a more feature-rich starting point, the boilerplates listed above offer a range of options tailored to different needs.
      </p>
      <p className="section-paragraph">
        Evaluate your project requirements, consider the factors discussed, and choose the boilerplate that best aligns with your goals.
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" style={{ backgroundColor: '#f8f8f8', padding: '20px', borderTop: '1px solid #ccc', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <img src="logo.png" alt="HNG Boilerplate" />
        </div>
        <div>
          <p>&copy; 2024 HNG Boilerplate</p>
        </div>
        <div>
          <ul style={{ display: 'flex', gap: '15px', listStyle: 'none' }}>
            <li><a href="#facebook">Facebook</a></li>
            <li><a href="#twitter">Twitter</a></li>
            <li><a href="#linkedin">LinkedIn</a></li>
            <li><a href="#github">GitHub</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content" style={{ display: 'flex' }}>
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;