import FAQAccordion from './FAQAccordion';
import IconBackgroundPatternDesktop from './icons/IconBackgroundPatternDesktop';
import IconBackgroundPatternMobile from './icons/IconBackgroundPatternMobile';

function App() {
  return (
    <main className='relative flex flex-col justify-center items-center w-[100vw] h-[100vh]'>
      <div className='w-full h-[320px] bg-dark-purple'>
        <div className='hidden sm:block'>
          <IconBackgroundPatternDesktop />
        </div>
        <div className='sm:hidden'>
          <IconBackgroundPatternMobile />
        </div>
      </div>
      <div className='w-full bg-light-pink flex-1'></div>
      <FAQAccordion />
    </main>
  );
}

export default App;
