const SearchBox = (props) => {
  console.log(props);
  return (
    <div>
    Search: <input type='text' onChange={props.searchFunc}/>
    <button>Search</button>
    </div>
  )
}
export default SearchBox;
