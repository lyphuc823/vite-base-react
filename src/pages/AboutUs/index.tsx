export default function AboutUsPage() {
  return (
    <div id="about" className="relative bg-white overflow-hidden mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100"></polygon>
          </svg>

          <div className="pt-1"></div>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h2 className="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                About me
              </h2>

              <p>
                Meet Nam, a dynamic full-stack developer with a passion for
                crafting digital solutions that seamlessly integrate both
                front-end and back-end technologies. Nam possesses a keen eye
                for detail and a creative mindset, allowing him to design
                user-friendly interfaces that not only meet but exceed user
                expectations. With a robust understanding of various programming
                languages and frameworks, Nam navigates effortlessly through the
                intricacies of web development, bringing ideas to life with
                precision and efficiency. Nam's commitment to continuous
                learning and staying abreast of industry trends ensures that his
                skills are always at the forefront of technological
                advancements. His ability to collaborate effectively with
                cross-functional teams and communicate complex technical
                concepts in a clear and concise manner sets him apart as a
                valuable asset in any development project. In addition to his
                technical prowess, Nam is dedicated to delivering solutions that
                not only meet the functional requirements but also prioritize a
                positive user experience. His holistic approach to development
                encompasses scalability, security, and performance, ensuring
                that the final product stands the test of time. Nam's journey as
                a full-stack developer reflects not just a profession but a
                genuine enthusiasm for creating digital landscapes that enhance
                the way we interact with technology. With a name synonymous with
                innovation and excellence, Nam is poised to make a lasting
                impact in the ever-evolving realm of full-stack development.
              </p>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_960_720.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
