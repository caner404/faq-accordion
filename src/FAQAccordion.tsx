import IconStar from './icons/IconStar';
import * as Accordion from './accordion';

function FAQAccordion() {
  return (
    <div className='flex flex-col justify-center gap-4 rounded-xl m-5 p-5  bg-white z-50 absolute top-[18%] mt sm:top-1/3 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-[520px]'>
      <header className='flex items-center gap-4'>
        <IconStar />
        <h1 className='text-3xl sm:text[3.5rem]'>FAQs</h1>
      </header>
      <section>
        <Accordion.Root>
          <Accordion.Item id='item1'>
            <Accordion.Trigger>What is Frontend Mentor, and how will it help me?</Accordion.Trigger>
            <Accordion.Content>
              Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills
              with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item id='item2'>
            <Accordion.Trigger>Is Frontend Mentor free?</Accordion.Trigger>
            <Accordion.Content>
              Yes, Frontend Mentor has free challenges, but also offers premium challenges and a PRO subscription for
              more features.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item id='item3'>
            <Accordion.Trigger>Can I use Frontend Mentor projects in my portfolio?</Accordion.Trigger>
            <Accordion.Content>
              Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to
              showcase your skills to potential employers!
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item id='item4'>
            <Accordion.Trigger>How can I get help if I'm stuck on a challenge?</Accordion.Trigger>
            <Accordion.Content>
              The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you
              can ask questions and seek support from other community members.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </section>
    </div>
  );
}

export default FAQAccordion;
