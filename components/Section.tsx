import React from 'react';

interface SectionProps {
  id?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = "" }) => {
  return (
    <section id={id} className={`py-8 border-b border-slate-200 last:border-0 ${className}`}>
      <div className="flex flex-col gap-4">
        <div className="w-full">
          <h2 className="text-xl font-bold text-slate-800 uppercase tracking-wider mb-2">
            {title}
          </h2>
        </div>
        <div className="w-full">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;