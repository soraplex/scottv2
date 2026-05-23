// import {
//   Box,
//   Heading,
//   Text,
//   Link,
//   Flex,
//   SimpleGrid,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalCloseButton,
//   useDisclosure,
// } from "@chakra-ui/react";

// import { skills } from "../data/skills";
// import { hobbies } from "../data/hobbies";

// const About = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   const aboutModal = { 
//     isOpen, 
//     onOpen, 
//     onClose 
//   };

//   return (
//     <Box id="about" mt={7}>
//       <Heading size="md" mb={4} color="accent">
//         About Me
      // </Heading>
      // <Text color="muted" maxW="625px" lineHeight="1.7" mb={3}>
      //   Focusing on creating digital products shaped by clear architecture, cohesive flow, and subtle details that make
      //   technology feel intuitive, reliable, and seamless.
      // </Text>
      
//       {/* Skills Section */}
//       <Box mt={2}>
//         <Heading size="sm" color="highlight" mb={3} letterSpacing="0.5px" fontWeight="600">
//           Skills I Use
//         </Heading>
//         <Flex wrap="wrap" gap={2} maxW="500px">
//           {skills.map((skill) => (
//             <Box
//               key={skill}
//               px={3}
//               py={1}
//               borderRadius="md"
//               bg="surface"
//               color="muted"
//               fontSize="sm"
//               border="1px solid"
//               borderColor="surface"
//               _hover={{
//                 transform: "scale(1.05)",
//                 filter: "brightness(1.15)",
//               }}
//             >
//               {skill}
//             </Box>
//           ))}
//         </Flex>
//       </Box>
      
//       <Link
//         onClick={aboutModal.onOpen} 
//         color="highlight"
//         cursor="pointer"
//         display="inline-block"
//         mt={3}
//         position="relative"
//         _after={{
//           content: '""',
//           position: "absolute",
//           bottom: "-2px",
//           left: "0",
//           width: "0%",
//           height: "1px",
//           backgroundColor: "highlight",
//           transition: "width 0.25s ease",
//         }}
//         _hover={{
//           _after: {
//             width: "100%",
//           },
//         }}
//       >
//         Read More →
//       </Link>

//       <Modal {...aboutModal} size="xl" isCentered>
//         <ModalOverlay />
//         <ModalContent
//           bg="bg"
//           color="text"
//           border="1px solid"
//           borderColor="surface"
//           transform={{
//             base: "translateX(0)",
//             md: "translateX(-380px)",
//           }}
//         >
//           <ModalHeader color="accent">About Me</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <Text color="muted" mb={4}>
//               I care about visual harmony, system‑level thinking, and component‑driven architecture — creating
//               interfaces that feel intuitive, calm, and human-centered. My work blends modern engineering with a strong
//               sense of aesthetic clarity and polish.
//             </Text>
//             <Text color="muted" mb={4}>
//               I enjoy working with React, Chakra UI, JavaScript, and design systems, focusing on workflow optimization,
//               theme development, AI-assisted tooling, and delivering products that feel premium, intentional, and
//               thoughtfully curated from system foundation to final interaction.
//             </Text>

//             {/* 
            
//             I create intuitive, human-centered interfaces through visual harmony, system-level thinking, and component-driven architecture.

//             Blending modern engineering (React, Chakra UI, JS, design systems) with aesthetic clarity, I focus on workflow optimization, AI tooling, and premium, intentional products from foundation to finish.
            
//             "Building intuitive, human-centered interfaces with React/Chakra UI through system architecture, AI tooling, and premium design from foundation to finish."
//             */}

//             <Text color="muted" mb={6}>
//               Outside of coding, these are my hobbies keep me balanced
//             </Text>
//             <SimpleGrid columns={[2, 3]} spacing={6} mb={6}>
//               {hobbies.map((item) => (
//                 <Flex
//                   key={item.text}
//                   as="li"
//                   align="center"
//                   gap={3}
//                   mb={3}
//                   color="muted"
//                   fontSize="md"
//                   position="relative"
//                   pl="25px"
//                   transition="all 0.25s ease"
//                   _hover={{
//                     transform: "scale(1.03)",
//                     filter: "brightness(1.15)",
//                   }}
//                 >
//                   <Box fontSize="2xl" color="highlight">
//                     <item.icon />
//                   </Box>
//                   <Text fontSize="md">{item.text}</Text>
//                 </Flex>
//               ))}
//             </SimpleGrid>
//           </ModalBody>
//         </ModalContent>
//       </Modal>
//     </Box>
//   );
// };

