const Section = ({ title, children }) => (
    <section className="pb-4 mt-4 mb-4 border-b-4 border-gray-300">
      <h2 className="mb-2 text-xl font-bold tracking-widest text-gray-700">{title}</h2>
      {children}
    </section>
  );
  export default Section;