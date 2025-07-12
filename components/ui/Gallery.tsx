
import Image from "next/image";

const Gallery = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">
            Our Signature Work
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto font-sans">
            Explore a selection of our recent projects that showcase our
            commitment to quality and style.
          </p>
        </div>

        {/* Masonry-style Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 h-auto md:h-[42rem]">
          {/* Image 1: Large Feature Image */}
          <div className="md:col-span-2 md:row-span-2 rounded-lg overflow-hidden">
            <Image
              src="/images/2.jpg"
              alt="Modern kitchen with island"
              width={800}
              height={1200}
              className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>

          {/* Image 2: Top Right */}
          <div className="md:col-span-2 rounded-lg overflow-hidden">
            <Image
              src="/images/3.jpg"
              alt="Spacious living room with fireplace"
              width={800}
              height={600}
              className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>

          {/* Image 3: Bottom Right 1 */}
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/images/4.jpg"
              alt="Luxury bathroom with freestanding tub"
              width={600}
              height={600}
              className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>

          {/* Image 4: Bottom Right 2 */}
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/images/5.jpg"
              alt="Custom built-in shelving unit"
              width={600}
              height={600}
              className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
