import styled from "styled-components";
import { Link } from "react-router-dom";
const NavBox = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 3;
  height: 160px;
  background: #FFE9E3;
  display: flex;
  justify-content: space-between;
  letter-spacing: 1px;
  top: 0;
`;

const Logo = styled.a`
  padding: 40px;
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 32px;
  letter-spacing: -1.2px;
`;

const NavMenu = styled.div`
  list-style: none;
  a {
    padding: 8px 12px;
  }
  a:hover {
    color: #F28482;
  }
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;
  padding-top: 50px;
`;

const NavInfoLogo = styled.div`
  padding-top: 50px;
  padding-right: 100px;
  img {
    /* border: 1px solid black; */
    padding-left: 10px;
    padding-right: 10px;
  }
  /* img:hover {
    content: url("src/assets/pinkCartIcon.svg");
  } */
`;

const Navbar = () => {
  return (
    <NavBox>
      <Logo>
        Flowering
      </Logo>
      <NavMenu>
        <Link to={'/'}>Home</Link>
        <Link to={'/pw'}>Consulting</Link>
        <Link to={'#'}>Community</Link>
        <Link to={'#'}>Contents</Link>
        <Link to={'#'}>FAQ</Link>
      </NavMenu>
      <NavInfoLogo>
        <Link to={'/'}>
          <img src="src\assets\cartIcon.svg" alt="cart" />
        </Link>
        <Link to={'/'}>
          <img src="src\assets\userIcon.svg" alt="user" />
        </Link>
      </NavInfoLogo>
    </NavBox>
  )
}

export default Navbar;