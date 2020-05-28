import React from "react";
import Product from "./Product";
import FilterGroup from "./FilterGroup";
function ProductList(){
    return(
        <>
            <FilterGroup />
            <Product />
        </>
    );
} 

export default ProductList;