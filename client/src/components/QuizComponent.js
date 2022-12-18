import React , {useState} from "react";


const QuizComponent = ({ allElements }) => {
  const [randomItem, updateRandomItem] = useState ("Let's Begin")

  function returnRandomItem() {
    const randomindex = Math.floor(Math.random() * allElements.allElements.length);
    const newRandomItem = allElements.allElements[randomindex]
    updateRandomItem(newRandomItem)
    return randomItem 
  }

  const handleAnswer = ((value)=>{
    if (value.target.value == randomItem.standardState){
      console.log("correct")}
      else {
        console.log(randomItem.standardState)
      }
    })

  return (
    <>
      <h2>Here be the Quiz!</h2>
      <button onClick={returnRandomItem}>Next Element</button>      
      <h3>Element To Sort : {randomItem.name}</h3>

      <button value={"solid"} onClick={handleAnswer}>Solid</button>
      <button value={"gas"} onClick={handleAnswer}>Gas</button>
      <button value={"liquid"} onClick={handleAnswer}>Liquid</button>






      <img src="https://jschris.com/262a1fab0110d0d612ed69c9bb7c4e7e/project.gif" />

    </>
  );
}

export default QuizComponent;
