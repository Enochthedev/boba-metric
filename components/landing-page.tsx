"'use client'"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Smartphone, Check, ArrowUpRight, Instagram, Facebook, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function LandingPageComponent() {
  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center justify-between px-4 py-4 bg-white shadow-sm">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-green-600 rounded-md flex items-center justify-center">
            <span className="text-white font-bold">B</span>
          </div>
          <span className="text-xl font-semibold text-black">Boba Metric</span>
        </div>
        <nav className="hidden lg:flex space-x-6">
          <Link href="#" className="text-black hover:text-green-600 flex items-center">
            Open Dashboard <ArrowUpRight className="ml-1 h-4 w-4" />
          </Link>
          <Link href="#" className="text-black hover:text-green-600">Features</Link>
          <Link href="#" className="text-black hover:text-green-600">How it Works</Link>
          <Link href="#" className="text-black hover:text-green-600">Reviews</Link>
          <Link href="#" className="text-black hover:text-green-600">API</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button className="hidden lg:inline-flex bg-green-600 hover:bg-green-700 text-white">
            Connect Wallet
          </Button>
          <Button variant="ghost" className="lg:hidden">
            <Smartphone className="h-6 w-6" />
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
          Real-Time Analytics and Monitoring <br />for the Boba Network
          </h1>
          <p className="text-xl text-gray-600 mb-8">
          Unlock comprehensive insights into the Boba Network with Boba Metric.<br />The ultimate platform for real-time blockchain analytics, network monitoring, and user-friendly data visualization
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-3">
            Connect Wallet
          </Button>
        </section>

        <section className="mb-16">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Boba Metric Dashboard"
            width={1200}
            height={600}
            className="w-full rounded-lg shadow-2xl"
          />
        </section>

        <section className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-4">
          <FeatureItem text="Limited access to growth statistics charts" />
          <FeatureItem text="24/7 support through online chat" />
          <FeatureItem text="Data encrypted reports and forecasts" highlighted />
          <FeatureItem text="Customizable price and market alerts" highlighted />
          <FeatureItem text="Access to exclusive webinars" />
          <FeatureItem text="Full API integration" />
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-black">What Customer Says</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Alex Grinchevsky"
              role="CEO at Boba metrics"
              date="17.05.2024"
              text="Boba metrics has transformed my trading with its real-time alerts and comprehensive analytics. The intuitive interface makes quick decisions a breeze. Highly recommended!"
            />
            <TestimonialCard
              name="Ivan Kovalenko"
              role="Product Manager"
              date="16.05.2024"
              text="Boba metrics's user-friendly interface and powerful analytics tools have revolutionized our asset management. A must-have for serious traders!"
            />
            <TestimonialCard
              name="Alisa Petrova"
              role="Financial Operations Manager"
              date="21.04.2024"
              text="The growth tracker is excellent for monitoring our investments. With Boba metrics's detailed graphs and real-time updates, trading more informed profitable. Boba metrics essential my trading!"
            />
          </div>
        </section>

        <section className="mb-16 bg-gray-900 text-white rounded-lg overflow-hidden">
          <div className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Unlock Your Potential:</h2>
            <h3 className="text-2xl mb-4">Try Our Free Version Today!</h3>
            <p className="mb-6">Experience Boba metrics&apos;s core features with our free version and start enhancing your trading strategies today.</p>
            <Button className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-3">
              Try for Free
            </Button>
          </div>
          <Image
            src="/placeholder.svg?height=300&width=1200"
            alt="Boba Metric Dashboard Preview"
            width={1200}
            height={300}
            className="w-full"
          />
        </section>

       
      </main>

      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Stay connected with us on social media!</h3>
            <p className="text-gray-600 mb-4">Stay Connected! Join us on Social Media for Updates, Promotions, and Exclusive Content!</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-green-600">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-green-600">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-green-600">
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Exclusive Offers Await: Subscribe Now!</h3>
            <p className="text-gray-600 mb-4">Be the first to know about our latest deals, discounts, and special promotions by subscribing to our newsletter!</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter email"
                className="flex-grow px-4 py-2 rounded-l-md border-t border-b border-l border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <Button className="bg-green-600 hover:bg-green-700 text-white rounded-r-md">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  )
}
interface FeatureItemProps {
  text: string;
  highlighted?: boolean;
}

function FeatureItem({ text, highlighted = false }: FeatureItemProps) {
  return (
    <div className={`flex items-center space-x-2 p-4 rounded-lg ${highlighted ? "'bg-green-600 text-white'" : "'bg-gray-100'"}`}>
      <Check className="h-5 w-5 flex-shrink-0" />
      <span>{text}</span>
    </div>
  )
}

interface TestimonialCardProps {
  name: string;
  role: string;
  date: string;
  text: string;
}

function TestimonialCard({ name, role, date, text }: TestimonialCardProps) {
  return (
    <Card className="p-6 border-gray-200">
      <p className="text-gray-600 mb-4">{text}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
      <p className="text-sm text-gray-500 mt-2">{date}</p>
    </Card>
  )
}