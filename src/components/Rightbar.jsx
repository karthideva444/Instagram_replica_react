import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from '@mui/material'
import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

export const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{display:{xs:"none",sm:"block"}}} >
      <Box position="fixed" width={300}>
      <Typography variant={"h6"}fontWeight={100}>
        Online friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar 
            alt="Remy Sharp"
            src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
            />
          <Avatar
            alt="Travis Howard" 
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fHww" 
           />
          <Avatar 
            alt="Cindy Baker" 
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          />
          <Avatar
            alt="Agnes Walker" 
            src="https://plus.unsplash.com/premium_photo-1675034377239-a839117fe934?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D" 
           />
          <Avatar
            alt="Trevor Henderson" 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D" 
           />
           <Avatar 
            alt="Remy Sharp" 
            src="/static/images/avatar/1.jpg" 
            />
            <Avatar 
              alt="Travis Howard" 
              src="/static/images/avatar/2.jpg" 
              />
            <Avatar 
              alt="Cindy Baker" 
              src="/static/images/avatar/3.jpg" 
              />
            <Avatar 
              alt="Agnes Walker" 
              src="/static/images/avatar/4.jpg" 
              />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}> 
          Latest Photos
        </Typography>
        <ImageList cols={3} gap={5} rowHeight={100}>
          <ImageListItem >
            <img
            src='https://bachelorrecipe.com/wp-content/uploads/2018/05/Vegetable-Sandwich.jpg'
              alt=""
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem >
            <img
            src='https://www.foodandwine.com/thmb/tM060YA0Fd0UALCmPQ-5gGWyBqA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Classic-Club-Sandwich-FT-RECIPE0523-99327c9c87214026b9419b949ee13a9c.jpg'
              alt=""
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem >
            <img
            src='https://www.southernliving.com/thmb/TW2iJ6-7F-BAy35Q_EYW5wnIHGI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Ham_Sandwich_011-1-49227336bc074513aaf8fdbde440eafe.jpg'
              alt=""
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem >
            <img
            src='https://www.foodandwine.com/thmb/XdxTq3crr7v8zwtVIT9vra4oNno=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Classic-Club-Sandwich-FT-RECIPE0523-99327c9c87214026b9419b949ee13a9c.jpg'
              alt=""
              loading="lazy"
            />
          </ImageListItem>
        </ImageList>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}> 
          Latest Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
      </Box>
  )
}
