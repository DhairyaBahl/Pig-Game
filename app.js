/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores,roundScore,dice,gamePlaying;
init();
document.querySelector('.dice').style.display='none';
//dice=Math.floor(Math.random()*6)+1;
//document.querySelector('#current-'+activePlayer).textContent=dice;

/*

document is a way to use DOM Manipulation in the html by javascript.
document is an inbuilt class by which we can select the the material of the HTML code itself. Just like we did above.

querySelector is an inbuilt f() of the document class which is used to easily access and manipulate the normal html code.

querySelector() is a function like this but we have to enter value in it that what we want to change in it. Here we entered the id '#current-0' which is further changed to '#current- 

then we choose text content sub-function which is used to put values to it.here we chose textcontent=dice which means the values of dice will be used to put in the function.

ultimately we are putting the value of dice to the #current-0 which is the id of the 
changeable part.

*/

init();


/*
Here we are putting the default values to 0  by using 'getElementById' rather than querySelector.
here the only difference b/w the 2 is getElementById is faster than query Selector and can only be used by IDs
and we don't have to use the '#' symbol for IDs as we do in querySelector
*/




// document.querySelector('#current-'+activePlayer).innerHTML='<em>'+dice+'</em>';

/*

here we are still using document class which is inbuilt and then we use the sub function of query selector with the same method .

but the twist here is we are using innerHTML rather than text content

both of them use the same fundamentals but the problem with the text content is the dont enable us to use the html attributes or tags in them. in the former case we used the <em></em> to italisize the number which is being put there by the dice.

but we cant do the same with the first one.

*/

/*

One thing to be noticed in both that querySelector function also follows type coersion in its parameters
*/


/*
var x=document.querySelector('#score-0').textContent;
console.log(x);

document.querySelector('.dice').style.display='none';
*/

/*



function btn()
{
    // Do something here
}

btn();

document.querySelector('.btn-roll').addEventListener('click',btn);

*/


/*

Now what happens in this scenario we are using 'addEvent Listener' which is used to put event or actions to the .btn-roll class which contains roll dice button.

here we are trying to tell the computer what will happen if someone clicks the roll button in .btn-roll class

On clicking it will call the function btn();

*/

document.querySelector('.btn-roll').addEventListener('click',function(){
    
    if(gamePlaying){
    //1.Random number
    var dice=Math.floor(Math.random()*6)+1;
    
    //2.Display the result
    var diceDOM =document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src='dice-'+dice+'.png';
    document.querySelector('#current-'+activePlayer).textContent=dice;
    
    //3.Update the round score if the roll number was not a 1
    if(dice !== 1)
        {
            //add score
            roundScore+=dice;
            document.querySelector('#current-'+activePlayer).textContent=roundScore;
        }
    else
    {
        //next player
        nextPlayer();
        
        
    }
    }
});

/*
In this method we are declaring the function as well as giving the fucntion definition at the same time 

and this function is a local function and to use it again we have to declare it again  and define it again either in global scope or local scope

*/


document.querySelector('.btn-hold').addEventListener('click',function(){
    
    //add CURRENT score to GLOBAL score
    scores[activePlayer]+=roundScore;
    
    //update the UI
    document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
    
    nextPlayer();    
    
    
    //check if player won the game

    if(scores[activePlayer]>=100)
        {
            document.querySelector('#name-'+activePlayer).textContent='Winner';
            document.querySelector('.dice').style.display='none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            gamePlaying=false;
        }
    else
        {
            nextPlayer();    
        }

})

function nextPlayer()
{
    if(activePlayer===0)
            {
                activePlayer=1;
                roundScore=0;
            }
        else
        {
            activePlayer=0;
            roundScore=0;
        }
            document.getElementById('current-0').textContent='0';
            document.getElementById('current-1').textContent='0';
            
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
            
            //document.querySelector('.player-0-panel').classList.remove('active');
            //document.querySelector('.player-1-panel').classList.add('active');
            document.querySelector('.dice').style.display='none';
        
        
}
                                                    


/*

In the hold button we copied the same code again from the roll button 

but we have to use DRY protocol which is dont repeat yourself protocol


so we created a function of the name nextPlayer() and used it twice

so even in the case of error we can easily rectify error in one place and it will be reflected to others

*/



document.querySelector('.btn-new').addEventListener('click',init);


function init()
{
     scores=[0,0];
    activePlayer=0;
    roundScore=0;
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.getElementById('name-0').textContent='Player 1 ';
    document.getElementById('name-1').textContent='Player 2 ';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
}




















