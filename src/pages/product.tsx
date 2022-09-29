import { useParams } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { selectData } from "../redux/slices/dataSlice";
import { data, obj } from "../apiTypes";
import NoMatch from "./noMatch";

const findItem = (data: data, id: number): undefined | obj | false => {
  if (isNaN(id) || !data.find((e) => e.id === id)) {
    return false;
  } else {
    return data.find((e) => e.id === id);
  }
};

const Product = () => {
  const data = useAppSelector(selectData);
  const params = useParams();

  const item: undefined | obj | false = params.id
    ? findItem(data, parseInt(params.id))
    : undefined;

  return (
    <>
      {data.length > 0 &&
        (item == false ? (
          <NoMatch />
        ) : item ? (
          <div>
            <h1>{item.name}</h1>
          </div>
        ) : null)}
    </>
  );
};

export default Product;
