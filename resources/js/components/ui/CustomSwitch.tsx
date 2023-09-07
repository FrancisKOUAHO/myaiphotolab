import React from 'react'

import { useState } from 'react'
import { Switch } from '@headlessui/react'

const CustomSwitch = ({ checked, onChange, label }) => {
  const [enabled, setEnabled] = useState(checked)

  const handleChange = () => {
    setEnabled(!enabled)
    onChange(!enabled)
  }

  return (
    <div className="py-4">
      <Switch
        checked={enabled}
        onChange={handleChange}
        className={`${
          enabled ? `bg-green-700` : `bg-white`
        } relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">{label}</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  )
}

export default CustomSwitch
