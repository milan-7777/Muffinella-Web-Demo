<template>
    <h2 id="quote">HALLOWEEN</h2>
    <div id="section">
        <div class="box">
          <img @click="uvecaj" src="public/photos/halloween/h1.jpg" alt="halloween image 1">
        </div>
        <div class="box">
          <img @click="uvecaj" src="public/photos/halloween/h2.jpg" alt="halloween image 2">
        </div>
        <div class="box">
          <img @click="uvecaj" src="public/photos/halloween/h3.jpg" alt="halloween image 3">
        </div>
        <div class="box">
          <img @click="uvecaj" src="public/photos/halloween/h4.jpg" alt="halloween image 4">
        </div>
    </div>

    <div id="myModal" class="modal">
      <span @click="close" class="close">&times;</span>
      <img src="" id="modal-content" alt="zoomed image">
    </div>
</template>

<script setup>
  let modalImg
  let modalContent

  function uvecaj(e) {
    let modal = document.getElementById("myModal");
    modal.style.display = 'block';
    
    modalContent = document.getElementById("modal-content");

    modalImg = e.currentTarget.src
    modalContent.src = modalImg
  }


  function close() {
    let modal = document.getElementById("myModal");
    modal.style.display = 'none';
  }
</script>

<style lang="scss" scoped>
    #quote {
      color: #dd7ea4;
      letter-spacing: 6px;
      font-size: 16px;
      margin-top: 50px;
    }

    #section {
      margin: 0 auto;
      width: 80%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      border-top: solid 1px #dfabc0;
      gap: 15px;
      margin-bottom: 30px;
      .box {
      margin: 0 auto;
      width: auto;
      height: auto;
      margin-top: 50px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #dfabc0;
      aspect-ratio: 1/1;
    }
    .box img {
      width: 100%;
      transition: 0.8s all;
      cursor: pointer;
    }
    .box img:hover {
    transform: scale(1.1);
      filter: opacity(0.8);
    }
    }
    @media only screen and (max-width:600px) {
    #section {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media only screen and (min-width:601px) and (max-width:990px) {
      #section {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    .modal {
      display: none;
      position: fixed;
      z-index: 1;
      padding-top: 100px;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgb(0,0,0);
      background-color: rgba(0,0,0,0.9);
    }

    #modal-content {
      margin: auto;
      display: block;
      height: 80%;
      max-width: 100%;
      z-index: 11;
      }

    #modal-content {  
      -webkit-animation-name: zoom;
      -webkit-animation-duration: 0.6s;
      animation-name: zoom;
      animation-duration: 0.6s;
    }

    @-webkit-keyframes zoom {
      from {-webkit-transform:scale(0)} 
      to {-webkit-transform:scale(1)}
    }

    @keyframes zoom {
      from {transform:scale(0)} 
      to {transform:scale(1)}
    }

    .close {
      position: absolute;
      top: 15px;
      right: 35px;
      color: #f1f1f1;
      font-size: 40px;
      font-weight: bold;
      transition: 0.3s;
    }

    .close:hover,
    .close:focus {
      color: #bbb;
      text-decoration: none;
      cursor: pointer;
    }

    @media only screen and (max-width:600px) {
      #modal-content {
        width: 90%;
        height: auto;
      }
    }
</style>