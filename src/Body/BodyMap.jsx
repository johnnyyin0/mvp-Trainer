import FrontBody from "./FrontBody"
import BackBody from "./BackBody"

function BodyMap({data}) {
    return(
        <div style={{display: 'flex', justifyContent: 'center', gap:'25px', padding:'25px', marginTop:'60px'}}>
            <FrontBody data={data}/>
            <BackBody data={data}/>
        </div>
    )
}

export default BodyMap