const React = require('react')
const Def = require('../default')

function new_form(){

    return(
        <Def>
            <main>
                <h1>Add A new Place</h1>
               
                                <form method="POST" action="/places">
                <div className="form-group">
                    <label htmlFor="name">Place Name</label>
                    <input className="form-control w-25" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="pic">Place Picture</label>
                    <input className="form-control w-25" id="pic" name="pic" />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input className="form-control w-25" id="city" name="city" />
                </div>
                <div className="form-group">
                    <label htmlFor="state">State</label>
                    <input className="form-control w-25" id="state" name="state" />
                </div>
                <div className="form-group">
                    <label htmlFor="cuisines">Cuisines</label>
                    <input className="form-control w-25" id="cuisines" name="cuisines" required />
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

module.exports = new_form