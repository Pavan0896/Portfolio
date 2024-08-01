import { Box, Heading, VStack, Link, Text, Flex, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaPhone, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <Box
      id="contact"
      p={8}
      pt="5%"
      minH="100vh"
      bg="gray.100"
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Heading textAlign="center" mb={6}>
          Contact Me
        </Heading>
        <VStack spacing={6}>
          <Flex align="center">
            <Icon as={FaLinkedin} boxSize={6} color="blue.600" mr={2} />
            <Link
              href="https://www.linkedin.com/in/pavan-kumar-a4a050250/"
              isExternal
              fontSize="lg"
            >
              LinkedIn
            </Link>
          </Flex>
          <Flex align="center">
            <Icon as={FaEnvelope} boxSize={6} color="red.600" mr={2} />
            <Link
              href="mailto:pavankumar170896@gmail.com"
              isExternal
              fontSize="lg"
            >
              pavankumar170896@gmail.com
            </Link>
          </Flex>
          <Flex align="center">
            <Icon as={FaPhone} boxSize={6} color="green.600" mr={2} />
            <Text fontSize="lg">+91 9901674558</Text>
          </Flex>
          <Flex align="center">
            <Icon as={FaGithub} boxSize={6} color="black" mr={2} />
            <Link href="https://github.com/Pavan0896" isExternal fontSize="lg">
              GitHub
            </Link>
          </Flex>
        </VStack>
      </motion.div>
    </Box>
  );
};

export default Contact;
