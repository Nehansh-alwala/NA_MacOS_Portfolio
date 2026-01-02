import React from 'react'
import WindowWrapper from '#hoc/WindowWrapper'
import WindowControls from '#components/WindowControls'
import { useWindowStore } from '#store'

const Text = () => {
  const { windows } = useWindowStore()
  const data = windows.txtfile?.data

  if (!data) return null

  const { name, image, subtitle, description } = data

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>

      <div className="p-6">
        {image && (
          <div className="mb-4">
            <img src={image} alt={name} className="w-full object-contain" />
          </div>
        )}

        {subtitle && <h3 className="text-sm text-gray-600 mb-3">{subtitle}</h3>}

        {Array.isArray(description) && (
          <div className="space-y-3 text-sm text-gray-800">
            {description.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

const TextWindow = WindowWrapper(Text, 'txtfile')

export default TextWindow
