import React, {useRef, useState} from 'react'
import IdleTimer from 'react-idle-timer' // installed react-idle-timer package
import Modal from 'react-modal'


function SessionTimeOut() {

   const idleTimerRef= useRef(null) // used for showing view specific time
   const [isLogin, setisLogin] = useState(true)    // for initial view
   const [modalIsOpen, setmodalIsOpen] = useState(false) // for modal
   const SessionTimeOutRef= useRef(null) // dont show modal or view again after logged out once

   const Logout = () =>{
       setmodalIsOpen(false)
       setisLogin(false)
       clearTimeout( SessionTimeOutRef.current) // dont show modal or view again after logged out once
       console.log("user logged out");
   }

   const stayActive = () => {
       setmodalIsOpen(false)
       clearTimeout( SessionTimeOutRef.current)
       console.log('User is active');
       
   }

    const onIdle = ()=>{
        console.log('User Active');
        setmodalIsOpen(true)
        SessionTimeOutRef.current = setTimeout(Logout, 5000); // dont show modal or view again after logged out once

    }
    return (
        <div>
           {isLogin? <h1>Loggedin</h1> : <h1>Guest</h1>}
            <Modal isOpen={modalIsOpen}>
                <h1>You are loggedin</h1>
                <p>You will be logged out soon</p>
                <button onClick={Logout}>Logged out </button>
                <button onClick={stayActive}>Stay Active </button>
            </Modal>
            <IdleTimer ref={idleTimerRef}
                timeout={5000}
                onIdle={onIdle}>   
            </IdleTimer>
        </div> 
    )
}

export default SessionTimeOut
