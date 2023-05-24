import { prisma } from "~/src/db/prisma";
import { BoardCard } from "~/src/components/board/BoardCard";
import { Button } from "~/src/components/form/Bouton";
import BoardForm from '../app/boards/new/BoardForm'
export default async function  Home() {
  
  const baords = await prisma.board.findMany()
 
    
  return <div className="flex flex-col gap-4">
             <h1 className="text-5xl font-bold">Baordlist</h1>
                {/*   <Button as="a" href="/baords/new" className="self-end">
                         Create board  
                  </Button> */}
  
         <BoardForm/>

        <ul className="flex flex-col gap-2">
            {baords.map((board)=>(
                 <BoardCard key={board.id} board={board}/>
            ))}
        </ul>
  </div>;
}
