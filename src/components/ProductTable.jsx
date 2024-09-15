import React from 'react';

const ProductTable = () => {
return (
  <table className="min-w-full border-collapse border border-gray-300 mt-4">
    <thead>
      <tr className="bg-blue-100">
        <th className="border border-gray-300 p-2">Code</th>
        <th className="border border-gray-300 p-2">Objective</th>
        <th className="border border-gray-300 p-2">Goal</th>
        <th className="border border-gray-300 p-2">Progress</th>
        <th className="border border-gray-300 p-2">Completion</th>
        <th className="border border-gray-300 p-2">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-gray-300 p-2">1000</td>
        <td className="border border-gray-300 p-2">Launch the Pro Series</td>
        <td className="border border-gray-300 p-2">500 units</td>
        <td className="border border-gray-300 p-2">250 units</td>
        <td className="border border-gray-300 p-2">50%</td>
        <td className="border border-gray-300 p-2">Acceptable</td>
      </tr>
      <tr>
        <td className="border border-gray-300 p-2">1001</td>
        <td className="border border-gray-300 p-2">Expand to 3 new markets</td>
        <td className="border border-gray-300 p-2">$1,000,000</td>
        <td className="border border-gray-300 p-2">$50,000</td>
        <td className="border border-gray-300 p-2">5%</td>
        <td className="border border-gray-300 p-2">Critical</td>
      </tr>
      <tr>
        <td className="border border-gray-300 p-2">1002</td>
        <td className="border border-gray-300 p-2">Develop fitness partnerships</td>
        <td className="border border-gray-300 p-2">1000 partners</td>
        <td className="border border-gray-300 p-2">900 partners</td>
        <td className="border border-gray-300 p-2">90%</td>
        <td className="border border-gray-300 p-2">Successful</td>
      </tr>
      <tr>
        <td className="border border-gray-300 p-2">1003</td>
        <td className="border border-gray-300 p-2">Increase social media presence</td>
        <td className="border border-gray-300 p-2">150,000 followers</td>
        <td className="border border-gray-300 p-2">150,000 followers</td>
        <td className="border border-gray-300 p-2">100%</td>
        <td className="border border-gray-300 p-2">Successful</td>
      </tr>
    </tbody>
  </table>
);
};

export default ProductTable;