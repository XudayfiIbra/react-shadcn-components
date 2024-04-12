import "./App.css";
import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";

import Login from "./pages/login";
function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="grid justify-items-end">
          <ModeToggle />
        </div>
        <div className="grid grid-col-1 justify-center">
          <div className="flex items-center justify-center">
            <Login />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
