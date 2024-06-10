import { PropsWithChildren, createContext, useContext, useState } from 'react';
import IconPlus from '../icons/IconPlus';
import IconMinus from '../icons/IconMinus';

interface AccordionContextType {
  openItem: string | null;
  toggle: (item: string) => void;
}
interface AccordionItemContextType {
  id: string;
}

const AccordionContext = createContext<AccordionContextType | null>(null);
const AccordionItemContext = createContext<AccordionItemContextType | null>(null);

function Accordion(props: PropsWithChildren) {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggle = (item: string) => {
    setOpenItem((prev) => (prev === item ? null : item));
  };

  return <AccordionContext.Provider value={{ openItem, toggle }}>{props.children}</AccordionContext.Provider>;
}

function AccordionItem({ children, id }: PropsWithChildren<{ id: string }>) {
  return <AccordionItemContext.Provider value={{ id }}>{children}</AccordionItemContext.Provider>;
}

function AccordionTrigger({ children }: PropsWithChildren) {
  const { openItem, toggle } = useAccordionContext();
  const { id } = useAccordionItemContext();
  return (
    <section
      className='flex justify-between items-center'
      onClick={() => toggle(id)}
    >
      <details className='flex items-center justify-between gap-10 border-t border-light-pink py-5 hover:cursor-pointer'>
        <summary className='font-semibold text-dark-purple hover:text-custom-pink text-base list-none'>
          {children}
        </summary>
      </details>
      <button aria-label='Button Open or Close question'>{openItem === id ? <IconMinus /> : <IconPlus />}</button>
    </section>
  );
}

function AccordionContent({ children }: PropsWithChildren) {
  const { openItem } = useAccordionContext();
  const { id } = useAccordionItemContext();
  const isOpen = openItem === id;

  return (
    <div className={`overflow-hidden transition-[max-height] duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
      <p className='py-2 text-pale-purple text-base'>{children}</p>
    </div>
  );
}

export function useAccordionContext() {
  const context = useContext(AccordionContext);
  if (!context) throw new Error('AccordionContext was used outside of DarkModeProvider');
  return context;
}
export function useAccordionItemContext() {
  const context = useContext(AccordionItemContext);
  if (!context) throw new Error('AccordionItemContext was used outside of DarkModeProvider');
  return context;
}

const Root = Accordion;
const Item = AccordionItem;
const Trigger = AccordionTrigger;
const Content = AccordionContent;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Content, Item, Root, Trigger };
