const React = require('react')
const Def = require('../default')

function show ({place}) {
    // let placesFormatted = data.places.map((place, index)) =>\
    // console.log(data)
    // console.log(data)
    let comments = (
      <h3 className='inactive'>
        No comments yet!
      </h3>
    )
//this works because if the comments array is empty it will be false
    if (place.comments.length){
      comments = place.comments.map(comment => {
        return(
          <div className='border'>
            <h2 className='rant'>{comment.rant ? 'Rant! >:(' : "Rave! :D"}</h2>
            <h4>{comment.content}</h4> 
            <h3>
              <strong>- {comment.author}</strong>
              </h3>         
              <h4>Rating: {comment.stars}</h4>
          </div>
        )
      }) 
    }
    return (
        <Def>
           <main>
            <h1>{place.name}</h1>
            <h2>Rating</h2>
            <p>Not Rated</p>
            <h2>Comments</h2>
            {comments}
            <h2>Description</h2>
            <h3>{place.showEstablished()}</h3>
            <p>Located in {place.city}, {place.state} and is serving {place.cuisines}  </p>
            <img src={place.pic} alt={place.name} />
       
            <a href={`/places/${place.id}/edit`} className="btn btn-warning"> 
  Edit
</a>  
<form method='POST' action={`/places/${place.id}?_method=DELETE`}> 
  <button type="submit" className="btn btn-danger">
    Delete
  </button>
</form>     


          </main> 
        </Def>
    )
}

module.exports = show