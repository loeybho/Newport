import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <h1>
        © Powered by.{" "}
        <Link to="https://github.com/loeybho" target="_blank" className="name">
          오별
        </Link>
      </h1>
    </>
  );
}

export default Footer;
