import { Nav } from "./Nav";
import { Hero } from "./Hero";

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="nav-wrapper">
            <img src="/src/assets/logo.svg" alt="" />
            <Nav></Nav>
          </div>
        </div>
        <Hero></Hero>
      </header>
    </>
  );
};
