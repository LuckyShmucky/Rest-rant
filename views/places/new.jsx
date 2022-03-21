const React = require('react')
const Def = require('../default')

function Newform(){

    return(
        <Def>
            <main>
                <h1>Add A new Place</h1>
               
                <form  action="/places" method='POST'>
                <div className="form-group">
                    <label htmlFor="name">Place Name</label>
                    <input className="form-control w-25" type='text'
                     id="name"
                      name="name"
                       required />
                </div>
                <div className="form-group">
                    <label htmlFor="pic">Place Picture</label>
                    <input className="form-control w-25" 
                    id="pic" 
                    type='text' 
                    name="pic" />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input className="form-control w-25"
                     id="city"
                      type="text"
                       name="city" />
                </div>
                <div className="form-group">
                    <label htmlFor="state">State</label>
                    <input className="form-control w-25" 
                    id="state" 
                    name="state" 
                    type='text' />

                </div>
                <div className="form-group">
                    <label htmlFor="cuisines">Cuisines</label>
                    <input className="form-control w-25" 
                     id="cuisines"
                     name="cuisines" 
                     type='text' required />
                </div>

                <div className="form-group">
                    <label for="founded">Founded Year</label>
                    <input 
                    className="form-control" 
                    id="founded" 
                    name="founded"
                    type='number'
                    value={new Date().getFullYear}
                    />
                </div>

                <input className="btn btn-primary" type="submit" value="Add Place" />
                </form>

                         <div className='form-group'> 
                        <a href="/places">Go back to the index!</a>     
                        </div>       
            </main>
        </Def>
    )

}

module.exports = Newform