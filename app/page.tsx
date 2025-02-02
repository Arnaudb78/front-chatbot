"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { AppProvider, type Navigation } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import {Breadcrumbs, Link} from "@mui/material";
import StatCard, { StatCardProps } from '../components/StatCard';
import {Grid, Stack} from "@mui/system";
import HighlightedCard from '../components/HighlightedCard';
import SessionsChart from '../components/SessionsChart';
import PageViewsBarChart from '../components/PageViewsBarChart';
import CustomizedDataGrid from '../components/CustomizedDataGrid';
import CustomizedTreeView from '../components/CustomizedTreeView';
import ChartUserByCountry from '../components/ChartUserByCountry';
import {Copyright} from "@mui/icons-material";
import SearchForm from '@/components/searchForm';




const data: StatCardProps[] = [
    {
        title: 'Users',
        value: '14k',
        interval: 'Last 30 days',
        trend: 'up',
        data: [
            200, 24, 220, 260, 240, 380, 100, 240, 280, 240, 300, 340, 320, 360, 340, 380,
            360, 400, 380, 420, 400, 640, 340, 460, 440, 480, 460, 600, 880, 920,
        ],
    },
    {
        title: 'Conversions',
        value: '325',
        interval: 'Last 30 days',
        trend: 'down',
        data: [
            1640, 1250, 970, 1130, 1050, 900, 720, 1080, 900, 450, 920, 820, 840, 600, 820,
            780, 800, 760, 380, 740, 660, 620, 840, 500, 520, 480, 400, 360, 300, 220,
        ],
    },
    {
        title: 'Event count',
        value: '200k',
        interval: 'Last 30 days',
        trend: 'neutral',
        data: [
            500, 400, 510, 530, 520, 600, 530, 520, 510, 730, 520, 510, 530, 620, 510, 530,
            520, 410, 530, 520, 610, 530, 520, 610, 530, 420, 510, 430, 520, 510,
        ],
    },
];
const NAVIGATION: Navigation = [
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'cryptos',
    title: 'Cryptos',
    icon: <MonetizationOnIcon />,
  },
];

const theme = createTheme({
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function PageContent({ pathname }: { pathname: string }) {
    if (pathname === "/dashboard") {
        return (
            <Box
                sx={{
                    px: 2,
                    py: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'left',
                }}
            >
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        CryptoBot
                    </Link>
                    <Typography sx={{color: 'text.primary'}}>Accueil</Typography>
                </Breadcrumbs>

                <Box sx={{px: 2, py: 2, width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
                    {/* cards */}
                    <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
                        Tableau de bord
                    </Typography>
                    <Grid
                        container
                        spacing={2}
                        columns={12}
                        sx={{ mb: (theme: any) => theme.spacing(2) }}
                    >
                        {data.map((card, index) => (
                            <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
                                <StatCard {...card} />
                            </Grid>
                        ))}
                        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                            <HighlightedCard />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <SessionsChart />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <PageViewsBarChart />
                        </Grid>
                    </Grid>
                    <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
                        Details
                    </Typography>
                    <Grid container spacing={2} columns={12}>
                        <Grid size={{ xs: 12, lg: 9 }}>
                            <CustomizedDataGrid />
                        </Grid>
                        <Grid size={{ xs: 12, lg: 3 }}>
                            <Stack gap={2} direction={{ xs: 'column', sm: 'row', lg: 'column' }}>
                                <CustomizedTreeView />
                                <ChartUserByCountry />
                            </Stack>
                        </Grid>
                    </Grid>
                    <Copyright sx={{ my: 4 }} />
                </Box>
            </Box>
        );
    }
    return (
        <Box
            sx={{
                py: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
            }}
        >
            <Typography>Dashboard content for {pathname}</Typography>

        </Box>
    );
  if (pathname === "/dashboard") {
    return (
      <Box
      sx={{
        py: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: 10,
      }}
    >
      <Typography sx={{fontSize: 40}}>Discover the true potential of cryptocurrencies.</Typography>
      <SearchForm />
    </Box>
    );
  }
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography>Dashboard content for {pathname}</Typography>
    </Box>
  );
}

interface Props {
    window?: () => Window;
}

export default function DashboardLayoutBranding(props: Props) {

    const router = useDemoRouter('/dashboard');

    return (
        <AppProvider
            navigation={NAVIGATION}
            branding={{
                logo: <img src="/logo/logo.png" alt="CryptoBot logo"/>,
                title: 'CryptoBot',
                homeUrl: '/toolpad/core/introduction',
            }}
            router={router}
            theme={theme}
        >
            <DashboardLayout>
                <PageContent pathname={router.pathname}/>
            </DashboardLayout>
        </AppProvider>
    );
}
