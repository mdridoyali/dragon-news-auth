import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    const { title, image_url, details, _id } = news || {};


  return (
    <div>
      <figure>
        <img className="w-full " src={image_url} />
      </figure>
      <div className="my-5">
        <h3 className="text-3xl">{title} </h3>
        {details.length > 200 ? (
          <p>
            {details.slice(0, 200)}{" "}
            <Link to={`/news/${_id}`} className="text-semibold text-blue-600">Read More...</Link>{" "}
          </p>
        ) : (
          <p>{details}</p>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
