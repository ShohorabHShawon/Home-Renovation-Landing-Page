
import Image from "next/image";

const ProcessStep = ({
    number,
    title,
    description,
  }: {
    number: string;
    title: string;
    description: string;
  }) => (
    <div className="relative pl-12">
      <div className="absolute left-0 top-1 flex items-center justify-center w-8 h-8 rounded-full bg-[#313131] text-white font-bold">
        {number}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );

const Process = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16">
          A Seamless Journey to Your New Home
        </h2>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <ProcessStep
              number="1"
              title="Consultation & Vision"
              description="We start by listening. Understanding your needs, desires, and budget is the foundation of our partnership."
            />
            <ProcessStep
              number="2"
              title="Design & Planning"
              description="Our designers craft detailed plans and 3D renderings, ensuring every detail is perfect before we begin."
            />
            <ProcessStep
              number="3"
              title="Construction & Craftsmanship"
              description="Our skilled builders bring the vision to life with meticulous attention to quality, communication, and timelines."
            />
            <ProcessStep
              number="4"
              title="The Final Reveal"
              description="We walk you through your transformed space, ensuring absolute satisfaction. Welcome to your new home."
            />
          </div>
          <div className="relative hidden lg:block rounded-lg shadow-xl overflow-hidden w-full h-full">
            <Image
              src="/images/1.jpg"
              alt="A designer sketching renovation plans"
              width={800}
              height={900}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
