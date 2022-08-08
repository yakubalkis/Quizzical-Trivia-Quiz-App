import React, { useState } from "react";

export default function Quiz(props){
const [valueOfClick, setvalueOfClick] = useState("")
const[isTrue,  setIsTrue] = React.useState(false)
const[questions,setQuestions] = React.useState('')

props.incorrect_answers.push(props.correct_answer) //put all questions in incorrect answers array

React.useEffect(function(){ // options are displayed randomly
let options = props.incorrect_answers
.map(value => ({ value, sort: Math.random() }))
.sort((a, b) => a.sort - b.sort)
.map(({ value }) => value)
setQuestions(options)
},[])

console.log(props.correct_answer)

function getResponse(answerOfUser, correct, value) {
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
   



 // backgroundColor: props.isCheckBtnClicked===true ? valueOfClick==='A' ? isTrue ? '#94D7A2' : '#F8BCBC' : "#F5F7FB" : valueOfClick === "A" ? "#0B2434" : "#F5F7FB",
    return (
        <div className="question">
            <h2>{props.question}</h2>

            <div className="options">
                <button 
                style={{
                // backgroundColor:  valueOfClick === "A" ? "#0B2434" : "#F5F7FB" ,
                // color:  valueOfClick === 'A' ? '#F5F7FB':'#4D5B9E',
                backgroundColor: props.isCheckBtnClicked===true ? valueOfClick==='A' ? isTrue ? '#94D7A2' : '#F8BCBC' : "#F5F7FB" : valueOfClick === "A" ? "#0B2434" : "#F5F7FB",
                color: props.isCheckBtnClicked===true ? valueOfClick==='A' ? isTrue ? '#293264' : '#293264' : '#293264': valueOfClick === 'A' ? '#F5F7FB':'#4D5B9E',
                opacity:props.isCheckBtnClicked===true ? valueOfClick==='A' ? isTrue ? 1:1:0.7:1
            }} 
                       
                        onClick={()=>{getResponse(questions[0], props.correct_answer, "A")}} 
                        disabled={props.isCheckBtnClicked===true}
                        >{questions[0]}</button>

                <button style={{
                backgroundColor: props.isCheckBtnClicked===true ? valueOfClick==='B' ? isTrue ? '#94D7A2' : '#F8BCBC' : "#F5F7FB" : valueOfClick === "B" ? "#0B2434" : "#F5F7FB",
                 color: props.isCheckBtnClicked===true ? valueOfClick==='B' ? isTrue ? '#293264' : '#293264' : '#293264': valueOfClick === 'B' ? '#F5F7FB':'#4D5B9E',
                 opacity:props.isCheckBtnClicked===true ? valueOfClick==='B' ? isTrue ? 1:1:0.7:1
                }} 
                       
                        onClick={()=>{getResponse(questions[1], props.correct_answer, "B")}}
                        disabled={props.isCheckBtnClicked===true}
                        >{questions[1]}</button>

                <button style={{
                backgroundColor: props.isCheckBtnClicked===true ? valueOfClick==='C' ? isTrue ? '#94D7A2' : '#F8BCBC' : "#F5F7FB" : valueOfClick === "C" ? "#0B2434" : "#F5F7FB",
                color: props.isCheckBtnClicked===true ? valueOfClick==='C' ? isTrue ? '#293264' : '#293264' : '#293264': valueOfClick === 'C' ? '#F5F7FB':'#4D5B9E',
                opacity:props.isCheckBtnClicked===true ? valueOfClick==='C' ? isTrue ? 1:1:0.7:1
            }} 
                        
                        onClick={() => {getResponse(questions[2],props.correct_answer,"C")}}
                        disabled={props.isCheckBtnClicked===true}
                        >{questions[2]}</button>

                <button style={{
                 backgroundColor: props.isCheckBtnClicked===true ? valueOfClick==='D' ? isTrue ? '#94D7A2' : '#F8BCBC' : "#F5F7FB" : valueOfClick === "D" ? "#0B2434" : "#F5F7FB",
                 color: props.isCheckBtnClicked===true ? valueOfClick==='D' ? isTrue ? '#293264' : '#293264' : '#293264': valueOfClick === 'D' ? '#F5F7FB':'#4D5B9E',
                 opacity:props.isCheckBtnClicked===true ? valueOfClick==='D' ?isTrue ? 1:1:0.7:1
            }} 
                        
                        onClick={() => {getResponse(questions[3],props.correct_answer,"D")}}
                        disabled={props.isCheckBtnClicked===true}
                        >{questions[3]}</button>
            </div>
            <div className="divide-line"></div>
        </div>
    )
}