import MyPhoto from "./assets/MyPhoto.png";

const AboutMe = () => {
  return (
    <section className="flex flex-col items-center md:flex-row md:justify-center md:items-center gap-8 px-4 pb-40 pt-80" id="about">
      <div className="flex flex-col">
        <p className="text-[#ccd6f6] text-4xl md:text-6xl mb-3">/ about me</p>
        <div className="flex justify-center">
          <p className="text-[#8892b0] max-w-full md:max-w-xl text-base md:text-lg">
          I’m a front-end web developer currently learning and building in the modern web ecosystem. I focus on creating clean, responsive, and user-friendly websites while continuously improving my skills through real projects.

My goal is to start earning by delivering simple, effective solutions for individuals and small businesses, while growing deeper into the tech industry. I believe in learning by building and writing code every day.
        </p>
        </div>

        <p className="pt-4 text-[#8892b0]">
          Here are some technologies I have been working with:
        </p>

        <div className=" flex sm:grid-cols-2 gap-2 text-[#8892b0] mt-2">
          <ul className="list-disc ml-5 space-y-1">
            <li>JavaScript</li>
            <li>CSS3</li>
            <li>HTML</li>
          </ul>

          <ul className="list-disc ml-10 space-y-1">
            <li>React.js</li>
            <li>TailwindCSS</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
      </div>

      <div className="flex self-center md:self-auto md:ml-60">
        <img
          src={MyPhoto}
          alt="My photo"
          className="w-36 h-36 md:w-80 md:h-80 rounded-2xl object-cover border-2 border-[#64ffda]"
        />
      </div>
    </section>
  );
};

export default AboutMe;
