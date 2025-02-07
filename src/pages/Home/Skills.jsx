import { DiMongodb } from "react-icons/di";
import { FaJs, FaNodeJs, FaReact, FaServer } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiHtml5 } from "react-icons/si";
import { FaFire } from "react-icons/fa";

const Skills = () => {
    return (
        <div className="">
            <h1 className="text-3xl font-bold text-center text-lime-600">Skills</h1>

            {/* Front-End Technologies */}
            <div className="bg-white py-12  shadow-lg rounded-lg">
                <h2 className="text-2xl font-semibold text-center text-indigo-600 mb-8">Front-End Technologies</h2>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 px-6">
                    <div className="border p-8 rounded-md flex flex-col items-center gap-4 shadow-md hover:shadow-xl transition duration-300 ease-in-out">
                        <h1 className="text-red-600 text-6xl"><SiHtml5 /></h1>
                        <p className="text-lg font-semibold">HTML</p>
                    </div>
                    <div className="border p-8 rounded-md flex flex-col items-center gap-4 shadow-md hover:shadow-xl transition duration-300 ease-in-out">
                        <h1 className="text-lime-600 text-6xl"><IoLogoCss3 /></h1>
                        <p className="text-lg font-semibold">CSS</p>
                    </div>
                    <div className="border p-8 rounded-md flex flex-col items-center gap-4 shadow-md hover:shadow-xl transition duration-300 ease-in-out">
                        <h1 className="text-teal-500 text-6xl"><RiTailwindCssFill /></h1>
                        <p className="text-lg font-semibold">Tailwind</p>
                    </div>
                    <div className="border p-8 rounded-md flex flex-col items-center gap-4 shadow-md hover:shadow-xl transition duration-300 ease-in-out">
                        <h1 className="text-yellow-400 text-6xl"><FaJs /></h1>
                        <p className="text-lg font-semibold">JavaScript</p>
                    </div>
                    <div className="border p-8 rounded-md flex flex-col items-center gap-4 shadow-md hover:shadow-xl transition duration-300 ease-in-out">
                        <h1 className="text-teal-500 text-6xl"><FaReact /></h1>
                        <p className="text-lg font-semibold">React</p>
                    </div>
                </div>
            </div>

            {/* Back-End Technologies */}
            <div className="bg-gray-50 py-12 shadow-lg rounded-lg">
                <h2 className="text-2xl font-semibold text-center text-indigo-600 mb-8">Back-End Technologies</h2>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 px-6">
                    <div className="border p-8 rounded-md flex flex-col items-center gap-4 shadow-md hover:shadow-xl transition duration-300 ease-in-out">
                        <h1 className="text-green-400 text-6xl"><FaNodeJs /></h1>
                        <p className="text-lg font-semibold">Node.js</p>
                    </div>
                    <div className="border p-8 rounded-md flex flex-col items-center gap-4 shadow-md hover:shadow-xl transition duration-300 ease-in-out">
                        <h1 className="text-green-500 text-6xl"><DiMongodb /></h1>
                        <p className="text-lg font-semibold">MongoDB</p>
                    </div>
                    <div className="border p-8 rounded-md flex flex-col items-center gap-4 shadow-md hover:shadow-xl transition duration-300 ease-in-out">
                        <h1 className="text-indigo-500 text-6xl"><FaServer /></h1>
                        <p className="text-lg font-semibold">Express.js</p>
                    </div>
                    <div className="border p-8 rounded-md flex flex-col items-center gap-4 shadow-md hover:shadow-xl transition duration-300 ease-in-out">
                        <h1 className="text-orange-500 text-6xl"><FaFire /></h1>
                        <p className="text-lg font-semibold">Firebase</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
