const React = require('react')
const Def = require('../default')

function show (data) {
    // let placesFormatted = data.places.map((place, index)) =>\
    // console.log(data)
    // console.log(data)
    return (
        <Def>
           <main>
            <h1>{data.place.name}</h1>
            <h2>Rating</h2>
            <p>Not Rated</p>
            <h2>Description</h2>
            <h3>{data.place.showEstablished()}</h3>
            <p>Located in {data.place.city}, {data.place.state} and is serving {data.place.cuisines}  </p>
            <img src={data.place.pic} alt={data.place.name} />
       
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
  Edit
</a>  
<form method='POST' action={`/places/${data.id}?_method=DELETE`}> 
  <button type="submit" className="btn btn-danger">
    Delete
  </button>
</form>     


          </main> 
        </Def>
    )
}

module.exports = show