import { useState } from "react";
import '../../styles/search.scss';
import { useDispatch } from "react-redux";
import { setCurrentPage, setSearch } from "../../redux/action-creators";

const Search = () => {
  const dispatch = useDispatch()
  const [search, setSearchInput] = useState('')
  const handleInput = (e: any) => {
    setSearchInput(e.target.value)
  }
  return (
    <div className="container-search">
      <input 
        className="search-input"
        type="text" 
        value={search}
        onChange={(e: any) => handleInput(e)}
        placeholder="Search books by Title, Author or ISBN"
      />
      <button 
        className="search-btn"
        onClick={() => {
          if(search !== '') {
            dispatch(setSearch(search))
            dispatch(setCurrentPage(1))
            window.location.pathname = `/search/${search}`
          } 
        }}
      > Search </button>
    </div>
  );
}

export { Search }