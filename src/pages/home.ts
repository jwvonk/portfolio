export function renderHome() {
  return `
    <header>
      <h1>Welcome to My Portfolio</h1>
      <nav>
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
      </nav>
    </header>
    <main>
      <section>
        <h2>Featured Work</h2>
        <div class="project-list">
          <!-- Project cards go here -->
        </div>
      </section>
    </main>
    <footer>
      <p>© ${new Date().getFullYear()} My Portfolio</p>
    </footer>
  `;
}
