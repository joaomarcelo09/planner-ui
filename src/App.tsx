import { MapPin, Calendar, ArrowRight } from 'lucide-react'
export default function App() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem</p>
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape">
          <div className="flex items-center gap-2 flex-1">
            <MapPin className="size-5 text-zinc-400"/>
            <input type="text" placeholder='Para onde você vai?' className="bg-transparent text-lg placeholder-zinc-400" />
          
          </div>
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400"/>
          <input type="text" placeholder='Quando?' className="bg-transparent text-lg placeholder-zinc-400 w-52" />
        </div>

        <div className="w-px h-6 bg-zinc-800" />

        <button className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
          Continuar
          <ArrowRight className="size-5"></ArrowRight>
        </button>
        </div>
      <p className="text-sm text-zinc-500">
        Ao planejar sua viagem plann.er você automaticamente concorda <br />
        com nosso <a href="#" className="text-zinc-300 underline">termos de uso</a> e <a href="#" className="text-zinc-300 underline">políticas de privacidade.</a>
      </p>
      </div>

    </div>
  )
}