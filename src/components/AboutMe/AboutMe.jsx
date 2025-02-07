

const AboutMe = () => {
  return (
    <div className="lg:pt-24 pt-20 lg:pb-0 pb-10">

      <div className="lg:w-4/5 w-11/12 mx-auto flex lg:flex-row-reverse flex-col justify-between items-center">
        <div className="space-y-3 lg:w-1/2">
          <h2 className="lg:text-5xl text-4xl md:text-left text-[#363958] uppercase text-center font-extrabold pb-2">
            About Me
          </h2>

          <p className="text-gray-600 md:text-base text-sm font-medium pb-5">
           Hello, I am <span className="text-purple-600 font-bold">Tondra Habiba Tonny.</span> I'm a passionate Frontend Web Developer with a strong interest in becoming a full-stack developer. I love building interactive, user-friendly web applications using React, Tailwind CSS, and modern web technologies.

I have experience working with authentication, role-based access, payment gateways, and dynamic dashboards, using MongoDB, Firebase, and JWT authentication for secure data management. I enjoy solving complex problems and creating seamless user experiences.

I'm always eager to learn, take on new challenges, and build innovative solutions that make an impact.
          </p>

        </div>
        

        <figure>
          <img
            src="https://i.pinimg.com/originals/e7/26/c7/e726c74ac081eed50feee1433d12c998.gif"
            alt="Image of me with Laptop"
            className="lg:mt-0 mt-6 lg:h-96 lg:w-[450px] w-screen h-80 object-cover border-l-8 border-b-8 border-purple-600 rounded-xl"
          />
        </figure>
      </div>
    </div>
  );
};

export default AboutMe;
