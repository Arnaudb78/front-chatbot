"use client";

import { TextField, Button, Box, Typography } from '@mui/material';
import { useState } from 'react';

const Form = () => {
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');

  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event: any) => {
    // Empêcher le rechargement de la page
    event.preventDefault();

    // Si tu veux vérifier la saisie, tu peux le faire ici
    // if (!inputValue) {
    //   return alert('Veuillez saisir une crypto');
    // }

    try {
      const req = await fetch('http://localhost:3000/crypto', {
        method: 'GET',  // Assure-toi que tu veux utiliser GET ici, sinon remplace par POST
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (req.ok) {
        const res = await req.json();
        console.log(res); // Traite les résultats ici
      } else {
        console.error('Erreur lors de la requête');
      }
    } catch (error) {
      console.error('Une erreur s\'est produite:', error);
    }

    setSubmittedValue(inputValue); // Optionnel : définir la valeur soumise
    setInputValue(''); // Réinitialiser le champ après soumission
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 400,
        margin: 'auto',
        padding: 2,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" component="h2" gutterBottom>
        Saisissez une crypto
      </Typography>
      <TextField
        label="Crypto"
        variant="outlined"
        value={inputValue}
        onChange={handleChange}
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" type="submit" sx={{ marginBottom: 2 }}>
        Envoyer
      </Button>
      {submittedValue && (
        <Typography variant="body1">
          Vous avez soumis: {submittedValue}
        </Typography>
      )}
    </Box>
  );
};

export default Form;
