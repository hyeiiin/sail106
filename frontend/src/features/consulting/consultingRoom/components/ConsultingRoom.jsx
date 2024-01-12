import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { OpenVidu } from 'openvidu-browser';
import UserVideoComponent from './UserVideoComponent';

import { Box, Button, Grid, styled, Typography, ButtonGroup, IconButton, CircularProgress } from '@mui/material'
import { Mic, MicOff, Videocam, VideocamOff } from '@mui/icons-material';


import { setSnackbarMessage, setSnackBarOpen } from 'common/snackbar/snackbarSlice';
import {
  settingModalOn, setSession, setCustomer,
  postConsultingResult, resetSessionName, resetMsg
} from 'features/consulting/consultingRoom/consultSlice'

import { CONSULTANT, CUSTOMER } from 'api/CustomConst'
import { sharedColorSet, changeComment, selectTone, setFiles, resetColor } from 'common/colorset/colorSetSlice'

import Chat from 'features/consulting/consultingRoom/chat/Chat'
import SmallChat from 'features/consulting/consultingRoom/chat/SmallChat'
import ColorPalette from 'common/colorset/ColorPalette'
import SelectedColorSet from 'common/colorset/SelectedColorSet';
import ConSelectedColorSet from 'common/colorset/ConSelectedColorSet';
import ColorButtonGroup from 'common/colorset/ColorButtonGroup'
import { Buffer } from 'buffer';

const OPENVIDU_SERVER_URL = 'http://localhost:4443';
const OPENVIDU_SERVER_SECRET = 'OPENVIDU_SECRET';

