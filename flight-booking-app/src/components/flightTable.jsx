import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export const FlightTable = ({ props }) => {
  const [flightData, setFlightData] = useState([]);
  console.log("==>", flightData.data);

  const sortByPrice = () => {
    const sortedItems = flightData.sort((a, b) => a.fare - b.fare);
    console.log("===>>", sortedItems);
    setFlightData(sortedItems);
  };

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

  const [selectedValue, setSelectedValue] = useState("");
  console.log(selectedValue);
  const handleSelect = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="bg-white pb-5 w-[40%] h-[610px] absolute rounded-xl scroll-y bottom-12 shadow shadow-gray-300">
      <div className="border-3-red-300 flex">
        <label className="text-gray-700 block px-4 py-2 text-sm">
          Choose a flight :
        </label>
        <select
          name="flight"
          id="flight"
          value={selectedValue}
          onChange={handleSelect}
          className="border-text-gray-700 block px-4 py-2 text-sm ring-gray-300"
        >
          <option
            className="text-gray-700 block px-4 py-2 text-sm"
            value="air_ind"
          >
            Air India
          </option>
          <option
            className="text-gray-700 block px-4 py-2 text-sm"
            value="jet_space"
          >
            JetSpice
          </option>
        </select>
        <button
          className="text-black-300 block px-4 py-2 text-sm bg-gray-100 ml-5"
          onClick={sortByPrice}
        >
          Sort by Price
        </button>
      </div>

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
              Fare
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {flightData.data?.result?.map((e) => (
            <tr key={e.id}>
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
              <td className="px-6 py-4 whitespace-nowrap px-5 bg-yellow-400 rounded-md h-[40px]">
                ₹ {e.fare} <span className="ml-7 ">Book Now</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
