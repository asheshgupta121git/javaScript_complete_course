# project section

## background changer

```javaScript

        let btns = document.querySelectorAll('.button');
        let body = document.querySelector('body');
        btns.forEach((btn)=>{
          btn.addEventListener('click',(e)=>{

            if(e.target.id === 'gray'){
                body.style.backgroundColor = e.target.id;
            }
                if(e.target.id === 'blue'){
                body.style.backgroundColor = e.target.id;
            }
                if(e.target.id === 'yellow'){
                body.style.backgroundColor = e.target.id;
            }
            if(e.target.id === 'green'){
                body.style.backgroundColor = e.target.id;
            }
          })  
        })

```

## background changer 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BMI generator</title>
    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            width: 100%;
        }

        .container{
            height: 400px;
            width: 400px;
            background-color: gray;
            padding:80px 50px;
            border-radius: 30px;
            box-shadow: 10px 10px 10px #403838;

        }
        p{
            margin: 5PX;

        }

        P>label{
            font-weight:bolder;
            font-size: 15PX;
            margin-right: 15PX;
        }
        p>input{
            text-decoration: none;
            border: none;
            padding: 4px;
            border-radius: 5px;
            border: none;
            box-shadow: 4px 4px 10px rgb(65, 78, 65);
            outline: none;
        }

        button{
            margin:5px;
            padding: 7px;
            font-size: 15px;
            font-weight: bolder;
            border-radius: 10px;
            align-self: center;
            border: none;
            box-shadow:4px 4px 8px #403838;

        }

        #result{
            margin-top: 20px;
            height: 20px;
            color: aliceblue;
            font-size: larger;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            font-weight: bold;
        }
        #weight-guide{
            margin-top: 20px;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            font-size: 15px;
            font-weight: bold;
        }



        
    </style>
</head>
<body>
    <div class="container">
        <h1>BMI CALCULATOR</h1>
        <form action="">
            <p>
                <label for="height">height in CM: </label>
                <input type="text" name="height" id="height">
            </p>
            <p>
                <label for="weight">weight in KG: </label>
                <input type="text" name="wwight" id="weight">
            </p> 
            <button type="submit">calculate BMI</button>
            <div id="result"></div> 
            <div id="weight-guide">
                <p>under weight = less than 18.6</p>
                <p>normal range =18.6 and 24.9</p>
                <p>Overweight range =Greater than 24.9</p>
            </div>   
            
        </form>
    </div>


    <script>
        const form = document.querySelector('form');
        form.addEventListener('submit',(e)=>{
            e.preventDefault();
            const height = parseInt(document.querySelector('#height').value);
            const weight = parseInt(document.querySelector('#weight').value);
            const result = document.querySelector('#result');

            if(height === "" || height<0 || isNaN(height)){
                result.innerHTML = `please give a valid height ${height}`;
            }else if(weight === "" || weight<0 || isNaN(weight)){
                result.innerHTML = `please give a valid height ${weight}`;
            }else{
                const bmi = (weight /((height*height)/1000)).toFixed(2);
                result.innerHTML = `your bmi is =  ${bmi}`;
            }

            document.querySelector('#height').value = "";
            document.querySelector('#weight').value = "";
        })

    </script>

</body>
</html>

