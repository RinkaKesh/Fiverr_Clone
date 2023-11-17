import React, { useEffect, useState } from 'react';
import './Navbar.css';
import SignIn from '../pages/signIn';
import BecomeSeller from '../pages/becomeSeller';
import { Link } from 'react-router-dom';


const Navbar = () => {
    // const [active,setActive]=useState(false);
    // const isActive=()=>{
    //     window.scrollY>0? setActive(true):setActive(false)
    // }
    // useEffect(()=>{
    //     window.addEventListener("scroll",isActive);
    //     return ()=>{
    //         window.removeEventListener("scroll",isActive)
    //     }
    // },[]);
    const[open,setOpen]=useState(false)
    const handleClick=()=>{
        setOpen(!open)

    }
    const[clicked,setClicked]=useState(false)
    const handleSignIn=()=>{
        setClicked(!clicked)
    }
    const[joinClicked,setjoinClicked]=useState(false)
    const handleJoin=()=>{
        setjoinClicked(!joinClicked)
    }
    const[explore,setExplore]=useState(false)
    const handleExplore=()=>{
        setExplore(!explore)
    }
    const[fiverrPro,setFiverrPro]=useState(false)
    const handleFiverrPro=()=>{
        setFiverrPro(!fiverrPro)
    }
  return (
    <div className='container'  >
        <div id='logo'>
            <span className='logoname'>fiverr</span>
            <span className='logodot'>.</span>
            </div>
        <div id='links'>
            <div>
             <option onClick={handleFiverrPro}>FIverr Pro</option>
             {fiverrPro && <div className='fiverrPro'>
                           <div style={{display:"flex",border:"1px solid lightgray"}}>
                               <div style={{width:"20%"}}><img width={{width:"100%"}} src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAqADgDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAAUBAwQCBv/EAC0QAAIBAwIDBwQDAQAAAAAAAAECAwAEERIxBRMhMkFRYXGBkSJiobEjQvBS/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAMBAv/EABcRAQEBAQAAAAAAAAAAAAAAAAABAhH/2gAMAwEAAhEDEQA/APZ0VTc3C20WtgzEnSqLuxOwFYGu7hnZTMVZT1S3gMmjyLbZ+KBrXHMTONa58M0nlvLjQWaZZYQdLsqFGjP3qeo9asle2jsdR6SDffNUziWdDeiksc90uEeYxtjIhjiMsij7jsKujvpYyxZueqDLoYjHKg8cHtD0/NcWcDSiuUZXRXQhlYZBHeKKwLeJyMkzupw0NrI6HwJwM+w/dUXtxNZxSwWjJDyIwYkK5abp1IJ6eu5+aY3sDSaJYlDSRgjQdnU7r+B7il6XKxxiAyW0iL2Y7xzG6eRyDnHj+6DNwy6n4hyJLy30PKzQO2nAlQox28iv5qLD+WThwf6gTqP3EKSPyM+1agZbxm5EiySFdAkjH8UKnfSf7Mf9jvvbhRWJORKFkiIMeR0BHd6d1UzZJRliuJYrOPlyJE80XPLsMmWQjJUE9ARt17sdKy8O4leXsHNu4dLwTII5QunVlgpX4P6raJxAXjPJjDEk2102gKe/S2CCM+XxtUiZriVBG0MzRnMcUBLRof8Ap38vD/CY28N+mGWMdmOZ1XyGdvbOKKutYBbQLEGLEZLMd2JOSfck0UF1Qyq3aAPqKmigKKKKCCAwwQCPOgAAYAwKmigKKKKD/9k=" alt="" />
                               </div>
                               <div style={{width:"80%"}}>
                               <h4>I want to hIre a freelancer</h4>
                                     {/* <p style={{marginTop:"100px"}}>I'd like to work with vetted freelancers while using free bud=siness tools. </p> */}
                               </div>
                            </div>
                             
                            <div style={{display:"flex",border:"1px solid lightgray"}}>
                               <div style={{width:"20%"}}><img style={{width:"100%"}} src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAA1AC0DASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAQGAgMFAf/EACsQAAIBAwIEBgIDAQAAAAAAAAECAwAEEQUhEjFBURMiMmFxoQZiFCNCkv/EABYBAQEBAAAAAAAAAAAAAAAAAAACAf/EABkRAQEBAQEBAAAAAAAAAAAAAAABEQIhMf/aAAwDAQACEQMRAD8AudKUoFa55kt4XlkOFUZOOfx81mSFBLEADck9K4eo38Vy0fkSS1jDSsWOPEwpwQO2cb9TjFB2beZbiCOZM8Mihhnng1sqNp0SwWFvGrBgsYGQcgnG9SaBWq4nS2haWQnhHQDJJ7D3qJf33hcQVgir6mrCwtpJ2S7uy228MbH0/sfc/VXecm0ZpA90vj6iAFHmWDPlUd27n6FV6R0ubk3shm/t2jAiB4R0UM+3/IPPmas13eRx8UKo00nDlkTHlXuc7AVyNH0iNLhHfzGJVfOB6znrjOBj7qcv0duyg/jWcMO2UQA45E9fut9KVgof5Pdym+ktSCiK2T+2d8/FNE12+tSLVFFwjDCI59J+e3tVr1XRbbVVBlBSVRhZF5j296iaZ+NQ6e7O0xlY7Z4eHA7c6rdvol6RAY4pXc8TyNl2P+j1NT1RVzwqBnngV6qhVCqMAdK9p1doUpSpClKUClKUClKUH//Z" alt="" /></div>
                               <div>
                                  <h4>I'm a freelancer</h4>
                               </div>
                            </div>  

                    
                        </div>}
            </div>
             
            <div>
                <option onClick={handleExplore}>Explore</option>
                {explore && <div className='explore'>
                    <div>
                        <h4>DIscover</h4>
                        <p>Inspiring projects mde on Fiverr</p>
                    </div>
                    <div>
                    <h4>CommunIty</h4>
                        <p>Connect with Fiverr's team and community</p>
                    </div>
                    <div>
                    <h4>GuIdes</h4>
                        <p>In-depth guides covering business topics</p>
                    </div>
                    <div>
                    <h4>Podcast</h4>
                        <p>Inside tips from top business minds</p>
                    </div>
                    <div>
                    <h4>Learn</h4>
                        <p>Professional online courses,led by experts</p>
                    </div>
                    <div>
                    <h4>Blog</h4>
                        <p>News,information and community stories</p>
                    </div>
                    <div>
                    <h4>Logo Maker</h4>
                        <p>Create your logo instantly</p>
                    </div>
                    <div>
                    <h4>Fiverr Workspace</h4>
                        <p>One place to manage your business</p>
                    </div>

                </div>

                }
                
        
            </div>
            <div style={{display:"flex"}}>
                <img  id="globalLogo" src="https://cdn2.vectorstock.com/i/1000x1000/84/91/world-earth-globe-icon-language-change-travel-vector-23828491.jpg" alt="logo" />
            <div id="language"onClick={handleClick}>
                English             
            </div>
            {open && <div className='languageOptions'>
                  <h3 id='h3tag'>Select your Preferences</h3>
                   <span id='lang' >Language</span>
                   <span>Deutsch</span>
                   <span>Espanol</span>
                   <span>Francais</span>
                   <span>Portugues</span>
                   <span>Italiano</span>
                   <span>Nederlands</span>
                   
                


                </div>}
            </div>
            <div><Link to="/becomeSeller">BecomeSeller</Link></div>
            <div onClick={handleSignIn}><Link to="/signin">SIgn In</Link></div>
            {
              clicked && <div className='signInDiv'>
                <div id='left' style={{backgroundColor:"rgb(120,33,54)",color:"white",width:"40%",paddingLeft:"30px"}}>
                    <h4>Success Starts here</h4>
                    <div>
                        <p>Over 600 categories</p>
                        <p>Pay per project, not per hour</p>
                        <p>Access to talent and businesses <br /> across the globe</p>
                        <img style={{width:"300px",height:"300px"}} src="data:image/jpeg;base64,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" alt="" />

                    </div>
                </div>
                <div id='right' style={{backgroundColor:"white",color:"gray",paddingRight:"30px",paddingLeft:"10px"}}>
                    <h2>Sign in to your account</h2>
                    <p>Don’t have an account? <span style={{color:"blue",textDecoration:"underline"}}>Join here</span></p>
                    <div style={{border:"1px solid gray",height:"40px",display:"flex"}} >
                        <div><img style={{width:"38px",height:"38px"}}src="data:image/png;base64,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" alt="" /></div>
                        <div><p style={{paddingLeft:"30px",fontWeight:"bold"}}>ContInue With Google</p></div>
                    </div>
                    <br />
                    <div style={{border:"1px solid gray",height:"40px",display:"flex"}}>
                        <div><img src="" alt="" /></div>
                        <div><p style={{paddingLeft:"30px",fontWeight:"bold"}}>ContInue With emaIl/username</p></div>
                    </div>
                    <br />
                    <div style={{color:"gray",textAlign:"center"}}>OR</div> <br />
                    <div style={{display:"flex",justifyContent:"space-around"}}>
                        <div style={{border:"1px solid gray",padding:"10px"}}>
                            <span style={{width:"15%"}}><img  style={{width:"14px"}}src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRUHgiADCfppWM-nHbU1aJT8zK-hIoxEW5oEoDNCVM1X1wbXvbV" alt="" /></span>
                            <span style={{height:"30px",padding:"5px"}}>Apple</span>
                        </div>
                        <div style={{border:"1px solid gray",padding:"10px"}}>
                            <span style={{width:"15%"}}><img style={{width:"14px"}} src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQs8nU53fDAMgu0FpD1UdRVu77MAhZLhRRJwqzOc5HuzF9-05O9" alt="" /></span>
                            <span style={{height:"30px",padding:"5px"}}>Facebook</span>
                        </div>
                    </div>
                    <br />
                    <br />
                    
                    


                    <p style={{fontSize:"12px"}}>By joining, you agree to the Fiverr Terms of Service and to <br /> occasionally receive emails from us. Please read our Privacy <br /> Policy to learn how we use your personal data.</p>

                </div>

              </div>
            }
            <button onClick={handleJoin}>Join</button>
            {
              joinClicked && <div className='signInDiv'>
                <div id='left' style={{backgroundColor:"rgb(120,33,54)",color:"white",width:"40%",paddingLeft:"30px"}}>
                    <h4>Success Starts here</h4>
                    <div>
                        <p>Over 600 categories</p>
                        <p>Pay per project, not per hour</p>
                        <p>Access to talent and businesses <br /> across the globe</p>
                        <img style={{width:"300px",height:"300px"}} src="data:image/jpeg;base64,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" alt="" />

                    </div>
                </div>
                <div id='right' style={{backgroundColor:"white",color:"gray",paddingRight:"30px",paddingLeft:"10px"}}>
                    <h2>Sign in to your account</h2>
                    <p>Don’t have an account? <span style={{color:"blue",textDecoration:"underline"}}>Join here</span></p>
                    <div style={{border:"1px solid gray",height:"40px",display:"flex"}} >
                        <div><img style={{width:"38px",height:"38px"}}src="data:image/png;base64,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" alt="" /></div>
                        <div><p style={{paddingLeft:"30px",fontWeight:"bold"}}>ContInue With Google</p></div>
                    </div>
                    <br />
                    <div style={{border:"1px solid gray",height:"40px",display:"flex"}}>
                        <div><img src="" alt="" /></div>
                        <div><p style={{paddingLeft:"30px",fontWeight:"bold"}}>ContInue With emaIl/username</p></div>
                    </div>
                    <br />
                    <div style={{color:"gray",textAlign:"center"}}>OR</div> <br />
                    <div style={{display:"flex",justifyContent:"space-around"}}>
                        <div style={{border:"1px solid gray",padding:"10px"}}>
                            <span style={{width:"15%"}}><img  style={{width:"14px"}}src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRUHgiADCfppWM-nHbU1aJT8zK-hIoxEW5oEoDNCVM1X1wbXvbV" alt="" /></span>
                            <span style={{height:"30px",padding:"5px"}}>Apple</span>
                        </div>
                        <div style={{border:"1px solid gray",padding:"10px"}}>
                            <span style={{width:"15%"}}><img style={{width:"14px"}} src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQs8nU53fDAMgu0FpD1UdRVu77MAhZLhRRJwqzOc5HuzF9-05O9" alt="" /></span>
                            <span style={{height:"30px",padding:"5px"}}>Facebook</span>
                        </div>
                    </div>
                    <br />
                    <br />
                    
                    


                    <p style={{fontSize:"12px"}}>By joining, you agree to the Fiverr Terms of Service and to <br /> occasionally receive emails from us. Please read our Privacy <br /> Policy to learn how we use your personal data.</p>

                </div>

              </div>
            }



        </div>
        
    </div>

  )
}

export default Navbar
