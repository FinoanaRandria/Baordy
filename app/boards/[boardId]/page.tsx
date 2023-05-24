
import { notFound } from 'next/navigation';
import React from 'react'

import { prisma } from '~/src/db/prisma';
export default async function BoardPage({
  params,
 
}: {
  params: { boardId: string };

}) {

  const boardId = Number(params.boardId)

  if (isNaN(boardId)) {
    return notFound()
  }

  const board = await prisma.board.findUnique({
    where: {
      id: boardId
    }
  })
 
  return (
    <div>




      <h1>
        {
          board?.title
        }
      </h1>
    </div>
  )
}
