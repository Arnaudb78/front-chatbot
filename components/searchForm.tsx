import { FormControl, FormHelperText, Input, InputLabel, Button } from "@mui/material";
import { useState } from "react";

export default function SearchForm() {
    const [search, setSearch] = useState("");
    const [responseApi, setResponseApi] = useState<string | null>(null);

    const handleSearch = (params: string) => {
        setSearch(params);
    };

    const searchCrypto = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await fetch(`http://localhost:3000/crypto/api/openai/${search}`);
            const data = await response.json();
            console.log(data);

            if (data.message && data.message.content) {
                setResponseApi(data.message.content);
            } else {
                setResponseApi("Aucune donnée disponible.");
            }
        } catch (error) {
            console.error("Error fetching crypto data:", error);
            setResponseApi("Une erreur est survenue lors de la récupération des données.");
        }
    };

    return (
        <div>
            <form onSubmit={searchCrypto}>
                <FormControl>
                    <InputLabel htmlFor="search-input">Search Cryptocurrency</InputLabel>
                    <Input
                        id="search-input"
                        aria-describedby="search-helper-text"
                        value={search}
                        onChange={(e) => handleSearch(e.target.value)}
                        required
                    />
                    <FormHelperText id="search-helper-text">Type a cryptocurrency name.</FormHelperText>
                    <Button type="submit" variant="contained" sx={{ mt: 2 }}>Search</Button>
                </FormControl>
            </form>

            {/* ✅ Affichage du contenu si disponible */}
            {responseApi && (
                <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
                    <h3>Résultat :</h3>
                    <p>{responseApi}</p>
                </div>
            )}
        </div>
    );
}
