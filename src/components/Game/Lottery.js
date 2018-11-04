import React from 'react'

const wordList = [
  'banana',
  'apple',
  'orange'
];


let i = 0;
let word = '';

export default props => {
  
  const spin = setInterval(function(){ 
    
    word = wordList[i];
    
    i = i + 1;
    if (i === wordList.length) i = 0;
       
  }, 150);
  
  setTimeout(function(){
    clearInterval(spin);

    props.handleLottery();
  
  }, 3000);

  return <Word>{word}</Word>
}
