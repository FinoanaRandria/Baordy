import React, { PropsWithChildren } from 'react'
import { prisma } from '~/src/db/prisma';
import { notFound } from 'next/navigation';


export default async function layoutBaord(

    {
        params,
        children
      }: PropsWithChildren<{
        params: { boardId: string };
        
      }>

)

{
  const boardId = Number(params.boardId)

  if (isNaN(boardId)) {
    return notFound()
  }

  const board = await prisma.board.findUniqueOrThrow({
    where: {
      id: boardId
    }
  })



  return (
    <div  className='flex flex-col gap-6'> layoutBaord

        <h2 > Baords {params.boardId}</h2> 
             
             <h1 className='text-4xl font-bold'>
        {
          board?.title
        }
      </h1>

      {children}
    </div>
  )
}
