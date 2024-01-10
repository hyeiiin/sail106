import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box, Grid, styled, IconButton } from '@mui/material'
import MessageIcon from '@mui/icons-material/Message';
import ChatList from './ChatList'
import { appendMessageList } from 'features/consulting/consultingRoom/consultSlice'

const SmallChat = () => {
  const [msg, setMsg] = useState('')
  const { role, imageUrl } = useSelector(state => state.auth.logonUser)
  const { session, messageId } = useSelector(state => state.consult)
  const dispatch = useDispatch()

  const handleMessage = () => {
    if (session && msg.length > 0) {
      const mine = {
        id: messageId,
        role: role,
        imageUrl: '',
        side: 'right',
        message: msg
      }

      dispatch(appendMessageList(mine))

      const data = {
        id: messageId,
        role: role,
        imageUrl: imageUrl,
        side: 'left',
        message: msg
      }

      session.signal({
        data: JSON.stringify(data),
        to: [],
        type: 'chat'
      })
      setMsg('')
    }
  }

  useEffect(() => {
    if (session) {
      session.on('signal:chat', textChat)
    }
  }, [session])

  const textChat = (event) => {
    const data = JSON.parse(event.data)
    if (data.role !== role) {
      dispatch(appendMessageList(data))
    }
  }

  return (
    <ChatGrid item xs={12}>
      <ChatContainer>
        <ChatList />
        <IContainer>
          <Input value={msg}
            onChange={(e) => { setMsg(e.target.value) }}
            onKeyUp={(e) => { if (e.key === 'Enter') { handleMessage() } }}
          />
          <IconButton onClick={handleMessage} >
            <MessageIcon />
          </IconButton>
        </IContainer>
      </ChatContainer>
    </ChatGrid>
  )
}

export default SmallChat

const ChatGrid = styled(Grid)({
  width: "100%",
  height: "60%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  overflow: "hidden",
  borderRadius: "4px",
  backgroundColor: "#F5F5F5",
  border: '2px solid #5A4D4D99',
  padding: '10px',
})

const ChatContainer = styled(Grid)({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  // backgroundColor: "#FFFFFF10",
  // borderRadius: "4px",
  // margin: "4px",
  // padding: "4px",
  overflow: "hidden",
})

const IContainer = styled(Box)({
  marginTop: "0.4rem",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignContent: "center"
})

const Input = styled('input')({
  fontSize: "1rem",
  padding: "0.2rem 1rem",
  width: "calc(100% - 40px)",
  border: "1px  solid",
  borderRadius: "0.8rem",
})