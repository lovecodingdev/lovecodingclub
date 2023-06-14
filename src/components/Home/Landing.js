import "../../styles/landing.css";

const Landing = () => {
  return (
    <div className="landing">
      <div
        className="nft-showcase"
        style={{ backgroundImage: 'url("/line.png")' }}
      >
        <div className="nft-row">
          <img src="/nft.png" width={250} />
        </div>
        <div className="nft-row">
          <img src="/contract.png" width={200} />
          <img src="/web3.png" width={160} />
        </div>
      </div>
      <div className="landing-text">
        <h1 style={{ textAlign: "center" }}>
          <b>Love Coding Club </b>
        </h1>
        <p>Full Stack & Blockchain Developers</p>
      </div>
      <div className="get-started">
        <a
          href="#"
          onClick={() => {
            var root = document.getElementById("root");
            window.scrollTo({
              top: root.scrollHeight,
              behavior: "smooth",
            });
          }}
        >
          Contact Now
        </a>
        <img src="/arrow.png" />
      </div>
      <div className="stats">
        <div className="stat">
          <p>Websites Developed</p>
          <h1>30 +</h1>
        </div>
        <div className="stat">
          <p>Blockchain Projects</p>
          <h1>12 +</h1>
        </div>
        <div className="stat">
          <p>Smart Contracts Deployed</p>
          <h1>100 +</h1>
        </div>
      </div>
    </div>
  );
};

export default Landing;
