import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section
        id="hero"
        className="relative h-screen grid grid-cols-1 grid-rows-7 overflow-hidden"
      >
        <Image
          src="/hero.jpg"
          alt="Home renovation background"
          fill
          className="object-cover z-10"
          priority
        />
        <div className="row-start-3">
          <div className="relative z-10 container mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">
              Transform Your Home
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-black">
              Professional home renovation services that bring your vision to
              life with quality craftsmanship and attention to detail.
            </p>
            <button className="bg-gray-800 text-gray-100 px-8 py-3 rounded-md font-semibold hover:bg-gray-600 transition">
              <Link href="#contact" className="text-white">
                Contact Now
              </Link>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 mx-auto bg-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">About Us</h2>
            <p className="text-lg text-gray-700 mb-6">
              With over 15 years of experience in home renovation, we specialize
              in transforming spaces into beautiful, functional homes. Our team
              of skilled craftsmen is committed to delivering exceptional
              results on time and within budget.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">100%</div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border border-gray-200 p-6 rounded-lg bg-gray-50">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/kitchen.jpg"
                  alt="Kitchen Remodeling"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Kitchen Remodeling
              </h3>
              <p className="text-gray-600">
                Complete kitchen transformations with modern designs and premium
                materials.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg bg-gray-50">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/bathroom.jpg"
                  alt="Bathroom Renovation"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Bathroom Renovation
              </h3>
              <p className="text-gray-600">
                Luxury bathroom upgrades that combine style and functionality.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg bg-gray-50">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/livingroom.jpg"
                  alt="Living Space Makeover"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Living Space Makeover
              </h3>
              <p className="text-gray-600">
                Transform your living areas into comfortable and elegant spaces.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg bg-gray-50">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/extension.jpg"
                  alt="Home Extensions"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Home Extensions
              </h3>
              <p className="text-gray-600">
                Add value and space to your home with seamless extensions.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg bg-gray-50">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/flooring.jpg"
                  alt="Flooring Installation"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Flooring Installation
              </h3>
              <p className="text-gray-600">
                Professional installation of hardwood, tile, and luxury vinyl
                flooring.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg bg-gray-50">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/custom.jpg"
                  alt="Custom Carpentry"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Custom Carpentry
              </h3>
              <p className="text-gray-600">
                Bespoke woodwork and built-in solutions tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 mb-4">
                &ldquo;Outstanding work! They transformed our outdated kitchen
                into a modern masterpiece. Highly recommended.&rdquo;
              </p>
              <div className="font-semibold text-gray-900">Sarah Johnson</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 mb-4">
                &ldquo;Professional, reliable, and delivered exactly what we
                envisioned. Our bathroom renovation exceeded
                expectations.&rdquo;
              </p>
              <div className="font-semibold text-gray-900">Mike Chen</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 mb-4">
                &ldquo;The team was punctual, clean, and the quality of work is
                exceptional. Our living room looks amazing!&rdquo;
              </p>
              <div className="font-semibold text-gray-900">Emma Davis</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-16 bg-gray-10 text-black">
        <div className="container mx-auto px-6 text-center max-w-7xl">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let&apos;s bring your
            renovation dreams to life.
          </p>
          <Link
            href="#contact"
            className="bg-gray-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition mr-4 inline-block"
          >
            Contact
          </Link>
          <button className="border border-gray-900 text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-900 hover:text-white transition">
            View Portfolio
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="font-semibold text-gray-900 w-20">
                    Phone:
                  </span>
                  <span className="text-gray-700">(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-gray-900 w-20">
                    Email:
                  </span>
                  <span className="text-gray-700">info@homerenovation.com</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-gray-900 w-20">
                    Address:
                  </span>
                  <span className="text-gray-700">
                    123 Main Street, City, State 12345
                  </span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-900 text-gray-700"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-900 text-gray-700"
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-900 text-gray-700"
                />
                <textarea
                  placeholder="Project Details"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-900 text-gray-700"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gray-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-600 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-6 py-12 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Home Renovation Pro</h3>
              <p className="text-gray-400 mb-4">
                Transforming homes with quality craftsmanship and exceptional
                service for over 15 years.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.566-1.35 2.14-2.21z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Kitchen Remodeling
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Bathroom Renovation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Living Space Makeover
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Home Extensions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Custom Carpentry
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Free Quote
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>(555) 123-4567</p>
                <p>info@homerenovation.com</p>
                <p>
                  123 Main Street
                  <br />
                  City, State 12345
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Home Renovation Pro. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition text-sm"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
