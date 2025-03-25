import { useContext } from "react";
import AppContext from "../Context/appcontext";  // Changed from { AppContext }

function Pagination() {
    const { currentPage, totalPages, Handelpage } = useContext(AppContext);

    return (
        <nav className="flex justify-center items-center mt-8 mb-4">
            <div className="flex gap-4 items-center">
                {currentPage > 1 && (
                    <button 
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={() => Handelpage(currentPage - 1)}
                    >
                        Previous
                    </button>
                )}
                
                <p className="text-gray-600">
                    Page {currentPage} of {totalPages}
                </p>
                
                {currentPage < totalPages && (
                    <button 
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={() => Handelpage(currentPage + 1)}
                    >
                        Next
                    </button>
                )}
            </div>
        </nav>
    );
}

export default Pagination;