import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiReact,
  SiMongodb,
  SiRedux,
} from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#000000" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
];

const Skills = () => {
  return (
    <Box
      id="skills"
      p={8}
      pt={{ base: "20%", md: "10%", lg: "5%" }}
      minH="100vh"
      bgGradient="linear(to-r, gray.800, gray.900)"
      color="white"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Heading textAlign="center" mb={8}>
          Skills
        </Heading>
      </motion.div>

      <SimpleGrid
        columns={[2, 3, 4]}
        spacing={10}
        w="full"
        justifyItems="center"
      >
        {skills.map((skill, index) => (
          <Box key={index} textAlign="center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <skill.icon size="5em" color={skill.color} />
            </motion.div>
            <Box mt={2}>{skill.name}</Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Skills;
