<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'app',
  components: { Header }
}
</script>

<style>
  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  html, body {
    background:#f7f1f1;
    font-size:1.1rem;
    font-family:'Quicksand', sans-serif;
    height:100%;
  }
  body {
    display:flex;
    justify-content:center;
    /*align-items:center;*/
  }
  @keyframes strikeitem {
    to { width:calc(100% + 1rem); }
  }
  #app {
    margin:4rem 0;
  }
  #todolist {
    /*margin-top:-2rem;*/
    padding:2rem 3rem 3rem;
    max-width:500px;
    width:500px;
    background:#FF6666;
    color:#FFF;
    box-shadow:-20px -20px 0px 0px rgba(100,100,100,.1);
  }
  #todolist h1 {
      /*text-align:center;*/
      font-weight:normal;
      font-size:2.6rem;
      letter-spacing:0.05em;
      border-bottom:1px solid rgba(255,255,255,.3); 
  }
  #todolist h1 span {
    display:block;
    font-size:0.8rem;
    margin-bottom:0.7rem;
    margin-left:3px;
    margin-top:0.2rem;   
  }

  #todolist .emptylist {
    margin-top:2.6rem;
    text-align:center;
    letter-spacing:.05em;
    font-style:italic;
    opacity:0.8;
    
  }
  #todolist ul {
    margin-top:2.6rem;
    list-style:none;
  }
  #todolist .todolist-move {
    transition: transform 1s;
  }

  #todolist li {
    display:flex;
    margin:0 -3rem 4px;
    padding:1.1rem 3rem;
    justify-content:space-between;
    align-items:center;
    background:rgba(255,255,255,0.1);
  }

  #todolist .actions {
    flex-shrink:0;
    padding-left:0.7em;
  }
  #todolist .label {
    position:relative;
    transition:opacity .2s linear;
  }
  #todolist .done .label {
    opacity:.6;
  }
  #todolist .done .label:before {
    content:'';
    position:absolute;
    top:50%;
    left:-.5rem;
    display:block;
    width:0%;
    height:1px;
    background:#FFF;
    animation:strikeitem .3s ease-out 0s forwards;
  }
  #todolist .btn-picto {
    border:none;
    background:none;
    -webkit-appearance:none;
    cursor:pointer;
    color:#FFF;
  }
</style>
