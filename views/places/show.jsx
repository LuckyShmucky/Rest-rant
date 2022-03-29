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


    let rating = (
      <h3 className='inactive'>
        Not yet rated
      </h3>
    )

    if (place.comments.reduce){
      let sumRatings = place.comments.reduce((tot, c) =>{
        return tot + c.stars
      }, 0)

      let averageRating = sumRatings / place.comments.length
      let stars = ''
      for (let i = 0; i < averageRating; i++){
        stars += '⭐'
      }
      rating = (
        <h3>
          {stars} stars
        </h3>
      )
    }
    return (
        <Def>
           <main className='px-5'>
            <h1>{place.name}</h1>
            <h2>Rating</h2>
            <p>{rating}</p>
            <h2>Comments</h2>
            {comments}
            <h2>Description</h2>
            <h3>{place.showEstablished()}</h3>
            <p>Located in {place.city}, {place.state} and is serving {place.cuisines}  </p>
            <img src={place.pic} alt={place.name} />
       
            <div id='editBttn'>
              <a href={`/places/${place.id}/edit`}  className="btn btn-warning">Edit</a>  
            </div>
            
            <div id='commentBttn'>
              <a href={`/places/${place.id}/newComment`}  className="btn btn-warning">Comment</a>
            </div>

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