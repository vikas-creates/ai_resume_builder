const ContactDetails = ({ contacts }) => (
    <ul className="list-inside">
      {contacts.map(({ type, label, link }, index) => (
        <li key={index} className="mt-1 leading-normal text-gray-500">
          <a href={link} className="group">
            <span className="mr-2 text-lg font-semibold text-gray-700">{label}:</span>
            {link}
            <span className="inline-block font-normal text-gray-500 group-hover:text-gray-700">↗</span>
          </a>
        </li>
      ))}
    </ul>
  );
export default ContactDetails;