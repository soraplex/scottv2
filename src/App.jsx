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

import { Flex, Box, useBreakpointValue } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import CaseStudies from "./components/CaseStudies";

const App = () => {
  // Determine if we are on mobile (standard Chakra breakpoint)
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    // Use Flex to force the container to full height so the footer can stick to bottom
    <Flex direction={isMobile ? "column" : "row"} maxW="1200px" mx="auto" p={isMobile ? 4 : 10} gap={10}>
      {/* Sidebar Column */}
      {/* On mobile, this is just a static block at the top, not sticky */}
      <Box id="home" w={isMobile ? "100%" : "300px"} flexShrink={0}>
        <Sidebar />
      </Box>

      {/* Main Content Column */}
      <Box flex="1" display="flex" flexDirection="column" gap={12} w="100%">
        <About />
        <Experiences />
        <Projects />
        <CaseStudies />
        {/* <Box mt={2} textAlign="center" color="muted" display={{ base: "block", md: "none" }}>
          <Text fontSize="sm">{footer.copyrightName}</Text>
          <Text fontSize="sm">{footer.copyrightDate}</Text>
        </Box> */}
      </Box>
    </Flex>
  );
};

export default App;
