"use server";

import getCollection, { ALIASES } from "@/db";
import { ShortenResponse } from "@/types";

export default async function ShorterURL(alias: string, url: string): Promise<ShortenResponse> {
    const aliasCollection = await getCollection(ALIASES);
    const existing = await aliasCollection.findOne({ alias });

    if (existing) {
        return { success: false, alias: "Alias already exists", url: "" };
    }

    try {
        new URL(url);
    } catch {
        return { success: false, alias: "", url: "Invalid URL format" };
    }

    const res = await fetch(url).catch(() => null);
    if (!res || !res.ok) {
        return { success: false, alias: "", url: "URL could not be reached" };
    }

    await aliasCollection.insertOne({ alias, url });

    return { success: true, alias, url };
}
