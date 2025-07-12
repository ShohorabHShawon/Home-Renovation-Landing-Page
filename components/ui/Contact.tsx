import Image from 'next/image';

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

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden grid lg:grid-cols-2">
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4">
              Let&apos;s Create Together
            </h2>
            <p className="text-gray-600 mb-8 font-sans">
              Ready to discuss your vision? Fill out the form or give us a call.
              We&apos;re excited to learn about your project and provide a
              complimentary consultation.
            </p>
            <form className="space-y-6 font-sans">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="block w-full px-4 py-3 rounded-md border border-gray-300 bg-gray-50 focus:border-gray-800 focus:ring-2 focus:ring-gray-800 transition"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="block w-full px-4 py-3 rounded-md border border-gray-300 bg-gray-50 focus:border-gray-800 focus:ring-2 focus:ring-gray-800 transition"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="block w-full px-4 py-3 rounded-md border border-gray-300 bg-gray-50 resize-none focus:border-gray-800 focus:ring-2 focus:ring-gray-800 transition"
                ></textarea>
              </div>
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
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
