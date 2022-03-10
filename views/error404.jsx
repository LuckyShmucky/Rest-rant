const React = require('react')
const Def = require('./default')
//import React from 'react'
//import Def from './default'
function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div className="tenor-gif-embed" data-postid="15268759" data-share-method="host" data-aspect-ratio="0.753125" data-width="50%"><a href="https://tenor.com/view/pedro-monkey-puppet-meme-awkward-gif-15268759">Pedro Monkey Puppet GIF</a>from <a href="https://tenor.com/search/pedro-gifs">Pedro GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
          </main>
      </Def>
    )
  }


module.exports = error404