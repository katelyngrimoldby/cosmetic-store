import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { selectData } from "../redux/slices/dataSlice";
import { data, obj } from "../apiTypes";
import NoMatch from "./noMatch";

const findItem = (data: data, id: number): undefined | obj => {
  if (isNaN(id)) {
    return undefined;
  } else {
    return data.find((e) => e.id === id);
  }
};

const Product = () => {
  const data = useAppSelector(selectData);
  const params = useParams();

  const item = params.id ? findItem(data, parseInt(params.id)) : undefined;

  return (
    <>
      {item ? (
        <div>
          <h1>{item.name}</h1>
        </div>
      ) : (
        <NoMatch />
      )}
    </>
  );
};

export default Product;
