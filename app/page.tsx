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
import SearchForm from '@/components/searchForm';

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

export default function DashboardLayoutBranding() {

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
