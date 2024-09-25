import "./app.scss";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

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
        <section className="input-group">
          <Input labelText="First Name" inputType="text" placeholderText="John" />
          <Input labelText="Last Name" inputType="text" placeholderText="Doe" />
          <Input labelText="Email" inputType="email" placeholderText="johndoe@yopmail.com" />
          <Input labelText="Password" inputType="password" placeholderText="***" />
        </section>
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
