import Title from './Title.jsx'
import BodyMap from './BodyMap.jsx'

function Body({data}) {

  return(
    <div>
      <Title/>
      <BodyMap data={data}/>
    </div>
  )
}

export default Body
