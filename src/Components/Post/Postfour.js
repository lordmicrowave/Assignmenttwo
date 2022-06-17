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
          Assignment 1 Reflection
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
          Assignment 1 Reflection
          </Typography>
          <Typography paragraph>
          The biggest thing for me that came to this assignment was the completing of it. I have always 
          struggled to gauge how much time I would need to complete an assignment including any challenges
           or obstacles I may face along the way and being able to account for that. This time, I had to 
           be realistic about needing another extension on top of the one we received.
          </Typography>
          <Typography paragraph>
          The challenges I faced with this assignment was dividing my time between my job and completing the assignment itself. Along 
          with that, I had to try and find ways around the loadshedding schedules as where I lived and where I worked fell under 
          different blocks. This meant that some days I would not be able to work on the assignment for very long because my laptop 
          would not last without power. During the times that I worked on the assignment, I made very little to no progress. I would 
          get very frustrated as soon as an error popped up on the screen. I felt very intimidated about having to use React and I felt
           very helpless/useless/limited/lacking knowledge. My ability to problem solve went out the window when it came to looking at 
           the errors and that further deepened my thinking that I’m not cut out for coding and doubted the basic knowledge I had of 
           HTML and CSS.
          </Typography>
          <Typography paragraph>
          After receiving my second extension, I was advised to take a short period of rest and come back to the assignment when I was 
          rested and less stressed. When I got back to the assignment, it was a complete turnaround because what was a mountain of 
          challenges and feelings of inexperience and frustration were gone and I was able to sit down and finish the website from 
          start to finish. This time I didn’t feel pressured or out of time. I was able to concentrate (another challenge for me 
          because I have ADHD and go periods without being medicated because wow the prescription is expensive) and calmly face any 
          errors that did come up. Most of the errors I was able to fix myself and those that I couldn’t, Stack Overflow and W3 Schools 
          were my friends. I could definitely benefit from actually asking for help but that’s something I have always struggled to do 
          but am actively working on.
          </Typography>
          <Typography>
          I believe I completed everything I set out to do within the basics for this assignment and maybe a little more especially 
          with the CSS. I kept the online store template because I thought it would be a good idea to use the business I am currently 
          running as the online store and have some of the menu items double as the blog posts. Everything on the website from the brand
           colours to the products and their prices are an accurate depiction of the brand and its inventory.
          </Typography>
          <Typography paragraph>
          My biggest challenge was figuring out how to link some of the menu items to the different blog pages I created. By looking at
           the code I already had for everything on the website and playing around with the code, I was able to figure out how to add 
           the Link component to the array so that a person would be able to have something to click on and direct them to the specified
            blog page listed on the menu item.
          </Typography>
          <Typography>
          The only things I would change or add to the website is linking the social media icons to the pages I currently have active
           for the business and using the business’s brand fonts. 
          </Typography>
          <Typography>
          I am very proud of myself for managing to complete this assignment – albeit not on time – because it’s been a very long time
           since I have been able to successfully submit a complete set of varsity work.
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


