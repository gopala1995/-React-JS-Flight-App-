import DelhiImage from "../assets/india_gate.jpeg";
import KarachiImage from "../assets/london.jpeg";
import DubailImage from "../assets/dubai.jpeg";
import SydneyImage from "../assets/sydney.jpeg";
import { useEffect, useState } from "react";

export const LOWEST_FARE_LIST = [
  {
    id: 1,
    heading: "Flights to Delhi",
    price: "$42",
    image: DelhiImage,
  },
  {
    id: 2,
    heading: "Flights to London",
    price: "$42",
    image: KarachiImage,
  },
  {
    id: 3,
    heading: "Flights to Dubai",
    price: "$42",
    image: DubailImage,
  },
  {
    id: 4,
    heading: "Flights to Sydney",
    price: "$42",
    image: SydneyImage,
  },
];

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.npoint.io/4829d4ab0e96bfab50e7"
      );
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
}
