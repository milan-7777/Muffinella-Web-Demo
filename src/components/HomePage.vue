<template>
    <div id="container">
        <button @click="prevImg">&#171;</button>
        <div id="slideshow">
            <img id="slideid" src="public/photos/kolazi/k4.jpg" alt="slide img">
        </div>
        <button @click="nextImg">&#187;</button>
    </div>

    <h2 id="quote">A LITTLE SWEETNESS OF HEAVEN</h2>

    <div id="section">
        <div class="box">
            <router-link to="/womansday">
                <h4>WOMAN'S DAY</h4>
                <img src="public/photos/8_mart/8m3.jpg" alt="">
            </router-link>
        </div>
        <div class="box">
            <router-link to="/valentinesday">
                <h4>VALENTINE'S DAY</h4>
                <img src="public/photos/dan_zaljubljenih/dz1.jpg" alt="">
            </router-link>
        </div>
        <div class="box">
            <router-link to="/newyear">
                <h4>NEW YEAR'S</h4>
                <img src="public/photos/ng_ponuda/ng1.jpg" alt="">
            </router-link>
        </div>
        
        <div class="box">
            <router-link to="/halloween">
                <h4>HALLOWEEN</h4>
                <img src="public/photos/halloween/h2.jpg" alt="">
            </router-link>
        </div>
        <div class="box">
            <router-link to="/easter">
                <h4>EASTER</h4>
                <img src="public/photos/uskrs/u1.jpg" alt="">
            </router-link>
        </div>
        <div class="box">
            <router-link to="/themecupcakes">
                <h4>THEME CUPCAKES</h4>
                <img src="public/photos/tematski/t1.jpg" alt="">
            </router-link>
        </div>
    </div>
    <div id="lokal">
        <div>
            <img src="public/photos/lok2.jpg" alt="Slika lokala">
        </div>
        <div id="info">
            <h3>Muffinella Belgrade</h3>
            <p>Pjarona De Mondezira 777, Dorcol</p>
            <p>Working hours: Monday-Sunday 10:00-22:00</p>
            <p>muffinella.ac@gmail.com</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { onMounted, onUnmounted } from 'vue'

let images = ref(
  [
    {
      txt: "public/photos/kolazi/k1.jpg",
    },
    {
      txt: "public/photos/kolazi/k2.jpg",
    },
    {
      txt: "public/photos/kolazi/k3.jpg",
    },
    {
      txt: "public/photos/kolazi/k4.jpg",
    },
])



let imageIndex = ref(0);

function nextImg() {
  document.getElementById("slideid").src = images.value[imageIndex.value].txt
  imageIndex.value++
  if (imageIndex.value >= images.value.length) {
    imageIndex.value = 0;
  } else if (imageIndex.value < 0) {
    imageIndex.value = images.value.length - 1;
  }
}

function prevImg() {
  document.getElementById("slideid").src = images.value[imageIndex.value].txt
  imageIndex.value--
  if (imageIndex.value >= images.value.length) {
    imageIndex.value = 0;
  } else if (imageIndex.value < 0) {
    imageIndex.value = images.value.length - 1;
  }
}

function autoSlide() {
  document.getElementById("slideid").src = images.value[imageIndex.value].txt
  imageIndex.value++
  if (imageIndex.value >= images.value.length) {
    imageIndex.value = 0;
  } else if (imageIndex.value < 0) {
    imageIndex.value = images.value.length - 1;
  }
} 

let intervalId
onMounted(() => {
  intervalId = setInterval(autoSlide, 4000)
})

onUnmounted(() => clearInterval(intervalId))

</script>

<style lang="scss" scoped>
  #container {
    background-color: #e7c2d1;
    width: 100%;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
        button {
            width: 10%;
            border: none;
            background-color: #dfabc042;
            font-size: 26px;
            color: #d6a8cb;
            z-index: 5;
        }
        button:hover {
            background-color: #dfabc0;
            color: #eec3d7;
            cursor: pointer;
        }
        #slideshow {
            width: 100%;
            height: 100%;
            margin: 0 auto;
            display: flex;
            justify-content: center;
        img {
            width: 100%;
            aspect-ratio: 16/9;
        }
        }
    }

    @media only screen and (max-width:600px) {
      #container {
        width: 100%;
      }
    }

    @media only screen and (min-width:601px) and (max-width:990px) {
      #container {
        width: 100%;
      }
    }

    #quote {
        color: #dd7ea4;
        letter-spacing: 6px;
        font-size: 16px;
        margin-top: 100px;
    }

    @media only screen and (max-width:600px) {
      #quote {
        margin-top: 50px;
      }
    }

    @media only screen and (min-width:601px) and (max-width:990px) {
        #quote {
        margin-top: 50px;
      }
    }

    #section {
        margin: 0 auto;
        width: 80%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        border-top: solid 1px #dd7ea4;
        .box {
        margin: 0 auto;
        width: 100%;
        aspect-ratio: 1/1;
        margin-top: 100px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #dfabc0;
        }

        .box a {
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.8s all;
        }

        .box a:hover {
            transform: scale(1.2);
            filter: opacity(0.8);
        }

        .box img {
            filter: opacity(0.8);
            width: 100%;
        }

        .box h4 {
            position: absolute ;
            letter-spacing: 2px;
            z-index: 9;
            color: #fff;
            background-color: #d38da9d3;
            padding: 5px;

        }
    }

    @media only screen and (max-width:600px) {
        #section {
            grid-template-columns: repeat(1, 1fr);
            .box {
            margin-top: 50px;
            }
            .box a:hover {
            transform: scale(1.1);
        }
        }
        
    }

    @media only screen and (min-width:601px) and (max-width:990px) {
        #section {
            grid-template-columns: repeat(2, 1fr);
        }
    }


    #lokal {
        width: 100%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin-top: 100px;
    }

    @media only screen and (max-width:600px) {
            #lokal {
                grid-template-columns: repeat(1, 1fr);
            }
            #lokal #info {
                padding: 80px 0;
            }
        }

    #lokal div {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #dfabc0;
        color: #fff;
        letter-spacing: 3px;
        overflow: hidden;
    }

    #lokal h3 {
        font-size: 36px;
        margin-bottom: 15px;
        letter-spacing: 3px;
        color: rgb(105, 79, 14);
    }

    #lokal p {
        font-size: 16px;
        margin-bottom: 8px;
        color: rgb(105, 79, 14);
    }

    @media only screen and (max-width:600px) {
        #lokal h3 {
            font-size: 24px;
        }

        #lokal p {
            font-size: 14px;
            letter-spacing: 2px;
        }
    }

    @media only screen and (min-width:601px) and (max-width:990px) {

        #lokal h3 {
            font-size: 24px;
        }

        #lokal p {
            font-size: 12px;
            letter-spacing: 2px;
        }
    }


    #lokal img {
        width: 100%;
        transition: 0.4s all;
        filter: brightness(0.9);
    }

    #lokal img:hover {
        transform: scale(1.03);
        filter: brightness(1);
    }
</style>
