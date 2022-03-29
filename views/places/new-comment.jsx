const React = require('react')
const Def = require('../default.jsx')

function newComment ({ place }){
    return(
        <Def>
            <head>
                <link rel="stylesheet" href="../../style.css" />
            </head>
            <main>
                <h1>Tell us about {place.name}!</h1>
                        
                        <form action={`/places/${place.id}`} method="POST">
                
                    <div className='form-group col-sm-6 px-5'>
                        <label htmlFor='content'>Comment Here</label>
                        <input
                        className='form-control'
                        type="text"
                        name='content'
                        id='content'
                        required
                         />
                    </div>
                    
                               <div className='form-group col-sm-6 px-5'>
                       <label htmlFor='author'>Your name</label>
                       <input type="text"
                       className='form-control'
                       name="author"
                       id="author"
                       required/>
                               </div>
                
                         <div>
                             
                        <div className='form-group col-sm-6 px-5'>
                             <label htmlFor="stars">Would would you rate them out of five?</label>
                         <input type="number"
                               name='stars'
                               className='form-control'
                              id='stars'
                           min={1}
                           max={5}
                           step={0.5}
                         />
                                          </div>
                             <div className='form-group form-check form-check-inline-block px-5 '>
                                               <label htmlFor='Rant' id='rantLabel' className='form-check-label w-100 p-3'>Is this a rant?</label>
                                               <input type="checkbox"
                                               className='form-control'
                                               name='rant'
                                               id='rant'
                             />
                             </div>
                         </div>
                
                        <input type="submit" value='Add Rant or Rave'  />
                        </form>
            </main>

        </Def>
    )
}

module.exports = newComment