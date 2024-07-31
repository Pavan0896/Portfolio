import{ useState, useEffect } from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <Box position="fixed" bottom="4" right="4" zIndex="1000">
        <IconButton
          aria-label="Scroll to top"
          icon={<FaArrowUp />}
          size="lg"
          colorScheme="blue"
          onClick={scrollToTop}
        />
      </Box>
    )
  );
};

export default ScrollToTopButton;
