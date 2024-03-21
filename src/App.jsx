import "./App.css";
import { useEffect, useState } from "react";
import InfoCard from "./InfoCard";
import axios from "axios";
import {
  Table,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

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
      <InfoCard />
      {data.classes && (
        <TableContainer>
          <Table variant="unstyled" colorScheme="facebook" size="md">
            <TableCaption placement="top">
              <h1 className="text-lg">Hearthstone Data</h1>
            </TableCaption>
            <Tbody className="flex flex-row">
              <Tr className="flex flex-col">
                <Th>Classes</Th>
                {data.classes.slice(0, 13).map((item, index) => (
                  <Td
                    key={item}
                    style={{
                      backgroundColor: index % 2 !== 0 ? "#FFFFFF" : "#8DDCA4",
                    }}
                  >
                    {item}
                  </Td>
                ))}
              </Tr>
              <Tr className="flex flex-col">
                <Th>Sets</Th>
                {data.sets.slice(0, 13).map((item, index) => (
                  <Td
                    key={item}
                    style={{
                      backgroundColor: index % 2 !== 0 ? "#FFFFFF" : "#8DDCA4",
                    }}
                  >
                    {item}
                  </Td>
                ))}
              </Tr>
              <Tr className="flex flex-col">
                <Th>Standards</Th>
                {data.standard.slice(0, 13).map((item, index) => (
                  <Td
                    key={item}
                    style={{
                      backgroundColor: index % 2 !== 0 ? "#FFFFFF" : "#8DDCA4",
                    }}
                  >
                    {item}
                  </Td>
                ))}
              </Tr>
              <Tr className="flex flex-col">
                <Th>Wild</Th>
                {data.wild.slice(0, 13).map((item, index) => (
                  <Td
                    key={item}
                    style={{
                      backgroundColor: index % 2 !== 0 ? "#FFFFFF" : "#8DDCA4",
                    }}
                  >
                    {item}
                  </Td>
                ))}
              </Tr>
              <Tr className="flex flex-col">
                <Th>Races</Th>
                {data.races.slice(0, 13).map((item, index) => (
                  <Td
                    key={item}
                    style={{
                      backgroundColor: index % 2 !== 0 ? "#FFFFFF" : "#8DDCA4",
                    }}
                  >
                    {item}
                  </Td>
                ))}
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}

export default App;
