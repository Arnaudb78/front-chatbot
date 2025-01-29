import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#333', // Couleur de fond du footer
        color: 'white',          // Couleur du texte
        padding: '20px',         // Espacement intérieur
        textAlign: 'center',     // Centrer le contenu
        position: 'relative',    // S'assurer qu'il reste en bas
        bottom: 0,
        width: '100%',
      }}
    >
      <Typography variant="body2">
        © 2025 CryptoBot - Tous droits réservés.
      </Typography>
      <Typography variant="body2">
        <Link href="/mentions-legales" color="inherit" underline="hover">
          Mentions légales
        </Link> | 
        <Link href="/contact" color="inherit" underline="hover">
          Contact
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
