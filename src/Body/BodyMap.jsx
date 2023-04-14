import FrontBody from "./FrontBody"
import BackBody from "./BackBody"

function BodyMap() {
    return(
        <div style={{display: 'flex', justifyContent: 'center', gap:'25px', padding:'30px'}}>
            <FrontBody/>
            <BackBody/>
        </div>
    )
}

export default BodyMap