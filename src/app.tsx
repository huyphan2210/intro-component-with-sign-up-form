import "./app.scss";

export function App() {
  const heading = "Learn to code by watching others";
  return (
    <main>
      <h1>{heading}</h1>
      <form>
        <section className="fields"></section>
        <section className="terms"></section>
        <section className="button-group"></section>
      </form>
    </main>
  );
}
