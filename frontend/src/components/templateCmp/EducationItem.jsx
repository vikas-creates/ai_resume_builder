const EducationItem = ({ institution, duration, details }) => (
    <section className="pb-4">
      <header>
        <h3 className="text-lg font-semibold text-gray-700">{institution}</h3>
        <p className="text-md text-gray-500">{duration}</p>
      </header>
      <ul className="list-disc list-inside text-gray-800">
        {details.map(({ label, value }, index) => (
          <li key={index}>
            <span className="font-semibold">{label}:</span> {value}
          </li>
        ))}
      </ul>
    </section>
  );
  export default EducationItem; 