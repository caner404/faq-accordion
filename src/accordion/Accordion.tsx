import { PropsWithChildren, createContext, useContext, useState } from 'react';
import IconPlus from '../icons/IconPlus';
import IconMinus from '../icons/IconMinus';

interface AccordionContextType {
  openItem: string | null;
  toggle: (item: string) => void;
}
const AccordionContext = createContext<AccordionContextType | null>(null);
export interface AccordionProps {
  defaultValue?: string;
}
function Accordion(props: PropsWithChildren<AccordionProps>) {
  const [openItem, setOpenItem] = useState<string | null>(props.defaultValue ?? null);

  const toggle = (item: string) => {
    setOpenItem((prev) => (prev === item ? null : item));
  };

  return <AccordionContext.Provider value={{ openItem, toggle }}>{props.children}</AccordionContext.Provider>;
}

interface AccordionItemContextType {
  value: string;
}
const AccordionItemContext = createContext<AccordionItemContextType | null>(null);
export interface AccordionItemProps {
  value: string;
}

function AccordionItem(props: PropsWithChildren<AccordionItemProps>) {
  return <AccordionItemContext.Provider value={{ value: props.value }}>{props.children}</AccordionItemContext.Provider>;
}

function AccordionTrigger({ children }: PropsWithChildren) {
  const { openItem, toggle } = useAccordionContext();
  const { value } = useAccordionItemContext();
  return (
    <section
      className='flex justify-between items-center'
      onClick={() => toggle(value)}
    >
      <details className='flex items-center justify-between gap-10 border-t border-light-pink py-6 hover:cursor-pointer'>
        <summary className='font-semibold text-dark-purple hover:text-custom-pink text-base list-none '>
          {children}
        </summary>
      </details>
      {openItem === value ? <IconMinus /> : <IconPlus />}
    </section>
  );
}

function AccordionContent({ children }: PropsWithChildren) {
  const { openItem } = useAccordionContext();
  const { value } = useAccordionItemContext();
  const isOpen = openItem === value;

  return (
    <div className={`overflow-hidden transition-[max-height] duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
      <p className='pb-6 text-pale-purple text-base'>{children}</p>
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
