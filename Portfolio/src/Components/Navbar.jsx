import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Link,
  Image,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleButtonClick = () => {
    window.open(
      "https://drive.google.com/file/d/19F9pbcXqz0JXahE5KW_Dzci3J3ee6Y4f/view?usp=sharing",
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
      bg="gray.800"
      color="white"
      px={4}
      position="sticky"
      top="0"
      zIndex="1000"
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box fontWeight="bold" fontSize="lg">
          <Image
            src="/PavanIcon.png"
            alt="Pavan Icon"
            w="70%"
            filter="invert(1) brightness(2)"
          />
        </Box>
        <HStack
          spacing={8}
          alignItems="center"
          display={{ base: "none", md: "flex" }}
        >
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
          <Button
            colorScheme="cyan"
            variant="outline"
            onClick={handleButtonClick}
          >
            Resume
          </Button>
        </HStack>
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            <Link href="#home" onClick={onClose}>
              Home
            </Link>
            <Link href="#about" onClick={onClose}>
              About
            </Link>
            <Link href="#skills" onClick={onClose}>
              Skills
            </Link>
            <Link href="#projects" onClick={onClose}>
              Projects
            </Link>
            <Link href="#contact" onClick={onClose}>
              Contact
            </Link>
            <Button
              colorScheme="cyan"
              variant="outline"
              onClick={handleButtonClick}
            >
              Resume
            </Button>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
