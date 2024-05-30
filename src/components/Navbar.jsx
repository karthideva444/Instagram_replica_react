import { Instagram, Mail, Notifications } from '@mui/icons-material';
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material'
import React, { useState } from 'react'

export const Navbar = () => {

    const [open,setOpen] = useState(false)

    const StyledToolbar = styled(Toolbar)({
        display:"flex",
        justifyContent:"space-between"
    });

    const Search = styled("div")(({theme})=>({
        backgroundColor:"white",
        padding:"0 10px",
        borderRadius:theme.shape.borderRadius,
        width:"40%"
    }));

    const Icons = styled(Box)(({theme})=>({
        display:"none",
        gap:"20px",alignItems:"center",cursor:"pointer",
        [theme.breakpoints.up("sm")]:{
            display:"flex"
        }
    }))

    const UserBox = styled(Box)(({theme})=>({
        display:"flex",gap:"10px",alignItems:"center",
        [theme.breakpoints.up("sm")]:{
            display:"none"
        }
    }))

    const handleprofile = () =>{
        setOpen(true)
    }

    const onclose = () =>{
        setOpen(false)
    }

  return (
    <AppBar position="sticky">
        <StyledToolbar >
            <Typography variant='h6' sx={{display:{xs:"none",sm:"block"}}}>
                <Box sx={{gap:"10px",display:"flex",mt:"3"}}>
                <Instagram sx={{mt:"3px"}}/>Instagram
                </Box>
            </Typography>
            <Instagram sx={{display:{xs:"block",sm:"none"}}}/>
            <Search><InputBase placeholder='search...'/></Search>
            <Icons>
                <Badge badgeContent={4} color='error'>
                    <Mail/>
                </Badge>
                <Badge badgeContent={4} color='error'>
                    <Notifications/>
                </Badge>
                <Avatar onClick={(e)=>handleprofile()} sx={{width:30,height:30}} src='https://images.app.goo.gl/18tPNLJ34j73hsnW6'/>
            </Icons>
                <UserBox>
                <Avatar onClick={(e)=>handleprofile()} sx={{width:30,height:30}} src='https://images.app.goo.gl/18tPNLJ34j73hsnW6'/>
                <Typography variant='span'>karthick</Typography>
                </UserBox>
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={onclose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}
