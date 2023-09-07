import React from 'react'
import { cn } from '../lib/utils'
import { ImageIcon, LayoutDashboard } from 'lucide-react'

const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/',
    color: 'text-sky-500',
  },
  {
    label: "Traitement d'image",
    icon: ImageIcon,
    color: 'text-pink-700',
    href: '/image',
  },
]

const Sidebar = () => {
  const pathname = window.location.pathname

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <a href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative h-8 w-8 mr-4">
            <img src="/myaichat.png" alt="logo" width={100} height={100} />
          </div>
          <h1 className="text-2xl font-bold">Myaitoolslab</h1>
        </a>
        <div className="space-y-1">
          {routes.map((route) => (
            <a
              key={route.href}
              href={route.href}
              className={cn(
                'text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition',
                pathname === route.href ? 'text-white bg-white/10' : 'text-zinc-400'
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn('h-5 w-5 mr-3', route.color)} />
                {route.label}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
