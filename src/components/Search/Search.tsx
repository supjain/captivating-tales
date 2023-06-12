import './Search.css'
import searchIcon from '../../assets/search.svg'
import closeSearchIcon from '../../assets/close.svg'
import { ChangeEvent, useEffect, useState } from 'react'
import { ISearchProps } from '../../Types/SearchType.types'
import { GET_URI } from '../../utils/Constants'
const Search : React.FC<ISearchProps>= (props:ISearchProps) => {

  const[searchTxt,setSearchTxt]=useState('');

  useEffect(() => {
    try {
      fetchPosts();
      
    } catch (error) {
    }
  }, [searchTxt]);

  const fetchPosts = async () => {
    if(searchTxt!==""){
    const data = await fetch(GET_URI.concat("/search?q=").concat(searchTxt));
    props.setIsHomeFetch(false)
    const postDetails = await data.json();
    props.setBlogs(postDetails.posts);
    }else{
      props.setIsHomeFetch(true)
    }
  };


  function handleClear(): void {
    setSearchTxt('');
    props.setIsHomeFetch(true)
    console.log("searchTxt: "+searchTxt)
  }

  function handleSearchWord(event: ChangeEvent<HTMLInputElement>): void {
    event.preventDefault();
    setSearchTxt(event.target.value);
    console.log("searchTxt: "+searchTxt)
  }

return(<div className="search">
<div className="search-icon-div">
<img  className="search-icon" src={searchIcon} alt="Search"  />
</div>
<div> 
<input type="text" value={searchTxt} className="search-input" onChange={(event) => handleSearchWord(event)} placeholder='Search...'/>
</div>
<div className="close-icon-div">
<img  className="close-icon" src={closeSearchIcon} onClick={()=>handleClear()} alt="Search"  />
</div>
  </div>)
}


export default Search;