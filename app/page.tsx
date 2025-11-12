export default function HomePage() {
  const projects = [
    {
      title: '과제1',
      desc: '설명글1',
    },
    {
      title: '과제2',
      desc: '설명글2',
    },
    {
      title: '과제3',
      desc: '설명글3',
    },
  ]

  return (
    <>
      <section className="hero">
        <h1>최수민의 포트폴리오</h1>
        <p>리눅스를 활용한 포트폴리오</p>
      </section>

      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((p) => (
            <div key={p.title} className="project-card">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
