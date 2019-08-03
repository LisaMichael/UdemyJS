var johnGame1 = 89; 
var johnGame2 = 120; 
var johnGame3 = 103;

var mikeGame1 = 116;
var mikeGame2 = 94;
var mikeGame3 = 123;

var maryGame1 = 97;
var maryGame2 = 134;
var maryGame3 = 105;

johnGameAverage = (johnGame1 + johnGame2 + johnGame3)/3;
mikeGameAverage = (mikeGame1 + mikeGame2 + mikeGame3)/3;
maryGameAverage=(maryGame1 + maryGame2 +  + maryGame3)/3;

console.log('Johns game average is: ' + johnGameAverage);
console.log('Mikes game average is: ' + mikeGameAverage); 

var winner = 0; 

if(mikeGameAverage === johnGameAverage){
    console.log('The game is a tie. ' + 'John\'s score is: ' + johnGameAverage + ' and Mikes score is:  ' + mikeGameAverage);
}else if(mikeGameAverage > johnGameAverage){
    console.log('Mike is the winner');
    winner === 'Mike'; 
    console.log('Mike\'s team average is : ' +  mikeGameAverage);
}else if (johnGameAverage > mikeGameAverage ){
    console.log('John is the winner');
    winner === 'John';
    console.log('John\'s team average is: ' + johnGameAverage);
}

    console.log('Mary\'s team average is: ' + maryGameAverage); 


if(mikeGameAverage === johnGameAverage && maryGameAverage === mikeGameAverage){
    console.log('The game is a tie. ' + 'John\'s score is: ' + johnGameAverage + ' and Mikes score is:  ' + mikeGameAverage + '. Mary\'s game average is: ' + maryGameAverage);
}else if(mikeGameAverage > johnGameAverage  && mikeGameAverage > maryGameAverage){
    console.log('Mike is the winner');
    winner === 'Mike'; 
    console.log('Mike\'s team average is : ' +  mikeGameAverage);
}else if (johnGameAverage > mikeGameAverage && johnGameAverage > maryGameAverage){
    console.log('John is the winner');
    winner === 'John';
    console.log('John\'s team average is: ' + johnGameAverage);
}else if(maryGameAverage > johnGameAverage && maryGameAverage > mikeGameAverage){ 
    console.log( 'Mary is the winner'); 
    winner === 'Mary';
    console.log('Mary\'s team average is: ' + maryGameAverage);
}