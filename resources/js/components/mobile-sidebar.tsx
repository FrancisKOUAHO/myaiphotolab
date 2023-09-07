import React,{ useEffect, useState } from 'react'
import { Menu, Sheet } from 'lucide-react'
import Sidebar from './sidebar'
import { SheetContent, SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'

export const MobileSidebar = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}
