import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { selectData } from "../redux/slices/dataSlice";
import Pagination from "../components/Pagination";
import ProductCard from "../components/ProductCard";
import styles from "../styles/shop.module.css";

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLength, setPageLength] = useState(20);
  const [searchParams, setSearchParams] = useSearchParams();

  const data = useAppSelector(selectData);
  let dataCopy = data;
  const currentData = useMemo(() => {
    dataCopy = data;

    if (searchParams.get("sort")) {
      switch (searchParams.get("sort")) {
        case "default":
          dataCopy = [...dataCopy].sort((a, b) => {
            return b.id - a.id;
          });
          break;
        case "name_asc":
          dataCopy = [...dataCopy].sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();

            if (nameA < nameB) {
              return -1;
            } else if (nameA > nameB) {
              return 1;
            }
            return 0;
          });
          break;
        case "name_desc":
          dataCopy = [...dataCopy].sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();

            if (nameA > nameB) {
              return -1;
            } else if (nameA < nameB) {
              return 1;
            }
            return 0;
          });
          break;
        case "price_asc":
          dataCopy = [...dataCopy].sort((a, b) => {
            const priceA = parseInt(a.price);
            const priceB = parseInt(b.price);

            return priceA - priceB;
          });
          break;
        case "price_desc":
          dataCopy = [...dataCopy].sort((a, b) => {
            const priceA = parseInt(a.price);
            const priceB = parseInt(b.price);

            return priceB - priceA;
          });
      }
    }

    if (searchParams.get("filter")) {
      dataCopy = dataCopy.filter((item) => {
        return item.product_type === searchParams.get("filter");
      });
      console.log(dataCopy);
    }

    const firstPageIndex = (currentPage - 1) * pageLength;
    const lastPageIndex = firstPageIndex + pageLength;
    return dataCopy.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data, searchParams, pageLength]);

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.id != "none") {
      searchParams.set("filter", event.target.id);
      setSearchParams(searchParams);
    } else {
      if (searchParams.get("filter")) {
        searchParams.delete("filter");
        setSearchParams(searchParams);
      }
    }
  };

  const handleSort = (event: React.ChangeEvent<HTMLInputElement>) => {
    searchParams.set("sort", event.target.id);
    setSearchParams(searchParams);
  };

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPageLength(parseInt(event.target.value));
  };

  return (
    <main>
      <header className={styles.hero}>
        <h1>Shop</h1>
      </header>
      <div className={styles.body}>
        <div>
          <ul>
            <li>
              <input
                type="radio"
                name="filter"
                id="none"
                onChange={handleFilter}
                checked={searchParams.get("filter") === null}
              />
              <label htmlFor="blush">None</label>
            </li>

            <li>
              <input
                type="radio"
                name="filter"
                id="blush"
                onChange={handleFilter}
                checked={searchParams.get("filter") === "blush"}
              />
              <label htmlFor="blush">Blush</label>
            </li>

            <li>
              <input
                type="radio"
                name="filter"
                id="bronzer"
                onChange={handleFilter}
                checked={searchParams.get("filter") === "bronzer"}
              />
              <label htmlFor="bronzer">Bronzer</label>
            </li>

            <li>
              <input
                type="radio"
                name="filter"
                id="eyebrow"
                onChange={handleFilter}
                checked={searchParams.get("filter") === "eyebrow"}
              />
              <label htmlFor="eyebrow">Brows</label>
            </li>

            <li>
              <input
                type="radio"
                name="filter"
                id="eyeliner"
                onChange={handleFilter}
                checked={searchParams.get("filter") === "eyeliner"}
              />
              <label htmlFor="eyeliner">Eyeliner</label>
            </li>

            <li>
              <input
                type="radio"
                name="filter"
                id="eyeshadow"
                onChange={handleFilter}
                checked={searchParams.get("filter") === "eyeshadow"}
              />
              <label htmlFor="eyeshadow">Eyeshadow</label>
            </li>

            <li>
              <input
                type="radio"
                name="filter"
                id="foundation"
                onChange={handleFilter}
                checked={searchParams.get("filter") === "foundation"}
              />
              <label htmlFor="foundation">Foundation</label>
            </li>

            <li>
              <input
                type="radio"
                name="filter"
                id="lip_liner"
                onChange={handleFilter}
                checked={searchParams.get("filter") === "lip_liner"}
              />
              <label htmlFor="lip_liner">Lip Liner</label>
            </li>

            <li>
              <input
                type="radio"
                name="filter"
                id="lipstick"
                onChange={handleFilter}
                checked={searchParams.get("filter") === "lipstick"}
              />
              <label htmlFor="lipstick">Lipstick</label>
            </li>

            <li>
              <input
                type="radio"
                name="filter"
                id="mascara"
                onChange={handleFilter}
                checked={searchParams.get("filter") === "mascara"}
              />
              <label htmlFor="mascara">Mascara</label>
            </li>

            <li>
              <input
                type="radio"
                name="filter"
                id="nail_polish"
                onChange={handleFilter}
                checked={searchParams.get("filter") === "nail_polish"}
              />
              <label htmlFor="nail_polish">Nails</label>
            </li>
          </ul>
          <ul>
            <li>
              <input
                type="radio"
                name="sort"
                id="default"
                onChange={handleSort}
                checked={searchParams.get("sort") === "default"}
              />
              <label htmlFor="default">Default</label>
            </li>
            <li>
              <input
                type="radio"
                name="sort"
                id="name_asc"
                onChange={handleSort}
                checked={searchParams.get("sort") === "name_asc"}
              />
              <label htmlFor="name_asc">Name (asc.)</label>
            </li>
            <li>
              <input
                type="radio"
                name="sort"
                id="name_desc"
                onChange={handleSort}
                checked={searchParams.get("sort") === "name_desc"}
              />
              <label htmlFor="name_desc">Name (desc.)</label>
            </li>
            <li>
              <input
                type="radio"
                name="sort"
                id="price_asc"
                onChange={handleSort}
                checked={searchParams.get("sort") === "price_asc"}
              />
              <label htmlFor="price_asc">Price (asc.)</label>
            </li>
            <li>
              <input
                type="radio"
                name="sort"
                id="price_desc"
                onChange={handleSort}
                checked={searchParams.get("sort") === "price_desc"}
              />
              <label htmlFor="price_desc">Price (desc.)</label>
            </li>
          </ul>
        </div>
        <div className={styles.grid}>
          {currentData.map((e, i) => {
            return (
              <ProductCard
                id={e.id}
                brand={typeof e.brand != "string" ? "filler" : e.brand}
                name={e.name}
                price={typeof e.price != "string" ? "5.0" : e.price}
                imgSrc={e.api_featured_image}
                key={i}
              />
            );
          })}
        </div>
        <Pagination
          currentPage={currentPage}
          totalCount={dataCopy.length}
          pageSize={pageLength}
          onPageChange={(page) => setCurrentPage(page)}
        />

        <span>
          Display{" "}
          <select name="items" id="items" onChange={handleSelect}>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>{" "}
          items per page
        </span>
      </div>
    </main>
  );
};

export default Shop;
