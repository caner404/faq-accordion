import IconStar from './icons/IconStar';
import * as Accordion from './accordion';

function FAQAccordion() {
  const faq = [
    {
      id: 1,
      question: 'What is Frontend Mentor, and how will it help me?',
      answer:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
    {
      id: 2,
      question: 'Is Frontend Mentor free?',
      answer:
        'Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.',
    },
    {
      id: 3,
      question: 'Can I use Frontend Mentor projects in my portfolio?',
      answer:
        "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellentway to showcase your skills to potential employers!",
    },
    {
      id: 4,
      question: "  How can I get help if I'm stuck on a Frontend Mentor challenge?",
      answer:
        "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    },
  ];

  return (
    <div className='flex flex-col justify-center rounded-xl m-5 p-10  bg-white z-50 absolute top-[18%] mt sm:top-1/3 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-[600px]'>
      <header className='flex items-center gap-6'>
        <IconStar />
        <h1 className='text-[66px] sm:text[3.5rem] font-bold'>FAQs</h1>
      </header>

      <Accordion.Root defaultValue='1'>
        {faq.map((question) => {
          return (
            <Accordion.Item
              value={question.id.toString()}
              key={question.id}
            >
              <Accordion.Trigger> {question.question}</Accordion.Trigger>
              <Accordion.Content>{question.answer}</Accordion.Content>
            </Accordion.Item>
          );
        })}
      </Accordion.Root>
    </div>
  );
}

export default FAQAccordion;
