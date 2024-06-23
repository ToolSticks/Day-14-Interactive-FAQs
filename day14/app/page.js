'use client'
import { useState } from 'react';

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Why ToolStick?",
      answer: "ToolStick is the leading company in the UI/UX design and development industry. They have covered almost many industrial aspects."
    },
    {
      question: "What services does ToolStick offer?",
      answer: "ToolStick offers a wide range of services including UI/UX design, web development, mobile app development, and more."
    },
    {
      question: "How can I contact ToolStick?",
      answer: "You can contact ToolStick through their website's contact form or by emailing them directly at contact@toolstick.com."
    },
    {
      question: "Where is ToolStick located?",
      answer: "ToolStick is located in San Francisco, CA, but they offer services to clients worldwide."
    },
    {
      question: "Why choose ToolStick?",
      answer: "ToolStick has a proven track record of delivering high-quality design and development solutions tailored to clients' needs."
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <main className="min-h-screen  items-center justify-between p-24">
      <h1 className='text-center text-2xl p-5 font-bold'>FAQs</h1>
     <div className="max-w-2xl mx-auto p-4">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <button
            className="w-full text-left font-semibold text-lg p-2 bg-gray-300 "
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
          </button>
          <div className={`p-2 ${activeIndex === index ? 'block' : 'hidden'} bg-gray-100  `}>
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
    </main>
  );
}





