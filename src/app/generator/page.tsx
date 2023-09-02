'use client'

import Image from 'next/image'
import { MoonStar, Sun, Trash, Wand2 } from 'lucide-react'

import logo from '../../assets/logo.svg'
import logoLight from '../../assets/logo-light.svg'
import { useEffect, useState } from 'react'
import { useCompletion } from 'ai/react'
import { useSearchParams } from 'next/navigation'

import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-sql'
import 'ace-builds/src-noconflict/theme-gob'
import 'ace-builds/src-noconflict/ext-language_tools'

export default function Home() {
  const [schema, setSchema] = useState<string>('')
  const [isAnswerEmpty, setIsAnswerEmpty] = useState<boolean>(false)
  const [theme, setTheme] = useState<string>('dark')

  const searchParams = useSearchParams()
  const params = Array.from(searchParams.values())

  useEffect(() => {
    setTheme(params[1])
  }, [])

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

  const handleThemeSwitch = () => {
    if (theme === '') {
      setTheme('dark')
    }

    if (theme === 'dark') {
      setTheme('')
    }
  }

  return (
    <div className={theme}>
      <div className="flex flex-col py-8 max-md:px-6 px-16 gap-14 bg-slate-300 dark:bg-blueberry min-h-screen">
        <header className="flex items-center justify-between ">
          <Image
            src={`https://github.com/${params[0]}.png`}
            alt=""
            width={40}
            height={40}
            className="rounded-full"
          />

          <Image
            src={theme === 'dark' ? logo : logoLight}
            alt=""
            quality={100}
          />

          <div className="flex items-center gap-6">
            <button type="button" onClick={handleThemeSwitch}>
              {theme === 'dark' ? (
                <MoonStar className="text-snow h-6 w-6" />
              ) : (
                <Sun className="text-blueberry h-6 w-6" />
              )}
            </button>

            <button type="button" onClick={handleClearFields}>
              <Trash className="dark:text-snow text-blueberry h-6 w-6" />
            </button>
          </div>
        </header>
        <div className="flex flex-col max-w-2xl mx-auto w-full gap-12">
          <form
            action=""
            onSubmit={handleSubmit}
            className="flex flex-col w-full dark:text-foam text-blueberry gap-4"
          >
            <div className="flex flex-col gap-4">
              <label htmlFor="schema" className="dark:font-light text-lg">
                Cole seu código SQL aqui
              </label>

              <AceEditor
                height="160px"
                width="100%"
                value={schema}
                onChange={(code) => setSchema(code)}
                mode="sql"
                theme="gob"
                fontSize="16px"
                highlightActiveLine={false}
                setOptions={{
                  enableLiveAutocompletion: false,
                  showLineNumbers: false,
                  tabSize: 2,
                  fontSize: 16,
                  wrap: true,
                }}
                onLoad={function (editor) {
                  editor.renderer.setPadding(16)
                  editor.renderer.setScrollMargin(16, 16, 16, 16)
                }}
                showGutter={false}
                showPrintMargin={false}
                className="resize-none font-mono p-4 text-foam bg-lemon-8 rounded-md border border-guava/20 outline-none focus-within:ring-2 focus-within:ring-lemon-500"
              />
            </div>

            <div className="flex flex-col gap-4">
              <label htmlFor="question" className="dark:font-light text-lg">
                Faça uma pergunta sobre o código
              </label>
              <textarea
                name="question"
                id="question"
                value={input}
                onChange={handleInputChange}
                className="resize-none px-4 py-3 text-foam bg-lemon-8 rounded-md border border-guava/20 outline-none focus:ring-2 focus:ring-lemon-500"
              ></textarea>

              <button
                type="submit"
                className="dark:text-pistachio dark:hover:text-blueberry dark:hover:font-semibold dark:hover:bg-pistachio text-blueberry gap-3 flex items-center justify-center rounded-xl border border-blueberry dark:border-pistachio py-3 px-3"
              >
                <Wand2 className="h-5 w-5" />
                Perguntar à inteligência artificial
              </button>
            </div>
          </form>

          <div className="w-full dark:text-foam text-blueberry flex flex-col gap-4">
            <span className="dark:font-light text-lg">Resposta</span>

            <AceEditor
              readOnly={true}
              height="160px"
              width="100%"
              value={isAnswerEmpty ? '' : answer}
              mode="sql"
              theme="gob"
              fontSize="16px"
              highlightActiveLine={false}
              setOptions={{
                enableLiveAutocompletion: false,
                showLineNumbers: false,
                tabSize: 2,
                fontSize: 16,
                wrap: true,
              }}
              onLoad={function (editor) {
                editor.renderer.setPadding(16)
                editor.renderer.setScrollMargin(16, 16, 16, 16)
              }}
              showGutter={false}
              showPrintMargin={false}
              className="resize-none font-mono h-40 bg-lemon-8 text-foam dark:bg-transparent rounded-md border dark:border-guava/20 border-blueberry outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
