import { FaGithub, FaLinkedin } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="flex max-sm:flex-col">
            <div className="border space-y-3 lg:w-1/2 p-10">
                <h1>Hello, i am </h1>
                <h1>Ashim kayal</h1>
                <p>Frontend web developer</p>
                <p>I make beautiful websites</p>
                <div className="flex gap-5">
                    <button className="rounded-full border p-2"><a href=""><FaGithub/></a></button>
                    <button className="rounded-full border p-2"><a href=""><FaLinkedin/></a></button>
                </div>
                <button className="btn btn-success text-white">Resume</button>
            </div>
            <div className="lg:w-1/2 border">
                <h1>img</h1>
            </div>
        </div>
    );
};

export default Banner;