import styled from "styled-components";
import ActiveLink from "./ActiveLink";

const links = [
  { title: "داشبورد", url: "/", key: 0 },
  { title: "لیست کاربران", url: "/users", key: 1 },
];

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 4rem;
  line-height: 4rem;
  background-color: #fafafa;
  text-align: center;
  z-index: 10;

  .nav {
    display: flex;
    align-items: center;
    justify-content: end;
    flex-direction: row-reverse;
    max-width: 1200px;
    margin: 0 auto;
  }

  li {
    margin-right: 2rem;
  }

  .active {
    color: #006239 !important;
  }

  .nav-link {
    color: #29cc88;
  }
`;

export default function TheHeader() {
  return (
    <Nav>
      <ul className="nav">
        {links.map((link) => (
          <li key={link.key}>
            <ActiveLink activeClassName="active" href={link.url}>
              <a className="nav-link">{link.title}</a>
            </ActiveLink>
          </li>
        ))}
      </ul>
    </Nav>
  );
}
