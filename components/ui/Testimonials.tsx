'use client';
import { useRef } from 'react';

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

const TestimonialCard = ({
  quote,
  author,
  location,
}: {
  quote: string;
  author: string;
  location: string;
}) => (
  <div className="bg-gray-50 p-5 sm:p-8 rounded-lg shadow-md flex-shrink-0 w-72 sm:w-96">
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <StarIcon key={i} className="w-5 h-5 text-[#313131]" />
      ))}
    </div>
    <p className="text-gray-700 text-base sm:text-lg italic mb-6">
      &ldquo;{quote}&rdquo;
    </p>
    <div className="text-right">
      <p className="font-bold text-gray-900 text-base sm:text-lg">{author}</p>
      <p className="text-sm text-gray-500">{location}</p>
    </div>
  </div>
);

const testimonials = [
  {
    quote:
      "The entire process was smoother than we could have ever imagined. The team's craftsmanship.",
    author: 'The Hamilton Family',
    location: 'Austin, TX',
  },
  {
    quote:
      "They didn't just renovate our house; they transformed it into our dream home. Every detail was handled with care and precision.",
    author: 'James & Chloe',
    location: 'Denver, CO',
  },
  {
    quote:
      'An absolute pleasure to work with. They listened to our ideas and brought them to life beautifully, on time and on budget.',
    author: 'Maria Rodriguez',
    location: 'Miami, FL',
  },
  {
    quote:
      "Professional, reliable, and creative. We couldn't be happier with the results of our renovation.",
    author: 'Liam & Ava',
    location: 'Seattle, WA',
  },
  {
    quote:
      'From start to finish, the team exceeded our expectations. Highly recommended!',
    author: 'Olivia Chen',
    location: 'San Francisco, CA',
  },
  {
    quote:
      'Their attention to detail and commitment to quality is unmatched. We love our new space!',
    author: 'The Patel Family',
    location: 'Dallas, TX',
  },
];

const Testimonials = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth * 0.8;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Trusted by Homeowners</h2>
        </div>
        <div className="relative">
          {/* Left Arrow Button */}
          <button
            aria-label="Scroll testimonials left"
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-100 transition"
            onClick={() => scroll('left')}
            type="button"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div
            ref={carouselRef}
            className="flex gap-8 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory"
            style={{ scrollBehavior: 'smooth', cursor: 'grab' }}
            onMouseDown={(e) => {
              const carousel = carouselRef.current;
              if (!carousel) return;
              const startX = e.pageX - carousel.offsetLeft;
              const scrollLeft = carousel.scrollLeft;
              let isDown = true;

              const onMouseMove = (moveEvent: MouseEvent) => {
                if (!isDown) return;
                moveEvent.preventDefault();
                const x = moveEvent.pageX - carousel.offsetLeft;
                const walk = (x - startX) * 1.2;
                carousel.scrollLeft = scrollLeft - walk;
              };

              const onMouseUp = () => {
                isDown = false;
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);
                if (carousel) carousel.style.cursor = 'grab';
              };

              document.addEventListener('mousemove', onMouseMove);
              document.addEventListener('mouseup', onMouseUp);
              carousel.style.cursor = 'grabbing';
            }}
            onMouseLeave={() => {
              const carousel = carouselRef.current;
              if (carousel) carousel.style.cursor = 'grab';
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="snap-center flex-shrink-0 w-72 sm:w-96 flex"
                style={{ minHeight: 260, height: 260 }}
              >
                <TestimonialCard {...t} />
              </div>
            ))}
          </div>
          {/* Right Arrow Button */}
          <button
            aria-label="Scroll testimonials right"
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-100 transition"
            onClick={() => scroll('right')}
            type="button"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
