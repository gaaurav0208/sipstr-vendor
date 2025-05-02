export default function Pagination({ currentPage, totalPages, onPageChange }) {
    return (
      <div className="flex justify-center space-x-2 text-sm">
        <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    );
  }
  