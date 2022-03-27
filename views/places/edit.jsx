const React = require('react')
const Def = require('../default.jsx')

function edit ({ place }) {
    return (
        <Def>
            <head>
                <link rel="stylesheet" href="../../style.css" />
            </head>
          <main>
              <div className='row'>
                <h1 className='offset-md-2 mx-auto'>Edit {place.name}</h1>
              </div>
                  
               
                <form  action={`/places/${place.id}?_method=PUT`} method='POST'>
                
                            <div className='row'>
                
                <div className="form-group col-sm-6 px-5">
                    <label htmlFor="name">Change Name</label>
                    <input className="form-control" type='text'
                     id="name"
                      name="name"
                      value={place.name}
                       required />
                </div>
                <div className="form-group col-sm-6 px-5">
                    <label htmlFor="pic">Change Picture</label>
                    <input className="form-control " 
                    id="pic" 
                    type='text' 
                    name="pic"
                    value={place.pic} />
                </div>

                            </div>
              
                            <div className=''>

                <div className='row'>
                    <div className="form-group col-sm-6 px-5">
                        <label htmlFor="city">City</label>
                        <input className="form-control"
                         id="city"
                         type="text"
                         name="city"
                         value={place.city}/>
                    </div>
                    <div className="form-group col-sm-6 px-5">
                        <label htmlFor="state">State</label>
                        <input className="form-control"
                        id="state"
                        name="state"
                        type='text'
                        value={place.state} />
                    </div>
                </div>
                
                <div className='row'>
                    <div className="form-group col-sm-6 px-5">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className="form-control "
                         id="cuisines"
                         name="cuisines"
                         type='text'
                         value={place.cuisines}
                         required />
                    </div>
                        <div className='form-group col-sm-6 px-5'>
                        <label htmlFor='founded'>Founded</label>
                        <input className='form-control'
                        id='founded'
                        name='founded'
                        value={place.founded}></input>
                        </div>
                        </div>
                </div>
               
                     <div className='row'>
                <input className="btn btn-primary offset-md-2 mx-auto "  type="submit" value="Update Place" />
                     </div>
               
                </form>
                     

                         <div className='form-group row '> 
                        <a href="/places" className='offset-md-2 mx-auto'>Go back to the index!</a>     
                        </div>       
            </main>
        </Def>
    )
}

module.exports = edit