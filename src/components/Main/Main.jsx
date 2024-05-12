import React, { useContext, useState } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
import { useAuth0 } from "@auth0/auth0-react";
import CustomButton from '../../CustomButton';
import PopUp from '../popup/PopUp';

const Main = () => {
  const [showPopup, setShowPopup]= useState(false)
  const { loginWithRedirect ,logout,isAuthenticated,user} = useAuth0();
 
  const { onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input
  } = useContext(Context);


  return (
    <div className='main'>
      <div className="nav">
        <h3 style={{
          backgroundImage: 'linear-gradient(to right, #6900cc, #fd40ed)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>ChatAI</h3>
        {isAuthenticated && <img src={user.picture}  />}
          
        {
          isAuthenticated ? (<CustomButton className ='logout-button'onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          Log Out
        </CustomButton>):(
          <CustomButton className ='login-button' onClick={() => loginWithRedirect()}>Log In</CustomButton>

          )
        }
        
        
      </div>
      <div className="main-container">
        {showResult
          ? <div className="result">
            <div className='result-title'>
              
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading
                ? <div className="loader">
                  <hr className="animated-bg" />
                  <hr className="animated-bg" />
                  <hr className="animated-bg" />
                </div>
                : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              }
            </div>

          </div>
          : <>
          
          
            <div className="greet">
              <p><span>Hello, </span></p>
              {isAuthenticated && <p>{user.name}.</p> }
              <p>How can I help you today?</p>
              </div>
              
            
            <div className="cards">
              <div className="card">
                <p>Suggest best tourist spot in India</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Briefly summarize this concept: Urban Planning</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        }



        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
            <div>
            <img onClick={() => setShowPopup(true)} src={assets.gallery_icon} width={30} alt="" />{showPopup && <PopUp onClose={()=>setShowPopup(false)}/>}
              <img onClick={() => setShowPopup(true)}  src={assets.mic_icon} width={30} alt="" />{showPopup && <PopUp onClose={()=>setShowPopup(false)}/>}
              {input ? <img onClick={() => onSent()} src={assets.send_icon} width={30} alt="" /> : null}
            </div>
          </div>
          <p className="bottom-info">
            ChatAI may display inaccurate info, including about people, so double-check its responses. Your privacy and ChatAI Apps
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main