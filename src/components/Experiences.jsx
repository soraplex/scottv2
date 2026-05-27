import { Box, Heading, Flex, Tabs, TabList, TabPanels, Tab, TabPanel, Text, Fade } from "@chakra-ui/react";
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

const ExperienceTab = ({ company }) => (
  <Tab
    fontWeight="500"
    color="muted"
    fontSize={{ base: "sm", md: "md" }}
    _selected={{
      color: "highlight",
      bg: "surface",
      borderColor: "accent",
    }}
  >
    {company}
  </Tab>
);

const ExperiencePanel = ({ job }) => (
  <TabPanel>
    <Heading size="md" color="subtleText">
      {job.role}
    </Heading>

    <Text color="subtleText" mt={1} mb={4}>
      {job.date}
    </Text>

    {job.jobDescription.map((line) => (
      <Bullet key={line}>{line}</Bullet>
    ))}
  </TabPanel>
);

const ExperienceTabs = () => {
  return (
    <Box id="experience">
      <FadeInBox>
        <Heading size="md" mb={6} color="accent">
          Experience
        </Heading>

        <Tabs variant="enclosed" isLazy lazyBehavior="unmount">
          <TabList>
            {experience.map((job) => (
              <ExperienceTab key={job.company} company={job.company} />
            ))}
          </TabList>

          <TabPanels>
            {experience.map((job) => (
              <ExperiencePanel key={job.company} job={job} />
            ))}
          </TabPanels>
        </Tabs>
      </FadeInBox>
    </Box>
  );
};

export default ExperienceTabs;