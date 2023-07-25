
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import { Typography, Box, styled } from '@mui/material';

const Light = styled(ArchiveOutlinedIcon)`
    font-size: 120px;
    color: #F5F5F5;
`

const Text = styled(Typography)`
    color: #80868b;
    font-size: 22px
`

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20vh
`

const EmptyNotes = () => {
    return (
        <Container>
            <Light />
            <Text>Your Archive Notes appear here</Text>
        </Container>
    )
}

export default EmptyNotes;