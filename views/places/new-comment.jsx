const React = require('react')
const Def = require('../default.jsx')

function newComment ({ place }){
    return(
        <Def>
            <h1>Tell us about {place.name}!</h1>
        
        <form action={`/places/${place.id}`} method="POST">
        
            <div className='form-group'>
                <label htmlFor='content'>Comment Here</label>
                <input
                type="text"
                name='content'
                id='content'
                required
                 />
            </div>
           <div className='form-group'>
               <label htmlFor='author'>Your name</label>
               <input type="text"
               name="author"
               id="author"
               required/>
           </div>
         <div className='form-group'>
              <label htmlFor='Rant'>Is this a rant?</label>
              <input type="checkbox"
              name='rant'
              id='rant'
                     />
         </div>
         
        <div className='form-group'>
            <label htmlFor="stars">Would would you rate them out of five?</label>
            <input type="number"
            name='stars'
            id='stars'
            min={1}
            max={5}
            step={0.5}
            />
        </div>

        <input type="submit" value='Add Rant or Rave'  />
        </form>

        </Def>
    )
}

module.exports = newComment