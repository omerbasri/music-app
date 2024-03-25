import Content from "components/Content"
import SideBar from "components/Sidebar"
import Footer from "components/Footer";



function App() {
  return (
    <>
      <div className="wrapper">
        <SideBar/>
        <Content/>
      </div>
        <Footer/>
    </>
  );
}

export default App;