// rafce Arrow function style 
const ConsultingRoom = () => {
  const { nickname, email, role } = useSelector(state => state.auth.logonUser)
  const { session, customer, reservationId, consultantSessionName } = useSelector(state => state.consult)
  const tmp = email?.replace(/[@\.]/g, '-')
  const [mySessionId, setMySessionId] = useState(
    role === CONSULTANT ? tmp : consultantSessionName
  )

  const [isBest, setIsBest] = useState(false)
  const [isWorst, setIsWorst] = useState(false)
  const [clickColorFirst, setClickColorFirst] = useState(false)

  const [myUserName, setMyUserName] = useState(nickname)

  const [publisher, setPublisher] = useState(undefined)
  const [consultant, setConsultant] = useState(undefined)

  const [OV, setOV] = useState(null)

  const [isMic, setIsMic] = useState(true)
  const [isCam, setIsCam] = useState(true)

  // 코멘트, 진단결과 톤, 진단결과 이미지 정보
  const { selectedColor, bestColor, worstColor,
    consultingComment, tone, files
  } = useSelector(state => state.colorSetList)


  const consultingFinishRequest = {
    reservationId: reservationId,
    consultingComment: consultingComment,
    tone: tone,
    bestColorSet: bestColor,
    worstColorSet: worstColor
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // alert('dsfsfsfsd')
    window.addEventListener(
      'beforeunload',
      onbeforeunload);

    return () => {
      window.removeEventListener(
        'beforeunload',
        onbeforeunload);
    }
  }, [])

  useEffect(() => {
    if (role === CUSTOMER) {
      alert('consultantSessionName'+consultantSessionName)
      if (!consultantSessionName) {
        alert('요청된 세션이 없거나 공란입니다. 종료 후 정상접근 바랍니다.')
      }
      else {
        console.log(consultantSessionName)
      }
    }
  }, [consultantSessionName])


  useEffect( () => {
    alert('before ifsession' )
 
    if(session) { //session 은 state.consult 에서 가져온값 
      session.on('streamCreated', streamCreated)
      session.on('streamDestroyed', streamDestroyed)
      session.on('exception', exception)
      session.on('signal:colorset', shareColorset)
      getToken().then(sessionConnect); //gettoken수행시 createsession,createtoken 수행.

    }
  }, [session])

  const sessionConnect = (token) => { // setsession ,setcustomer 등을 수행.
    session
      .connect(
        token, { clientData: myUserName, clientRole: role },
      )
      .then(() => {
        let publisher = OV.initPublisher(undefined, {
          audioSource: undefined,
          videoSource: undefined,
          publishAudio: true,
          publishVideo: true,
          resolution: '1280x960',
          frameRate: 30,
          insertMode: 'APPEND',
          mirror: false,
        });
        publisher.subscribeToRemote()
        session.publish(publisher);
        setPublisher(publisher);
        if (role === CUSTOMER) { dispatch(setCustomer(publisher)) }
        if (role === CONSULTANT) { setConsultant(publisher) }
        dispatch(setSession(session))
      })
      .catch((error) => { });
  }

  useEffect(() => {
    if (session && role === CONSULTANT) {
      const data =
        `${JSON.stringify(selectedColor)}$$${JSON.stringify(bestColor)}$$${JSON.stringify(worstColor)}`;

      session.signal({
        data,
        to: [],
        type: 'colorset'
      }).then(() => { }).catch(() => { })
    }
  }, [selectedColor, bestColor, worstColor])


  const shareColorset = (event) => {
    const data = event.data.split('$$')
    const newSelectedColor = JSON.parse(data[0])
    const newBestColor = JSON.parse(data[1])
    const newWorstColor = JSON.parse(data[2])
    dispatch(sharedColorSet({ newSelectedColor, newBestColor, newWorstColor }))
  }

  // 하단 alert관련
  const clickColorFirstFunc = () => {
    if (clickColorFirst === false) {
      setClickColorFirst(true)
      dispatch(setSnackbarMessage('컬러를 성공적으로 추가하였습니다! 컬러팔레트 안의 색상을 선택한 후 제거해보세요.'))
      dispatch(setSnackBarOpen(true))
    } else {
      return
    }
  }

  const onbeforeunload = () => {
    leaveSession();
  }

  const deleteSubscriber = (streamManager) => {
  }

  const joinSession = () => {  //세션 값 넣기.
    const getOV = new OpenVidu();
    dispatch(setSession(getOV.initSession()))
    setOV(getOV)
  }

  const streamCreated = (event) => { 
    const subscriber = session.subscribe(event.stream, undefined);
    const subRole = JSON.parse(event.stream.connection.data).clientRole
    if (role === CONSULTANT && subRole === CUSTOMER) { dispatch(setCustomer(subscriber)) }
    else if (role === CUSTOMER && subRole === CONSULTANT) { setConsultant(subscriber) }

  }

  const streamDestroyed = (event) => { 
    deleteSubscriber(event.stream.streamManager);
  }

  const exception = (exception) => {
    console.warn(exception);
  }

  // 컨설턴트, 고객 종료시 분리 필요
  const leaveSession = () => {
    
    if (role === CONSULTANT) {
      if (worstColor.length < 1 | bestColor.length < 1) {
        alert('베스트컬러와 워스트컬러 팔레트를 1개 이상씩 채워주세요.')
        return;
      }
      if (tone === '') {
        alert('톤 정보를 입력해주세요.')
        return;
      }
      if (files === '') {
        alert('진단 결과표를 등록해 주세요.')
        return;
      }
      if (session) {
        session.disconnect();
        dispatch(postConsultingResult({ files, consultingFinishRequest }))
          .then(() => {
            dispatch(changeComment(''))
            dispatch(selectTone(''))
            dispatch(setFiles(''))
            dispatch(resetColor())
            navigate('/')
          })
      }
    }
    if (role === CUSTOMER && session) {
      session.disconnect();
    }

    setOV(null);
    setMySessionId(role === CONSULTANT ? tmp : consultantSessionName)
    dispatch(setSession(undefined))
    dispatch(setCustomer(undefined))
    dispatch(resetMsg())
    setMyUserName(nickname)
    setConsultant(undefined)
  }

  /**
   * --------------------------
   * SERVER-SIDE RESPONSIBILITY
   * --------------------------
   * These methods retrieve the mandatory user token from OpenVidu Server.
   * This behavior MUST BE IN YOUR SERVER-SIDE IN PRODUCTION (by using
   * the API REST, openvidu-java-client or openvidu-node-client):
   *   1) Initialize a Session in OpenVidu Server	(POST /openvidu/api/sessions)
   *   2) Create a Connection in OpenVidu Server (POST /openvidu/api/sessions/<SESSION_ID>/connection)
   *   3) The Connection.token must be consumed in Session.connect() method
   */

  const getToken = () => {
    return createSession(mySessionId).then((sessionId) => createToken(sessionId));
  }

  const createSession = (sessionId) => {
    return new Promise((resolve, reject) => {
      const data = JSON.stringify({ customSessionId: sessionId });
      axios
        .post(OPENVIDU_SERVER_URL + '/openvidu/api/sessions', data, {
          headers: {
            Authorization: 'Basic ' + 
            // btoa('OPENVIDUAPP:' + OPENVIDU_SERVER_SECRET),
            Buffer.from('OPENVIDUAPP:' + OPENVIDU_SERVER_SECRET).toString('base64'),

            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,POST',
          },
        })

        .then((response) => {
          resolve(response.data.id);
        })
        .catch((response) => {
          var error = Object.assign({}, response);
          if (error?.response?.status === 409) {
            resolve(sessionId);
          } else {
            console.warn(
              'No connection to OpenVidu Server. This may be a certificate error at ' +
              OPENVIDU_SERVER_URL,
            );
            if (
              window.confirm(
                'No connection to OpenVidu Server. This may be a certificate error at "' +
                OPENVIDU_SERVER_URL +
                '"\n\nClick OK to navigate and accept it. ' +
                'If no certificate warning is shown, then check that your OpenVidu Server is up and running at "' +
                OPENVIDU_SERVER_URL +
                '"',
              )
            ) {
              window.location.assign(OPENVIDU_SERVER_URL + '/accept-certificate');
            }
          }
        });
    });
  }

  const createToken = (sessionId) => {
    return new Promise((resolve, reject) => {
      const data = {
        "type": "WEBRTC",
        "role": "PUBLISHER",
        "kurentoOptions": {
          "videoMaxRecvBandwidth": 1000,
          "videoMinRecvBandwidth": 300,
          "videoMaxSendBandwidth": 1000,
          "videoMinSendBandwidth": 300,
          "allowedFilters": [
            "GStreamerFilter",
            "FaceOverlayFilter",
            "ChromaFilter"
          ]
        }
      };
      axios
        .post(OPENVIDU_SERVER_URL + "/openvidu/api/sessions/" + sessionId + "/connection", data, {
          headers: {
            Authorization: 'Basic ' + btoa(
              'OPENVIDUAPP:' + OPENVIDU_SERVER_SECRET
            ),
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,POST',
          },
        })
        .then((response) => {
          resolve(response.data.token);
        })
        .catch((error) => reject(error));
    });
  }

  // ---------- render
  return (
    <SContainer container >

      {session !== undefined ? (
        // 세션 연결시
        <SGridContainer container spacing={2}>
          {consultant !== undefined ? (
            <Grid container item xs={12} sm={2}
              sx={{
                height: "80%",
                justifyContent: "space-between",
                gap: 2,
              }}>
              <SGrid item >
                <VideoContainer>
                  <UserVideoComponent
                    streamManager={consultant} />
                </VideoContainer>
              </SGrid>
              {
                role === CONSULTANT &&
                <SmallChat />
              }
            </Grid>
          )
            :
            <SpinnerGrid item xs={12} sm={2}>
              <CircularProgress />
            </SpinnerGrid>
          }

          <UserVideoSGrid item xs={12} sm={6}>
            {customer !== undefined ? (
              // 유저 비디오 및 베스트 및 컬러셋
              <VideoContainer>
                <UserVideoComponent
                  streamManager={customer} />
              </VideoContainer>
            )
              :
              <SpinnerGrid item xs={12} sm={6}>
                <CircularProgress />
              </SpinnerGrid>
            }
            {
              role === CONSULTANT &&
              <ColorButtonGroup
                clickColorFirstFunc={clickColorFirstFunc}
                clickColorFirst={clickColorFirst}
                isBest={isBest}
                isWorst={isWorst}
                setIsBest={setIsBest}
                setIsWorst={setIsWorst}
              />
            }
          </UserVideoSGrid>

          {/* 우측 컬러팔레트, 채팅*/}
          {
            role === CONSULTANT &&
            // sgrid
            <Grid item xs={12} sm={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: '100%',
              }}>
              <ColorPalette
                isBest={isBest}
                isWorst={isWorst}
              />
            </Grid>
          }
          {
            role === CUSTOMER &&
            <Grid item xs={12} sm={4}
              sx={{
                display: "flex",
                justifyContent: "end",
                height: "80%",
                flexDirection: "column",
                width: '100%',
              }}>
              <Chat />
            </Grid>

          }
        </SGridContainer>
      )
        :
        // 세션 연결 안됐을시
        <SpinnerGrid container>
          <Typography variant="h3">"연결을 눌러 주세요."</Typography>
        </SpinnerGrid>
      }



      {/* 하단 || 선택된 베스트, 워스트 컬러팔레트 || 마이크, 카메라, 종료버튼 */}
      <BottomBox>
        {
          // 세션연결 안됐을시
          !session ?
            <>
              <p />
              <ButtonGroup>
                <BottomBtn variant="contained" onClick={joinSession} sx={{ backgroundColor: "#EB8F90" }}>
                  연결
                </BottomBtn>
                <BottomBtn variant="contained" onClick={() => {
                  navigate('/')
                  dispatch(resetSessionName())
                }}>
                  돌아가기
                </BottomBtn>
              </ButtonGroup>
            </>
            :
            // 세션 연결시 
            <>
              {/* 베스트,워스트 컬러셋 || 마이크,캠,종료버튼 */}
              {role === CONSULTANT ?
                // 컨설턴트
                <>
                  {/* 컬러셋 */}
                  <ConSelectedColorSet
                    setIsBest={setIsBest}
                    setIsWorst={setIsWorst}
                  />
                  <MicCamExitGroup>
                    {/* 마이크 */}
                    <CustomIconButton
                      color="inherit"
                      onClick={() => {
                        publisher.publishAudio(!isMic)
                        setIsMic(!isMic)
                      }}>
                      {isMic ? <Mic /> : <MicOff color="secondary" />}
                    </CustomIconButton>
                    {/* 캠 */}
                    <CustomIconButton
                      color="inherit"
                      onClick={() => {
                        publisher.publishVideo(!isCam)
                        setIsCam(!isCam)
                      }}>
                      {isCam ? <Videocam /> : <VideocamOff color="secondary" />}
                    </CustomIconButton>
                    {/* 종료 */}
                    <BottomBtn variant="contained" onClick={leaveSession}>
                      종료
                    </BottomBtn>
                  </MicCamExitGroup>
                </>
                :
                // 유저
                <>
                  {/* 컬러셋 */}
                  <SelectedColorSet
                    setIsBest={setIsBest}
                    setIsWorst={setIsWorst}
                  />
                  {/* 마이크,캠 + 필터 + 종료*/}
                  <MicCamExitGroup>
                    {/* 마이크 */}
                    <CustomIconButton
                      color="inherit"
                      onClick={() => {
                        publisher.publishAudio(!isMic)
                        setIsMic(!isMic)
                      }}>
                      {isMic ? <Mic /> : <MicOff color="secondary" />}
                    </CustomIconButton>
                    {/* 캠 */}
                    <CustomIconButton
                      color="inherit"
                      onClick={() => {
                        publisher.publishVideo(!isCam)
                        setIsCam(!isCam)
                      }}>
                      {isCam ? <Videocam /> : <VideocamOff color="secondary" />}
                    </CustomIconButton>
                    {/*  화면조정, 필터, 종료 */}
                    <ButtonGroup style={{ gap: 3 }}>
                      <BottomBtn variant="contained" onClick={() => dispatch(settingModalOn())} >
                        화면 조정
                      </BottomBtn>
                      <BottomBtn variant="contained"
                        onClick={() => {
                          if (customer.stream.filter) {
                            customer.stream.removeFilter()
                          }
                        }}
                      >
                        톤 필터 지우기
                      </BottomBtn>
                      <BottomBtn variant="contained" onClick={leaveSession}>
                        종료
                      </BottomBtn>
                    </ButtonGroup>
                  </MicCamExitGroup>
                </>
              }
            </>
        }
      </BottomBox>

    </SContainer >
  )
}

