import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export const FlightTable = ({ props }) => {
  const [flightData, setFlightData] = useState([]);
  console.log("==>", flightData.data);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://api.npoint.io/4829d4ab0e96bfab50e7");
      setFlightData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-white pb-5 w-[45%] h-[60%] rounded-xl absolute bottom-12 shadow shadow-gray-300">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              departure
            </th>
            <th className="group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Air Line Details
            </th>
            <th className="group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              arrival
            </th>
            <th className="group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {flightData.data?.result?.map((e, i) => (
            <tr key={i}>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-sm">
                  {e.displayData.source.airport.cityName}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap grid">
                {e.displayData.airlines?.map((j) => j.airlineName)}
                <span className="text-sm">{e.displayData.totalDuration}</span>
                <span className="text-sm">{e.displayData.stopInfo}</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {e.displayData.destination.airport.cityName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap px-5 bg-red-400 rounded-md h-[50px]">
                ₹ {e.fare} <span className="ml-7 ">Book Now</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
