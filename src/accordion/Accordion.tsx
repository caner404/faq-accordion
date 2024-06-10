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
  return (
    <AccordionItemContext.Provider value={{ id }}>
      <div>{children}</div>
    </AccordionItemContext.Provider>
  );
}

function AccordionTrigger({ children }: PropsWithChildren) {
  const { openItem, toggle } = useAccordionContext();
  const { id } = useAccordionItemContext();
  return (
    <div
      onClick={() => toggle(id)}
      className='flex items-center justify-between gap-10 border-t border-light-pink py-5 hover:cursor-pointer'
    >
      <h2 className='font-semibold text-dark-purple hover:text-custom-pink text-base'>{children}</h2>

      <button>{openItem === id ? <IconMinus /> : <IconPlus />}</button>
    </div>
  );
}

function AccordionContent({ children }: PropsWithChildren) {
  const { openItem } = useAccordionContext();
  const { id } = useAccordionItemContext();
  const isOpen = openItem === id;

  return isOpen ? <p className='py-4 text-pale-purple text-base'>{children}</p> : null;
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
