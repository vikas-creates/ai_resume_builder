import { useNavigate } from "react-router-dom";
// import image from "../../assets/resume_pic.png"

const TemplateCard = ({ id, title, description, image }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/templates/detail/${id}`);
    // Optionally call the onSelect handler if you want to track the selected template
    onSelect(id);
  };
          
  return (
    <div
      onClick={handleCardClick}
      className="bg-white rounded shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer">
      <img src={image} alt={title} className="w-full h-48 object-cover object-top" />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default TemplateCard;
