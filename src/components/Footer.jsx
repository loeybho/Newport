import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div``;
function Footer() {
  return (
    <>
      <Wrapper>
        <h1>
          © Powered by.{" "}
          <Link
            to="https://github.com/loeybho"
            target="_blank"
            className="name"
          >
            오별
          </Link>
        </h1>
      </Wrapper>
    </>
  );
}

export default Footer;
