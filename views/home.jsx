const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main className='px-5'>
              <h1>REST-Rant</h1>
              <div>
                <img src="/images/resizedCake.jpg" alt="A slice of cake with raspberries" />
                  <div>
                    Photo by <a href="https://unsplash.com/@anna_tukhfatullina">Anna Tukhfatullina</a>
                    </div>            
              </div>
              <p>This is a site where you can either complain (Rant) or compliment
               (Rave) a restaurant! 
              </p>
              <a href="/places">
                <button className="btn-primary">Places Page</button>
              </a>
          </main>
      </Def>
    )
  }

module.exports = home

//more credits for save pictures
//https://unsplash.com/@amgee88 for in and out picture