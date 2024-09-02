import React from 'react'
import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import './page.css'

const VisualMeet = () => {
  const [value, setValue] = useState('');

  const navigate = useNavigate();

  const joinRoom = useCallback(() => {
    navigate(`/meet/${value}`)
  })
  return (
    <div className="login-register">
      <div id="parentRegisterLogin">
        <div className="register" id="register">
          <div className="header">Create Meet</div>
          <div id='form'>
            <div className="username input-item">
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
                placeholder='name'
              />
            </div>
            <input  type="button" onClick={joinRoom} className="join-meet" value="start" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default VisualMeet
