import React from 'react'
import { useDispatch } from 'react-redux';

const SearchFunctionality = (searchQuery) => {
    const dispatch = useDispatch()
    const { sort, brand, category, size } = useSelector((state) => state.filter);

   return dispatch(
        getBagData({
          search: searchQuery,
          sort,
          brand,
          category,
          size,
          skip: 0,
        })
      )
        .then((res) => {
          if (res.type == "GET_BAG_SUCCESS") {
            navigate("/bag", { state: { data: res.payload } });
          }
        })
        .catch((err) => {
          console.log(err);
        });
}

export default SearchFunctionality