import Content from "components/Content";
import SideBar from "components/Sidebar";
import Footer from "components/Footer";

export default function Home() {
  return (
    <>
      <div className="wrapper">
        <SideBar />
        <Content />
      </div>
      <Footer />
    </>
  );
}
