const Projects = () => {
    return (
        <div className="py-12">
            <h1 className="text-3xl font-bold text-center mb-10 text-indigo-600">Projects</h1>
            <div className="flex flex-wrap justify-center gap-8">
                {/* Card 1 */}
                <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
                    <img
                        src="https://i.ibb.co.com/B2VX3Lr2/Screenshot-124.png"
                        alt="Parcel Management System"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                        <h2 className="text-xl font-semibold text-indigo-600 mb-2">Parcel Management System</h2>
                        <p className="text-gray-700 mb-4">A complete parcel management system with real-time tracking and delivery services.</p>
                        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                            View Details
                        </button>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
                    <img
                        src="https://i.ibb.co.com/gZbMTPLf/Screenshot-126.png"
                        alt="E-commerce Platform"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                        <h2 className="text-xl font-semibold text-indigo-600 mb-2">Language Exchange</h2>
                        <p className="text-gray-700 mb-4">An Online Tutor Booking Platform designed to connect users with tutors across various languages and subjects.</p>
                        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                            View Details
                        </button>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
                    <img
                        src="https://i.ibb.co.com/zTvpP5nQ/Screenshot-125.png"
                        alt="Task Management App"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                        <h2 className="text-xl font-semibold text-indigo-600 mb-2">E-Commerce Website</h2>
                        <p className="text-gray-700 mb-4">EquiSports is an online store dedicated to providing sports equipments</p>
                        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
