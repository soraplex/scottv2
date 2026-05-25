import {
  Box,
  Heading,
  Flex,
  Text,
  Tag,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { caseStudies } from "../data/caseStudies";
import { footer } from "../data/footer";

const CaseStudies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const caseStudy = {
    isOpen,
    onClose,
    currentStudy: caseStudies[currentIndex],
    handleNext: () => setCurrentIndex((prev) => (prev + 1 < caseStudies.length ? prev + 1 : 0)),
  };

  const openModal = (index) => {
    setCurrentIndex(index);
    onOpen();
  };

  return (
    <Box id="case-studies">
      <Heading size="md" mb={6} color="accent">
        Case Studies
      </Heading>

      <Flex direction="column" gap={6}>
        {caseStudies.map((study, i) => (
          <Box
            key={i}
            p={6}
            borderRadius="lg"
            borderBottom="1px solid"
            borderColor="surface"
            transition="0.35s ease"
            // bg="surface"
            _hover={{
              transform: { base: "translateY(-2px)", md: "scale(1.03)" },
              backdropFilter: "blur(18px) brightness(1.1)",
              bg: "rgba(255,255,255,0.05)",
            }}
          >
            <Heading size="md" color="subtleText">
              {study.title}
            </Heading>

            <Text color="muted" mt={2} mb={4}>
              {study.summary}
            </Text>

            <Flex gap={2} wrap="wrap">
              {study.tags.map((tag, idx) => (
                <Tag key={idx} bg="olive.700" color="olive.100">
                  {tag}
                </Tag>
              ))}
            </Flex>

            <Link
              onClick={() => openModal(i)}
              color="accent"
              mt={4}
              display="inline-block"
              cursor="pointer"
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
                _after: { width: "100%" },
              }}
            >
              Read Case Study →
            </Link>
          </Box>
        ))}
      </Flex>
      
      <Box mt={2} textAlign="center" color="muted" display={{ base: "block", md: "none" }}>
        <Text fontSize="sm">{footer.copyrightName}</Text>
        <Text fontSize="sm">{footer.copyrightDate}</Text>
      </Box>

      {/* Modal */}
      <Modal {...caseStudy} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent
          maxW={{ base: "90%", md: "xl" }}
          bg="bg"
          color="subtleText"
          border="1px solid"
          borderColor="surface"
        >
          <ModalHeader>{caseStudy.currentStudy.title}</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Text color="muted" mb={4}>
              {caseStudy.currentStudy.fullText}
            </Text>

            <Button
              onClick={caseStudy.handleNext}
              bg="olive.700"
              color="olive.100"
              _hover={{ bg: "olive.600" }}
              mt={4}
              mb={4}
            >
              Next Case Study →
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default CaseStudies;
