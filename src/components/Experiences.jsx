import {
  Box,
  Heading,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
} from "@chakra-ui/react";
import { experience } from "../data/experience";
import FadeInBox from "../shared/MotionBox";

const Bullet = ({ children }) => (
  <Flex mb={2} align="flex-start" gap={2}>
    <Text color="accent" mt="2px">
      ▹
    </Text>
    <Text color="muted">{children}</Text>
  </Flex>
);

const ExperienceAccordion = () => {
  return (
    <Box id="experience">
      <FadeInBox>
        <Heading size="md" mb={6} color="accent">
          Experience
        </Heading>

        {/* Updated to match your correct starter code: allowToggle */}
        <Accordion allowToggle>
          {experience.map((job) => (
            <AccordionItem key={job.company} border="none" mb={3}>
              <h2>
                <AccordionButton
                  bg="surface"
                  _expanded={{ color: "highlight", borderColor: "accent" }}
                  borderRadius="md"
                  py={3}
                >
                  <Box as="span" flex="1" textAlign="left" fontWeight="500" color="muted">
                    {job.company}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>

              <AccordionPanel pb={4} pt={3}>
                <Heading size="sm" color="subtleText" mb={1}>
                  {job.role}
                </Heading>

                <Text color="subtleText" fontSize="sm" mb={4}>
                  {job.date}
                </Text>

                {job.jobDescription.map((line) => (
                  <Bullet key={line}>{line}</Bullet>
                ))}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </FadeInBox>
    </Box>
  );
};

export default ExperienceAccordion;