// export default About;

import {
  Box,
  Heading,
  Text,
  Link,
  Flex,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import { skills } from "../data/skills";
import { hobbies } from "../data/hobbies";

const About = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const aboutModal = { 
    isOpen, 
    onOpen, 
    onClose 
  };

  return (
    <Box id="about" mt={7}>
      <Heading size="md" mb={4} color="accent">
        About Me
      </Heading>

      {/* MOBILE: allow text to fill width */}
      <Text
        color="muted"
        maxW={{ base: "85%", md: "625px" }}
        lineHeight="1.7"
        mb={3}
      >
        Focusing on creating digital products shaped by clear architecture, cohesive flow, and subtle details that make
        technology feel intuitive, reliable, and seamless.
      </Text>
      
      {/* Skills Section */}
      <Box mt={2}>
        <Heading size="sm" color="highlight" mb={3} letterSpacing="0.5px" fontWeight="600">
          Skills I Use
        </Heading>

        {/* MOBILE: allow skills to stretch full width */}
        <Flex
          wrap="wrap"
          gap={2}
          maxW={{ base: "90%", md: "560px" }}
        >
          {skills.map((skill) => (
            <Box
              key={skill}
              px={3}
              py={1}
              borderRadius="md"
              bg="surface"
              color="muted"
              fontSize="sm"
              border="1px solid"
              borderColor="surface"
              _hover={{
                transform: "scale(1.05)",
                filter: "brightness(1.15)",
              }}
            >
              {skill}
            </Box>
          ))}
        </Flex>
      </Box>
      
      <Link
        onClick={aboutModal.onOpen} 
        color="highlight"
        cursor="pointer"
        display="inline-block"
        mt={3}
        position="relative"
        _after={{
          content: '""',
          position: "absolute",
          bottom: "-2px",
          left: "0",
          width: "0%",
          height: "1px",
          backgroundColor: "highlight",
          transition: "width 0.25s ease",
        }}
        _hover={{
          _after: {
            width: "100%",
          },
        }}
      >
        Read More →
      </Link>

      <Modal {...aboutModal} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent
          bg="bg"
          color="text"
          border="1px solid"
          borderColor="surface"

          /* MOBILE: remove weird horizontal shift */
          transform={{ base: "none", md: "translateX(-380px)" }}

          /* MOBILE: shrink modal width slightly */
          maxW={{ base: "90%", md: "xl" }}
        >
          <ModalHeader color="accent">About Me</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text color="muted" mb={4}>
              I care about visual harmony, system‑level thinking, and component‑driven architecture — creating
              interfaces that feel intuitive, calm, and human-centered. My work blends modern engineering with a strong
              sense of aesthetic clarity and polish.
            </Text>

            <Text color="muted" mb={4}>
              I enjoy working with React, Chakra UI, JavaScript, and design systems, focusing on workflow optimization,
              theme development, AI-assisted tooling, and delivering products that feel premium, intentional, and
              thoughtfully curated from system foundation to final interaction.
            </Text>

            <Text color="muted" mb={6}>
              Outside of coding, these are my hobbies keep me balanced
            </Text>

            {/* MOBILE: 2 columns, desktop unchanged */}
            <SimpleGrid columns={{ base: 2, md: 3 }} spacing={6} mb={6}>
              {hobbies.map((item) => (
                <Flex
                  key={item.text}
                  as="li"
                  align="center"
                  gap={3}
                  mb={3}
                  color="muted"
                  fontSize="md"
                  position="relative"
                  pl="25px"
                  transition="all 0.25s ease"
                  _hover={{
                    transform: "scale(1.03)",
                    filter: "brightness(1.15)",
                  }}
                >
                  <Box fontSize="2xl" color="highlight">
                    <item.icon />
                  </Box>
                  <Text fontSize="md">{item.text}</Text>
                </Flex>
              ))}
            </SimpleGrid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default About;
