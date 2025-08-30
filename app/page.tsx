import WButton from "@/components/washington/WButton";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center gap-4 bg-empty">
      <WButton content="Primary" style="primary" />
      <WButton content="Subtle" style="subtle" />
      <WButton content="Loading" state="loading" />
    </div>
  );
}