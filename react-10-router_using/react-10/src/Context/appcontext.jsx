import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

const AppContext = createContext();

export default AppContext;
 

// children is a special property in React that is used to include the content included between the opening and closing tags 
// of a component. <app></app> is an example of a component with children
function AppContextProvider({children}) {
   
   const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
const [currentPage, setCurrentPage] = useState(1);
const [totalPages, setTotalPages] = useState(null);

// data filling 
async function fetchinitialData(page = 1) {
    setLoading(true);
   
    let url = `${baseUrl}?page=${page}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        setPosts(data.posts);
        setCurrentPage(data.page);
        setTotalPages(data.totalPages);
    }
  catch (error) {
    console.error("Error fetching data", error);
    setPosts([]);
    setTotalPages(null);
    setCurrentPage(1);
  }
  // loading is stop
  setLoading(false);
  }
// useEffect is a hook that allows you to perform side effects in function components.
 function Handelpage (page) {
  //  setCurrentPage(page);
    fetchinitialData(page);
  }

const value = {
  loading,
  setLoading,
  posts,
  setPosts,
  currentPage,
  setCurrentPage,
  totalPages,
  setTotalPages,
    fetchinitialData,
    Handelpage

};
// The AppContext.Provider component is used to provide the value to the components that are nested inside it.
//all value pass through the appcontextprovider to the APP component
return <AppContext.Provider value={value}>
    {children}
    </AppContext.Provider>;
}
 // ...existing code...
export { AppContextProvider };  // Add this line at the end of the file