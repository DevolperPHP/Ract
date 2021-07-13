// In HTML if you want to call any class to design it in CSS file you type
// <tag class="name"> like this, but in React you must type it as className
// <tag className="name"> like this, let's give it a try

import React from 'react';

function App(){
  return(
    <div className="text">Hello World</div>
  )
}

export default App;

// CSS file :

// .text { color:green; font-size: 20px }
