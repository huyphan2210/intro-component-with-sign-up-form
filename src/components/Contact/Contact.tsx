import { FC } from "preact/compat";
import linkedIn from "../../assets/icons/linkedin.svg";
import portfolio from "../../assets/icons/website.svg";
import "./Contact.scss";

const Contact: FC = () => {
  return (
    <address>
      <a href="https://www.linkedin.com/in/huy-phan-7924aa25a/" target="_blank">
        <img src={linkedIn} loading="lazy" alt="LinkedIn" />
      </a>
      <a href="https://huy-phan-portfolio.netlify.app/" target="_blank">
        <img src={portfolio} loading="lazy" alt="Portfolio" />
      </a>
    </address>
  );
};

export default Contact;
