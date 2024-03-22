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
import { FaVideo } from "react-icons/fa";

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
          src="https://scontent.fdvo3-1.fna.fbcdn.net/v/t1.15752-9/277314471_1411449252652273_5940717447462598210_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=nJUsmUps7bIAX940cFq&_nc_oc=AdgBdPyh4H-K9yTx-k8pxWsVnVttb9W7nWeZ1wEJRn7c7k90y-LAERwrEKWp3gwcWNo&_nc_ht=scontent.fdvo3-1.fna&oh=03_AdRY1yUdvt3MNf1SiHrlh3Qy1Amc917MPpAV9L2ZqWv54w&oe=66248CD2"
          alt=""
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
            <a
              className="pr-4"
              target="_blank"
              href="https://github.com/devRaxx/cmsc186-web-api"
            >
              <Button>
                <VscGithubInverted />
                <p className="pl-2">Github Repo</p>
              </Button>
            </a>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1jUFqDM2ONqrcEfRszqPGpRvJADzgUlZx/view?usp=sharing"
            >
              <Button>
                <FaVideo />
                <p className="pl-2">Video Recording</p>
              </Button>
            </a>
          </CardFooter>
        </Stack>
      </Card>
    </>
  );
}

export default InfoCard;
