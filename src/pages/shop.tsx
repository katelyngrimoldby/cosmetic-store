import { useState, useMemo } from "react";
import { useAppSelector } from "../redux/hooks";
import { selectData } from "../redux/slices/dataSlice";
import Pagination from "../components/Pagination";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLength, setPageLength] = useState(10);
  const data = useAppSelector(selectData);
  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageLength;
    const lastPageIndex = firstPageIndex + pageLength;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data]);

  return (
    <div>
      <h1>shop</h1>
      <div>
        <div>
          {currentData.map((e, i) => {
            return (
              <ProductCard
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
          totalCount={data.length}
          pageSize={pageLength}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default Shop;
