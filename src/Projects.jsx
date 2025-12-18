import projects from "./Allprojects";
// import StartToHere from "./StartHere";
const Projects = () => {
  return (
    <section
      id="projects"
      className="px-4 md:px-16 pb-40 pt-5"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-[#ccd6f6] text-4xl md:text-6xl mb-6 md:my-10">
          / projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-x-[10vw] md:gap-y-[5vh]">
          {projects.map((p) => (
            <article
              key={p.title}
              className="bg-[#0f1724] border border-[#112233] rounded-lg p-10 hover:shadow-lg transition"
            >
              <h3 className="text-[#64ffda] font-medium text-lg">{p.title}</h3>
              <p className="text-[#8892b0] text-sm mt-2">{p.desc}</p>
              <div className="mt-12 flex justify-end gap-3">
                <a
                  href={p.live}
                  className="text-[#ccd6f6] text-xl hover:text-white"
                >
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
                <a
                  href={p.repo}
                  className="text-[#64ffda] text-xl hover:underline"
                >
                  <i className="fa-brands fa-square-github text-xl"> </i>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
