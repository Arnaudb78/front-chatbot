"use client";
import { Box, Typography } from "@mui/material";
import Form from "@/components/form";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useState, useEffect } from 'react';

const FetchCryptoData = () => {
  const [cryptoData, setCryptoData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/crypto', {
          method: "GET",
          credentials: "include",
        });
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données');
        }
        const data = await response.json();
        console.log(data);
        setCryptoData(data);
      } catch (error) {
        setError('Impossible de récupérer les données');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Typography>Chargement...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box>
      <Typography variant="h6">Liste des Cryptos :</Typography>
      {cryptoData && cryptoData.length > 0 ? (
        <ul>
          {cryptoData.map((crypto, index) => (
            <li key={index}>{crypto.name}</li>
          ))}
        </ul>
      ) : (
        <Typography>Aucune donnée disponible</Typography>
      )}
    </Box>
  );
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Box 
        sx={{
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'space-between', 
          minHeight: '100vh',               
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1, 
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" gutterBottom className="mt-8">
            Découvrez les prévisions du marché crypto et prenez une longueur d'avance !
          </Typography>
          <Form />
          <FetchCryptoData /> {/* Intégration de la fonctionnalité FetchCryptoData */}
        </Box>
        <Footer />
      </Box>
    </>
  );
}
