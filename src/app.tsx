import "./app.scss";
import Button from "./components/Button/Button";

export function App() {
  const heading = "Learn to code by watching others";
  const submitBtnContent = "Claim your free trial";

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
  };

  return (
    <main>
      <h1>{heading}</h1>
      <form onSubmit={handleSubmit}>
        <section className="fields"></section>
        <section className="terms"></section>
        <section className="btn-group">
          <Button isForSubmitting>{submitBtnContent}</Button>
          <span>or</span>
          <Button isForSubmitting={false}>
            <a href="https://huy-phan-portfolio.netlify.app/" target="_blank">
              Try it free for 7 days
            </a>
          </Button>
        </section>
      </form>
    </main>
  );
}
