import { Navbar, Loader, Footer, Services, Transactions, Welcome } from "./components";
const App = () => {
  return (
    <div className="App min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;
