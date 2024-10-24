import { Plus } from 'lucide-react'

import logo from '../assets/logo-in-orbit.svg'
import letsStart from '../assets/lets-starts-illustration.svg'
import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'

export function EmptyGoals() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="logo in orbit" />
      <img src={letsStart} alt="in orbit" />

      <p className="text-zinc-400 leading-relaxed text-center max-w-80">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
      </p>

      <DialogTrigger>
        <Button>
          <Plus className="size-4" />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  )
}
