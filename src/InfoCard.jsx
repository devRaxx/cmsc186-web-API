import {
  Text,
  Card,
  Stack,
  Heading,
  Image,
  CardBody,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import { VscGithubInverted } from "react-icons/vsc";

function InfoCard() {
  return (
    <>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src="..\..\src\assets\school-id-pic.jpeg"
          alt="Rocky Angelo P. Castañeros"
          borderRadius={{ base: "0", sm: "md" }}
        />

        <Stack>
          <CardBody className="text-start">
            <Heading size="md">Rocky Angelo P. Castañeros</Heading>

            <Text py="2">
              CMSC 186: Programming Assignment 1. Consuming a Web API.
            </Text>
            <Text py="2">
              This page uses an API call from the database of the game
              Hearthstone
            </Text>
          </CardBody>
          <CardFooter>
            <a target="top" href="https://github.com/devRaxx/cmsc186-web-api">
              <Button>
                <VscGithubInverted />
                <p className="pl-2">Github Repo</p>
              </Button>
            </a>
          </CardFooter>
        </Stack>
      </Card>
    </>
  );
}

export default InfoCard;
