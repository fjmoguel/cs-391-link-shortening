import NewShorteningForm from "@/components/LinkShorteningForm";

export default function HomePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "2rem",
        paddingTop: "2rem",
        backgroundColor: "#f3f3f3",
      }}
    >
      <NewShorteningForm />
    </div>
  );
}
