import React, { useContext, useEffect } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import "./bootstrap.min.css";
import { AppContext } from "../../context/AppContext";
import { getSeller } from "../../action/sellerAction";

const SellerHeader = () => {
  const { entity, dispatch, currentUser } = useContext(AppContext);

  const navigate = useNavigate();

  useEffect(() => {
    loadSeller();
  }, []);

  const loadSeller = async () => {
    await getSeller("seller", dispatch);
  };

  const sellerid = localStorage.getItem("userId");
  console.log(sellerid);
  const sellerUSer = entity.seller.filter((id) => id.sellerId == sellerid);
  console.log(sellerUSer);

  const logout = () => {
    localStorage.removeItem("userId");
    navigate("/sellerLogin");
  };

  return (
    <div className="w-auto p-3">
      <nav class="navbar navbar-expand-md navbar-light bg-dark fixed-top ">
        <a class="navbar-brand">
          <img class="img-size" src="img/LOGO1.png" />
        </a>

        <button
          type="button"
          class="navbar-toggler bg-light"
          data-toggle="collapse"
          data-target="#nav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-between" id="nav">
          <ul class="navbar-nav">
            <li class="nav-item">
              {/* <div className="sellerName"><Link  className="sellerName" to={"/sellerHome"}><button className="btn btn-secondary">Admin</button></Link></div> */}
            </li>

            <li class="nav-item">
              <centre>
                <a
                  class="nav-link text-light font-weight-bold px-3 nav2"
                  href="/sellerHome"
                >
                  <img src="img/LOGO_CRAFT_Name.png" />
                </a>
              </centre>
            </li>
          </ul>

          <div class="form-group dropdown topDropDown">
            <button
              type="button"
              class="btn btn-secondary dropdown-toggle"
              data-toggle="dropdown"
            >
              Seller Account
            </button>

            <div class="dropdown-menu tt2">
              <div class="dropdown-item marginHead">
                <h5>
                  Hi ,
                  {sellerUSer[0]?.sellerFirstName +
                    " " +
                    sellerUSer[0]?.sellerLastName}
                </h5>
              </div>
              <div class="dropdown-item">
                <Link className="headDetails" to="/login">
                  User
                </Link>
              </div>
              <div class="dropdown-item">
                  <Link className="headDetails" to="/sellerLogin">Seller Login</Link>
                  </div>
              <div class="dropdown-item">
                <Link className="headDetails" to="/sellerRegistration">
                  Seller Registration
                </Link>
              </div>
              <div class="dropdown-item">
                <button className="btn btn-secondary" onClick={logout}>Logout</button>
              </div>
            </div>
          </div>
          {/* <!-- Search bar --> */}

          <form onsubmit="event.preventDefault()" class="form-inline ">
            <input class="form-control" type="text" placeholder="Search" />
            <button class="btn btn-secondary" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default SellerHeader;
