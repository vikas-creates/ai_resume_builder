import React, { useState } from "react";
import{templates} from "../data/templateData";
import TemplateCard from "./TemplateCard";

  //Hard coded and less scalable and hoch poch approach

  // // Sample data
  // const fresherTemplates = [
  //   { id: 1, title: "Fresher Template 1", description: "Simple and modern.", image: "/image1.png" },
  //   { id: 2, title: "Fresher Template 2", description: "Professional and sleek.", image: "/image2.jpg" },
  // ];

  // const experiencedTemplates = [
  //   { id: 1, title: "Experienced Template 1", description: "Elegant and functional.", image: "/image3.png" },
  //   { id: 2, title: "Experienced Template 2", description: "Highly customizable.", image: "/image4.jpg" },
  // ];

  // // Decide which templates to render based on the category
  // const templates = category === "fresher" ? fresherTemplates : experiencedTemplates;


  const TemplatesPage = ({ category }) => {
    const[selectedTemplate, setSelectedTemplate]=useState(null);

    const handleTemplateSelect = (id)=>{
      setSelectedTemplate(id)
    };

    //choose template based on the category
    const categoryTemplates = templates[category];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">
        {category === "fresher" ? "Fresher Templates" : "Experienced Templates"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryTemplates.map((template) => (
          <TemplateCard
            key={template.id}
            id={template.id}
            title={template.title}
            description={template.description}
            image={template.image}
            onselect={handleTemplateSelect}
          />
        ))}
      </div>
      <div>
      {selectedTemplate && <p>Selected Template ID: {selectedTemplate}</p>}
      </div>
    </div>
  );
};

export default TemplatesPage;
