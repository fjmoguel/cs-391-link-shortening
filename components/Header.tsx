"use client";
import { Box } from "@mui/material";

export default function Header() {
    return (
        <Box
        component="header"
        sx={{
            width: "100%",
            height: "60px",
            backgroundColor: "#add8e6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            }} >
        <h1 style={{ fontSize: "2rem", fontWeight: 600, margin: 0 }}> CS391 URL Shortener </h1>
        </Box>
    );
}