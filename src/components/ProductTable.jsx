import React from 'react';

const objectives = [
  { id: 1, goal: "Increase market share", target: 100, progress: 30, compliance: 30 },
  { id: 2, goal: "Improve customer satisfaction", target: 150000, progress: 50000, compliance: 33 },
  { id: 3, goal: "Expand product line", target: 200, progress: 150, compliance: 75 },
  { id: 4, goal: "Enhance brand awareness", target: 300000, progress: 250000, compliance: 83 },
  { id: 5, goal: "Reduce operational costs", target: 500, progress: 100, compliance: 20 },
  { id: 6, goal: "Increase online sales", target: 400000, progress: 300000, compliance: 75 },
];

const getStatusColor = (compliance) => {
  if (compliance <= 35) return 'text-red-500'; // Critical
  if (compliance <= 75) return 'text-orange-500'; // Acceptable
  return 'text-green-500'; // Successful
};

const ProductTable = () => {
  return (
    <section className="p-6">
      <table className="min-w-full mt-4 border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-xs sm:text-base">
            <th className="border border-gray-300 p-2">Code</th>
            <th className="border border-gray-300 p-2">Objective</th>
            <th className="border border-gray-300 p-2">Target</th>
            <th className="border border-gray-300 p-2">Progress</th>
            <th className="border border-gray-300 p-2">Compliance</th>
            <th className="border border-gray-300 p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {objectives.map(({ id, goal, target, progress, compliance }) => (
            <tr key={id}>
              <td className="border border-gray-300 p-2 text-xs sm:text-base">{id}</td>
              <td className="border border-gray-300 p-2 text-xs sm:text-base">{goal}</td>
              <td className="border border-gray-300 p-2 text-xs sm:text-base">${target.toLocaleString()}</td>
              <td className="border border-gray-300 p-2 text-xs sm:text-base">${progress.toLocaleString()}</td>
              <td className="border border-gray-300 p-2 text-xs sm:text-base">{compliance}%</td>
              <td className={`border border-gray-300 p-2 text-xs sm:text-base ${getStatusColor(compliance)}`}>
                {compliance <= 35 ? "Critical" : compliance <= 75 ? "Acceptable" : "Successful"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ProductTable;
