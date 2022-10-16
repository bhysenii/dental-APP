import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const tiers = [
    {
        title: 'Anatomic Crown',
        price: '5',
        description: [
            '-Design with gingiva for large works must be paid extra.',
            '-For more please Contact us'

        ],
        buttonText: 'Contact us',
        buttonVariant: 'outlined',
    },
    {
        title: 'Coping',
        price: '5',
        description: [
            '-Design with gingiva for large works must be paid extra.',
            '-For more please Contact us'
        ],
        buttonText: 'Contact us',
        buttonVariant: 'contained',
    },
    {
        title: 'Offset coping',
        price: '3',
        description: [
            '-Design with gingiva for large works must be paid extra.',
            '-For more please Contact us'
        ],
        buttonText: 'Contact us',
        buttonVariant: 'outlined',
    },

];

const box1 = [
    {
        title: 'Inlay/Onlay',
        price: '5',
        description: [

        ],
        buttonText: 'Contact us',
        buttonVariant: 'outlined',
    },
    {
        title: 'Veneer',
        price: '5',
        description: [

        ],
        buttonText: 'Contact us',
        buttonVariant: 'contained',
    },
    {
        title: 'Partial denture',
        price: '25',
        description: [

        ],
        buttonText: 'Contact us',
        buttonVariant: 'outlined',
    },

];


const box2 = [
    {
        title: 'Full denture',
        price: '25',
        description: [

        ],
        buttonText: 'Contact us',
        buttonVariant: 'outlined',
    },
    {
        title: 'Bite splint',
        price: '10',
        description: [

        ],
        buttonText: 'Contact us',
        buttonVariant: 'contained',
    },
    {
        title: 'Primary telescopic crown',
        price: '10',
        description: [

        ],
        buttonText: 'Contact us',
        buttonVariant: 'outlined',
    },

];

const box3 = [
    {
        title: 'Secondary telescopic crown',
        price: '10',
        description: [

        ],
        buttonText: 'Contact us',
        buttonVariant: 'outlined',
    },
    {
        title: 'Attachment',
        price: '10',
        description: [

        ],
        buttonText: 'Contact us',
        buttonVariant: 'contained',
    },
    {
        title: 'Bars',
        price: '20',
        description: [

        ],
        buttonText: 'Contact us',
        buttonVariant: 'outlined',
    },

];



