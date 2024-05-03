import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Forms from "./components/Forms";
import "bootstrap/dist/css/bootstrap.min.css";
import CardsList from "./components/CardsList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <>
      <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div
          className="content"
          style={{ margin: "0%", padding: "0px", width: "100%" }}
        >
          <Header></Header>
          <PostListProvider>
            {selectedTab === "Home" ? <CardsList></CardsList> : <Forms></Forms>}
          </PostListProvider>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
