'use client'

import Image from 'next/image'
import { MoonStar, Trash, Wand2 } from 'lucide-react'
import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs'

import 'prismjs/components/prism-sql'
import 'prismjs/themes/prism-okaidia.css'

import logo from '../../assets/logo.svg'
import { useState } from 'react'
import { useCompletion } from 'ai/react'
import { useSearchParams } from 'next/navigation'

export default function Home() {
  const [schema, setSchema] = useState<string>('')
  const [isAnswerEmpty, setIsAnswerEmpty] = useState<boolean>(false)

  const searchParams = useSearchParams()
  const username = Array.from(searchParams.values())

  const { completion, handleSubmit, input, handleInputChange, setInput } =
    useCompletion({
      api: '/api/generate-sql',
      body: {
        schema,
      },
    })

  const answer = completion

  const handleClearFields = () => {
    setSchema('')
    setInput('')
    setIsAnswerEmpty(true)
  }

  return (
    <div className="flex flex-col py-8 px-16 gap-14">
      <header className="flex items-center justify-between">
        <Image
          src={`https://github.com/${username[0]}.png`}
          alt=""
          width={40}
          height={40}
          className="rounded-full"
        />

        <Image src={logo} alt="" />

        <div className="flex items-center gap-6">
          <button type="button">
            <MoonStar className="text-snow h-6 w-6" />
          </button>

          <button type="button" onClick={handleClearFields}>
            <Trash className="text-snow h-6 w-6" />
          </button>
        </div>
      </header>

      <div className="flex flex-col max-w-2xl mx-auto w-full gap-12">
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col w-full text-foam gap-4"
        >
          <div className="flex flex-col gap-4">
            <label htmlFor="schema" className="font-light text-lg">
              Cole seu código SQL aqui
            </label>

            <Editor
              textareaId="schema"
              value={schema}
              onValueChange={(code) => setSchema(code)}
              highlight={(code) => highlight(code, languages.sql, 'sql')}
              padding={16}
              tabSize={2}
              className="resize-none font-mono h-40 overflow-scroll bg-lemon-8 rounded-md border border-guava/20 outline-none focus-within:ring-2 focus-within:ring-lemon-500"
            />
          </div>

          <div className="flex flex-col gap-4">
            <label htmlFor="question" className="font-light text-lg">
              Faça uma pergunta sobre o código
            </label>
            <textarea
              name="question"
              id="question"
              value={input}
              onChange={handleInputChange}
              className="resize-none px-4 py-3 bg-lemon-8 rounded-md border border-guava/20 outline-none focus:ring-2 focus:ring-lemon-500"
            ></textarea>

            <button
              type="submit"
              className="text-pistachio gap-3 flex items-center justify-center rounded-xl border border-pistachio py-3 px-3"
            >
              <Wand2 className="h-5 w-5" />
              Perguntar à inteligência artificial
            </button>
          </div>
        </form>

        <div className="w-full text-foam flex flex-col gap-4">
          <span className="font-light text-lg">Resposta</span>

          <Editor
            textareaId="schema"
            value={isAnswerEmpty ? '' : answer}
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            onValueChange={() => {}}
            highlight={(code) => highlight(code, languages.sql, 'sql')}
            padding={16}
            tabSize={2}
            readOnly
            className="resize-none font-mono h-40 bg-transparent rounded-md border border-guava/20 outline-none"
          />
        </div>
      </div>
    </div>
  )
}
