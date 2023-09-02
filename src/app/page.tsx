'use client'
import Image from 'next/image'
import { ArrowRight, MoonStar, Sun } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [value, setValue] = useState<string | null>(null)
  const [theme, setTheme] = useState<'' | 'dark'>('dark')

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
      <div className="flex flex-col py-8 px-16 gap-40 bg-slate-300 dark:bg-blueberry min-h-screen">
        <header className="flex items-center justify-between">
          <div></div>

          <button type="button" onClick={handleThemeSwitch}>
            {theme === 'dark' ? (
              <MoonStar className="text-snow h-6 w-6" />
            ) : (
              <Sun className="text-blueberry h-6 w-6" />
            )}
          </button>
        </header>

        <section className="flex flex-col mx-auto max-w-sm text-slate-900  dark:text-foam items-center gap-8 justify-center">
          <Image
            src="https://github.com/github.png"
            alt=""
            width={100}
            height={100}
            className="rounded-full"
          />

          <span className="font-semibold text-lg">
            Qual o seu usuário do Github?
          </span>

          <input
            type="text"
            id="user"
            value={value || ''}
            onChange={(e) => setValue(e.target.value)}
            className="w-full rounded-md bg-slate-100 dark:bg-lemon-8 py-3 px-4 border border-guava/20 outline-none focus-within:ring-2 focus-within:ring-blueberry dark:focus-within:ring-lemon-500"
          />

          <Link
            href={{
              pathname: '/generator',
              query: {
                username: value,
                theme,
              },
            }}
            className="w-full cursor-pointer"
          >
            <button
              type="button"
              disabled={!value}
              className="cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-400 flex items-center gap-3 bg-blueberry hover:bg-lemon-8 text-slate-200 dark:bg-lemon-700 dark:hover:bg-lemon-600 dark:disabled:bg-lemon-900 w-full justify-center py-2 px-4 rounded-lg"
            >
              Acessar
              <ArrowRight />
            </button>
          </Link>
        </section>
      </div>
    </div>
  )
}