function PricingCard() {
    return (
        <React.Fragment>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />

            {/* Hero unit */}
            <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Pricing
                </Typography>
                <Typography variant="h6" align="center" color="text.secondary" component="p">
                    The time we need to design a job, whatever it is , is up to 24 hours.
                    <br />
                    For more please Contact Us
                </Typography>
            </Container>
            {/* End hero unit */}
            <Container maxWidth="md" component="main" >
                <Grid container spacing={5} alignItems="flex-end">
                    {tiers.map((tier) => (
                        // Enterprise card is full width at sm breakpoint
                        <Grid
                            item
                            key={tier.title}
                            xs={12}
                            sm={tier.title === 'Enterprise' ? 12 : 6}
                            md={4}
                        >
                            <Card>
                                <CardHeader
                                    title={tier.title}
                                    subheader={tier.subheader}
                                    titleTypographyProps={{ align: 'center' }}
                                    action={tier.title === 'Pro' ? <StarIcon /> : null}
                                    subheaderTypographyProps={{
                                        align: 'center',
                                    }}
                                    sx={{
                                        backgroundColor: (theme) =>
                                            theme.palette.mode === 'light'
                                                ? theme.palette.grey[200]
                                                : theme.palette.grey[700],
                                    }}
                                />
                                <CardContent>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'baseline',
                                            mb: 2,

                                        }}
                                    >
                                        <Typography component="h2" variant="h3" color="text.primary">
                                            {tier.price} €
                                        </Typography>
                                        <Typography variant="h6" color="text.secondary">
                                            /for piece
                                        </Typography>
                                    </Box>
                                    <ul>
                                        {tier.description.map((line) => (
                                            <Typography
                                                component="li"
                                                variant="subtitle1"
                                                align="center"
                                                key={line}
                                            >
                                                {line}
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardActions>
                                    <Link to='contact'>
                                        <Button fullWidth variant={tier.buttonVariant}>
                                            {tier.buttonText}
                                        </Button>
                                    </Link>

                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>


            <Container maxWidth="md" component="main" >
                <Grid container spacing={5} alignItems="flex-end">
                    {box1.map((tier) => (
                        // Enterprise card is full width at sm breakpoint
                        <Grid
                            item
                            key={tier.title}
                            xs={12}
                            sm={tier.title === 'Enterprise' ? 12 : 6}
                            md={4}
                        >
                            <Card>
                                <CardHeader
                                    title={tier.title}
                                    subheader={tier.subheader}
                                    titleTypographyProps={{ align: 'center' }}
                                    action={tier.title === 'Pro' ? <StarIcon /> : null}
                                    subheaderTypographyProps={{
                                        align: 'center',
                                    }}
                                    sx={{
                                        backgroundColor: (theme) =>
                                            theme.palette.mode === 'light'
                                                ? theme.palette.grey[200]
                                                : theme.palette.grey[700],
                                    }}
                                />
                                <CardContent>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'baseline',
                                            mb: 2,

                                        }}
                                    >
                                        <Typography component="h2" variant="h3" color="text.primary">
                                            {tier.price} €
                                        </Typography>
                                        <Typography variant="h6" color="text.secondary">
                                            /for piece
                                        </Typography>
                                    </Box>
                                    <ul>
                                        {tier.description.map((line) => (
                                            <Typography
                                                component="li"
                                                variant="subtitle1"
                                                align="center"
                                                key={line}
                                            >
                                                {line}
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                                <Link to='contact'>
                                    <CardActions>
                                        <Button fullWidth variant={tier.buttonVariant}>
                                            {tier.buttonText}
                                        </Button>
                                    </CardActions>
                                </Link>

                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <Container maxWidth="md" component="main" >
                <Grid container spacing={5} alignItems="flex-end">
                    {box2.map((tier) => (
                        // Enterprise card is full width at sm breakpoint
                        <Grid
                            item
                            key={tier.title}
                            xs={12}
                            sm={tier.title === 'Enterprise' ? 12 : 6}
                            md={4}
                        >
                            <Card>
                                <CardHeader
                                    title={tier.title}
                                    subheader={tier.subheader}
                                    titleTypographyProps={{ align: 'center' }}
                                    action={tier.title === 'Pro' ? <StarIcon /> : null}
                                    subheaderTypographyProps={{
                                        align: 'center',
                                    }}
                                    sx={{
                                        backgroundColor: (theme) =>
                                            theme.palette.mode === 'light'
                                                ? theme.palette.grey[200]
                                                : theme.palette.grey[700],
                                    }}
                                />
                                <CardContent>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'baseline',
                                            mb: 2,

                                        }}
                                    >
                                        <Typography component="h2" variant="h3" color="text.primary">
                                            {tier.price} €
                                        </Typography>
                                        <Typography variant="h6" color="text.secondary">
                                            /for piece
                                        </Typography>
                                    </Box>
                                    <ul>
                                        {tier.description.map((line) => (
                                            <Typography
                                                component="li"
                                                variant="subtitle1"
                                                align="center"
                                                key={line}
                                            >
                                                {line}
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardActions>
                                    <Button fullWidth variant={tier.buttonVariant}>
                                        {tier.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>



            <Container maxWidth="md" component="main" >
                <Grid container spacing={5} alignItems="flex-end">
                    {box3.map((tier) => (
                        // Enterprise card is full width at sm breakpoint
                        <Grid
                            item
                            key={tier.title}
                            xs={12}
                            sm={tier.title === 'Enterprise' ? 12 : 6}
                            md={4}
                        >
                            <Card>
                                <CardHeader
                                    title={tier.title}
                                    subheader={tier.subheader}
                                    titleTypographyProps={{ align: 'center' }}
                                    action={tier.title === 'Pro' ? <StarIcon /> : null}
                                    subheaderTypographyProps={{
                                        align: 'center',
                                    }}
                                    sx={{
                                        backgroundColor: (theme) =>
                                            theme.palette.mode === 'light'
                                                ? theme.palette.grey[200]
                                                : theme.palette.grey[700],
                                    }}
                                />
                                <CardContent>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'baseline',
                                            mb: 2,

                                        }}
                                    >
                                        <Typography component="h2" variant="h3" color="text.primary">
                                            {tier.price} €
                                        </Typography>
                                        <Typography variant="h6" color="text.secondary">
                                            /for piece
                                        </Typography>
                                    </Box>
                                    <ul>
                                        {tier.description.map((line) => (
                                            <Typography
                                                component="li"
                                                variant="subtitle1"
                                                align="center"
                                                key={line}
                                            >
                                                {line}
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardActions>
                                    <Button fullWidth variant={tier.buttonVariant}>
                                        {tier.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

        </React.Fragment>
    );
}

export default function Pricing() {
    return <PricingCard />;
}