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
  const handleButtonClick = () => {
    window.open(
      "https://drive.google.com/file/d/1BRUyaW4u6Xt3aWmU2t91osxO-kA4d8oY/view?usp=sharing",
      "_blank"
    );

    const link = document.createElement("a");
    link.href = "/Pavan-Kumar-Resume.pdf";
    link.download = "Pavan-Kumar-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
              textAlign="left"
            >
              A passionate web developer with a strong foundation in both
              front-end and back-end technologies, eager to apply these skills
              to build efficient and scalable web applications while
              continuously learning and growing in the tech field.
            </Text>
            <Text
              fontSize={{ base: "sm", md: "lg" }}
              mb={4}
              lineHeight="1.6"
              color="gray.300"
              textAlign="left"
            >
              With a background in Mechanical Engineering, analytical and
              problem-solving abilities are well-honed, providing a structured
              approach to web development and a solid technical foundation.
            </Text>
            <Text
              fontSize={{ base: "sm", md: "lg" }}
              mb={4}
              lineHeight="1.6"
              color="gray.300"
              textAlign="left"
            >
              Outside of coding, enjoys playing badminton, solving Sudoku
              puzzles, and watching anime, which keeps creativity and balance in
              life.
            </Text>
            <Button
              colorScheme="cyan"
              variant="outline"
              onClick={handleButtonClick}
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
