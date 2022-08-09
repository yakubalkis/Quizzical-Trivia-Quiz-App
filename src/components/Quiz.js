import React, { useState } from "react";

export default function Quiz(props){

const [valueOfClick, setvalueOfClick] = useState("")
const[isTrue,  setIsTrue] = React.useState(false)
const[indexes,setIndexes] = React.useState('')


const isInclude = props.incorrect_answers.includes(props.correct_answer) //put all answers in incorrect answers array
if(isInclude===false){
    props.incorrect_answers.push(props.correct_answer)
}


React.useEffect(function(){ // make an array random ordered numbers from 0 to 3 for mixed ordered options
let options=[0,1,2,3]
 let randomIndexes = options
.map(value => ({ value, sort: Math.random() }))
.sort((a, b) => a.sort - b.sort)
.map(({ value }) => value)

setIndexes(randomIndexes)
},[props.isPlayAgain])



function getResponse(answerOfUser, correct, value) { // set the isTrue state, and return the test list to handleAnswer function which is in the parent component(App)
    setvalueOfClick(value)
    if(answerOfUser === correct){
        setIsTrue(true)
    }
    else{
        setIsTrue(false)
    }
    const test = [ answerOfUser,correct]
    return props.handleAnswer(test)
   }
   
React.useEffect(() => {  //  when user click 'play again'
    if(!props.isCheckBtnClicked){ 
        setvalueOfClick('')
    }
},[props.isCheckBtnClicked])
   


    return (
        <div className="question">
            <h2>{props.question}</h2>

            <div className="options">
                <button 
                style={{
                backgroundColor: props.isCheckBtnClicked===true ? props.incorrect_answers[indexes[0]]===props.correct_answer ? valueOfClick==='A' ? '#94D7A2' : '#94D7A2' : valueOfClick==='A' ? '#F8BCBC' : "#F5F7FB" : valueOfClick === "A" ? "#0B2434" : "#F5F7FB",
                color: props.isCheckBtnClicked===true ? valueOfClick==='A' ? isTrue ? '#293264' : '#293264' : '#293264': valueOfClick === 'A' ? '#F5F7FB':'#4D5B9E',
                opacity:props.isCheckBtnClicked===true ? props.incorrect_answers[indexes[0]]===props.correct_answer ? valueOfClick==='A' ? 1 : 1: valueOfClick==='A' ? 1 : 0.7 : 1
                }} 
                       
                        onClick={()=>{getResponse(props.incorrect_answers[indexes[0]], props.correct_answer, "A")}} 
                        disabled={props.isCheckBtnClicked===true}
                        >{props.incorrect_answers[indexes[0]]}</button>

                <button 
                style={{
                backgroundColor: props.isCheckBtnClicked===true ? props.incorrect_answers[indexes[1]]===props.correct_answer ? valueOfClick==='B' ? '#94D7A2' : '#94D7A2' : valueOfClick==='B' ? '#F8BCBC' : "#F5F7FB" : valueOfClick === "B" ? "#0B2434" : "#F5F7FB",
                 color: props.isCheckBtnClicked===true ? valueOfClick==='B' ? isTrue ? '#293264' : '#293264' : '#293264': valueOfClick === 'B' ? '#F5F7FB':'#4D5B9E',
                 opacity:props.isCheckBtnClicked===true ?props.incorrect_answers[indexes[1]]===props.correct_answer ? valueOfClick==='B' ? 1 : 1: valueOfClick==='B' ? 1 : 0.7 : 1
                }} 
                       
                        onClick={()=>{getResponse(props.incorrect_answers[indexes[1]], props.correct_answer, "B")}}
                        disabled={props.isCheckBtnClicked===true}
                        >{props.incorrect_answers[indexes[1]]}</button>

                <button 
                style={{
                backgroundColor: props.isCheckBtnClicked===true ? props.incorrect_answers[indexes[2]]===props.correct_answer ? valueOfClick==='C' ? '#94D7A2' : '#94D7A2' : valueOfClick==='C' ? '#F8BCBC' : "#F5F7FB" : valueOfClick === "C" ? "#0B2434" : "#F5F7FB",
                color: props.isCheckBtnClicked===true ? valueOfClick==='C' ? isTrue ? '#293264' : '#293264' : '#293264': valueOfClick === 'C' ? '#F5F7FB':'#4D5B9E',
                opacity:props.isCheckBtnClicked===true ? props.incorrect_answers[indexes[2]]===props.correct_answer ? valueOfClick==='C' ? 1 : 1: valueOfClick==='C' ? 1 : 0.7 : 1
                }} 
                        
                        onClick={() => {getResponse(props.incorrect_answers[indexes[2]],props.correct_answer,"C")}}
                        disabled={props.isCheckBtnClicked===true}
                        >{props.incorrect_answers[indexes[2]]}</button>

                <button 
                style={{
                  backgroundColor: props.isCheckBtnClicked===true ? props.incorrect_answers[indexes[3]]===props.correct_answer ? valueOfClick==='D' ? '#94D7A2' : '#94D7A2' : valueOfClick==='D' ? '#F8BCBC' : "#F5F7FB" : valueOfClick === "D" ? "#0B2434" : "#F5F7FB",
                 color: props.isCheckBtnClicked===true ? valueOfClick==='D' ? isTrue ? '#293264' : '#293264' : '#293264': valueOfClick === 'D' ? '#F5F7FB':'#4D5B9E',
                 opacity:props.isCheckBtnClicked===true ? props.incorrect_answers[indexes[3]]===props.correct_answer ? valueOfClick==='D' ? 1 : 1: valueOfClick==='D' ? 1 : 0.7 : 1
                }} 
                        
                        onClick={() => {getResponse(props.incorrect_answers[indexes[3]],props.correct_answer,"D")}}
                        disabled={props.isCheckBtnClicked===true}
                        >{props.incorrect_answers[indexes[3]]}</button>
            </div>
            <div className="divide-line"></div>
        </div>
    )
}