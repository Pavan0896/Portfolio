import { Box, Heading, Text, Flex, Image, Link } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "H&M.com",
    description:
      "The H&M Clone is a comprehensive full-stack web application designed to emulate the features of the H&M e-commerce platform. It offers a rich user experience with multiple pages, including Home, Products, and Categories. The application supports user registration and login, enabling personalized features and secure private routes that require authentication.",
    techStack: ["React", "Redux", "Node.js", "MongoDB", "Express", "Chakra UI"],
    heroImage: "/H&M.png",
    githubLink: "https://github.com/Pavan0896/hm.com-Clone",
    deployedLink: "https://hm-clone-pavan.netlify.app/",
  },
  {
    title: "ASOS.com",
    description:
      "This project is a clone of the Asos.com e-commerce website, built with Vite and React. It features multiple pages, secure private routes, dynamic product filtering, and sleek styling using Chakra UI.",
    techStack: ["HTML", "CSS", "JavaScript", "React"],
    heroImage: "/ASOS.png",
    githubLink: "https://github.com/Pavan0896/Asos.com-Clone",
    deployedLink: "https://asosclonepavan1.netlify.app/",
  },
  {
    title: "Nordstrom Rack",
    description:
      "This is a cloned website of Nordstrom Rack. It is a project created to understand how an actual e-commerce webpages works, the functionality behind it using HTML, CSS and javascript.",
    techStack: ["HTML", "CSS", "JavaScript"],
    heroImage: "/NordstromRack.png",
    githubLink: "https://github.com/Pavan0896/Nordstrom-Rack-Clone",
    deployedLink: "https://nordstrom-rack-clone-pavan.netlify.app/",
  },
];

const Projects = () => {
  return (
    <Box
      id="projects"
      p={8}
      pt={{ base: "20%", md: "10%", lg: "5%" }}
      minH="100vh"
      bgGradient="linear(to-r, blue.800, black)"
    >
      <Heading mb={8} textAlign="center" color={"white"}>
        Projects
      </Heading>
      {projects.map((project, index) => (
        <Box
          key={index}
          mb={12}
          p={6}
          border="1px"
          borderColor="gray.300"
          borderRadius="md"
          boxShadow="md"
          bg="white"
          _hover={{ boxShadow: "lg" }}
        >
          <Flex
            flexDirection={{
              base: "column",
              md: index % 2 === 0 ? "row" : "row-reverse",
            }}
            align="center"
          >
            <Box flex="1" textAlign="center">
              <Image
                src={project.heroImage}
                alt={`${project.title} hero`}
                borderRadius="md"
                mb={4}
              />
            </Box>
            <Box flex="1" p={4}>
              <Heading size="md" mb={2}>
                {project.title}
              </Heading>
              <Text mb={2} fontSize={{ base: "sm", md: "md", lg: "lg" }}>{project.description}</Text>
              <Text mb={2}>
                <strong>Tech Stack:</strong> {project.techStack.join(", ")}
              </Text>
              <Flex direction="row" align="center" mt={2}>
                <Link
                  href={project.githubLink}
                  isExternal
                  mr={4}
                  display="flex"
                  alignItems="center"
                >
                  <FaGithub size="1.5em" /> <Text ml={2}>GitHub</Text>
                </Link>
                <Link
                  href={project.deployedLink}
                  isExternal
                  display="flex"
                  alignItems="center"
                >
                  <FiExternalLink size="1.5em" /> <Text ml={2}>Live Demo</Text>
                </Link>
              </Flex>
            </Box>
          </Flex>
        </Box>
      ))}
    </Box>
  );
};

export default Projects;
