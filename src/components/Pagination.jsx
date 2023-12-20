const Pagination = ({lastPage,pagesInCurrentBlock, setCurrentPage, currentPage}) => {

    const handleLastPage = () => {
      setCurrentPage(lastPage);  
    }
    const handleFirstPage = () => {
      setCurrentPage(1);  
    }
    const handlePreviousPage = () => {
      const previousPage = currentPage - 1;
      if(previousPage > 1){
      setCurrentPage(currentPage - 1);}
    }
    const handleNextPage = () => {
      const nextPage = currentPage + 1;
      if(nextPage <= lastPage){ 
       setCurrentPage(nextPage);
    }}
  
    return (
      <ul className="pb-4 text-lg flex gap-4 justify-center font-bold flex-wrap">
        
        <li> 
          <button onClick={handleFirstPage} className="p-2 bg-[#d93f3f] rounded-md hover:bg-red-200
              hover:text-white transition-colors">
            {"<<"}
          </button>
        </li> 
  
        <li> 
          <button onClick={handlePreviousPage} className="p-2 bg-[#d93f3f] rounded-md hover:bg-red-200
              hover:text-white transition-colors">
            {"<"}
          </button>
        </li>
        
        {pagesInCurrentBlock.map((page) => (
           
          <li key={page}>
            <button 
            onClick={() => setCurrentPage(page)}
             className={`p-2 bg-[#d93f3f] rounded-md hover:bg-red-200
              hover:text-white transition-colors ${page === currentPage && "bg-red-500 text-white"} `}
              >
              {page}
            </button>
          </li>
        ))}
        <li> 
          <button onClick={handleNextPage} className="p-2 bg-[#d93f3f] rounded-md hover:bg-red-200
              hover:text-white transition-colors">
            {">"}
          </button>
        </li>
  
        <li> 
          <button onClick={handleLastPage} className="p-2 bg-[#d93f3f] rounded-md hover:bg-red-200
              hover:text-white transition-colors">
            {">>"}
          </button>
        </li> 
  
      </ul>
    )
  }
  export  {Pagination};