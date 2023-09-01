'use client'
import Image from 'next/image'
import logo from '../assets/logo.svg'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [value, setValue] = useState<string | null>(null)

  return (
    <div className="flex flex-col py-8 px-16 gap-40">
      <header className="flex items-center justify-center">
        <Image src={logo} alt="" />
      </header>

      <section className="flex flex-col mx-auto max-w-sm text-foam items-center gap-8 justify-center">
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
          className="w-full rounded-md bg-lemon-8 py-3 px-4 border border-guava/20 outline-none focus-within:ring-2 focus-within:ring-lemon-500"
        />

        <Link
          href={{
            pathname: '/generator',
            query: {
              username: value,
            },
          }}
          className="w-full"
        >
          <button
            type="button"
            disabled={!value}
            className="flex items-center gap-3 bg-lemon-700 hover:bg-lemon-600 disabled:bg-lemon-900 w-full justify-center py-2 px-4 rounded-lg"
          >
            Acessar
            <ArrowRight />
          </button>
        </Link>
      </section>
    </div>
  )
}
