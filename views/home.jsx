const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
        <head>
          <link rel="stylesheet" href="../home.css" />
        </head>
          <main className='px-5'>
              <h1>REST-Rant</h1>
              <h2>This is a site where you can either complain (Rant) or compliment
               (Rave) a restaurant! 
              </h2>
             <p>Thank you for visitting REST-rant! The name of the person who deployed this version of this site is Christian (Lucky) Luciano.
                if you have any recommendations or questions about this site and how to make it better feel 
                free to reach out to Lucky via <a href="https://www.linkedin.com/in/christian-luciano-a3b63621a/">Linkedin</a>
            </p>
             <a href=""></a>
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