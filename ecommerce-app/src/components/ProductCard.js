import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import wish from '../images/wish.svg'
import view from '../images/view.svg'
import prodcompare from '../images/prodcompare.svg'
import addcart from '../images/add-cart.svg'
import { watch, watch2 } from "../images";

const ProductCard = ({ grid }) => {
  let location = useLocation();
  console.log(location);
  return (
    <div
      className={`${location.pathname === "/product" ? `gr-${grid}` : "col-3"}`}
    >
      {console.log(grid)}
      <Link to={":id"} className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src={wish} alt="wishlist" />
          </Link>
        </div>
        <div className="product-image">
          <img src={watch} className="img-fluid" alt="watch" />
          <img src={watch2} className="img-fluid" alt="watch2" />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kids headphones bulk 10 pack multi colored for students
          </h5>
          <ReactStars
            count={5}
            size={24}
            value="3"
            edit={false}
            activeColor="#ffd700"
          />
          <p className={`description ${grid === 12 ? 'd-block':'d-none'}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            repudiandae natus velit placeat optio voluptates.
          </p>

          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src={view} alt="view" />
            </Link>
            <Link>
              <img src={prodcompare} alt="compare" />
            </Link>
            <Link>
              <img src={addcart} alt="" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
