import {useState} from 'react'
import './searchBar.scss'

const type = ["buy", "rent"]
function searchBar() {
    const [query, setQuery] = useState({
        type: "buy",
        location: "",
        minPrice: 0,
        maxPrice: 0,

    })

    // const [searchLocation, setSearchLocation] = useState('')
    // const [filterSearch, setFilterSearch] = useState([])

    const switchType = (val) => {
        setQuery((prev) => ({...prev,type: val }))
    }

    //const handleSearchLocations = (e) => {
        //setSearchLocation(e.target.value)    
    //}

    //const filterSearch = useMemo((item) => {
    //     item
    // })

  return (
    <div className='searchBar'>
        <div className='type'>
        {type.map((type) => (
            <button key={type}  onClick={() => switchType(type)} className={query.type === type ? "active" : ""}>{type}</button>
        )) }

        </div>
        <form>
            <input type='text' id="search" name="location" placeholder='Search by location' />
            <input type='number' name="minPrice" min={0} max={10000000} placeholder='Min Price'  />
            <input type='number' name="maxPrice" min={0} max={10000000} placeholder='Max Price' />
            <button type="submit" >
                <img src="/search.png" alt="icon" />
            </button>
        </form>
    </div>
  )
}

export default searchBar