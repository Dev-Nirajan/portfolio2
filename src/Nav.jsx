const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-0 bg-[#0a192f]">
      <div className="flex justify-around">
        <div className="flex p-2 md:ml-8 text-2xl">
          <a href="#home" className="logo">Nirajan Joshi</a>
        </div>
        <div className="flex justify-evenly hidden md:flex">
          <a href="#home" className="p-4">Home</a>
          <a href="#about" className="p-4">About Me</a>
          <a href="#projects" className="p-4">Projects</a>
        </div>

        <div className="flex md:mr-8 ">
          <a href="https://www.linkedin.com/in/nirajan-j-251640323/" className="p-4"><i className="fa-brands fa-linkedin text-xl"></i></a>
          <a href="https://github.com/Dev-Nirajan" className="p-4"><i className="fa-brands fa-github text-xl"></i></a>
          <a href="mailto:jniraj050@gmail.com" className="pt-4 pb-4 pl-4"><i className="fa-solid fa-envelope text-xl"></i></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
