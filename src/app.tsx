import "./app.scss";
import Button from "./components/Button/Button";
import Checkbox, { CheckboxProps } from "./components/Checkbox/Checkbox";
import Input from "./components/Input/Input";
import { ReactElement } from "preact/compat";

interface Condition extends CheckboxProps {
  content: ReactElement;
}

export function App() {
  const heading = "Learn to code by watching others";
  const submitBtnContent = "Claim your free trial";

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
  };

  const conditionList: Condition[] = [
    {
      label: "terms",
      content: (
        <>
          I agree to the{" "}
          <a
            href="https://termly.io/resources/templates/terms-of-service-template/"
            target="_blank"
          >
            Terms and Services
          </a>{" "}
          of <span className="brand-name">CodeBlue</span>
        </>
      ),
    },
    {
      label: "newsletter",
      content: (
        <>
          Send me the{" "}
          <a
            href="https://termly.io/resources/templates/terms-of-service-template/"
            target="_blank"
          >
            Newsletter
          </a>{" "}
          of <span className="brand-name">CodeBlue</span>
        </>
      ),
    },
  ];

  return (
    <main>
      <h1>{heading}</h1>
      <form onSubmit={handleSubmit}>
        <section className="input-group">
          <Input
            labelText="First Name"
            inputType="text"
            placeholderText="John"
          />
          <Input labelText="Last Name" inputType="text" placeholderText="Doe" />
          <Input
            labelText="Email"
            inputType="email"
            placeholderText="johndoe@yopmail.com"
          />
          <Input
            labelText="Password"
            inputType="password"
            placeholderText="***"
          />
        </section>
        <section className="term-group">
          <ul>
            {conditionList.map(({ label, content }) => (
              <li>
                <Checkbox label={label}>{content}</Checkbox>
              </li>
            ))}
          </ul>
        </section>
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