```


## Loal Timer

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>timer</title>
    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body{
            display:flex;
            height: 100vh;
            width: 100%;
            justify-content: center;
            align-items: center;
            background-color:#111;
        }

        .center{
            height: 200px;
            width: 200px;
            background-color: gray;
            border-radius: 20px;
            text-align: center;
            padding: 20px 10px;
            box-shadow: 10px 5px 10px #fff;
        }
        #banner{
            font-size: larger;
            font-weight: bolder;
            color: aliceblue;
            margin-bottom: 30px;
        }

        #clock{
            height:80px;
            width: 130px;
            background-color: rgb(0, 0, 0);
            margin-top: 50px;
            margin-left: 20px;
            box-shadow: 10px 10px #fff;
            border-radius: 20px;
            color: #fff;
            padding:30px;

        }
        

    </style>
</head>
<body>
    <div class="center">
        <div id="banner"><span>TIME</span></div>
        <div id="clock"></div>
    </div>

    <script>
        let clock = document.querySelector('#clock');
        
        setInterval(function(){
            let data  = new Date();
            clock.innerHTML = data.toLocaleTimeString();
        },1000);

    </script>
</body>
</html>
````


## number gussing game 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>guss number</title>
    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: black;
        }

        .wrapper{
            height: 400px;
            width: 300px;
            padding: 10px 5px;
            text-align: center;
            background-color: gray;
            color: white;
            box-shadow: 5px 5px 10px white;
            border-radius: 10px;

            }
        h1{
            margin-bottom: 3px;
        }
        p{
            margin: 5px;
        }
        form{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        label{
            margin-bottom: 5px;
            font-size: 30px;
            
        }
        #guessField{
            max-width: 200px;
            padding: 5px;
            border: 1px solid white;
            margin-bottom: 8px;
            border-radius: 10px;
            outline:none;
        }

        #subt, .button{
            padding: 5px 7px;
            border: none;
            border-radius: 5px;
            background-color: black;
            color: white;
            cursor:pointer;
        }
        .resultparse{
            margin-bottom: 5px;
            margin-top: 5px;
        }
        .lowOrHigh{
            margin-bottom: 5px;

        }


    
    </style>
</head>
<body>
    <div class="wrapper">
        <h1>number gussing game</h1>
        <p>try to guss number between 1 to 100</p>
        <p>you have 10 attempts to guss the right number</p>
        <br>
        <form class="form">
            <label for="guessField" id="guess">guss a numer</label>
            <input type="text" id="guessField" class="guessField">
            <input type="button" value="submit guss" id="subt" class="guessSubmit">
        </form>

        <div class="resultparse">
            <p>previous guesses:  <span class="guesses"></span></p>
            <p>gusess remaining <span class="lastResult">10</span></p>
            <p class="lowOrHigh"></p>
        </div>
    </div>

    <script>

        // target to gereate random number berween 1 ot 100
        let randomNum = Math.floor(Math.random()*100)+1;
        
        const submmitBtn = document.querySelector('#subt');
        const userInput = document.querySelector('#guessField');
        const userPrevGuss = document.querySelector('.guesses');
        const lastResult = document.querySelector('.lastResult');
        const lowOrHigh = document.querySelector('.lowOrHigh');
        const resultPara = document.querySelector('.resultparse');

        let p = document.createElement('p');


        let prevGuss = [];
        let numGuss = 1;
        let playGame = true;

        if(playGame){
            console.log(randomNum)
            submmitBtn.addEventListener('click', function(e){
                e.preventDefault();
                const guess = parseInt(userInput.value);
                validateGuess(guess);
                userInput.value = "";
            })
        }


        function validateGuess(guess){
            //to check he guss valid number 
            if(isNaN(guess)){
                alert("please enter a valid number");
            }else if(guess<1  || guess >100){
                alert("please enter a valid number in range of 1 to 100");
            }else{
                prevGuss.push(guess);
                if(numGuss === 11){
                    displayGuess(guess);
                    displayMSG(`game over. random number ${randomNum}`);
                    endGame();
                }else{
                    displayGuess(guess);
                    checkGuess(guess);
                }
            }
        }

        function checkGuess(guess){
            //to check if the number is equeal to random numebr or greater than or less than

            if(guess === randomNum){
                displayMSG('you gussed right');
                endGame();
            }else if(guess < randomNum){
                displayMSG(`Number is too low`);
            }else if(guess > randomNum){
                displayMSG(`number is too high`);
            }
        }

        function displayGuess(guess){
            //  display message
            userPrevGuss.innerHTML += `${guess} `;
            numGuss++;
            lastResult.innerHTML = `${11 - numGuss}`;
        }

        function displayMSG(msg){
            //display msg in low or high or equal
            lowOrHigh.innerHTML = `<h2>${msg}</h2>`;
        }

        function endGame(){
            //close the game is guess is right
            userInput.value = "";
            userInput.setAttribute('disabled','');
            p.classList.add('button');
            p.innerHTML = `<h5 id='newGame'>start newgame</h5>`;
            resultPara.appendChild(p);
            playGame = false;
            newGame();
        }

        function newGame(){
            //start new game.

            const newGameBtn = document.querySelector('#newGame');
            newGameBtn.addEventListener('click', function (e){
                randomNum =  Math.floor(Math.random()*100)+1;
                console.log(randomNum);
                prevGuss = [];
                numGuss = 1;
                userPrevGuss.innerHTML = '';
                lastResult.innerHTML = `${11 - numGuss}`;
                userInput.removeAttribute('disabled');
                resultPara.removeChild(p);
                lowOrHigh.innerHTML = '';
                playGame = true;

                console.log("btn click");
            })
        }

    </script>
</body>
</html>
```