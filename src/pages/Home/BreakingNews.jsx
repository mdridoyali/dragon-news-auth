import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex">
      <button className="btn btn-neutral">Breaking News</button>
      <Marquee speed={50} pauseOnHover={true}>
        <Link to="/" >I can be a React component, multiple React components, or just some
        text.</Link>
        <Link to="/" >I can be a React component, multiple React components, or just some
        text.</Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
