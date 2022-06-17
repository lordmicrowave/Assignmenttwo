import React from "react";
import {
  FavoriteBorderRoundedIcon,
  SendOutlinedIcon,
  profile,
  ForumOutlinedIcon,
  BookmarkBorderOutlinedIcon,
  SentimentSatisfiedAltOutlinedIcon,
} from "../../Icons";
import "./Post.scss";

//Complex Interaction card imports
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors'; //get rid of this
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SendIcon from '@mui/icons-material/Send';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { glitter } from "../../Icons";



// Complex Interaction Card
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 849 }}>
      <CardHeader
        avatar={
          <Avatar>
            <img src={profile} alt="" />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="thisisyou" //change 
        subheader="4 DAYS AGO" // change
      />
      <CardMedia
        component="img"
        height="194"
        image="./Icons/glitter.jpg" //change
        
        alt="Post Image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Assignment 2 Reflection
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="direct">
          <SendIcon />
        </IconButton>
        <IconButton aria-label="bookmark">
          <BookmarkBorderIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          Assignment 2 Reflection
          </Typography>
          <Typography paragraph>
          I believe that for this assignment, I achieved a lot more than I expected to especially
           when it came to putting together different components that worked. I felt a lot more 
           confident compared to the first assignment and it was encouraging being able to execute 
           the ideas I had and see them visually. 
          </Typography>
          <Typography paragraph>
          I do feel a significant difference in how I managed to complete the assignment after going
           back on ADHD meds. It was a lot easier to manage my anxiety and initiate tasks without 
           feeling overwhelmed every time I prepared myself to sit in front of my laptop
          </Typography>
          <Typography paragraph>
          For this assignment, I wanted to take a few components that I found engaging and eye-catching
           and learn to incorporate them into my website. I feel like I surpassed this goal as I did not 
           expect to get almost all the components I wanted to have in the website working. The only 
           components I missed out on was the image layering effect for the prototype and needing more
            time to figure out how to have multiple modals on a single page. Because of the latter, I was
            unable to have some of my blog posts on different pages and had to settle for having them on
             the homepage.
          </Typography>
          <Typography>
          I fell short on the CSS but I’m confident I’ll be able to have a fully realised aesthetic for the
           final exam.
          </Typography>
          <Typography paragraph>
          Now that I have a clear idea of what I want to achieve for the exam, I realise that it is important 
          for me to break down the different tasks needed for the exam into very small manageable chunks. Even 
          if it means doing an hour of coding a day will help to relieve the amount of pressure I feel when it
           comes to the workload.
          </Typography>
          
        </CardContent>

        <div className="footer__bottom-bottom">
        <IconButton aria-label="add emoji">
        <SentimentSatisfiedAltOutlinedIcon />
        </IconButton>
            
            <input type="text" placeholder="Add a comment" />
            <button>Post</button>
          </div>
          <button>View comments</button>

      </Collapse>
    </Card>
  );
}


