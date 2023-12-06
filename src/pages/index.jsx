import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./Home";
import { NotFound } from "./NotFound";
import { Cadastro } from "./Cadastro";
import { Login } from "./Login";

export const Pages = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
);
