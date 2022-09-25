import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar";

function Layout(props) {
  return (
    <div className="App flex flex-col h-screen">
      <Header />
      <div className="flex-grow flex">
        <Sidebar />
        <Main>{props.children}</Main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
