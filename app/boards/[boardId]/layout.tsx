import React, { PropsWithChildren } from 'react'

export default function layoutBaord(

    {
        params,
        children
      }: PropsWithChildren<{
        params: { baordId: string };
        
      }>

) {
  return (
    <div> layoutBaord

        <h2> Baords {params.baordId}</h2> 
             {children}
    </div>
  )
}
