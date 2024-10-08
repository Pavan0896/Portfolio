import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Link,
  IconButton,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box
      id="home"
      p={8}
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-r, teal.500, blue.500)"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        maxW="1200px"
        mx="auto"
        p={8}
        justify="space-between"
        wrap="wrap"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ flex: 1 }}
        >
          <Heading
            color="white"
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            textAlign={{ base: "center", md: "left" }}
          >
            Welcome to My Portfolio
          </Heading>
          <Text
            mt={4}
            color="white"
            fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
            textAlign={{ base: "center", md: "left" }}
          >
            Hi, I'm{" "}
            <Text as="span" fontWeight="bold">
              Pavan Kumar
            </Text>
            , a full stack web developer.
          </Text>
          <Flex
            mt={6}
            justify={{ base: "center", md: "flex-start" }}
            gap={4}
            mb="2%"
          >
            <Link
              href="https://www.linkedin.com/in/pavan-kumar-a4a050250/"
              isExternal
            >
              <IconButton
                aria-label="LinkedIn"
                icon={<FaLinkedin />}
                size="lg"
                colorScheme="whiteAlpha"
              />
            </Link>
            <Link href="https://github.com/Pavan0896" isExternal>
              <IconButton
                aria-label="GitHub"
                icon={<FaGithub />}
                size="lg"
                colorScheme="whiteAlpha"
              />
            </Link>
          </Flex>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ flex: 1, display: "flex", justifyContent: "center" }}
        >
          <Image
            borderRadius="full"
            boxSize={{ base: "250px", md: "300px", lg: "350px" }}
            src="/PavanPhoto.jpg"
            alt="Profile Image"
            border="2px solid white"
            objectFit="cover"
          />
        </motion.div>
      </Flex>
    </Box>
  );
};

export default Home;
