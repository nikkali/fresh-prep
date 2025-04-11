"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Maggie's Meal Prep</title>
        <meta name="description" content="Fresh, healthy meal prep service" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Maggie's Meal Prep
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Fresh, healthy meals prepared with love
          </p>
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
              alt="Healthy Meal"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home