import Adv from "./components/Adv";
import BreakingNews from "./components/BreakingNews";
import Header from "./components/Header";
import SmallNewsSidebar from "./components/smallNewsSidebar";
import LatestNews from "./components/LatestNews";
import BigNews from "./components/BigNews";
import MediumNews from "./components/MediumNews";
import ShadowSeparator from "./components/ShadowSeparator";
import SmallNews from "./components/cards/SmallNews";
import EditorPick from "./components/EditorPick";
import Footer from "./components/Footer";
import "./app.css";
import CategorySection from "./components/CategorySection";


export default function App() {
  return (
    <div className="app">
      <Header />

      <BreakingNews title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"} time={5} />
      <div className="adv_container">
        <Adv />
      </div>

      <section className="main">
        <section className="main__content">
          <SmallNewsSidebar />

          <div>
            <BigNews category="Food" />
            <MediumNews />
          </div>

          <div className="main__adv-container">
            <Adv />
          </div>

          <section className="main__content__editor-picks">
            <ShadowSeparator title={"Editor's picks"} />

            <div className="main__content__editor-picks__content">
              <EditorPick />
              <EditorPick />
              <EditorPick />
            </div>
          </section>
        </section>

        <section className="right-sidebar">

          <div className="right-sidebar__adv-container">
            <Adv />
          </div>

          <LatestNews />
          <ShadowSeparator title="Deal of the day" />
          <SmallNews news={{
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt",
          }} />
        </section>
      </section>

      <div className="long-adv-container">
        <Adv />
      </div>

      <CategorySection />

      <Footer />
    </div>
  )
}