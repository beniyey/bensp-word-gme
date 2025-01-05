import React, { useState } from 'react'

export default function Card({ question }: { question: { question: string, answer: string, difficulty: string } }) {

  const [revealed, setRevealed] = useState<boolean>(false)

  function reveal() {
    setRevealed(!revealed)
  }

  return (
    <div onClick={reveal} className={'transition-all border-2 w-80 border-gray-200 rounded-md p-8 flex flex-row box-border ' + (revealed ? "bg-red-100" : "")}>
      < span className={"flex flex-row justify-between w-full gap-16 " + (!revealed ? "block" : "hidden")} >
        <p className='font-bold  text-gray-500'>
          {question.question}
        </p>
        <p
          className={`
          ${question.difficulty === "Easy" ? "text-green-500" : ""}
          ${question.difficulty === "Medium" ? "text-yellow-500" : ""}
          ${question.difficulty === "Hard" ? "text-red-500" : ""}
          `}
        >{question.difficulty}</p>
      </span>

      <span className={(revealed ? "block " : "hidden") + " m-auto font-bold text-gray-500"}>
        <p>{question.answer}</p>
      </span>
    </div>
  )
}
