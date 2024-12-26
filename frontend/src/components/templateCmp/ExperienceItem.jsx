const ExperienceItem = ({ title, duration, details }) => (
    <section className="pb-4">
      <header>
        <h3 className="font-semibold text-gray-700">{title}</h3>
        <p className="text-md text-gray-500">{duration}</p>
      </header>
      <ul className="list-disc list-inside text-gray-800">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </section>
  );
  export default ExperienceItem;