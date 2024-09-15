import React from 'react';

const Diagnosis = () => {
return (
  <section className="p-6">
    <h2 className="text-2xl font-semibold">1. Current Diagnosis</h2>
    <div className="grid grid-cols-2 gap-4 mt-4">
      <div className="border border-gray-300 p-4 rounded-lg">
        <h3 className="font-semibold">Weaknesses</h3>
        <ul>
          <li>Limited battery life</li>
          <li>Premium price range</li>
          <li>Limited color options</li>
        </ul>
      </div>
      <div className="border border-gray-300 p-4 rounded-lg">
        <h3 className="font-semibold">Opportunities</h3>
        <ul>
          <li>Increasing demand for smart wearables</li>
          <li>Potential partnerships with fitness apps</li>
          <li>Growing health-conscious consumer base</li>
        </ul>
      </div>
      <div className="border border-gray-300 p-4 rounded-lg">
        <h3 className="font-semibold">Strengths</h3>
        <ul>
          <li>High-quality design</li>
          <li>Advanced health tracking</li>
          <li>Durability and water resistance</li>
        </ul>
      </div>
      <div className="border border-gray-300 p-4 rounded-lg">
        <h3 className="font-semibold">Threats</h3>
        <ul>
          <li>Competition from other smartwatch brands</li>
          <li>Market saturation</li>
          <li>Potential supply chain disruptions</li>
        </ul>
      </div>
    </div>
  </section>
);
};

export default Diagnosis;