import { FaGithub, FaLinkedin } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="flex max-sm:flex-col bg-gradient-to-r from-purple-600 to-indigo-600">
            <div className="text-white space-y-3 lg:w-1/2 p-10 flex flex-col justify-center items-start">
                <h1 className="text-4xl font-bold">Hello, I'm</h1>
                <h1 className="text-5xl font-extrabold">Ashim Kayal</h1>
                <p className="text-xl">Frontend Web Developer</p>
                <p className="text-md">I create beautiful and functional websites.</p>
                <div className="flex gap-5">
                    <button className="rounded-full border p-3 hover:bg-gray-200 transition">
                        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30} />
                        </a>
                    </button>
                    <button className="rounded-full border p-3 hover:bg-gray-200 transition">
                        <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30} />
                        </a>
                    </button>
                </div>
                <a href="/path-to-your-resume.pdf" className="btn btn-success text-white mt-5" download>
                    Download Resume
                </a>
            </div>
            <div className="lg:w-1/2 relative">
                <img
                    src="https://i.ibb.co/SDvk3bhY/FB-IMG-1647102273537-2.jpg"
                    alt="Ashim Kayal"
                    className="object-cover w-full h-full p-4 rounded-full shadow-lg"
                />
            </div>
        </div>
    );
};

export default Banner;
