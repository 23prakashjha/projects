import React from 'react';

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          IELTS Success Stories
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Hear what our IELTS students have to say about their journey to high band scores.
        </p>
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {/* Student 1 */}
        <TestimonialCard
          name="Ananya Sharma"
          role="Band 8.0 Achiever"
          image="https://randomuser.me/api/portraits/women/65.jpg"
          review="The writing modules and AI feedback helped me improve my essays significantly. I finally scored a Band 8!"
          rating={4}
        />

        {/* Student 2 */}
        <TestimonialCard
          name="James Liu"
          role="Band 7.5 - Academic"
          image="https://randomuser.me/api/portraits/men/51.jpg"
          review="The mock tests and speaking practice were exactly what I needed. Highly recommend for serious IELTS prep!"
          rating={5}
        />

        {/* Student 3 */}
        <TestimonialCard
          name="Fatima Khan"
          role="General Training Candidate"
          image="https://randomuser.me/api/portraits/women/32.jpg"
          review="The reading strategy lessons really helped me boost my speed. I felt super confident on test day."
          rating={3}
        />
      </div>
    </section>
  );
};

const TestimonialCard = ({ name, role, image, review, rating }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition" id='testimonials'>
      <div className="flex items-center space-x-4">
        <img
          className="w-14 h-14 rounded-full object-cover"
          src={image}
          alt={name}
        />
        <div>
          <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-700">“{review}”</p>
      </div>
      <div className="mt-4 flex space-x-1 text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <Star key={i} empty={i >= rating} />
        ))}
      </div>
    </div>
  );
};

// ⭐ Star Icon Component
const Star = ({ empty = false }) => {
  return (
    <svg
      className={`w-5 h-5 ${empty ? 'text-gray-300' : 'text-yellow-400'} fill-current`}
      viewBox="0 0 20 20"
    >
      <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.562-.955L10 0l2.95 5.955 6.562.955-4.756 4.635 1.122 6.545z" />
    </svg>
  );
};

export default Testimonials;
