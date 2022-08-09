import React from "react";
import Start from './components/Start'
import Quiz from './components/Quiz'
import Confetti from "react-confetti";
import leftBottomImg from './img/left-bottom.png'
import RightTopImg from './img/right-top.png'
import mainLeftBottom from './img/main-left-bottom.png'
import mainRightTop from './img/main-right-top.png'



export default function App(){

    const[clickStart,setClickStart] = React.useState(true)
    const[allQuestions, setAllQuestions] = React.useState([])
    const[numberOfCorrect, setNumberOfCorrect] = React.useState(parseInt(0))
    const[isCheckBtnClicked, setIsCheckBtnClicked] = React.useState(false)
    const[isPlayAgain,setIsPlayAgain]= React.useState(false)
    
  

    function handleAnswer(answer){
      
        if(answer[0]===answer[1]){ // count correct answer
            setNumberOfCorrect(prevState => {
                if(prevState<4){
                    return  prevState+1
                }
                else return prevState
            })
        }
    }
    
    function handleCheckAgainBtn(){
        setIsCheckBtnClicked(prevState => !prevState)
        if(isCheckBtnClicked){ // when user click play again
            setNumberOfCorrect(0)
            setIsPlayAgain(prevState=> !prevState) // again  fetch data
           
        }
    }

    function handleClickStart(){ // set conditional rendering
        setClickStart(false)
    }

    React.useEffect(() => { // fetch data
        fetch('https://opentdb.com/api.php?amount=4&category=27&difficulty=medium&type=multiple')
        .then(res => res.json())
        .then(data =>{ setAllQuestions(data.results)
            console.log(data.results)
        })
    },[isPlayAgain])
    
    
    const questions = allQuestions.map((item)=> { // pass the props to Quiz child component
        return <Quiz isPlayAgain={isPlayAgain} isCheckBtnClicked={isCheckBtnClicked} handleAnswer={(e) => handleAnswer(e)} {...item}   / >
    })
    
    const styles={ // conditional styling
        transform : isCheckBtnClicked ? `translate(${365}px,${485}px)` :''
    }

    return(
        <div className="container">
        {numberOfCorrect===4 &&  isCheckBtnClicked && <Confetti width={600} height={570}/>}
        {clickStart &&  <Start  handleClickStart = {handleClickStart} />}
        {!clickStart && questions}


        {clickStart && <img alt="" className='rightImg' src={RightTopImg}></img>} {/*top-right and buttom-left images*/}
        {clickStart && <img alt="" className='leftImg' src={leftBottomImg}></img>}
        {!clickStart && <img  alt="" className='rightImg' src={mainRightTop}></img>}
        {!clickStart && <img alt="" className='leftImg' src={mainLeftBottom}></img>}
        
        {!clickStart && <button
         onClick={handleCheckAgainBtn} 
         className="check-again-button"
         style={styles}
        >{isCheckBtnClicked ? 'Play  Again':'Check Answers'}</button>}

        <p className="score-text">{isCheckBtnClicked ? `You scored ${numberOfCorrect}/4 correct answers !`: ''} </p>
        </div>
    )
}                      
