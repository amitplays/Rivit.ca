import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Slide from "react-reveal/Slide";
import FirstBlock from "./Components/FirstBlock";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactUs from "./Components/ContactUs";
import Faq from "./Components/Faq";
import RivitingInsights from "./Components/RivitingInsights";
import Workshops from "./Components/Workshops";
import Careers from "./Components/Careers";
import HCL_Domino from "./Components/HCL_Domino";
import CustomApp from "./Components/CustomApp";
import StudentPortal from "./StudentPortal/StudentPortal";
import LoginSignup from "./StudentPortal/LoginSignup";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Slide bottom>
          <Header />
        </Slide>
        <Switch>
          <Route path="/" exact component={FirstBlock}></Route>
          <Route path="/contactUs" component={ContactUs}></Route>
          <Route path="/faqs" component={Faq}></Route>
          <Route path="/rivitingInsights" component={RivitingInsights}></Route>
          <Route path="/workshops" component={Workshops}></Route>
          <Route path="/careers" component={Careers}></Route>
          <Route path="/hcldomino" component={HCL_Domino}></Route>
          <Route path="/customapp" component={CustomApp}></Route>
        </Switch>
        <Slide bottom>
          <Footer />
        </Slide>
      </div>
    </Router>
  );
}

export default App;
