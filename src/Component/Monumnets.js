import React from 'react'

function Monumnets (props){
  return(
    <div class='container'>
      <br/>
    <div class="card mb-3">
  <img src={props.img} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.Description}</p>
    <a class="btn btn-success" href={props.target} target='_blank'>{props.btn}</a>
  </div>
</div>
    </div>
  )
}
export default Monumnets