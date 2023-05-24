import { throws } from 'assert';
import React from 'react'
import { json } from 'stream/consumers';

export default function BaordPage({
    params,
    searchParams,
  }: {
    params: { baordId: string };
    searchParams: { [key: string]: string | string[] | undefined };
  }) {
 
    

  return (
    <div>
          
           
          
         <p>  {params.baordId}</p>
         {JSON.stringify(searchParams)}
    </div>
  )
}
