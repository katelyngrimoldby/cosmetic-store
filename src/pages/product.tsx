import { useParams } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { selectData } from "../redux/slices/dataSlice";
import { data, obj } from "../apiTypes";
import NoMatch from "./noMatch";
import Carousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";
import star from "../assets/star.svg";
import starOutline from "../assets/star-outline.svg";
import profile from "../assets/profile-pic.svg";

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
          <main>
            <header>
              <h1>{item.name}</h1>
            </header>
            <div>
              <div>
                <img src={item.api_featured_image} alt={item.name} />
                <div>
                  <span>{item.brand}</span>
                  <h2>{item.name}</h2>
                  <input type="number" name="quantity" id="quantity" />
                  <span>{`$${item.price}`}</span>
                  <div>
                    <button>Add to the Cart</button>
                    <button>
                      <img
                        src={starOutline}
                        alt="Add to favourites"
                        width="24"
                        height="24"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <button type="button">+</button>
                  <span>Description</span>
                </div>
                <div>
                  <p>{item.description}</p>
                </div>
              </div>
              <div>
                <div>
                  <button type="button">+</button>
                  <span>Reviews</span>
                </div>
                <div>
                  <img src={profile} alt="Reviewer Image" />
                  <div>
                    <span>Jane Doe</span>
                    <p>
                      Aliquam sollicitudin sollicitudin odio in hendrerit. Donec
                      commodo facilisis justo faucibus aliquet. Mauris non felis
                      eget lacus convallis varius. Aenean vel libero lacinia,
                      porta elit blandit, feugiat eros.
                    </p>
                  </div>
                </div>
              </div>
              {data.length != 0 && (
                <Carousel
                  slides={[
                    [
                      <ProductCard
                        id={data[0].id}
                        brand={data[0].brand}
                        name={data[0].name}
                        price={data[0].price}
                        imgSrc={data[0].api_featured_image}
                        key="0"
                      />,
                      <ProductCard
                        id={data[1].id}
                        brand={data[1].brand}
                        name={data[1].name}
                        price={data[1].price}
                        imgSrc={data[1].api_featured_image}
                        key="1"
                      />,
                      <ProductCard
                        id={data[2].id}
                        brand={data[2].brand}
                        name={data[2].name}
                        price={data[2].price}
                        imgSrc={data[2].api_featured_image}
                        key="2"
                      />,
                    ],
                    [
                      <ProductCard
                        id={data[3].id}
                        brand={data[3].brand}
                        name={data[3].name}
                        price={data[3].price}
                        imgSrc={data[3].api_featured_image}
                        key="3"
                      />,
                      <ProductCard
                        id={data[4].id}
                        brand={data[4].brand}
                        name={data[4].name}
                        price={data[4].price}
                        imgSrc={data[4].api_featured_image}
                        key="4"
                      />,
                      <ProductCard
                        id={data[5].id}
                        brand={data[5].brand}
                        name={data[5].name}
                        price={data[5].price}
                        imgSrc={data[5].api_featured_image}
                        key="5"
                      />,
                    ],
                    [
                      <ProductCard
                        id={data[6].id}
                        brand={data[6].brand}
                        name={data[6].name}
                        price={data[6].price}
                        imgSrc={data[6].api_featured_image}
                        key="6"
                      />,
                      <ProductCard
                        id={data[7].id}
                        brand={data[7].brand}
                        name={data[7].name}
                        price={data[7].price}
                        imgSrc={data[7].api_featured_image}
                        key="7"
                      />,
                      <ProductCard
                        id={data[8].id}
                        brand={data[8].brand}
                        name={data[8].name}
                        price={data[8].price}
                        imgSrc={data[8].api_featured_image}
                        key="8"
                      />,
                    ],
                    [
                      <ProductCard
                        id={data[9].id}
                        brand={data[9].brand}
                        name={data[9].name}
                        price={data[9].price}
                        imgSrc={data[9].api_featured_image}
                        key="9"
                      />,
                      <ProductCard
                        id={data[10].id}
                        brand={data[10].brand}
                        name={data[10].name}
                        price={data[10].price}
                        imgSrc={data[10].api_featured_image}
                        key="10"
                      />,
                      <ProductCard
                        id={data[11].id}
                        brand={data[11].brand}
                        name={data[11].name}
                        price={data[11].price}
                        imgSrc={data[11].api_featured_image}
                        key="11"
                      />,
                    ],
                  ]}
                />
              )}
            </div>
          </main>
        ) : null)}
    </>
  );
};

export default Product;
