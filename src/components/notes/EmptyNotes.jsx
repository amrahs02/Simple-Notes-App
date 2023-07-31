import { LightbulbOutlined as Lightbulb } from "@mui/icons-material";
import { Typography, Box, styled } from "@mui/material";

const Light = styled(Lightbulb)`
  font-size: 120px;
  color: #f5f5f5;
`;

const Text = styled(Typography)`
  color: #80868b;
  font-size: 22px;
`;

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20vh;
`;

const EmptyNotes = () => {
  return (
    <Container>
      <Light />
      <Text>Notes you add appear here</Text>
      <Text
        style={{
          bottom: "0px",
          position: "relative",
          fontSize: "10px",
          top: "20px",
        }}
      >
        The more you know, the more you realize how little you know
      </Text>
    </Container>
  );
};

export default EmptyNotes;
