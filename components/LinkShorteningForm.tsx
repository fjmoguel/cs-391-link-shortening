"use client";

import ShorterURL from "@/lib/shortUrl";
import { TextField, Button, FormHelperText } from "@mui/material";
import { useState } from "react";

export default function NewShorteningForm() {
    const [alias, setAlias] = useState("");
    const [url, setURL] = useState("");
    const [message, setMessage] = useState("");

    return (
        <form onSubmit={async (event) => {
            event.preventDefault();
            setMessage("");
            const response = await ShorterURL(alias, url);

            if (!response.success) {
                if (response.alias === "Alias already exists") {
                    setMessage("Alias already exists.");
                } else if (response.url === "Invalid URL format") {
                    setMessage("The URL format is invalid.");
                } else if (response.url === "URL could not be reached") {
                    setMessage("The URL could not be reached.");
                } else {
                    setMessage("Something went wrong.");
                }
                return;
            }
            const fullURL = `https://cs-391-link-shortening.vercel.app/${response.alias}`;
            setMessage(fullURL);
        }}
        style={{
            width: "100%",
            maxWidth: "400px",
            padding: "1.5rem",
            backgroundColor: "#e0f7fa",
            borderRadius: "1rem",
        }}
        >
        <TextField
            variant="filled"
            sx={{ backgroundColor: "white", width: "100%", mb: 2 }}
            label="Alias"
            value={alias}
            onChange={(e) => setAlias(e.target.value)} />
        <TextField
            variant="filled"
            sx={{ backgroundColor: "white", width: "100%", mb: 2 }}
            label="Full URL"
            value={url}
            onChange={(e) => setURL(e.target.value)}
            type="url" />
        <FormHelperText sx={{ mb: 2 }}>
            Enter the alias and full URL to shorten.
        </FormHelperText>

        {message && (
        <div
            style={{
            backgroundColor: message.startsWith("https") 
            ? 
            "#e6f4ea" 
            : 
            "#fdecea", 
            border: `2px solid ${message.startsWith("https") 
                ? 
                "#4caf50" 
                : 
                "#f44336"}`, 
            padding: "1rem",
            borderRadius: "0.5rem",
            textAlign: "center",
            marginBottom: "1rem",
            fontWeight: "bold",
            fontSize: "1rem",
            color: message.startsWith("http") 
            ? 
            "#2e7d32" 
            : 
            "#c62828",
            }} >
            {message.startsWith("http") 
            ? (
            <>
            <p>Your short URL:</p>
            <p style={{ color: "#1976d2", fontWeight: "normal" }}>{message}</p>
            </>
            ) 
            : (
            <p>{message}</p> )}
        </div>
        )}

        <div style={{ display: "flex", justifyContent: "center" }}>
            <Button sx={{ width: "80px" }}
            variant="contained"
            type="submit"
            disabled={!alias || !url} > Shorten </Button>
        </div>
        </form>
    );
}