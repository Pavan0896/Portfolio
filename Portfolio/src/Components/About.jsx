import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const About = () => {
  const showGif = useBreakpointValue({ base: false, md: true });

  return (
    <Box
      id="about"
      p={8}
      pt={{ base: "15%", md: "10%", lg: "5%" }}
      minH="100vh"
      bgGradient="linear(to-r, gray.900, gray.700)"
      color="white"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        direction="row"
        align="center"
        maxW="1200px"
        mx="auto"
        p={4}
        justify="space-between"
        wrap={{ base: "wrap", md: "nowrap" }}
        height="100%"
      >
        {showGif && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ flex: 1 }}
          >
            <Image
              src="/coderGIF.gif"
              alt="Coder GIF"
              maxW="70%"
              borderRadius="md"
              objectFit="contain"
              mx="0"
            />
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ flex: 1 }}
        >
          <Box
            textAlign={{ base: "center", md: "left" }}
            px={{ base: 4, md: 6 }}
            py={{ base: 4, md: 6 }}
          >
            <Heading mb={4} textAlign={{ base: "center", md: "left" }}>
              About Me
            </Heading>
            <Text
              fontSize={{ base: "sm", md: "lg" }}
              mb={4}
              lineHeight="1.6"
              color="gray.300"
              textAlign={{ base: "center", md: "left" }}
            >
              I’m a passionate web developer with a strong foundation in both
              front-end and back-end technologies. I’m eager to apply my skills
              to build efficient and scalable web applications and continuously
              learn and grow in the tech field.
            </Text>
            <Text
              fontSize={{ base: "sm", md: "lg" }}
              mb={4}
              lineHeight="1.6"
              color="gray.300"
              textAlign={{ base: "center", md: "left" }}
            >
              My background in Mechanical Engineering has honed my analytical
              and problem-solving abilities, providing me with a structured
              approach to web development and a solid technical foundation.
            </Text>
            <Text
              fontSize={{ base: "sm", md: "lg" }}
              mb={4}
              lineHeight="1.6"
              color="gray.300"
              textAlign={{ base: "center", md: "left" }}
            >
              Outside of coding, I enjoy playing badminton, solving Sudoku
              puzzles, and watching anime, which keeps me creative and balanced.
            </Text>
            <Button
              as="a"
              href="/path/to/your/resume.pdf"
              download="Pavan_Resume.pdf"
              colorScheme="cyan"
              variant="outline"
              mt={6}
              px={6}
              py={4}
            >
              Resume
            </Button>
          </Box>
        </motion.div>
      </Flex>
    </Box>
  );
};

export default About;
