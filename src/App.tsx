import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import {RequireAuth} from "./components/RequireAuth";
import Profile from "./pages/ProfilePage";
import Home from './pages/HomePage.tsx'
import {Login} from "./components/Login";
import About from "./pages/AboutPage";
import NavigationBars from "./ui-components/NavBarHeader4";
import Navigation from "./ui-components/Group15";
import NewCalendar from "./ui-components/NeuerKalender4";
import NewTermin from "./ui-components/NeuerTermin4";
import NewToDo from "./ui-components/NeuesToDo4";

import {contentStyle, pageStyle} from "./styles/styles.tsx";
import Home2 from "./pages/HomePage - Copy.tsx";
function App() {
  return (
      <div style={pageStyle}>
          <NavigationBars/>
              <Router>
                  <div style={contentStyle}>
                      <Routes>

                          <Route path="/about" element={<About/>}/>
                          <Route path="/" element={<Home/>}/>
                          <Route path="/calendar:{id}" element={<Home/>}/>
                          <Route path="/menue" element={<Navigation/>}/>
                          <Route path="/feiertage" element={<Home/>}/>
                          <Route path="/newCalendar" element={<NewCalendar/>}/>
                          <Route path="/newTermin" element={<NewTermin/>}/>
                          <Route path="/newToDo" element={<NewToDo/>}/>
                      </Routes>
                  </div>
              </Router>
      </div>
  )

}

export default App
