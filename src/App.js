// @ts-nocheck
import { Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import { ColorModeContext, useMode } from "./context/theme";
import Header from "./container/window/Header";
import Sidebar from "./container/window/Sidebar";
import Dashboard from "./container/dashboard";
// import Team from "./container/team";
// import Invoice from "./container/invoice";
// import Contacts from "./container/contacts";
// import Bar from "./container/bar";
// import Form from "./container/form";
// import Line from "./container/line";
// import Pie from "./container/pie";
// import Geography from "./container/geography";
// import Calender from "./container/calender";
// import Faq from "./container/faq";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Header />

            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* <Route path='/team' element={<Team />} /> */}
              {/* <Route path='/contacts' element={<Contacts />} /> */}
              {/* <Route path='/invoice' element={<Invoice />} /> */}
              {/* <Route path='/form' element={<Form />} /> */}
              {/* <Route path='/bar' element={<Bar />} /> */}
              {/* <Route path='/pie' element={<Pie />} /> */}
              {/* <Route path='/line' element={<Line />} /> */}
              {/* <Route path='/geography' element={<Geography />} /> */}
              {/* <Route path='/calender' element={<Calender />} /> */}
              {/* <Route path='/faq' element={<Faq />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
