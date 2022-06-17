import React, { useState } from "react";
import { img1, profile, SettingsIcon } from "../../Icons";
import { Link } from "react-router-dom";
import "./Profile.scss";

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import Popover from '@mui/material/Popover';
import IconButton from '@mui/material/IconButton';

import {
  FavoriteBorderRoundedIcon,
  SendOutlinedIcon,
  
  ForumOutlinedIcon,
  BookmarkBorderOutlinedIcon,
  SentimentSatisfiedAltOutlinedIcon,
} from "../../Icons";
import "../../Components/Post/Post.scss";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Profile = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }
  

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const [active, setActive] = useState(1);
  const postId = 22;
  return (
    <div className="app__profile">
      <div className="profile__container">
        <div className="profile__img-container">
          <img src={profile} alt="" />
        </div>
        <div className="user__profile__content">
          <div className="username">
            <p>thisisyou</p>
            <button>Edit Profile</button>
           
          </div>
          <div className="followers">
            <p>
              <span>30</span> posts
            </p>
            <p>
              <span>1000</span> followers
            </p>
            <p>
              <span>200</span> followings
            </p>
          </div>
          <div className="bio">
            <p>
              The Instagram template that has been used and modified can be found on https://github.com/zenith-noble01/Mern__stack_instagram_clone
            </p>
          </div>
        </div>
      </div>
      <hr />
      

        
        <div className="user__posts">
          <div className="user__post">
          <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Internet Art Prototype
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Click on the Read More button to open the prototype
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={openModal}>Read More</Button>
        <div className="prototypemodal">
      {isOpen && (
        <>
          <div className="overlay"></div>
          <div className="modal">
            <header className="modal__header">
              <h2>Prototype</h2>
              <button onClick={closeModal} className="close-button">&times;</button>
            </header>
            <main className="modal__main">
            <div className="app__post">
      <div className="app__post-top">
        <div className="top__container">
          <div className="top__container-user">
            <div className="posts__status">
              <img src={profile} alt="" />
            </div>
            <p>thisisyou</p>
          </div>
          <div className="top__container-options">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="post__img-container">
          <img src={profile} alt="" />
        </div>
      </div>
      <div className="post__footer">
        <div className="footer__top">
          <div className="footer__top-left">
          <IconButton aria-label="add to favorites" onClick={handleClick}>
          <div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </div>
          <FavoriteBorderRoundedIcon />
          </IconButton>
            

            <ForumOutlinedIcon />
            <SendOutlinedIcon />
          </div>
          <BookmarkBorderOutlinedIcon />
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom-top">
            <span>104 likes</span>
            <p>Click on the Heart icon to view the popover component</p>
            <div className="view__app">View all comments</div>
            <p className="time">1 HOUR AGO</p>
          </div>
          <div className="footer__bottom-bottom">
            <SentimentSatisfiedAltOutlinedIcon />
            <input type="text" placeholder="Add a comment" />
            <button>Post</button>
          </div>
        </div>
      </div>
    </div>
    
            </main>
          </div>
          <button onClick={closeModal} className="close-button">&times;</button>
        </>
      )}
    </div>
        
      </CardActions>
    </Card>
          </Item>
        </Grid>
       
       



      </Grid>
    </Box>
          </div>
        </div>
      
    </div>

    
  );
};

export default Profile;
