import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBagData } from "../Redux/Reducers/bagReducer/action";
import ProductOverview from "../Components/ProductOverview";

const SingleProduct = () => {
  const { id } = useParams();
  const { data } = useSelector((state) => state.bag);
  const { sort, brand, category, size } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [singleBag, setSingleBag] = useState({});
 

  useEffect(() => {
    if(data.length === 0)
    dispatch(getBagData({brand, category, size, skip: 0 }));
  }, [data.length, brand, category, size]);

  useEffect(() => {
    if (id) {
      const singleSelectedBag = data?.find((item) => item._id == id);
      singleSelectedBag && setSingleBag(singleSelectedBag);
    }
  }, [id,data]);
  return <div className="w-[80%] m-auto">
    <ProductOverview singleBag = {singleBag}/>
  </div>;
};

export default SingleProduct;
