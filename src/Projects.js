import React from 'react'
import bierShot from './images/bierShot.png'
import purrever from './images/purrever.png'
import divebar from './images/divebar.png'
const Projects = () =>{
  return(
    <>
      <h1 class="display-4">Projects</h1>
      <br />
      <div className='projectCards'>
        <div class="card" style={{width: '25em'}}>
          <img src={bierShot} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Biergarten</h5>
            <p class="card-text">Social Media Beer Passport.</p>
            <div class="btn-group" role="group" aria-label="Basic example">
              <a href="https://www.youtube.com/watch?v=gOuxuEROFxU" target="_blank" class="btn btn-primary">Check out the demo!</a>
              <a href="https://github.com/kevinneyer/biergarten-front-end/tree/master/biergarten-client" target="_blank" class="btn btn-secondary">See the code!</a>
            </div>
            </div>
          </div>


        <div class="card" style={{width: '25em'}}>
          <img src={divebar} class="card-img-top" alt="The Divebar"/>
          <div class="card-body">
            <h5 class="card-title">The Divebar</h5>
            <p class="card-text">Create or Review a 3 Ingredient Cocktail</p>
            <div class="btn-group" role="group" aria-label="Basic example">
              <a href="https://www.youtube.com/watch?v=DyEmLA7YqI8&t=18s" target="_blank" class="btn btn-primary">Check out the demo!</a>
              <a href="https://github.com/kevinneyer/mod-3-project" target="_blank" class="btn btn-secondary">See the code!</a>
            </div>
          </div>
        </div>

        <div  class="card" style={{width: '25em'}}>
          <img src={purrever} class="card-img-top" alt="Purrever Home"/>
          <div class="card-body">
            <h5 class="card-title">Purrever Home</h5>
            <p class="card-text">Check out what cats are up for adoption!</p>
            <div class="btn-group" role="group" aria-label="Basic example">
              <a href="https://www.youtube.com/watch?v=A2Rrb3nHAP4&t=115s" target="_blank" class="btn btn-primary">Check out the demo!</a>
              <a href="https://github.com/kevinneyer/purrever-home" target="_blank" class="btn btn-secondary">See the code!</a>
            </div>
          </div>
        </div>

    </div>
    </>
  )
}

export default Projects
