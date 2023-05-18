import { useEffect, useState } from "react";

import BookModalNew from "../../models/BookModalNew";
import axios from "axios";
import BookModel from "../../models/BookModel";
import NavLinkButton from "../../common/Button/NavLinkButton";
import { BASEURL } from "../../common/ApiPath";
import { useDispatch, useSelector } from "react-redux";
import { getAllSearchBooks } from "../../store/search/search-actions";
import { setIsHttpError } from "../../store/page-store";

type ctType = {
  id: number;
  value: string;
};

const SearchBookComponent: React.FC = () => {
  
  const dispatch = useDispatch<any>();
  
  const {isLoading, isHttpError } = useSelector((reduxStore:any) => {
    // console.log('reduxStore',reduxStore);
    return reduxStore.pageStore
  })

  const {searchBooks: books } = useSelector((reduxStore:any) => {
    // console.log('reduxStore',reduxStore);
    return reduxStore.searchStore
  })

 
  const [currentPage, setCurrentPage] = useState(0);
  const [currentBooksSize, setCurrentBooksSize] = useState<number>(0);
  const [currentTotalBooks, setCurrentTotalbooks] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<any>(null);
  const url = `http://localhost:8080/api/books?page=${currentPage}&size=5`;
  const [currentURL, setCurrentURL] = useState<string>(url);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredBooks, setFilteredBooks] = useState<BookModalNew[]>([]);

  const [booksPerPage] = useState(4);

  const [allCategory, setAllCategory] = useState<ctType[]>([]);

  useEffect(() => {
    // api wil get all category values
    dispatch(setIsHttpError({status: false, msg:''}))
    dispatch(getAllSearchBooks(url))
    const ct = [
      { id: 0, value: "All" }, 
      { id: 1, value:  "FE"},
      { id: 2, value: "Data"},
      { id: 3, value:   "BE"},
      { id: 4, value:    "DevOps"}
        ];
    setAllCategory(ct);
  }, []);

  // useEffect(() => {

    

  //   // // console.log("selectedCategory", selectedCategory);
  //   axios({
  //     method: "get",
  //     url: currentURL,
  //     responseType: "json",
  //   })
  //     .then((res) => {
  //       setIsLoading(false);

  //       if (res.status === 200) {
  //         // console.log("res", res.data);

  //         // number: 0;
  //         // size: 20;
  //         // totalElements: 22;
  //         // totalPages: 2;

  //         const { _embedded, page } = res.data;
  //         const allBooks: BookModel[] = [];
  //         for (let book of _embedded.books) {
  //           allBooks.push(book);
  //         }
  //         setBooks(allBooks);
  //         setCurrentPage(page.number);
  //         setCurrentBooksSize(page.size);
  //         setCurrentTotalbooks(page.totalElements);
  //         setTotalPages(page.totalPages);
  //       } else {
  //         setHttpError({ err: "test" });
  //       }
  //     })
  //     .catch((err) => {
  //       // console.log("err", err);
  //       setHttpError({ err: err.message });
  //     });
  // }, [currentPage, searchTerm, selectedCategory]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = `http://localhost:8080/api/books/search/findByTitleContaining?title=${e.target.value}&page=0&size=5`;
    setSearchTerm(e.target.value);
    setCurrentURL(url);
    setCurrentPage(0);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let url = `${BASEURL}/books/search/findByCategory?category=${e.target.value}&page=0&size=5`;
  
    if(e.target.value === allCategory[0].value){
      url = `${BASEURL}/books`;
    }
    setCurrentURL(url);
    setCurrentPage(0);
    setSearchTerm("");
    setSelectedCategory(e.target.value);
  };

  const paginate = (pageNumber: number) => {
    const url = `http://localhost:8080/api/books?page=${pageNumber}&size=5`;
    setCurrentURL(url);
    setCurrentPage(pageNumber);
  };

  // TicketNUmber- change this to backend pageNUmber
  const totalPageButtons = [];
  for (let i = 0; i < totalPages; i++) {
    const pageButton = (
      <li key={i}>
        <button
          className={`${
            currentPage === i
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-600"
          } px-4 py-2 border border-gray-300`}
          onClick={() => paginate(i)}
        >
          {i + 1}
        </button>
      </li>
    );
    totalPageButtons.push(pageButton);
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Search Books</h1>
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          placeholder="Search by title"
          className="flex-grow border p-2"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select
          className="border p-2"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          {allCategory?.map((ct) => {
            return (
              <option key={ct.id} value={ct.value}>
                {ct.value?.toLowerCase()}
              </option>
            );
          })}
        </select>
      </div>
      <div className=" space-x-2 mb-4">
        <h1>
          CurrentPage {currentPage + 1} / totalPage {totalPages}{" "}
        </h1>
        <h1>
          currentSize {currentBooksSize} / totalBooksSize {currentTotalBooks}{" "}
        </h1>
      </div>
      {books.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {books.map((book: any) => (
              <div
                key={book.id}
                className="bg-white rounded-lg overflow-hidden shadow-md md:w-full"
              >
                {book.img && (
                  <img
                    src={book.img}
                    alt={book.title}
                    className="h-40 w-full object-cover"
                  />
                )}
                <div className="p-4">
                  <p className="text-lg font-bold mb-2">{book.title}</p>
                  {book.author && (
                    <p className="text-gray-600">{book.author}</p>
                  )}
                  <p className="text-gray-600">Category: {book.category}</p>
                  <p className="text-gray-600">
                    Copies: {book.copiesAvailable} / {book.copies}
                  </p>
                  <NavLinkButton
                    path={`/book/${book.id}`}
                    btId={`checkout-${book.id}`}
                    btName="checkout"
                    btClass="bg-sky-500 w-24 rounded my-2"
                  />
                  {book.description && (
                    <p className="text-gray-600 mt-2">{book.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <ul className="flex space-x-2">{totalPageButtons}</ul>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchBookComponent;
