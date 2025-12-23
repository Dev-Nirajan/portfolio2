// import module.exports from "Animation.config.js";

const Hero = () => {
    return(
        <div className="flex flex-col items-center pt-85 px-4" id="home">
            <div className="flex items-center text-6xl mb-4">
                <i className="fa-solid fa-terminal"></i>
                <p className="mb-2 blink">|</p>
            </div>
            
                <p className="text-4xl md:text-6xl text-white animation">hi, <strong className="text-[#64ffda]">Nirajan</strong> here.</p>

            <p className="p-4 text-xl md:text-3xl text-[#8892b0]">I build clean, responsive websites.</p>
            <div className="text-start text-base/8 max-w-lg text-[#8892b0]">
                <p>I’m a front-end developer focused on HTML, CSS, JavaScript, React.js and TailwindCSS—learning fast and turning ideas into simple, functional web experiences.</p>
            </div>
        </div>
    );
};

export default Hero;