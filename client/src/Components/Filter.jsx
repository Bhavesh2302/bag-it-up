import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterSort, filterSize, filterCategory, filterBrand } from "../Redux/Reducers/filterReducer/action";
import Accordion from "./Accordian";

const Filters = () => {
  const { sort, brand, category, size } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  const handleBrand = (e) => {
    let newBrand = [...brand];
    const val = e.target.value;

    if (brand?.includes(val)) {
      const ind = brand.indexOf(val);
      newBrand.splice(ind, 1);
    } else {
      newBrand.push(val);
    }
console.log(newBrand)
    dispatch(filterBrand(newBrand));
  };

  const handleCategory = (e) => {
    const newCategory = [...category];
    const val = e.target.value;

    if (category?.includes(val)) {
      const ind = category.indexOf(val);
      newCategory.splice(ind, 1);
    } else {
      newCategory.push(val);
    }

    dispatch(filterCategory(newCategory));
  };

  const handleSize = (e) => {
    const newSize = [...size];
    const val = e.target.value;

    if (size?.includes(val)) {
      const ind = size.indexOf(val);
      newSize.splice(ind, 1);
    } else {
      newSize.push(val);
    }

    dispatch(filterSize(newSize));
  };

  const handleSort = (e) => {
    const sortOrder = e.target.value === "Low to High" ? 1 : -1;
    dispatch(filterSort(sortOrder));
  };

  return (
    <div className="w-full h-full font-semibold lg:text-base md:text-sm sm:text-xs">
      <Accordion
        title="Filter By Brand"
        isOpen={openSection === "brand"}
        toggle={() => toggleSection("brand")}
        options={["AMERICAN TOURISTER", "SAFARI", "SKYBAGS"]}
        handleChange={handleBrand}
        checkedValues={brand}
      />

      <Accordion
        title="Filter By Category"
        isOpen={openSection === "category"}
        toggle={() => toggleSection("category")}
        options={["backpack", "Duffel", "trolley"]}
        handleChange={handleCategory}
        checkedValues={category}
      />

      <Accordion
        title="Filter By Size"
        isOpen={openSection === "size"}
        toggle={() => toggleSection("size")}
        options={["Small", "Medium", "Large"]}
        handleChange={handleSize}
        checkedValues={size}
      />
<Accordion
        title="Sort By Price"
        isOpen={openSection === "sort"}
        toggle={() => toggleSection("sort")}
        options={["Low to High", "High to Low"]}
        handleChange={handleSort}
        checkedValues={sort === 1 ? ["Low to High"] : ["High to Low"]}
        isRadio={true}
      />
    </div>
  );
};

export default Filters;
