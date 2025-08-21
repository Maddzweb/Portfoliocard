import Card from "./components/card";
import "./App.css";

export default function App() {
  const cards = [
    {
      title: "Sketching & Painting",
      description: "I love turning ideas into art—charcoal sketches and acrylics are my jam.",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600"
    },
    {
      title: "Web Development",
      description: "Building clean, responsive UIs with React. Always learning new tricks.",
      image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=600"
    },
    {
      title: "AI & Future Tech",
      description: "Curious about how machines learn—experimenting with simple ML projects.",
      image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=600"
    },
    {
      title: "Social & Community",
      description: "I enjoy meeting new people, organizing study jams, and sharing ideas.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=600"
    }
  ];

  return (
    <div className="container">
      <header className="header">
        <h1>Madiha Majeed</h1>
        <p className="subtitle">Student with ideas of creating Portfolio Card</p>
      </header>

      <section className="grid">
        {cards.map((c, i) => (
          <Card key={i} title={c.title} description={c.description} image={c.image} />
        ))}
      </section>
    </div>
  );
}
