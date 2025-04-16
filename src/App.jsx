import BreakingNews from "./components/BreakingNews";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="app">
      <Header />
      <BreakingNews title={"Test news"} />
      <div className="test" style={{ height: "100000px" }}></div>
    </div>
  )
}