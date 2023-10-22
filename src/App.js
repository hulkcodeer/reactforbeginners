import Detail from "./routes/Detail";
import Home from "./routes/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
        <Route path={process.env.PUBLIC_URL + "/movie/:id"} element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
