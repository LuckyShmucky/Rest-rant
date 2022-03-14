const React = require('react')
const Def = require('../default.jsx')

function editForm (data) {
    return (
        <Def>
          <main>
                <h1>Edit {data.place.name}</h1>
               
                <form  action={`/places/${data.id}?_method=PUT`} method='POST'>
                
                            <div className='row'>
                
                <div className="form-group col-sm-6 px-5">
                    <label htmlFor="name">Change Name</label>
                    <input className="form-control" type='text'
                     id="name"
                      name="name"
                      value={data.place.name}
                       required />
                </div>
                <div className="form-group col-sm-6 px-5">
                    <label htmlFor="pic">Place Picture</label>
                    <input className="form-control " 
                    id="pic" 
                    type='text' 
                    name="pic" />
                </div>

                            </div>
              
                            <div className='row'>

                <div className="form-group col-sm-6 px-5">
                    <label htmlFor="city">City</label>
                    <input className="form-control"
                     id="city"
                     type="text"
                     name="city" />
                </div>
                <div className="form-group col-sm-6 px-5">
                    <label htmlFor="state">State</label>
                    <input className="form-control" 
                    id="state" 
                    name="state" 
                    type='text' />

                </div>
                <div className="form-group w-100 px-5">
                    <label htmlFor="cuisines">Cuisines</label>
                    <input className="form-control " 
                     id="cuisines"
                     name="cuisines" 
                     type='text' required />
                </div>
                     </div>
               
                     <div className='row'>
                <input className="btn btn-primary offset-md-2 mx-auto "  type="submit" value="Add Place" />
                     </div>
               
                </form>
                     

                         <div className='form-group row '> 
                        <a href="/places" className='offset-md-2 mx-auto'>Go back to the index!</a>     
                        </div>       
            </main>
        </Def>
    )
}

module.exports = editForm