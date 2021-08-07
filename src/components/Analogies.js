import React, {useState} from 'react'


export default function Analogies() {
const [choice, setChoice] = useState(null)

return (
<>
<div>
Analogies here
</div>



<p>{choice}</p>
<div>Choose an analogy{setChoice}</div>


</>
)
}