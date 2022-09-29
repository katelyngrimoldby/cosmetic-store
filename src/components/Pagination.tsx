import { useMemo } from "react";
import styles from "../styles/Pagination.module.css";

interface PaginationArgs {
  totalCount: number;
  pageSize: number;
  siblingCount: number;
  currentPage: number;
}

interface PaginationProps {
  onPageChange: (arg0: number) => void;
  totalCount: number;
  pageSize: number;
  siblingCount?: number;
  currentPage: number;
}

const range = (start: number, end: number) => {
  const length = end - start + 1;

  return Array.from({ length }, (_, idx) => idx + start);
};

const DOTS = "...";

const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
}: PaginationArgs) => {
  const paginationRange = useMemo(() => {
    //calculating total pages needed
    const totalPageCount = Math.ceil(totalCount / pageSize);

    //calculating max numbered pages shown for given siblingCount
    const totalPageNumbers = siblingCount + 5;

    //checking if total pages does not require any dots
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    //finding sibling indices and checking if they are within range
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    //set first and last indices
    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    //check for right dots only
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPageCount];
    }

    //check for left dots only
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );

      return [firstPageIndex, DOTS, ...rightRange];
    }

    //check for dots on both sides
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange;
};

const Pagination = ({
  onPageChange,
  currentPage,
  totalCount,
  siblingCount = 1,
  pageSize,
}: PaginationProps) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // If range is less than two no pagination will be rendered
  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrev = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange
    ? paginationRange[paginationRange.length - 1]
    : null;

  return (
    <>
      <div className={styles.wrapper}>
        <button
          type="button"
          onClick={onPrev}
          disabled={currentPage === 1}
          className={styles.arrow}
        >
          {"<"}
        </button>
        {paginationRange &&
          paginationRange.map((pageNo, i) => {
            if (pageNo === DOTS) {
              return <span key={i}>&#8230;</span>;
            }
            if (typeof pageNo == "number") {
              return (
                <button
                  type="button"
                  onClick={() => onPageChange(pageNo)}
                  key={i}
                  className={
                    pageNo === currentPage ? styles.activePill : styles.pill
                  }
                >
                  {pageNo}
                </button>
              );
            }
          })}
        <button
          type="button"
          onClick={onNext}
          disabled={currentPage === lastPage}
          className={styles.arrow}
        >
          {">"}
        </button>
      </div>
      <div className={styles.mButtons}>
        <button
          type="button"
          onClick={onPrev}
          disabled={currentPage === 1}
          className={styles.arrow}
        >
          {"<"}
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={currentPage === lastPage}
          className={styles.arrow}
        >
          {">"}
        </button>
      </div>
    </>
  );
};

export default Pagination;
