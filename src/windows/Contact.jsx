import React from 'react'
import WindowWrapper from '#hoc/WindowWrapper'
import WindowControls from '#components/WindowControls'
import { socials } from '#constants'

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact</h2>
      </div>

      <div className="p-5 space-y-5">
          <img src="/images/me.jpg" alt="avatar" className=" w-20 rounded-full" />
        

        <div className="flex-1">
          <h3 className="text-lg font-semibold">Let's connect</h3>
          <p className="text-sm text-gray-600 mt-2 mb-4">I'd love to hear from you — reach out through any of the platforms below.</p>

          <div className="grid grid-cols-2 gap-3">
            {socials.map(({ id, text, icon, bg, link }) => (
              <a
                key={id}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100"
              >
                <div style={{ background: bg }} className="w-10 h-10 rounded-full flex items-center justify-center">
                  <img src={icon} alt={text} className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-medium">{text}</div>
                  <div className="text-xs text-gray-500">Connect</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

const ContactWindow = WindowWrapper(Contact, 'contact')

export default ContactWindow
