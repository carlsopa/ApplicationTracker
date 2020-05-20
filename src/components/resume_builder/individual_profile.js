import React,{useState} from "react";

const SingleProfile = (props) => {
    console.log(props.data)
    const [Network, setNetwork]=useState(props.data['network'])
    const [Profile,setProfile] = useState(props.data['url'])
    return(
        <div className="IndividualProfile">
                <button id="ProfileRemove">Remove</button>
                <label htmlFor="network">Network</label>
                <input id="network" type="text" value={Network} onChange={(e)=>setNetwork(e.target.value)}></input>
                <label htmlFor="link">link</label>
                <input id="link" type="url" value={Profile} onChange={(e)=>setProfile(e.target.value)}></input>
                
              </div>

    )
}
export default SingleProfile;