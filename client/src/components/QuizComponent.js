import React , {useState} from "react";


const QuizComponent = ({ elementNames }) => {

  const [randomItem, updateRandomItem] = useState ("Let's Begin")

  function returnRandomItem() {
    const randomindex = Math.floor(Math.random() * elementNames.elementNames.length);
    const newRandomItem = elementNames.elementNames[randomindex]
    updateRandomItem(newRandomItem)
    return randomItem 
  }

  return (
    <>
      <h2>Here be the Quiz!</h2>
      <button onClick={returnRandomItem}>Next Element</button>      
      <p>{randomItem}</p>
      <img src="https://jschris.com/262a1fab0110d0d612ed69c9bb7c4e7e/project.gif" />
      <p><i>*Sample Quiz</i></p>
    </>
  );
}

export default QuizComponent;
