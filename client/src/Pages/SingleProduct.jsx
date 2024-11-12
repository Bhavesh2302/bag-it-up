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
  // useEffect(() => {
  //   if (data.length === 0) {
  //     dispatch(getBagData());
  //   }
  // }, [data.length]);
  useEffect(() => {
    if(data.length === 0)
    dispatch(getBagData({ sort, brand, category, size, skip: 0 }));
  }, [data.length, sort, brand, category, size]);

  useEffect(() => {
    if (id) {
      const singleSelectedBag = data?.find((item) => item._id === id);
      console.log(singleSelectedBag)
      singleSelectedBag && setSingleBag(singleSelectedBag);
    }
  }, [id,data]);
  console.log(data);
  console.log(id);
  return <div className="w-[90%] m-auto">
    <ProductOverview singleBag = {singleBag}/>
  </div>;
};

export default SingleProduct;
