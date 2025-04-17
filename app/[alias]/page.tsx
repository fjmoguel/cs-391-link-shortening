import { redirect } from "next/navigation";
import getOriginalURL from "@/lib/originalURL";

export default async function AliasPage({params,}: {params: Promise<{ alias: string }> ;}) {
  const { alias } = await params;
  const url = await getOriginalURL(alias);
  redirect(url);
}
