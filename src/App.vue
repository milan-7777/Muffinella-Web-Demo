<template>
  <header>
        <div>
            <nav>
                <ul>
                    <li><router-link to="/">HOME</router-link></li>
                    <li><router-link to="/products">PRODUCTS</router-link></li>
                    <li><router-link to="/shop">SHOP</router-link></li>
                    <li><router-link to="/contact">CONTACT</router-link></li>
                </ul>
            </nav>
        </div>
    </header>
       
    <div id="logo">
        <img src="src/assets/logo/Logo_1.JPEG" alt="logo">
        <h1>MUFFINELLA</h1>
        <h3>BELGRADE</h3>
    </div>

    <RouterView />

    <footer>
        <div id="footer-info">
            <div id="f-logo">
                <div id="logo">
                    <h1>MUFFINELLA</h1>
                    <h3>BELGRADE</h3>
                    <a href="https://www.instagram.com/_muffinella/" target="_blank"><img
                            src="src/assets/logo/icons8-instagram-96.png" alt="Instagram icon"></a>
                    <a href="#" target="_blank"><img src="src/assets/logo/icons8-pinterest-96.png" alt="Pinterest icon"></a>
                    <a href="#" target="_blank"><img src="src/assets/logo/icons8-tiktok-96.png" alt="Tiktok icon"></a>
                </div>
            </div>
        </div>
        <div id="milan">Milan Stanic 2023</div>
    </footer>
</template>

<script setup>
    import { RouterLink, RouterView } from 'vue-router'

</script>

<style>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Roboto', sans-serif;
        text-align: center;
    }

    header {
        background-color: #dfabc0;
        height: 60px;
        width: 100%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 20px 0;
        color: #fff;
    }

    nav ul {
        display: flex;
        list-style: none;
        gap: 30px;
    }

    nav ul li a {
        color: #fff;
        text-decoration: none;
        padding: 10px 10px;
        font-size: 16px;
        transition: 0.4s all;
        letter-spacing: 2px;
    }

    @media only screen and (max-width:600px) {
        nav ul {
            gap: 0px;
        }

        nav ul li a {
            font-size: 12px;
            padding: 10px 5px;
        }
    }

    @media only screen and (min-width:601px) and (max-width:990px) {
        nav ul li a {
            font-size: 14px;
            padding: 10px 5px;
        }
    }

    nav ul li a:hover {
        background-color: rgba(255, 255, 255, 0.300);
    }

    #logo {
        position: relative;
        padding-top: 20px;
    }

    #logo img {
        width: 100px;
    }

    #logo h1 {
        color: rgb(105, 79, 14);
        text-align: center;
        letter-spacing: 6px;
        padding-bottom: 3px;
    }

    #logo h3 {
        color: #dfabc0;
        text-align: center;
        position: relative;
        font-size: 14px;
        letter-spacing: 3px;
    }

    @media only screen and (max-width:600px) {
        #logo img {
            width: 80px;
        }
        #logo h1 {
            font-size: 22px;
        }
        #logo h3 {
            font-size: 12px;
        }
    }

    @media only screen and (min-width:601px) and (max-width:990px) {
        #logo img {
            width: 80px;
        }
        #logo h1 {
            font-size: 26px;
        }
    }

    footer {
        height: 250px;
        background-color: #e7c2d1;
        color: #fff;
        width: 100%;
    }

    #footer-info {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        border-bottom: 1px solid #dd7ea4;
    }

    #f-logo img {
        width: 65px;
        margin-top: 25px;
        transition: 0.4s all;
        margin-bottom: 10px;
    }

    #f-logo img:hover {
        transform: scale(1.2);
    }

    #milan {
        color: #dd7ea4;
        margin-top: 10px;
    }

    @media only screen and (max-width:600px) {
        footer {
            height: 200px;
        }
    }
</style>
