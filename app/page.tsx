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
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia } from '@mui/material';

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

interface cryptoProps {
  _id: string,
  name: string,
  description: string,
  founder: string,
  categorie: string,
}

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
  const [cryptoData, setCryptoData] = React.useState<cryptoProps[]>([]);
  React.useEffect(() => {
    const getCryptoData = async () => {
      try {
        const response = await fetch("http://localhost:3000/crypto");
        const data = await response.json();
        setCryptoData(data);
      } catch (error) {
        console.error("Error fetching crypto data:", error);
      }
    };

    getCryptoData();
  }, []);
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
      <div className='flex flex-wrap gap-8'>
        {cryptoData.map((crypto, index) => (
            <Card key={index} sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {crypto.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {crypto.description}
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography gutterBottom variant="body2" component="div">
                    {crypto.founder}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
      </div>
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
