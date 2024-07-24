import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'

export default function Vans() {
  const [vans, setVans] = React.useState([])

  React.useEffect(() => {
      fetch("/api/vans")
          .then(res => res.json())
          .then(data => setVans(data.vans))
  }, [])

  // const vanElements = vans.map(van => (
  //   <div key={van.id} className="van-tile">
  //     <Link to={`/vans/${van.id}`}>
  //       <img src={van.imageUrl} />
  //       <div className="van-info">
  //           <h3>{van.name}</h3>
  //           <p>${van.price}<span>/day</span></p>
  //       </div>
  //       <i className={`van-type ${van.type} selected`}>{van.type}</i>
  //     </Link>
  //   </div>
  // ))   
  
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type")

  const displayedVans = typeFilter 
    ? vans.filter(van => van.type === typeFilter) : vans

  const vanElements = displayedVans.map(van => (
    <div key={van.id} className="van-tile">
        <Link to={van.id}
            state={{ 
              search: `?${searchParams.toString()}`, 
              type: typeFilter 
            }}
        >
            <img src={van.imageUrl} />
            <div className="van-info">
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </Link>
    </div>
  ))

  function handleFilterChange(key, value) {
    setSearchParams(prevParams => {
        if (value === null) {
            prevParams.delete(key)
        } else {
            prevParams.set(key, value)
        }
        return prevParams
    })
  }

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button onClick={() => handleFilterChange("type", "simple")}
            className={`van-type simple ${typeFilter === "simple" ? "selected" : null}`}
        >Simple</button>
        <button 
            onClick={() => handleFilterChange("type", "luxury")}
            className={`van-type luxury ${typeFilter === "luxury" ? "selected" : null}`}
        >Luxury</button>
        <button 
            onClick={() => handleFilterChange("type", "rugged")}
            className={`van-type rugged ${typeFilter === "rugged" ? "selected" : null}`}
        >Rugged</button>

        {typeFilter ? (
          <button 
              onClick={() => handleFilterChange("type", null)}
              className="van-type clear-filters"
          >Clear filter</button>  
        ) : null}    
      </div>
      <div className="van-list">
          {vanElements}
      </div>
    </div>
  )
}