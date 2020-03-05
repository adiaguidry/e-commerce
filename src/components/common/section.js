import React, { useState } from "react";
import leaves from "../img/leaves.jpg";
import wood from "../img/wood.jpg";
import brick from "../img/brick.jpg";
import { useEffect } from "react";

const Section = () => {
  const [data, setData] = useState([
    {
      img: wood,
      title: "Wood wallpaper with range of stain colors",
      price: "$29.00",
      rating: [
        `fa fa-star`,
        `fa fa-star`,
        `fa fa-star`,
        `fa fa-star-o`,
        `fa fa-star-o`
      ],
      review: "2 review",
      class: "section-cards-item item"
    },
    {
      img: leaves,
      title: "Leaf wallpaper with beautiful greens",
      price: "$49.00",
      rating: [
        `fa fa-star`,
        `fa fa-star`,
        `fa fa-star`,
        `fa fa-star`,
        `fa fa-star-o`
      ],
      review: "1 review",
      class: "section-cards-item item"
    },
    {
      img: brick,
      title: "Brick wallpaper with a natural look",
      price: "$39.00",
      rating: [
        `fa fa-star`,
        `fa fa-star`,
        `fa fa-star`,
        `fa fa-star`,
        `fa fa-star`
      ],
      review: "2 review",
      class: "section-cards-item item"
    }
  ]);
  //handles the slider direction of slide
  const handleSlide = direction => {
    let slides = [...data];
    if (direction === "left") {
      let slide = slides.splice(0, 1);
      slides = [...slides, ...slide];
      console.log(slide);
    } else {
      let slide = slides.splice(slides.length - 1, 1);
      slides = [...slide, ...slides];
      console.log(slide);
    }

    setData(slides);
  };
  useEffect(() => {}, [data]);
  return (
    <div className="section">
      <div className="section-title">
        <ul>
          <li>Trendy</li>
          <li className="active">Featured</li>
          <li>Top Rated</li>
        </ul>
      </div>
      <div className="section-cards">
        <div>
          <i
            className="fas fa-chevron-right right"
            onClick={() => handleSlide("right")}
          />
          <i
            className="fas fa-chevron-left left"
            onClick={() => handleSlide("left")}
          />
        </div>
        {data.map(d => (
          <div key={d.title} className="section-cards-item item">
            <div>
              <img src={d.img} alt="" />
            </div>
            <div className="lead">
              <p>{d.title}</p>
              <p className="price">{d.price}</p>
              <p>
                {d.rating.map(r => (
                  <i className={r} aria-hidden="true"></i>
                ))}
                <span>({d.review})</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
