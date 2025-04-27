'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { useToast } from "@/hooks/use-toast"
import { ArrowRight, Sparkles, Zap, Globe, Code, Rocket } from 'lucide-react'

export default function Home() {
  const { toast } = useToast()

  const showToast = () => {
    toast({
      title: "Awesome!",
      description: "You've discovered our interactive features!",
    })
  }

  return (
    <div className="min-h-full">
      {/* Hero Section with Gradient Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="container mx-auto px-4 pt-32 pb-24 relative z-10">
          <div className="max-w-[800px] mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/10 backdrop-blur-sm mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              <span>Welcome to the future</span>
            </div>
            <h1 className="text-5xl font-bold tracking-tight lg:text-7xl mb-6 drop-shadow-sm">
              Next-Level Digital Experience
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-[600px] mx-auto">
              Elevate your digital presence with our cutting-edge platform. Built for creators, developers, and visionaries.
            </p>
            <div className="mt-12 flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="px-8 bg-white text-indigo-700 hover:bg-white/90">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 border-white text-white hover:bg-white/10" onClick={showToast}>
                See Demo
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Features Section with Icons */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
            Everything you need to create amazing digital experiences
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
            <CardContent className="pt-6 pb-2">
              <div className="rounded-full bg-indigo-100 dark:bg-indigo-900/30 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
              <p className="text-muted-foreground leading-relaxed">
                Optimized performance that loads in milliseconds, keeping your users engaged and satisfied.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="p-0 h-auto text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
            <CardContent className="pt-6 pb-2">
              <div className="rounded-full bg-purple-100 dark:bg-purple-900/30 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Reach</h3>
              <p className="text-muted-foreground leading-relaxed">
                Connect with audiences worldwide through our distributed network and localization features.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="p-0 h-auto text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
            <CardContent className="pt-6 pb-2">
              <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Developer Friendly</h3>
              <p className="text-muted-foreground leading-relaxed">
                Built with modern technologies and clean APIs that make development a breeze.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="p-0 h-auto text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Call to Action with Background */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-30 mix-blend-soft-light"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-[800px] mx-auto text-center text-white">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/10 backdrop-blur-sm mb-6">
              <Rocket className="h-4 w-4 mr-2" />
              <span>Ready to launch?</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight mb-6">
              Start Your Journey Today
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-[600px] mx-auto">
              Join thousands of innovators already building the future with our platform.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="px-8 bg-white text-indigo-700 hover:bg-white/90">
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" className="px-8 border-white text-white hover:bg-white/10">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

