import getCollection, { ALIASES } from "@/db";

export default async function getOriginalURL(alias: string): Promise<string> {
    const collection = await getCollection(ALIASES);
    const result = await collection.findOne({ alias });

    if (!result) {
        throw new Error("Alias not found");
    }

    return result.url;
}
