import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef()

  //Below Hook is for memorisation and for optimization Purpose
  const passwordGenerator = useCallback(() => {
    let pass ="";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str+= "0123456789"
    if(charAllowed) str+= "!@#$%^&*-_+=[]{}`~"

    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass)

  }, [length,numberAllowed,charAllowed,setPassword] )
 
  const copyPasswordToClipboard = useCallback(()=>{
    
    //This is only for to show the selected text
    passwordRef.current?.select()

    //this is extra to select specific portion
    // passwordRef.current?.setSelectionRange(0,3);

    //window object is not on next js becouse it is run on server
    window.navigator.clipboard.writeText(password)
  },[password])

  //Below Hook is for Run Purpose
  useEffect(()=>{
    passwordGenerator()
  }, [length,numberAllowed,charAllowed,passwordGenerator])

  return (
      <div className='w-full max-w-md mx-auto rounded-lg   px-4 py-3 my-8 shadow-md text-orange-500  bg-gray-800'>
        <h1 className='text-2xl text-white text-center my-3 mb-5'>Password generator</h1>
        <div className=' flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
           type="text" 
           value={password}
           className=' bg-white outline-none w-full py-1 px-3'
           placeholder='password'
           readOnly // so anyone cannot read here
           ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
            <div className="flex items-centergap-x-1">
              <input 
              type="range"
              min={6}
              max={100}
              value={length}
              className='curser-pointer'
              onChange={(e)=>{setlength(e.target.value)}}
              //above on change is for movement of range slider
              />
              <label>Length:{length}</label>
            </div>
            <div className="flex item-center gap-x-1">
              <input 
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={()=>{ setNumberAllowed((prev)=>!prev);
              }} />
              <label htmlFor="numberInput">Numbers</label>
            </div>

            <div className="flex item-center gap-x-1">
              <input 
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={()=>{ setCharAllowed((prev)=>!prev);
              }} />
              <label htmlFor="numberInput">character</label>
            </div>

        </div>
      </div>
  )
}

export default App