export default ConsultingRoom

// 전체포함 margin으로 띄운 상태
const SContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: 'center',
  padding: "1rem",
  margin: '3vh',
  height: "94vh",

  boxSizing: 'border-box',
  border: '2px solid #5A4D4D99',
  backgroundColor: '#FAFAFA',
  borderRadius: '15px',
  boxShadow: '1px 2px 9px #B1B7B7',
})



// 공용버튼 제외 모두 포함 (상위)
// height 90% / 나머지 10% 하단
const SGridContainer = styled(Grid)({
  height: '84vh',  //"90%",
  display: 'flex',
  alignItems: "center",
  // columnGap: 2,
})

// 하위 그리드
const SGrid = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  // height: '100%',
})

// 연결안됐을시 스피너
const SpinnerGrid = styled(Grid)({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center"
})

// 비디오 컨테이너
const VideoContainer = styled(Box)({
  width: "100%",
  // borderRadius: "1rem",
  // padding: "1rem",
})

const UserVideoSGrid = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  alignItems: "end",
})


// 하단 10%
const BottomBox = styled(Box)({
  // backgroundColor: 'blue',
  height: '10vh',//'10%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: "space-between",
  alignItems: 'center',
  width: '100%',
  maxWidth: '90%',
})


const CustomIconButton = styled(IconButton)((props) => ({
  backgroundColor: '#99968D',
  color: 'white',
  '&:hover': {
    backgroundColor: '#66635C',
    color: 'black',
    fontWeight: 'normal',
  },
  fontWeight: 'normal',
  border: '1px solid #66635C',
  borderRadius: '10%',
  height: '3rem',
}))

const BottomBtn = styled(Button)((props) => ({
  backgroundColor: '#99968D',
  color: 'white',
  '&:hover': {
    backgroundColor: '#66635C',
    color: 'black',
    fontWeight: 'normal',
  },
  fontWeight: 'normal',
  border: '1px solid #66635C70',
  // width: `${props.wd}px`,
  height: '3rem',
}))

// 1-2그룹 => 마이크,캠,종료
const MicCamExitGroup = styled(Grid)({
  display: 'flex',
  flexDirection: 'row',
  gap: 3,
})
