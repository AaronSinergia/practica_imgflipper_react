import './App.css'
import ApiCall from '../src/api/ApiCall'

function App() {
 return (
     <>
      <h1 className='title'>CLICA EN UNA IMAGEN PARA VOLTEARLA</h1>
      <ul className='ul_characters'>       
        <ApiCall />
      </ul>
    </>
  )
}

export default App
