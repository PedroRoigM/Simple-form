import { useState } from 'react';
export default function Mensaje({msg}){   
    return (
        <div id='msg'>
            <p>{msg}</p>
        </div>
    )
}