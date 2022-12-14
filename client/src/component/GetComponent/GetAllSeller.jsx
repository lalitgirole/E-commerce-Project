import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteEntity } from "../../action/commonAction";
import { getSeller } from "../../action/sellerAction";

import { AppContext } from "../../context/AppContext";
// import Loader from "../loader/Loader";

const GetAllSeller = () => {
  const currentSellerId = localStorage.getItem("userId");

  const { entity, loading, dispatch } = useContext(AppContext);

  const [formData, setFormData] = useState({});
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    loadSeller();
  }, []);

  const loadSeller = async () => {
    await getSeller("seller", dispatch);
  };

  const navigate = useNavigate();

  const editItem = (id) => {
    navigate("/editSeller",
    {state:{SellerId:currentSellerId}}
    );
  };



  return (
    <div>
      <div className="card subCat22">
        {loading && "loading..."}
        <table className="table container-fluid topmt">
          <thead>
            <tr>
              <th> Seller First Name</th>
              <th>Seller Last Name</th>
              <th>Seller Mobile Number</th>
              <th>Seller Email </th>
              <th>Seller Password</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {entity.seller.length > 0 &&
              entity.seller
                .filter((id) => id.sellerId == currentSellerId)
                .map((item, index) => (
                  <tr key={item.sellerId}>
                    <td>{item.sellerFirstName}</td>
                    <td>{item.sellerLastName}</td>
                    <td>{item.sellerMobileNumber}</td>
                    <td>{item.sellerEmail}</td>
                    <td>{item.sellerPassword}</td>
                    <td>
                      <button
                        className="btn btn-primary mr-2"
                        onClick={() => editItem(item.sellerId)}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetAllSeller;
