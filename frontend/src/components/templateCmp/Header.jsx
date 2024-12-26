const Header = ({ name, title, location, initials }) => (
    <header className="inline-flex justify-between items-baseline mb-2 w-full align-top border-b-4 border-gray-300">
      <section>
        <h1 className="mb-2 text-5xl font-bold text-gray-700">{name}</h1>
        <h2 className="text-2xl font-semibold text-gray-700 leading-snugish">{title}</h2>
        <h3 className="text-xl font-semibold text-gray-500 leading-snugish">{location}</h3>
      </section>
      <section className="initials-container bg-gray-700 text-white flex space-x-2 px-3 py-6">
        {initials.map((letter, index) => (
          <span key={index} className="initial text-center">{letter}</span>
        ))}
      </section>
    </header>
  );
  export default Header;