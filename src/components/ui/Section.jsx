import './Section.css';

function Section({ children, className = '', id }) {
  return (
    <section id={id} className={`landing-section ${className}`.trim()}>
      <div className="section-container">
        {children}
      </div>
    </section>
  );
}

export default Section;
