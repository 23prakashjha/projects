import React from 'react';

const Features = () => {
  const cards = [
    {
      title: 'IELTS Listening',
      icon: (
        <svg
          className="w-10 h-10 text-indigo-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path d="M9 19V6l12-2v13" />
          <path d="M9 6l-6 2v11l6-2m0 0v-11" />
        </svg>
      ),
      description:
        'Practice real IELTS listening tests and improve your comprehension skills with mock audio.',
      button: 'Start Listening',
    },
    {
      title: 'IELTS Reading',
      icon: (
        <svg
          className="w-10 h-10 text-indigo-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path d="M3 5h18M3 12h18M3 19h18" />
        </svg>
      ),
      description:
        'Access IELTS reading passages and questions designed to test and train your reading accuracy.',
      button: 'Practice Reading',
    },
    {
      title: 'IELTS Writing',
      icon: (
        <svg
          className="w-10 h-10 text-indigo-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path d="M16 3.13a4 4 0 015.87 5.62L10.5 20.5 5 21l.5-5.5L16 3.13z" />
        </svg>
      ),
      description:
        'Get essay writing tasks, sample answers, and step-by-step guides to master IELTS writing.',
      button: 'Improve Writing',
    },
    {
      title: 'IELTS Speaking',
      icon: (
        <svg
          className="w-10 h-10 text-indigo-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path d="M12 1v22M5 8h14M5 16h14" />
        </svg>
      ),
      description:
        'Practice speaking with AI-powered feedback, real questions, and fluency tracking.',
      button: 'Speak Now',
    },
    {
      title: 'Band Calculator',
      icon: (
        <svg
          className="w-10 h-10 text-indigo-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
      ),
      description:
        'Easily calculate your IELTS band score from your latest test attempt using our tool.',
      button: 'Check Score',
    },
    {
      title: 'Test Tips & Tricks',
      icon: (
        <svg
          className="w-10 h-10 text-indigo-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path d="M12 2a9.956 9.956 0 018.485 4.5M12 2A9.956 9.956 0 003.515 6.5M12 22V12" />
        </svg>
      ),
      description:
        'Learn powerful strategies and exam techniques from IELTS experts to boost your score.',
      button: 'Explore Tips',
    },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8" id='features'>
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Prepare for IELTS with Confidence
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Get access to expertly designed modules to help you succeed in all sections of the IELTS exam.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition p-6 text-left"
          >
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 mb-4">
              {card.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{card.description}</p>
            <button className="mt-4 inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 transition">
              {card.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
