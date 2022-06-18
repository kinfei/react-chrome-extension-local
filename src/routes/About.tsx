import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <p>About</p>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Home page
        </button>
      </header>
    </div>
  );
};

export default About;
