import { ReactElement, useEffect, useState } from "preact/compat";
import "./app.scss";
import Button from "./components/Button/Button";
import Checkbox, { CheckboxProps } from "./components/Checkbox/Checkbox";
import Input from "./components/Input/Input";
import Background from "./components/Background/Background";
import Logo from "./components/Logo/Logo";
import Contact from "./components/Contact/Contact";
import ConfirmBox from "./components/ConfirmBox/ConfirmBox";

import confirm from "./assets/icons/confirm.svg";
import confirmDesktop from "./assets/icons/confirm-desktop.svg";
interface Condition extends CheckboxProps {
  content: ReactElement;
}

export interface IIsFormDataValid {
  firstName: boolean;
  lastName: boolean;
  email: boolean;
  password: boolean;
  terms: boolean;
}

export function App() {
  const [isContentRevealed, setisContentRevealed] = useState(false);
  const [isConfirmBoxRevealed, setIsConfirmBoxRevealed] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isConfirmedTrial, setIsConfirmedTrial] = useState(false);
  const heading = (
    <>
      <span>
        <text>Learn to code </text>
      </span>{" "}
      <span>
        <text>by</text>
      </span>{" "}
      <span>
        <text>watching others</text>
      </span>
    </>
  );
  const paragraph =
    "See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.";
  const submitBtnContent = "Claim your free trial";

  const handleSubmit = (e?: SubmitEvent) => {
    e?.preventDefault();
    if (!isConfirmBoxRevealed) {
      setIsConfirmBoxRevealed(true);
      return;
    } else {
      setIsConfirmBoxRevealed(false);
      setIsFormSubmitted(true);
      setTimeout(() => {
        setIsConfirmedTrial(true);
      }, 1000);
    }
  };

  const [isFormDataValid, setIsFormDataValid] = useState<IIsFormDataValid>({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    terms: false,
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

  useEffect(() => {
    setTimeout(() => setisContentRevealed(true), 4000);
  }, []);
  return (
    <>
      <Logo />
      {isContentRevealed && (
        <>
          <header>
            <Contact />
          </header>
          <main className={isConfirmBoxRevealed ? "no-pointer-event" : ""}>
            <Background />
            <hgroup>
              <h1>{heading}</h1>
              <p>{paragraph}</p>
            </hgroup>
            <form
              onSubmit={handleSubmit}
              className={`${isFormSubmitted ? "fade-out" : ""}`}
            >
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
                  {conditionList.map(({ label, content }) => {
                    if (label === "terms") {
                      return (
                        <li>
                          <Checkbox
                            label={label}
                            setIsFormDataValid={setIsFormDataValid}
                          >
                            {content}
                          </Checkbox>
                        </li>
                      );
                    } else {
                      return (
                        <li>
                          <Checkbox label={label}>{content}</Checkbox>
                        </li>
                      );
                    }
                  })}
                </ul>
              </section>
              <section className="btn-group">
                <Button isForSubmitting isDisabled={!isFormValid}>
                  {submitBtnContent}
                </Button>
                <span>or</span>
                <Button isForSubmitting={false} isDisabled={false}>
                  <a
                    href="https://huy-phan-portfolio.netlify.app/"
                    target="_blank"
                  >
                    Try it free for 7 days
                  </a>
                </Button>
              </section>
            </form>
            {isConfirmedTrial && (
              <img
                className="submitted-img"
                src={window.innerWidth >= 1024 ? confirmDesktop : confirm}
                loading="lazy"
                alt="Confirm trial"
              />
            )}
          </main>
          {isConfirmBoxRevealed && (
            <ConfirmBox
              handleSubmit={handleSubmit}
              setIsConfirmBoxRevealed={setIsConfirmBoxRevealed}
            />
          )}
        </>
      )}
    </>
  );
}
