import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SkillCard from "./components/SkillCard";

function App() {
  return (
    <>

      <Header />

      <main>
        <p>Lorem ipsum dolor.</p>

        <SkillCard skill="HTML" />
        <SkillCard skill="CSS" />
        <SkillCard skill="JavaScript" />

      </main>

      <Footer />

    </>
  );
}
export default App;