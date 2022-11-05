import "./Tour.css";
import { useState } from "react";

function Tour({ id, image, info, name, price, removeTour }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>{showMore ? info : `${info.substring(0, 200)}`}</p>
        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? `Show less` : `Read More`}
        </button>
        <button onClick={() => removeTour(id)} className="delete-btn">
          Not Interested
        </button>
      </footer>
    </article>
  );
}

export default Tour;
