import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Tasks from "./Tasks/Tasks";
import "./style.css";
import Shared from "./Shared/Shared";

export default function Index() {
  return (
    <>
      <section className="main-section">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Tasks />} />
          <Route path="/shared" element={<Shared />} />
        </Routes>
      </section>
    </>
  );
}
