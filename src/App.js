import React from 'react'
import Monumnets from './Component/Monumnets'
import WondersData from './Component/UserData'

function App (){
  return(
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Seven Wonder Of the world</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="">Wonders</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
      {
        WondersData.map((ele)=>{
          return (
            <div>
              <Monumnets 
              img={ele.img}
              id={ele.id}
              title={ele.title}
              Description={ele.Description}
              btn={ele.btn}
              target={ele.target}
              />
              </div>
          )
        })
      }
    </div>
  )
}
export default App