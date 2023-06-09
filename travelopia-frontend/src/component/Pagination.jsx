import { Button, ButtonGroup } from "@chakra-ui/react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <ButtonGroup
      gap="4"
      justifyContent={"space-evenly"}
      w={["300px", "500px"]}
      mt={"5px"}
    >
      <Button onClick={handlePreviousPage} disabled={currentPage === 1}>
        Previous
      </Button>
      <Button colorScheme="gray">
        <span className="currPageNum">{currentPage}</span> &nbsp; of &nbsp;{" "}
        <span className="lastPageNum">{totalPages}</span>
      </Button>

      <Button
        className="nextBtn"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </Button>
    </ButtonGroup>
  );
}

export default Pagination;
