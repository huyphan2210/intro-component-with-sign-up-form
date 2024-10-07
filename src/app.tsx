import { ReactElement, useState } from "preact/compat";
import "./app.scss";
import Button from "./components/Button/Button";
import Checkbox, { CheckboxProps } from "./components/Checkbox/Checkbox";
import Input from "./components/Input/Input";
import Background from "./components/Background/Background";

interface Condition extends CheckboxProps {
  content: ReactElement;
}

export interface IIsFormDataValid {
  firstName: boolean;
  lastName: boolean;
  email: boolean;
  password: boolean;
}

export function App() {
  const heading = "Learn to code by watching others";
  const paragraph =
    "See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.";
  const submitBtnContent = "Claim your free trial";

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
  };

  const [isFormDataValid, setIsFormDataValid] = useState<IIsFormDataValid>({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });

  const isFormValid = Object.values(isFormDataValid).every(Boolean);

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
    <>
      <Background />
      <main>
        <hgroup>
          <h1>{heading}</h1>
          <p>{paragraph}</p>
        </hgroup>
        <form onSubmit={handleSubmit}>
          <section className="input-group">
            <Input
              labelText="First Name"
              inputType="text"
              placeholderText="John"
              setIsFormDataValid={setIsFormDataValid}
            />
            <Input
              labelText="Last Name"
              inputType="text"
              placeholderText="Doe"
              setIsFormDataValid={setIsFormDataValid}
            />
            <Input
              labelText="Email"
              inputType="email"
              placeholderText="johndoe@yopmail.com"
              setIsFormDataValid={setIsFormDataValid}
            />
            <Input
              labelText="Password"
              inputType="password"
              placeholderText="***"
              setIsFormDataValid={setIsFormDataValid}
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
            <Button isForSubmitting isDisabled={isFormValid}>
              {submitBtnContent}
            </Button>
            <span>or</span>
            <Button isForSubmitting={false} isDisabled={false}>
              <a href="https://huy-phan-portfolio.netlify.app/" target="_blank">
                Try it free for 7 days
              </a>
            </Button>
          </section>
        </form>
      </main>
    </>
  );
}
