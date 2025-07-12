import Image from 'next/image';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gray-50 py-20 lg:py-32 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/sada.jpg"
          alt="Beautifully renovated modern interior"
          fill
          className="object-cover w-full h-full"
          style={{ objectPosition: 'center' }}
          priority
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>
      {/* Centered Content */}
      {/* --- Hero Headline (Moved to Top) --- */}
      <div className="absolute top-1/6 md:top-1/6 lg:top-1/6 xl:top-1/6 left-0 w-full flex flex-col items-center justify-center text-center px-6 pt-8 z-20">
        <span className="text-gray-800 font-medium tracking-widest mb-2 text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl">
          DESIGN | BUILD | RENEW
        </span>
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold font-bronil my-4 leading-tight text-white drop-shadow-lg">
          Spaces That Inspire.
        </h1>
        <p className="text-base md:text-base lg:text-lg text-gray-800 max-w-xl mb-8 font-sans drop-shadow px-2 md:px-0">
          We are a passionate team of designers and builders dedicated to
          creating personalized spaces that reflect your lifestyle and
          aspirations. From concept to completion, we make your dream home a
          reality.
        </p>
        <a
          href="#contact"
          className="inline-block bg-white text-gray-800 px-6 py-3 rounded-md font-bold text-base duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform w-full sm:w-auto text-center
              md:px-4 md:py-2 md:text-md
              lg:px-5 lg:py-2 lg:text-lg
              xl:px-6 xl:py-3 xl:text-lg"
        >
          Begin Your Project
        </a>
      </div>
    </section>
  );
};

export default Hero;
