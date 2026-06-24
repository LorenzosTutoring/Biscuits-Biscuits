import { Box, Chip, Container, Paper, Stack, Typography } from '@mui/material'
import biscuitHero from '../assets/BiscuitHero.jpeg'
import Seo from '../components/Seo.jsx'

export default function Homepage() {
    return (
        <>
            <Seo
                title="Homepage"
                description="Meet the Biscuits-Biscuits crew and discover what we are baking."
                path="/"
            />

            <Container maxWidth="md">
                <Paper elevation={1} sx={{ p: 3, borderRadius: 3 }}>
                    <Stack spacing={2.5}>
                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            alignItems={{ xs: 'flex-start', sm: 'center' }}
                            justifyContent="space-between"
                            spacing={2}
                        >
                            <Typography variant="h4" component="h1">
                                Our crew
                            </Typography>

                            <Box
                                component="img"
                                src={biscuitHero}
                                alt="BiscuitHero"
                                sx={{
                                    width: { xs: '100%', sm: 180 },
                                    maxWidth: 260,
                                    height: 'auto',
                                    borderRadius: 2,
                                    objectFit: 'cover',
                                }}
                            />
                        </Stack>

                        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                            <Chip label="Florence K" color="secondary" />
                            <Chip label="Me" color="secondary" />
                            <Chip label="Biscuit" color="secondary" />
                        </Stack>
                    </Stack>
                </Paper>
            </Container>
        </>
    )
}
