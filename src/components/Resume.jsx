import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

const Resume = ({center}) => {
    return (
        <>
            <Link to="Tondra-Resume.pdf" target="_blank">
            <button className={`btn btn-outline border-2 border-purple-600 flex gap-x-2 items-center text-purple-600 md:px-4 hover:bg-purple-600 hover:border-none hover:text-white font-bold ${center && "block md:mx-0 mx-auto"}`}><FaDownload className="md:block hidden text-lg" /> <span className="md:block hidden">Download</span>Resume</button>
            </Link>
        </>
    );
};

export default Resume;