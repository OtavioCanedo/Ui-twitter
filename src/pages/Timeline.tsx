import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Timeline.css'

export function Timeline() {
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState([
    'O projeto foi feito para simular a interface do Twitter, utilizando React, Typescript, ViteJS, React-Router-DOM, CSS3 e Phosphor-React',
    'Após realizar o quis da Rocketseat, eles liberaram essa Masterclass para especializar no React.',
    'Na Masterclass aprendi alguns conceitos do React como Compilers & Bundlers, Typescript, Contexto, Rotas Encadeadas e fluxo de renderização'
  ])

  function createNewTweet(e: FormEvent) {
    e.preventDefault()

    setTweets([newTweet, ...tweets])
    setNewTweet('')
  }

  function handleHotKeySubmit(e: KeyboardEvent) {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      setTweets([newTweet, ...tweets])
      setNewTweet('')
    }
  }
  
  return (
    <main className="timeline">
      <Header title="Página Inicial" />


      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/otaviocanedo.png" alt="Otávio Canedo" />
          <textarea 
            id="tweet" 
            placeholder="O que está acontecendo?"
            value={newTweet}
            onKeyDown={handleHotKeySubmit}
            onChange={(e) => {
              setNewTweet(e.target.value)
            }}
          />
        </label>

        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {tweets.map(tweet => {
        return <Tweet key={tweet} content={tweet} />
      })}

    </main>
  )
}