export const Footer = () => {
  return (
    <>
      <footer style={{ position: "relative" }}>
        <div className="container">
          <div className="footer-wrapper">
            <div className="section-background"></div>
            <img src="/src/assets/logo.svg" alt="footer image" />
            <nav className="footer-nav">
              <div className="footer-nav__list">
                <h1>Doormat Navigation</h1>
                <ul role="list" className="">
                  <li>Home</li>
                  <li>About</li>
                  <li>Menu</li>
                  <li>Reservations</li>
                  <li>Order Online</li>
                  <li>Login</li>
                </ul>
              </div>
              <div className="footer-nav__list">
                <h1>Contact</h1>
                <ul role="list">
                  <li>Address</li>
                  <li>Phone Number</li>
                  <li>Email</li>
                </ul>
              </div>
              <div className="footer-nav__list">
                <h1>Social Media Links</h1>
                <ul role="list">
                  <li>Facebook</li>
                  <li>Twitter</li>
                  <li>Instagram</li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
};
