"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useEffect } from "react";

export default function PaginationCard(pageRef: any) {
  function handleNextPage() {
    pageRef.setCurrentPage(pageRef.currentPage + 1);
  }

  function handlePreviousPage() {
    pageRef.setCurrentPage(pageRef.currentPage - 1);
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={handlePreviousPage}
            {...(pageRef.currentPage === 1 && {
              className: "pointer-events-none",
            })}
          />
        </PaginationItem>
        {pageRef.totalPage <= 12 ? (
          pageRef.totalPage > 0 &&
          Array.from({ length: pageRef.totalPage }, (_, i) => i).map(
            (number, index) => {
              return (
                <>
                  <PaginationItem>
                    <PaginationLink
                      onClick={() => pageRef.setCurrentPage(number + 1)}
                      isActive={pageRef.currentPage === number + 1}
                    >
                      {number + 1}
                    </PaginationLink>
                  </PaginationItem>
                  {/* {index === 2 && <PaginationEllipsis />} */}
                </>
              );
            }
          )
        ) : (
          <p>{`${pageRef.currentPage}/${pageRef.totalPage}`}</p>
        )}
        <PaginationItem>
          <PaginationNext
            onClick={handleNextPage}
            {...(pageRef.currentPage === pageRef.totalPage && {
              className: "pointer-events-none",
            })}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
