import React, { useState } from 'react'

type Props = {
  close: (e: any) => void
  children: React.ReactNode
}

export const MobileMenu: React.FC<Props> = (props) => {
  return (
    <div onClick={props.close}>
      <div>
        {React.cloneElement(props.children as any, {
          close: props.close,
        })}
      </div>
    </div>
  )
}
