export const Hero = () => {
  return (
    <>
      <section style={{ position: "relative" }}>
        <div className="container">
          <div className="section-background"></div>
          <div className="hero-wrapper">
            <div className="hero-text">
              <h1>Little Lemon</h1>
              <h2>Yangon</h2>
              <p>
                We are a family owned Mediterranean restaurant, focused on
                traditional recipes served with a modern twist.
              </p>
              <button>Reserve a table</button>
            </div>
            <div className="hero-img">
              <img src="/src/assets/Hero.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
