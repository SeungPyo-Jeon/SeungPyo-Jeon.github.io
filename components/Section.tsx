import React from 'react';

interface SectionProps {
  id?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = "" }) => {
  return (
    <section id={id} className={`py-6 border-b border-slate-200 last:border-0 ${className}`}>
      <div className="flex flex-col md:flex-row gap-6 md:gap-12">
        <div className="md:w-1/4">
          <h2 className="text-xl font-bold text-slate-800 uppercase tracking-wider sticky top-24">
            {title}
          </h2>
        </div>
        <div className="md:w-3/4 w-full">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;