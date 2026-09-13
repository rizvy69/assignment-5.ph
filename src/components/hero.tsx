import heroimg from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col items-center md:flex-row md:justify-between">
        <div className="text-center md:w-1/2 md:text-left">
          <h1 className="text-5xl font-bold md:text-5xl">
            Build Your Ideal
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-4 text-sm text-gray-500 md:w-3/4">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-5 flex justify-center gap-3 md:justify-start">
            <button className="button-gradient p-3 rounded-xl text-white ">
              Explore Technologies
            </button>

            <button className="btn btn-outline p-6 "> Learn More</button>
          </div>
        </div>

        <div className="mt-8 md:mt-0 md:w-1/2">
          <img
            src={heroimg}
            alt="Development Stack"
            className="w-[300px] md:w-[450px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;