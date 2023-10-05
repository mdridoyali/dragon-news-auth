import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
  const newses = useLoaderData();


  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4 gap-6 ">
        <div className="">
            <LeftSideNav></LeftSideNav>
        </div>
        {/* news container  */}
        <div className="md:col-span-2 ">
            {
              newses.map((news, idx) => <NewsCard key={idx} news={news} ></NewsCard>)
            }
        </div>
        <div className="">
            <RightSideNav></RightSideNav>
        </div>
      </div>

    </div>
  );
};

export default Home;
