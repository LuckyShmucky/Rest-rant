const React = require('react')


function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous"></link>
                <link rel="stylesheet" href="../style.css" />
            </head>
            <body>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                      
                        <li><a href="/places">Places</a></li>
                      
                        <li><a href="/places/new">Add a Place</a></li>
                    </ul>
                </nav>
                {html.children}
                
            </body>
        </html>
    )
  }

module.exports = Def