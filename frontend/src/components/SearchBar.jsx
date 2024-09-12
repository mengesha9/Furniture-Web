import { useContext,useEffect ,useState} from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/forever-assets/assets/frontend_assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);

  const [visible,setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if(location.pathname.includes('collection')){
      setVisible(true);
    }
    else{
      setVisible(false);
    }
  }, [location]);


  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-3 my-5 mx-auto rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-transparent text-sm"
          type="text"
          placeholder="Search"
        />
        <img to='/collection'
          className="w-4 cursor-pointer"
          src={assets.search_icon}
          alt="Search"
        />

      </div>
      <img
        onClick={() => setShowSearch(false)}
        className="inline w-3 cursor-pointer"
        src={assets.cross_icon}
        alt="Close"
      />
    </div>
  ) : null;
};

export default SearchBar;
