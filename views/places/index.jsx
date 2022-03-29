
const React = require('react')
const Def = require('../default')

function index (data) {
    let placesFormatted = data.places.map((place, index) => {
      return (
        <div className='col-sm-6'>
             
              <h2>
          <a key={place.id} href={`/places/${place.id}`}>
            {place.name}  
            </a>
              </h2>
         
          <p className='' id='location'>Located in {place.city}, {place.state}</p>
          
          
          <img src={place.pic} alt={place.name}></img>
          <p className='' id='cuisines'>{place.cuisines}</p>
          
        </div>
      )
    })
    return (
      <Def>
        <head>
          <link rel="stylesheet" href="../../index.css" />
        </head>
          <main className='px-5'>
              <h1>Places to Rant or Rave About</h1>
              {placesFormatted}
              <a href="/">
                <button className='btn-primary'>Go to Home Page</button>
                </a>

                <div className='backButton'>
                        <a href="/places/new">Add a new place!</a>     
                </div>       

          </main>
      </Def>
  )
  }

module.exports = index