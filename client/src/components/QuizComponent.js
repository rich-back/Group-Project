import React , {useState} from "react";


const QuizComponent = ({ allElements }) => {
  const [randomItem, updateRandomItem] = useState ("Let's Begin")
  const [score, updateScore]= useState (0)
  const [answer, updateAnswer] = useState ("The Answer Was : ")

  function returnRandomItem() {
    const randomindex = Math.floor(Math.random() * allElements.length);
    const newRandomItem = allElements[randomindex]
    updateRandomItem(newRandomItem)
    return randomItem 
  }


  const addAPoint = (()=>{
    const newScore  = score + 1
    updateScore (newScore)
  })

  const handleAnswer = ((value)=>{
    if (value.target.value === randomItem.standardState){
      addAPoint()
      returnRandomItem()
      updateAnswer(`CORRECT : The Answer Was ${randomItem.standardState}`)
    }

      else {
        returnRandomItem()
        updateAnswer(`WRONG : The Answer Was ${randomItem.standardState}`)
      }
    })
  return (
    <>
      <h2>The Element_Able Quiz!</h2>
      <button onClick={returnRandomItem}>Get Started!!!</button> 
      <h3>{randomItem.name}</h3>
      <h4>Choose the element's Standard State</h4>

      <button value={"solid"} onClick={handleAnswer}>Solid</button>
      <button value={"gas"} onClick={handleAnswer}>Gas</button>
      <button value={"liquid"} onClick={handleAnswer}>Liquid</button>

      <h4>Your Score : {score}</h4>     
      <p>{answer}</p>


    </>
  );
}

export default QuizComponent;
