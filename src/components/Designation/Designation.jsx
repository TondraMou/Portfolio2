import { VscGithubInverted } from "react-icons/vsc";
import Resume from "../Resume";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Designation = () => {
  return (
    <div className="py-24">
      <div className="lg:w-4/5 w-11/12 mx-auto flex lg:flex-row flex-col-reverse justify-between items-center gap-8">
        <div className="space-y-2 lg:w-1/2">
        <h3 className="lg:text-3xl text-2xl text-gray-700 md:text-left text-center font-bold">Hello, I am</h3>

        <h2 className="lg:text-4xl text-3xl md:text-left text-center font-extrabold">Tondra Habiba Tonny</h2>

          <h3 className="lg:text-3xl text-2xl md:text-left text-center font-extrabold pb-2">
            <span className="text-purple-600">
              <Typewriter
                words={[" A Web Developer", " A Front-End Developer"]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={1000}
              />
            </span>
          </h3>

          <p className="lg:w-11/12 text-gray-600 md:text-base text-sm font-medium md:text-left text-center pb-5">
          A web developer transforms ideas into dynamic online experiences, designing and optimizing websites for functionality and usability. I build unique, user-friendly sites using cutting-edge technologies to ensure seamless interaction and performance.
          </p>

          <div className="flex gap-4 md:justify-start justify-center items-center pb-6">
            <button>
              <Link to="https://github.com/TondraMou" target="_blank">
                <VscGithubInverted className="text-3xl rounded-full" />
              </Link>
            </button>

            <button>
              <Link
                to="https://www.linkedin.com/in/tondra-habiba-tonny"
                target="_blank"
              >
                <FaLinkedin className="text-3xl text-cyan-600" />
              </Link>
            </button>

            <button>
              <Link to="https://www.facebook.com/tondra" target="_blank">
                <FaFacebook className="text-3xl text-blue-600" />
              </Link>
            </button>
          </div>

          <Resume center={true} />
        </div>

        <figure>
          <img
            src="https://img.freepik.com/free-vector/scientist-girl-sticker-white-background_1308-79374.jpg?t=st=1738923055~exp=1738926655~hmac=0d066f0681104de2511e2aa562808ab0a01fc0a47fe82337cc64b256fe85c53d&w=740"
            alt="Image of mine"
            className="lg:w-[400px] lg:h-[400px] md:w-72 md:h-72 w-60 h-60 object-cover border-4 border-gray-300 rounded-full"
          />
        </figure>
      </div>
    </div>
  );
};

export default Designation;
