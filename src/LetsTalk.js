import React from 'react'

function LetsTalk() {
    return (
   
        <div className="second">
        <div  className="secondblock">
            <div className="innerscrren">
                <div className="top">
                    <h2 className="overlay-name">Let's talk</h2>
                    <div className="mid">
                            <p >Share your excitement with us.
                             <br/>
                            <a style={{color:"white" , fontWeight:"500"}} href="mailto:info@yummygum.com">info@yummygum.com -</a>
                           </p>
                       </div>
            </div>
            
            

            <div className="halfbelow">
                 <h4 style={{color:"white",fontWeight:"600"}}>Let's talk about</h4>
                
                       <ul>
                                <li className="child">
                                    <label className="strip-top">
                                        <input type="radio" name="reason" value="Your great project" className="white"/>Your great project
                                    </label>
                                </li>
                                <li className="child">
                                    <label>
                                        <input type="radio" name="reason" id="meeting-coffee" value="Meeting for a coffee" className="white"/>Meeting for a coffee
                                    </label>
                                </li>
                                <li className="child">
                                    <label>
                                        <input type="radio" name="reason" id="birds-bees" value="Birds and bees" className="white"/>Birds and bees
                                    </label>
                                </li>
                                <li className="child">
                                    <label>
                                        <input checked="" type="radio" name="reason" id="video-call" value="Plan a video call" className="white"/>Plan a video call
                                    </label>
                                </li>
                            </ul>
                            <button type="button" className="next btn btn-primary btn-white" id="next-form">Next</button>
                        </div>
             </div>
        
        </div>
        </div>
        
    )
}

export default LetsTalk
