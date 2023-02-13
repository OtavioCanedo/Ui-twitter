import { PaperPlaneTilt } from "phosphor-react"
import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css'

export function Status() {
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswers] = useState([
    'Quem tiver interesse o código está disponível no Github',
    'O projeto também está responsivo, e ao digitar algo no campo de Tweet e enviar, aparece o Tweet na tela.'
  ])

  function createNewAnswer(e: FormEvent) {
    e.preventDefault()

    setAnswers([newAnswer, ...answers])
    setNewAnswer('')
  }

  function handleHotKeySubmit(e: KeyboardEvent) {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  }

  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Foi o primeiro projeto que fiz utilizando Typescript e framework ViteJS, duas ferramentas importantes para o desenvolvimento Front-end." />

      <Separator />

      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/otaviocanedo.png" alt="Otávio Canedo" />
          <textarea 
            id="tweet" 
            placeholder="Tweete sua resposta"
            value={newAnswer}
            onKeyDown={handleHotKeySubmit}
            onChange={(e) => {
              setNewAnswer(e.target.value)
            }}
          />
        </label>

        <button type="submit">
          <PaperPlaneTilt />
          <span>Responder</span>
        </button>
      </form>

      {answers.map(answer => {
        return <Tweet key={answer} content={answer} />
      })}

    </main>
  )
}