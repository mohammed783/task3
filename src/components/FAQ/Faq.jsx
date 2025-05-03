import  { useState } from 'react';
import '../FAQ/Faq.css';

const faqData = [
  {
    question: "What are the school hours at Little Learners Academy?",
    answer: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up."
  },
  {
    question: "How do you handle food allergies and dietary restrictions?",
    answer: "We work closely with parents to accommodate food allergies and dietary restrictions, ensuring a safe environment for all children."
  },
  {
    question: "Is there a uniform policy for students?",
    answer: "Yes, students are required to follow a simple uniform policy to promote equality and school spirit."
  },
  {
    question: "What is the teacher-to-student ratio at Little Learners Academy?",
    answer: "Our teacher-to-student ratio is kept low to ensure personalized attention for each child."
  },
  {
    question: "What extracurricular activities are available for students?",
    answer: "We offer a variety of activities including art, music, sports, and language classes."
  },
  
  {
    question: "How do you handle discipline and behavior management?",
    answer: "We use positive reinforcement and age-appropriate strategies to guide student behavior."
  },
  {
    question: "What extracurricular activities are available for students?",
    answer: "We offer a variety of activities including art, music, sports, and language classes."
  },
  {
    question: "How do I apply for admission to Little Learners Academy?",
    answer: "You can apply by filling out the online application form on our website or contacting our admissions office."
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-wrapper">
        <div className="happy">
        Solutions For The Doubts
        </div>
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <p>
      Find all the essential information you need in our FAQ section,
       designed to address the most frequently asked questions
        and help you make informed
        decisions for your childs education.
      </p>

      <div className="faq-container">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question-row" onClick={() => toggle(index)}>
              <span>{item.question}</span>
              <button className="faq-button">
                {openIndex === index ? '-' : '+'}
              </button>
            </div>
            {openIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
