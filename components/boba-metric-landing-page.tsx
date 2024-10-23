"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Diamond, Bitcoin, Coins } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const Icons = {
  crystal: Diamond,
  bitcoin: Bitcoin,
  cardano: Coins,
}

// Sample data for the crypto trend graph
const cryptoData = [
  { name: "Jan", price: 3000 },
  { name: "Feb", price: 3500 },
  { name: "Mar", price: 3300 },
  { name: "Apr", price: 3700 },
  { name: "May", price: 4000 },
  { name: "Jun", price: 4200 },
]

export function BobaMetricLandingPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="flex items-center justify-between px-4 py-4 bg-white shadow-sm">
        <div className="flex items-center space-x-2">
          <Icons.crystal className="h-6 w-6 md:h-8 md:w-8 text-gray-800" />
          <span className="text-lg md:text-xl font-semibold">Boba Metrics</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link className="text-gray-600 hover:text-gray-900" href="#">
            Boba Watch
          </Link>
          <Link className="text-gray-600 hover:text-gray-900" href="#">
            Marketplace
          </Link>
          <Link className="text-gray-600 hover:text-gray-900" href="#">
            Open Dashboard ↗
          </Link>
        </nav>
        <Button variant="default" size="sm" className="md:hidden">Menu</Button>
        <Button variant="default" className="hidden md:inline-flex">Connect Wallet</Button>
      </header>
      <main className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="text-center mb-8">
          <div className="flex justify-center space-x-4 mb-6">
            <Icons.cardano className="h-6 w-6 md:h-8 md:w-8 text-blue-700" />
            <Icons.bitcoin className="h-6 w-6 md:h-8 md:w-8 text-yellow-500" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Hunt for Digital Gold,
            <br className="hidden md:inline" />
            Cultivate Your Cryptocurrency
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Enthusiasts and investors looking to maximize their earnings through strategic airdrops
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <Button variant="default" size="lg" className="bg-green-600 hover:bg-green-700">
              Crypto Crystal Program
            </Button>
            <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50">
              Open Dashboard
            </Button>
          </div>
        </div>
        <Card className="w-full max-w-4xl mx-auto bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-800">Bitcoin Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={cryptoData}>
                <CartesianGrid strokeDasharray="3" stroke="#e0e0e0" />
                <XAxis dataKey="name" stroke="#718096" />
                <YAxis stroke="#718096" />
                <Tooltip />
                <Line type="monotone" dataKey="price" stroke="#10B981" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}