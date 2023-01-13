import "../../styles/features.css";
import { features } from "../../constants";

const Features = () => {
  return (
    <div className="features" id="features">
      <h1>
        What I <b>Can Do</b>
      </h1>
      <p>My stacks to help all clients.</p>
      <div className="feature-list">
        {features.map((feature, i) => {
          return (
            <div
              className="feature"
              key={i}
              style={{ backgroundImage: 'url("/mask.png")' }}
            >
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
          );
        })}
      </div>
      <img className="filler filler-polygon" src="/polygon.png" />
      <img className="filler filler-rectangle" src="/rectangle.png" />
    </div>
  );
};

export default Features;
