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
    title: 'Search',
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
