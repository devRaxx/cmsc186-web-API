import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://omgvamp-hearthstone-v1.p.rapidapi.com/info",
  headers: {
    "X-RapidAPI-Key": "ee08d01e0dmsh1b7c3352fe466b4p16c4bfjsnf39895b44e12",
    "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
  },
};

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.request(options);
      console.log(response);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {data.classes && (
        <table className="text-left">
          <tr className="border-b border-white ">
            <th>Classes</th>
            <th>Sets</th>
            <th>Factions</th>
            <th>Types</th>
            <th>Races</th>
            <th>Standard</th>
          </tr>
          <td className="border-x border-white">
            {data.classes.map((item, index) => (
              <tr key={index}>{item}</tr>
            ))}
          </td>
          <td className="border-r border-white">
            {data.sets.map((item, index) => (
              <tr key={index}>{item}</tr>
            ))}
          </td>
          <td className="border-r border-white">
            {data.factions.map((item, index) => (
              <tr key={index}>{item}</tr>
            ))}
          </td>
          <td className="border-r border-white">
            {data.types.map((item, index) => (
              <tr key={index}>{item}</tr>
            ))}
          </td>
          <td className="border-r border-white">
            {data.races.map((item, index) => (
              <tr key={index}>{item}</tr>
            ))}
          </td>
          <td className="border-r border-white">
            {data.standard.map((item, index) => (
              <tr key={index}>{item}</tr>
            ))}
          </td>
        </table>
      )}
    </>
  );
}

export default App;
