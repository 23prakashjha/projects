import React from 'react';
import learning from '../assets/learning.jpg'; 
import reading from '../assets/reading.jpg'; 
import writing from '../assets/writing.jpg'; 
import speaking from '../assets/speaking.jpg'; 
import calculator from '../assets/calculator.jpg'; 
import test from '../assets/test.jpg';

const courses = [
  {
    title: 'IELTS Listening Mastery',
    description: 'Master IELTS Listening with real tests, tips, and audio practice materials.',
    image: learning,
  },
  {
    title: 'IELTS Reading Techniques',
    description: 'Sharpen your reading skills and speed for academic and general IELTS tests.',
    image: reading,
  },
  {
    title: 'IELTS Writing Task 1 & 2',
    description: 'Learn how to structure high-band essays and reports for IELTS Writing.',
    image: writing,
  },
  {
    title: 'IELTS Speaking Practice',
    description: 'Practice speaking with mock tests and real-time fluency tracking.',
    image: speaking,
  },
  {
    title: 'IELTS Band Calculator',
    description: 'Calculate your expected band score based on mock test performance.',
    image: calculator,
  },
  {
    title: 'Test Day Strategies',
    description: 'Tips and strategies to boost your confidence and maximize your score on test day.',
    image: test,
  },
];

const Courses = () => {
  return (
    <section className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-8" id="courses">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          🎓 Explore Our IELTS Courses
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Get expert-designed learning paths tailored to boost your IELTS band score with step-by-step strategies and full support.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {course.title}
              </h3>
              <p className="text-gray-600 text-sm flex-grow">
                {course.description}
              </p>
              <button className="mt-6 inline-block px-5 py-3 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 transition duration-300">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
