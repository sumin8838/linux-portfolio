export default function HomePage() {
  const projects = [
    {
      title: 'github',
      desc: '나의 github',
      link: 'https://github.com/sumin8838',
    },
    {
      title: 'clerk-app',
      desc: '수업 프로젝트',
      link: 'https://clerk-app-murex.vercel.app/',
    },
    {
      title: '추가 예정',
      desc: '추가 예정',
      link: 'https://github.com/yourname/design-system',
    },
  ]

  return (
    <>
      <a id="top"></a>

      {/* Hero Section */}
      <section className="hero">
        <h1>최수민의 포트폴리오</h1>
        <p>리눅스를 활용한 포트폴리오 제작</p>
      </section>

      {/* About Me Section */}
      <section id="about">
        <h2 id="about-title" className="section-title">
          About Me
        </h2>
        <div className="section-box about">
          <ul>
            <li>2005년 7월 30일생</li>
            <li>중부대학교 정보보호학전공 재학 중</li>
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2 id="projects-title" className="section-title">
          Projects
        </h2>
        <div className="project-grid">
          {projects.map((p) => (
            <div key={p.title} className="project-card">
              <a href={p.link} target="_blank" rel="noopener noreferrer">
                {p.title}
              </a>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2 id="contact-title" className="section-title">
          Contact
        </h2>
        <div className="section-box contact">
          <ul>
            <li>Email: dudtladl0573@naver.com</li>
            <li>Phone: 010-4521-8838</li>
            <li>
              Instagram:{' '}
              <a
                href="https://www.instagram.com/ra.nupu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @ra.nupu
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
