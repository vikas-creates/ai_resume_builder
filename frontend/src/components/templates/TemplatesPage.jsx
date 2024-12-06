import React from "react";
import TemplateCard from "./TemplateCard";

const TemplatesPage = ({ category }) => {
  // Sample data
  const fresherTemplates = [
    { id: 1, title: "Fresher Template 1", description: "Simple and modern.", image: "/path/to/image1.jpg" },
    { id: 2, title: "Fresher Template 2", description: "Professional and sleek.", image: "/path/to/image2.jpg" },
  ];

  const experiencedTemplates = [
    { id: 1, title: "Experienced Template 1", description: "Elegant and functional.", image: "/path/to/image3.jpg" },
    { id: 2, title: "Experienced Template 2", description: "Highly customizable.", image: "/path/to/image4.jpg" },
  ];

  // Decide which templates to render based on the category
  const templates = category === "fresher" ? fresherTemplates : experiencedTemplates;

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">
        {category === "fresher" ? "Fresher Templates" : "Experienced Templates"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <TemplateCard
            key={template.id}
            title={template.title}
            description={template.description}
            image={template.image}
          />
        ))}
      </div>
    </div>
  );
};

export default TemplatesPage;
