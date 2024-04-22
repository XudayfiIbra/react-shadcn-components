import "./App.css";
import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";
import Login from "./pages/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OtpVerify from "./pages/otp-verify";
import UserGreeting from "./pages/userGreeting";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router>


          <div className="grid justify-items-end">
            <ModeToggle />
          </div>
          <div className="grid grid-col-1 justify-center">
            <div className="flex items-center justify-center">
              <Routes>
                <Route path="/otp" element={<OtpVerify />} />
                <Route path="/" element={<Login />} />
                <Route path="/greeting" element={<UserGreeting />} />
              </Routes>
            </div>
          </div>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
