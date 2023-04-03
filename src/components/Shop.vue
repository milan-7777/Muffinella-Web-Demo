<template>
    <div id="container">
        <div class="shopsteps">
            <h1>MAKE YOUR OWN CUPCAKES</h1>
            <form action="" @submit="orderCreated()">

            <div class="steps">
                <h2>Choose box</h2>
                <div class="images">
                    <img src="public/photos/shop/box1.jpg" alt="box 1">
                    <img src="public/photos/shop/box2.jpg" alt="box 2">
                </div>
                <p>*box is for 6 cupcakes</p>
                <p>*we also have a white box with window</p>
                <select id="box" name="box" required>
                    <option value=""></option>
                    <option value="">Sweet</option>
                    <option value="">Slatko najsladje</option>
                    <option value="">White with window</option>
                </select>
            </div>

            <div class="steps">
                <h2>Choose basket color</h2>
                <div class="images_basket">
                    <img src="public/photos/shop/white.PNG" alt="white basket">
                    <img src="public/photos/shop/blue.PNG" alt="blue basket">
                    <img src="public/photos/shop/pink.PNG" alt="pink basket">
                </div>
                <p>*it can be in other colors</p>
                <select id="basket" name="basket" required>
                    <option value=""></option>
                    <option value="">White</option>
                    <option value="">Blue</option>
                    <option value="">Pink</option>
                </select>
            </div>

            <div class="steps">
                <h2>Choose basis</h2>
                <div class="images">
                    <img src="public/photos/shop/vanil.PNG" alt="vanil muffin">
                    <img src="public/photos/shop/choco.PNG" alt="choco muffin">
                </div>
                <select id="basis" name="basis" required>
                    <option value=""></option>
                    <option value="">Vanil</option>
                    <option value="">Choco</option>
                </select>
            </div>

            <div class="steps">
                <h2>Choose creme</h2>
                <select id="basis" name="basis" required>
                    <option value=""></option>
                    <option value="">Whipped cream</option>
                    <option value="">Black ganache</option>
                    <option value="">White ganache</option>
                    <option value="">Butter cream</option>
                </select>
                <h2>Choose fill</h2>
                <select id="fill" name="fill" required>
                    <option value=""></option>
                    <option value="">Nutella</option>
                    <option value="">Lotus</option>
                    <option value="">Strawberry</option>
                    <option value="">Pistachio</option>
                    <option value="">Eurokrem</option>
                    <option value="">Plazma</option>
                    <option value="">Raspberry</option>
                    <option value="">Milka</option>
                </select> <br>
            </div>

            <div class="steps">
                <h2>Information</h2>
                <p>Minimum for order is 6 cupcakes.</p><br>
                <p>Order at least 5 days before (if you want decoration like edible pictures or fondant figurines - 15 days before)</p><br>
                <p>Small decorations (crumbs, beads, confetti, hearts, stars, etc.) are NOT charged.</p><br>
                <p>For orders over 3000 dinars, a deposit of 50% of the total price is paid.</p>
                <p>THANK YOU&hearts;</p> <br>
                <label for="terms">I have read the information.</label>
                <input type="checkbox" name="terms" id="terms" required>
            </div>

            <div class="steps">
                <label for="name">Your name:</label>
                <input type="text" name="name" id="name" required>
                <label for="mail">Your e-mail:</label>
                <input type="email" name="mail" id="mail" required>
                <label for="text">Messagge:</label>
                <textarea name="text" id="text" cols="40" rows="4" required></textarea>
                <label for="">Add photo for example</label>
                <div id="files">
                    <input type="file" name="file" id="file" class="inputfile">
                    <input type="file" name="file" id="file" class="inputfile">
                    <input type="file" name="file" id="file" class="inputfile">
                </div>
                <button type="submit">Order</button>
            </div>
        </form>
        </div>
    </div>
</template>

<script setup>
    function orderCreated () {
        alert('Order created.')
    }
</script>

<style lang="scss" scoped>
    #container {
        width: 80%;
        margin: 0 auto;
        margin-top: 20px;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        color: rgb(105, 79, 14);
        letter-spacing: 2px;
        background-color: #f1d6e1;
        .shopsteps {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            justify-content: space-between;
            width: 100%;
            margin-top: 20px;
            h1 {
                color: #eb669b;
            }
            @media only screen and (max-width:600px) {
                    h1 {
                        font-size: 20px;
                    }
                }
        form {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            width: 100%;
            margin-top: 20px;
        }

        @media only screen and (max-width:600px) {
            form {
                grid-template-columns: repeat(1, 1fr);
            }
        }
        .steps {
            width: 90%;
            background-color: #f1d6e1;
            margin: 0 auto;
            margin-top: 10px;
            margin-bottom: 20px;
            .images {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                width: 90%;
                margin: 0 auto;
                img {
                    width: 80%;
                    margin: 0 auto;
                }
            }
            .images_basket {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                width: 80%;
                margin: 0 auto;
                img {
                    width: 70%;
                    margin: 0 auto;
                }
            }
            #files {
                display: flex;
                .inputfile::-webkit-file-upload-button {
                    display: none;
                }
                .inputfile {
                    width: 33%;
                }
            }
            @media only screen and (max-width:600px) {
                    #files {
                        flex-direction: column;
                    }
                }

            @media only screen and (min-width:601px) and (max-width:990px) {
                    #files {
                        flex-direction: column;
                    }
                }

            h2 {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 16px;
            color: #eb669b;
            letter-spacing: 3px;
            }
            p {
                color: #eb669b;
                font-weight: bold;
                margin-bottom: 10px;
            }
            @media only screen and (max-width:600px) {
                    h2 {
                        font-size: 18px;
                    }
                    p {
                        font-size: 12px;
                    }
            }
            #terms {
                margin-top: 10px;
                height: 24px;
            }
            label {
                margin-bottom: 8px;
                color: #eb669b;
                font-weight: bold;
                letter-spacing: 3px;
                }
            input {
                display: block;
                background-color: #fff;
                margin: 0 auto;
                width: 100%;
                height: 30px;
                border-radius: 5px;
                border: 2px solid #dfabc0;
                margin-bottom: 10px;
                margin-top: 10px;
                cursor: pointer;
                
                }
            select {
                height: 30px;
                width: 150px;
                margin-top: 10px;
                color: #eb669b;
                border: 2px solid #dfabc0;
                border-radius: 5px;
                cursor: pointer;
                margin: 0 auto;
                margin-bottom: 10px;
            }
            textarea {
                background-color: #ffff;
                border-radius: 5px;
                border: 2px solid #dfabc0;
                margin-bottom: 20px;
                width: 100%;
                margin-top: 10px;
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
                transition: 0.4s all;
                cursor: pointer;
                margin-bottom: 20px;
                }
            button:hover {
                background-color: #e7c2d1;
                }
        }
        }
    }
        
</style>