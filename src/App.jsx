// import { Grid, Box } from "@chakra-ui/react";
// import Sidebar from "./components/Sidebar";
// import About from "./components/About";
// import Experiences from "./components/Experiences";
// import Projects from "./components/Projects";
// import CaseStudies from "./components/CaseStudies";

// const App = () => {
//   return (
//     <Grid
//       templateColumns={["1fr", "300px 1fr"]}
//       gap={10}
//       maxW="1200px"
//       mx="auto"
//       p={10}
//     >
//       <Box position="sticky" top="4rem" h="fit-content">
//         <Sidebar />
//       </Box>

//       <Box display="flex" flexDirection="column" gap={12}>
//         <About />
//         <Experiences />
//         <Projects />
//         <CaseStudies />
//       </Box>
//     </Grid>
//   );
// };

// export default App;

import { Flex, Box, VStack, useBreakpointValue } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import CaseStudies from "./components/CaseStudies";
import Footer from "./shared/Footer";

const App = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex direction={isMobile ? "column" : "row"} maxW="1200px" mx="auto" p={isMobile ? 4 : 10} gap={10}>
      <Box id="home" w={isMobile ? "100%" : "300px"} flexShrink={0}>
        <Sidebar />
      </Box>

      <Box flex="1" display="flex" flexDirection="column" w="100%">
        <VStack spacing={12} align="stretch" >
          <About />
          <Experiences />
          <Projects />
          <CaseStudies />
        </VStack>
        <Box textAlign="center" color="muted" display={{ base: "block", md: "none" }}>
          <Footer />
        </Box>
      </Box>
    </Flex>
  );
};

export default App;