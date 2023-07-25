import { useContext } from 'react';

import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import EmptyArchiveNotes from './EmptyArchiveNotes';
import { DataContext } from '../../context/DataProvider';

//components
import Archive from './Archive';

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

const Archives = () => {

    const { archiveNotes } = useContext(DataContext);

    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Box sx={{ p: 3, width: '100%' }}>
                <DrawerHeader />
                { archiveNotes.length > 0 ? 
                <Grid container>
                    {
                        archiveNotes.map(archive => (
                            <Grid item>
                                <Archive archive={archive} />
                            </Grid>
                        ))
                    }
                </Grid>
                    : <EmptyArchiveNotes /> }
            </Box>
        </Box>
    )
}

export default Archives;