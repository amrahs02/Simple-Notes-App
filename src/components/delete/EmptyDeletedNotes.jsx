import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Typography, Box, styled } from "@mui/material";
import HeaderBar from "../HeaderBar";

const Light = styled(DeleteOutlineOutlinedIcon)`
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
    <>
      <h4 style={{ textAlign: "center", fontStyle: "italic" }}>
        Notes in Trash are deleted after 7 days.
      </h4>
      <Container>
        <Light />
        <HeaderBar />
        <Text>No notes in Trash</Text>
      </Container>
    </>
  );
};

export default EmptyNotes;
