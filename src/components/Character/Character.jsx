import './Character.css'


const Character = ({character}) => {
  return (
  <>
    <li>
      <img src={character.image} alt={character.name} className='character_img' onClick={((ev)=>{
     ev.target.style.transform = ev.target.style.transform === "rotate(180deg)" ? "none" : "rotate(180deg)" 
     })}/>
    </li>
  </>
  )
}

export default Character