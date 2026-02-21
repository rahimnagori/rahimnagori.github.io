import PROJECT_DEFAULTS from "../utils/constants";
import Contact from "./Contact";
import Footer from "./Footer";
// import { logo } from "../utils/images";

const App = () => {
  const { firstName, lastName, logo } = PROJECT_DEFAULTS;

  return (
    <div className="app-container">
      <div className="m-2 p-2">
        <div className="flex items-center gap-4">
          <img src={logo} className="w-full h-full object-cover" />
          <div className="text-xl font-bold">
            {firstName} {lastName}
          </div>
        </div>
      </div>
      <div>Professional Summary</div>
      <div>Skills & Technologies</div>
      <div>Experiences</div>
      <div>Projects</div>
      <div>Certifications</div>
      <div>Education [Show a timeline]</div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
