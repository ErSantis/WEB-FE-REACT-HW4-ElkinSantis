import React from 'react';

const data = [
  {
    id: 1,
    type: "Weaknesses",
    items: [
      { id: 1, description: "Limited battery life" },
      { id: 2, description: "High price compared to competitors" },
      { id: 3, description: "Limited color options" },
    ],
  },
  {
    id: 2,
    type: "Opportunities",
    items: [
      { id: 1, description: "Increasing demand for smart devices" },
      { id: 2, description: "Potential partnerships with health apps" },
      { id: 3, description: "Growing base of health-conscious consumers" },
    ],
  },
  {
    id: 3,
    type: "Strengths",
    items: [
      { id: 1, description: "High-quality and attractive design" },
      { id: 2, description: "Advanced health tracking features" },
      { id: 3, description: "Durability and water resistance" },
    ],
  },
  {
    id: 4,
    type: "Threats",
    items: [
      { id: 1, description: "Intense competition from other smartwatch brands" },
      { id: 2, description: "Market saturation" },
      { id: 3, description: "Potential supply chain disruptions" },
    ],
  },
];

const Diagnosis = () => {
  return (
    <section className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {data.map((category) => (
          <div key={category.id} className="border border-gray-300 p-4 rounded-lg bg-digital-lavender-very-light">
            <h3 className="font-semibold">{category.type}</h3>
            <ul className="mt-2">
              {category.items.map((item) => (
                <li key={item.id}>
                  {item.description}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Diagnosis;
