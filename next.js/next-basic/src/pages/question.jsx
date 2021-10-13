import { useEffect, useState } from "react"

export default function question() {
  const [question, setQuestion] = useState(null)
  useEffect(() => {
    fetch('http://localhost:3000/api/question/120')
    .then(resp => resp.json())
    .then(setQuestion)
  }, [])

  const renderAnswer = () => {
    if(question) {
      return question.answer.map((resp, index) => {
        return <li key={index}>{resp}</li>
      })
    }
    return false
  }

  return (
    <div>
      <h1>Question</h1>
      <div>
        <span>{question?.id} - {question?.statement}</span>
        <ul>
          {renderAnswer()}
        </ul>
      </div>
    </div>
  )
}