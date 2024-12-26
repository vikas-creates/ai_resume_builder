const SkillList = ({ skills }) => (
    <ul className="flex flex-wrap">
      {skills.map((skill, index) => (
        <li key={index} className="p-1.5 mb-1 bg-gray-800 text-white mr-1.6">{skill}</li>
      ))}
    </ul>
  );
  export default SkillList;