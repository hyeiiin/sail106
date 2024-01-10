import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link, Outlet } from 'react-router-dom';
import {
  AppBar, Box, createTheme, ThemeProvider,
  Toolbar, Typography, styled
} from '@mui/material'
import { Pets } from '@mui/icons-material'

import { logoutUser } from 'features/auth/authSlice';
import MyAvatar from 'common/avatar/MyAvatar';


const NavBar = () => {
  const logonUser = useSelector((state) => state.auth.logonUser)
  const { nickname, role, imageUrl } = useSelector((state) => state.auth.logonUser)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    const isrole = role
    const nick = logonUser.nickname
    dispatch(logoutUser())
    alert(isrole + "인 " + nick + "님이 로그아웃 되었습니다.") // state 체크 용 추후 삭제
    navigate('/')
  }

  const transparentTheme = createTheme({
    palette: {
      primary: {
        main: '#ffffff00',
        boxShadow: 'none',
      }
    }
  })

  return (<div>
    <ThemeProvider theme={transparentTheme} >
      <AppBar position="sticky" variant="transparent">
        <StyledToolbar>
          <Logos>
            <Link to="/" onClick={() => { window.scrollTo(0, 0); }}>
              <LogoText
                variant="h5"
                sx={{ display: { xs: "none", sm: "block", color: 'black !important' }, }}
                id="logo"
              > 당신의 계절
              </LogoText>
            </Link>
            <Pets
              sx={{ display: { xs: "block", sm: "none" } }} />
          </Logos>
          {
            nickname === undefined || nickname === ''
              ?
              <Navs onClick={() => { window.scrollTo(0, 0); }}>
                <Typography
                  variant="h6"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  <Link to="/">홈</Link>
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  <Link to="consultants">컨설턴트 목록</Link>
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  <Link to="login">로그인</Link>
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  <Link to="signup">회원가입</Link> 
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  <Link to="test">ai 테스트</Link> 
                </Typography>
              </Navs>
              :
              <Navs onClick={() => { window.scrollTo(0, 0); }}>
                <Typography
                  variant="h6"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  <Link to="/">홈</Link>
                </Typography>
                {role === 'CUSTOMER' &&
                  <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }} >
                    <Link to="/self">자가진단</Link>
                  </Typography>}
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }} >
                  <Link to="consultants">컨설턴트 목록</Link>
                </Typography>
                <Link to="mypage">
                  <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '3px' }}>
                    <Typography variant="h6" sx={{ display: 'inline' }}>
                      {nickname}
                    </Typography>
                    <MyAvatar setSize={4} imgUrl={imageUrl} />
                  </Box>
                </Link>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }} >
                  <StyledA onClick={logout}>로그아웃</StyledA>
                </Typography>
              </Navs>
          }
          <UserBox>
            메뉴
          </UserBox>
        </StyledToolbar>
      </AppBar>
    </ThemeProvider>
    <Outlet />
  </div>
  )
}

export default NavBar

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  backgroundColor: "transparent",
  '&:hover': {
    backgroundColor: "#ffffff80 !important",
  },
  justifyContent: "space-between",
})

const Logos = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "1rem",
  a: {
    color: "black",
    textShadow: '2px 2px 6px gray'
  }
}))


const LogoText = styled(Typography)({
  fontFamily: 'malgunbd !important',
  color: "#FFFFFF",
  letterSpacing: 'var(--font-letter-spacing)',
})


const Navs = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "1rem",
  fontFamily: "Happiness-Sans-Title",
  a: {
    color: "black",
    textShadow: '2px 2px 6px gray'
  }
}))

const UserBox = styled(Box)(({ theme }) => ({
  display: "none",
  flexDirection: "row",
  alignItems: "center",
  gap: "1rem",
}))

const StyledA = styled('a')({
  ":hover": [{ cursor: "pointer" }]
})

