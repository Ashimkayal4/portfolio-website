import { DiMongodb } from "react-icons/di";
import { FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiHtml5 } from "react-icons/si";

const Skills = () => {
    return (
        <div>
            <h1 className="flex justify-center">Skills</h1>
            <div className="lg:flex justify-between max-sm:space-y-3">
                <div className="border p-10 rounded-md flex flex-col items-center gap-2">
                    <h1 className="text-red-600 text-5xl"><SiHtml5 /></h1>
                    <p>HTML</p>
                </div>  
                <div className="border p-10 rounded-md flex flex-col items-center gap-2">
                    <h1 className="text-lime-600 text-5xl"><IoLogoCss3/></h1>
                    <p>CSS</p>
                </div>  
                <div className="border p-10 rounded-md flex flex-col items-center gap-2">
                    <h1 className="text-teal-500 text-5xl"><RiTailwindCssFill/></h1>
                    <p>Tailwind</p>
                </div>
                <div className="border p-10 rounded-md flex flex-col items-center gap-2">
                    <h1 className="text-yellow-400 text-5xl"><FaJs/></h1>
                    <p>JS</p>
                </div>  
                 
                <div className="border p-10 rounded-md flex flex-col items-center gap-2">
                    <h1 className="text-teal-500 text-5xl"><FaReact/></h1>
                    <p>React</p>
                </div>  
                <div className="border p-10 rounded-md flex flex-col items-center gap-2">
                    <h1 className="text-green-400 text-5xl"><FaNodeJs/></h1>
                    <p>Nodejs</p>
                </div>  
                <div className="border p-10 rounded-md flex flex-col items-center gap-2">
                    <h1 className="text-green-500 text-5xl"><DiMongodb/></h1>
                    <p>Mongodb</p>
                </div>  
            </div>
        </div>
    );
};

export default Skills;