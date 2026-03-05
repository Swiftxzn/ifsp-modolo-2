import "./App.css";
import Card from "./components/Card";

export default function App() {
  return (
    <>
      <div className='container'>
        <Card title={"SEDANS"} color={" hsl(31, 77%, 52%)"}/>
        <Card title={"SUV"} color={"hsl(184, 100%,22%)"}/>
        <Card title={"LUXURY"} color={"hsl(179, 100%, 13%)"}/>
      </div>
    </>
  );
}