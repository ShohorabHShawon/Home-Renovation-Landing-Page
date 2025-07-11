import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

// --- SVG Icon Components ---
const StarIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
);

// --- Reusable Components ---
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

const TestimonialCard = ({
  quote,
  author,
  location,
}: {
  quote: string;
  author: string;
  location: string;
}) => (
  <div className="bg-white p-8 rounded-lg shadow-md">
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <StarIcon key={i} className="w-5 h-5 text-[#313131]" />
      ))}
    </div>
    <p className="text-gray-700 text-lg italic mb-6">&ldquo;{quote}&rdquo;</p>
    <div className="text-right">
      <p className="font-bold text-gray-900 text-lg">{author}</p>
      <p className="text-sm text-gray-500">{location}</p>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] font-serif text-gray-800">
      <main>
        <Navbar />
        {/* --- Hero Section --- */}
        <section
          id="hero"
          className="max-w-7xl mx-auto container px-6 py-20 lg:py-32"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <span className="text-[#313131] font-medium">
                DESIGN | BUILD | RENEW
              </span>
              <h1 className="text-5xl md:text-7xl font-bold my-4 leading-tight">
                Spaces That Inspire.
              </h1>
              <p className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 mb-8 font-sans">
                We are a passionate team of designers and builders dedicated to
                creating personalized spaces that reflect your lifestyle and
                aspirations. From concept to completion, we make your dream home
                a reality.
              </p>
              <a
                href="#contact"
                className="inline-block bg-[#313131] text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-[#2a2a2a] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Begin Your Project
              </a>
            </div>
            <div className="relative h-[60vh] lg:h-[70vh] rounded-lg shadow-2xl overflow-hidden">
              <Image
                src="/images/hero.jpg"
                alt="Beautifully renovated modern interior"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* --- Our Process Section --- */}
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
              <div className="relative hidden lg:block h-[90vh] rounded-lg shadow-xl overflow-hidden">
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

        {/* --- Gallery Section --- */}
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

        {/* --- Testimonials Section --- */}
        <section id="testimonials" className="py-20 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold">Trusted by Homeowners</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard
                quote="The entire process was smoother than we could have ever imagined. The team's craftsmanship and professionalism were second to none."
                author="The Hamilton Family"
                location="Austin, TX"
              />
              <TestimonialCard
                quote="They didn't just renovate our house; they transformed it into our dream home. Every detail was handled with care and precision."
                author="James & Chloe"
                location="Denver, CO"
              />
              <TestimonialCard
                quote="An absolute pleasure to work with. They listened to our ideas and brought them to life beautifully, on time and on budget."
                author="Maria Rodriguez"
                location="Miami, FL"
              />
            </div>
          </div>
        </section>

        {/* --- Contact & CTA Section --- */}
        <section id="contact" className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden grid lg:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-4xl font-bold mb-4">
                  Let&apos;s Create Together
                </h2>
                <p className="text-gray-600 mb-8 font-sans">
                  Ready to discuss your vision? Fill out the form or give us a
                  call. We&apos;re excited to learn about your project and
                  provide a complimentary consultation.
                </p>
                <form action="#" method="POST" className="space-y-5 font-sans">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    className="w-full px-5 py-3 bg-gray-100 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#313131]"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="w-full px-5 py-3 bg-gray-100 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#313131]"
                  />
                  <textarea
                    name="message"
                    placeholder="Briefly describe your project..."
                    rows={5}
                    required
                    className="w-full px-5 py-3 bg-gray-100 rounded-md border border-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#313131] min-h-[160px]"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-gray-800 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-900 transition-colors duration-300 flex items-center justify-center"
                  >
                    Send Inquiry <ArrowRightIcon className="w-5 h-5 ml-2" />
                  </button>
                </form>
              </div>
              <div className="relative hidden lg:block">
                <Image
                  src="/images/4.jpg"
                  alt="A blueprint and design tools"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="bg-gray-800 text-gray-400 font-sans">
        <div className="container mx-auto px-6 py-12 text-center max-w-7xl">
          <p className="text-2xl font-serif font-bold text-white mb-4">
            Renovate
          </p>
          <p className="mb-4">Creating Timeless Spaces</p>
          <p>
            &copy; {new Date().getFullYear()} Renovate. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
