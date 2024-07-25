
import Home_News from "../../Component/Home/Home_News";
import Home_ProductNews from "../../Component/Home/Home_ProductNews";
import Home_IndustryNews from "../../Component/Home/Home_IndustryNews";
import Home_MeAndMy from "../../Component/Home/Home_MeAndMy";
import Home_Interviews from "../../Component/Home/Home_Interviews";
import Home_Report from "../../Component/Home/Home_Report";

function Home() {

  return (
    <main>
      <Home_News />
      <Home_ProductNews />
      <Home_IndustryNews />
      <Home_MeAndMy />
      <Home_Interviews />
      <Home_Report />
    </main>
  );
}

export default Home;
