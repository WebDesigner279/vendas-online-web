import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import styled from 'styled-components'

const Card = styled.div`
  padding: 2rem;
  background-color: red;
`

const H1 = styled.h1`
  color: red;
`

const P = styled.p`
  color: #00d8ff;
`
const Button = styled.button`
  background-color: blue;
`

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <H1>Vite + React</H1>
      <Card>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <P>
          Edit <code>src/App.tsx</code> and save to test HMR
        </P
        >
      </Card>
      <P>
        Click on the Vite and React logos to learn more
      </P>
    </>
  )
}

export default App
