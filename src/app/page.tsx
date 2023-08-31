import Image from 'next/image'
import logo from '../assets/logo.svg'
import { MoonStar, Trash, Wand2 } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col py-8 px-16 gap-14">
      <header className="flex items-center justify-between">
        <div className="w-[40px] h-[40px] bg-snow rounded-full"></div>
        <Image src={logo} alt="" />

        <div className="flex items-center gap-6">
          <button type="button">
            <MoonStar className="text-snow h-6 w-6" />
          </button>

          <button type="button">
            <Trash className="text-snow h-6 w-6" />
          </button>
        </div>
      </header>

      <div className="flex flex-col max-w-2xl mx-auto w-full gap-12">
        <form action="" className="flex flex-col w-full text-foam gap-4">
          <div className="flex flex-col gap-4">
            <label htmlFor="schema" className="font-light text-lg">
              Cole seu código SQL aqui
            </label>
            <textarea
              name="schema"
              id="schema"
              className="resize-none px-4 py-3 bg-lemon-8 rounded-md border border-guava/20 outline-none focus:ring-2 focus:ring-lemon-500"
            ></textarea>
          </div>

          <div className="flex flex-col gap-4">
            <label htmlFor="question" className="font-light text-lg">
              Faça uma pergunta sobre o código
            </label>
            <textarea
              name="question"
              id="question"
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
          <textarea
            readOnly
            className="resize-none px-4 py-3 bg-transparent rounded-md border border-guava/20 outline-none"
          ></textarea>
        </div>
      </div>
    </div>
  )
}
