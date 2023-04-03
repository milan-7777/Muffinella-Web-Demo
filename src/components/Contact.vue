<template>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1744.556934502776!2d20.456607228206483!3d44.82255705975761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a654bb0628e6f%3A0x580aee0e161c2145!2zUGphcm9uYSBEZSBNb25kZXppcmEgMTIsINCR0LXQvtCz0YDQsNC0!5e0!3m2!1ssr!2srs!4v1676480037502!5m2!1ssr!2srs" width="800" height="600" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <div id="mailform">
        <p>Do you want additional information ?</p>
        <h4>Contact us by mail</h4>
        <form action="" @submit="msgSent()">
            <label for="name">Your name:</label>
            <input type="text" name="name" id="name" required>
            <label for="mail">Your e-mail:</label>
            <input type="email" name="mail" id="mail" required>
            <label for="subject">Subject:</label>
            <input type="text" name="subject" id="subject">
            <label for="text">Message:</label>
            <textarea name="text" id="text" cols="40" rows="4" required></textarea>
            <button type="submit">SEND</button>
        </form>
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
    
    function msgSent () {
        alert('Message sent.')
    }

    
</script>

<style scoped lang="scss">
    iframe {
        float: left;
        width: 50%;
        margin-top: 30px;
    }

    @media only screen and (max-width:600px) {
        iframe {
            width: 100%;
        }
    }

    #mailform {
        width: 50%;
        color: rgb(105, 79, 14);
        display: inline-block;
        margin: 0 auto;
        margin-top: 30px;
        p {
            margin-bottom: 2px;
            letter-spacing: 1px;
        }

        h4 {
            margin-bottom: 30px;
            letter-spacing: 1px;
        }
        
        form {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            text-align: left;
            letter-spacing: 1px;
            width: 80%;
            margin: 0 auto;
        }

        input {
            display: block;
            background-color: #fff;
            margin: 0 auto;
            width: 100%;
            height: 40px;
            border-radius: 5px;
            border: 2px solid #dfabc0;
            margin-bottom: 20px;
        }

        textarea {
            background-color: #ffff;
            border-radius: 5px;
            border: 2px solid #dfabc0;
            margin-bottom: 20px;
        }

        button {
            width: 100px;
            padding: 10px;
            background-color: #dfabc0;
            border: 1px solid rgb(105, 79, 14);
            color: rgb(105, 79, 14);
            margin-bottom: 5px;
            border-radius: 5px;
            letter-spacing: 1px;
            transition: 0.3s all;
        }
        button:hover {
            background-color: #e7c2d1;
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