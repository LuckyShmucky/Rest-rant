const React = require('react')
const Def = require('../default.jsx')

function editForm (data) {
    return (
        <Def>
            <head>
                <link rel="stylesheet" href="../../style.css" />
            </head>
          <main>
              <div className='row'>
                <h1 className='offset-md-2 mx-auto'>Edit {data.place.name}</h1>
              </div>
                  
               
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
                    <label htmlFor="pic">Change Picture</label>
                    <input className="form-control " 
                    id="pic" 
                    type='text' 
                    name="pic"
                    value={data.place.pic} />
                </div>

                            </div>
              
                            <div className='row'>

                <div className="form-group col-sm-6 px-5">
                    <label htmlFor="city">City</label>
                    <input className="form-control"
                     id="city"
                     type="text"
                     name="city" 
                     value={data.place.city}/>
                </div>
                <div className="form-group col-sm-6 px-5">
                    <label htmlFor="state">State</label>
                    <input className="form-control" 
                    id="state" 
                    name="state" 
                    type='text'
                    value={data.place.state} />

                </div>
                <div className="form-group w-100 px-5">
                    <label htmlFor="cuisines">Cuisines</label>
                    <input className="form-control " 
                     id="cuisines"
                     name="cuisines" 
                     type='text'
                     value={data.place.cuisines}
                     required />
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