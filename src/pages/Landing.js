import main from "../assets/images/main.svg";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <main>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit nulla optio voluptates eius nesciunt voluptatibus
            suscipit iure similique, perferendis exercitationem!
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} className="img main-img" alt="" />
      </div>
    </main>
  );
};

export default Landing;
