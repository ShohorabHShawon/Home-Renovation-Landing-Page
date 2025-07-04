'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Sample portfolio data - in a real app, this would come from a database or CMS
const portfolioItems = [
  {
    id: 1,
    title: 'Modern Kitchen Renovation',
    category: 'Kitchen',
    description:
      'Complete transformation of an outdated kitchen into a modern cooking space with custom cabinets and high-end appliances.',
    images: ['/images/kitchen-before.jpg', '/images/kitchen-after.jpg'],
    client: 'Johnson Family',
    testimonial:
      'We are thrilled with our new kitchen! The team was professional and completed the work on time and within budget.',
    duration: '3 weeks',
    budget: '$45,000',
  },
  {
    id: 2,
    title: 'Luxury Bathroom Remodel',
    category: 'Bathroom',
    description:
      'Converted a standard bathroom into a spa-like retreat featuring a walk-in shower, freestanding tub, and heated floors.',
    images: ['/images/bathroom-before.jpg', '/images/bathroom-after.jpg'],
    client: 'Smith Residence',
    testimonial:
      'Our bathroom feels like a 5-star hotel! Excellent craftsmanship and attention to detail.',
    duration: '2 weeks',
    budget: '$32,000',
  },
  {
    id: 3,
    title: 'Open Concept Living Area',
    category: 'Living Room',
    description:
      'Removed walls to create an open floor plan connecting the kitchen, dining, and living areas for a more spacious feel.',
    images: ['/images/living-before.jpg', '/images/living-after.jpg'],
    client: 'Garcia Family',
    testimonial:
      'The transformation is amazing. Our home now feels so much larger and more welcoming.',
    duration: '4 weeks',
    budget: '$28,000',
  },
  {
    id: 4,
    title: 'Complete Home Exterior Makeover',
    category: 'Exterior',
    description:
      'Updated siding, replaced windows, added architectural details, and landscaped the yard for enhanced curb appeal.',
    images: ['/images/exterior-before.jpg', '/images/exterior-after.jpg'],
    client: 'Thompson Residence',
    testimonial:
      "Our neighbors keep stopping by to compliment our home's new look. Couldn't be happier!",
    duration: '6 weeks',
    budget: '$65,000',
  },
];

const categories = ['All', 'Kitchen', 'Bathroom', 'Living Room', 'Exterior'];

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-blue-300">Portfolio</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90">
            Discover exceptional home transformations that showcase our
            commitment to quality craftsmanship and innovative design solutions.
          </p>
          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
              <span>50+ Projects Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
              <span>100% Customer Satisfaction</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
              <span>Award-Winning Design</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-102'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 ${
                  index === 0 ? 'lg:col-span-2' : ''
                }`}
              >
                <div className={`relative ${index === 0 ? 'h-96' : 'h-80'}`}>
                  <Image
                    src={project.images[1]}
                    alt={`${project.title} - After`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Details Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-200 mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Project Stats */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{project.budget}</span>
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 mb-4">
                      <p className="text-sm italic">
                        &ldquo;{project.testimonial}&rdquo;
                      </p>
                      <p className="text-xs mt-1 text-gray-300">
                        - {project.client}
                      </p>
                    </div>

                    {/* CTA Button */}
                    <Link
                      href={`/portfolio/${project.id}`}
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 group-hover:scale-105"
                    >
                      View Full Project
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Create Your Dream Space?
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Join our satisfied clients and transform your home with our expert
            renovation services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-all duration-200 hover:scale-105"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-blue-600 transition-all duration-200 hover:scale-105"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
