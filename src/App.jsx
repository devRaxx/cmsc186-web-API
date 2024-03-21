import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
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
      {data.classes && (
        <TableContainer>
          <Table variant="simple" colorScheme="teal">
            <TableCaption placement="top">Hearthstone Data</TableCaption>
            <Tbody className="flex flex-row">
              <Tr className="flex flex-col">
                <Th>Classes</Th>
                {data.classes.map((item) => (
                  <Td key={item}>{item}</Td>
                ))}
              </Tr>
              <Tr className="flex flex-col">
                <Th>Sets</Th>
                {data.sets.slice(0, 14).map((item) => (
                  <Td key={item}>{item}</Td>
                ))}
              </Tr>
              <Tr className="flex flex-col">
                <Th>Factions</Th>
                {data.factions.map((item) => (
                  <Td key={item}>{item}</Td>
                ))}
              </Tr>
              <Tr className="flex flex-col">
                <Th>Standards</Th>
                {data.standard.map((item) => (
                  <Td key={item}>{item}</Td>
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
