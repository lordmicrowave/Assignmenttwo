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
          Prototype Discussion
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
          The prototype will look like an Instagram post: it will have the username and profile picture at 
          the top. The like, comment, share and save button will be placed below the image followed by the 
          like count, caption, comment, time of posting and text box for posting comments. 
          </Typography>
          <Typography paragraph>
          The user will be able to click on the tag icon to view any relevant tags. The image will be 
          interactive as the user will be able to click on the image and reveal another image on top of it. 
          All the images will have different face filters with varying levels of transparency which will 
          eventually lead to a distortion of the original image. 
          </Typography>
          <Typography paragraph>
          As the user moves around the artwork, tooltips will appear to prompt the user to click on those 
          elements. When a button is clicked on, a popover will appear with information on how each image 
          has been edited and what filters were used.
          </Typography>
          <Typography paragraph>
          As an artwork, the piece functions as a commentary on how we are constantly consuming visual media
           especially pertaining to beauty standards. The overlaying of different versions of the same image 
           highlight how many of the pictures of people posted on social media are not accurate depictions/
           representations of themselves or what they really look like. It also puts emphasis on how drastically 
           you can alter your appearance using filters on social media platforms like Instagram and Snapchat, 
           and editing apps like FaceTune and Airbrush. 
          </Typography>
          <Typography>
          Photo-sharing social platforms like Instagram can be likened to digital galleries where people can share
           their art. It is not a platform where art can be created. With the subsequent rise of social networks,
            net art also turned its way of distributing artworks: before social networks, online communities were 
            organized on a topic-basis. Artists were gathering around topics they found interesting, and they 
            onnected with other artists. But nowadays, everything turned to individuals - like you already know, 
            social networks are constructed in a way that every individual is creating their own personal "galaxy"
             of friends and followers. Individuals are in the center of their own communities, and the distribution 
             of art just followed this path. The net artwork acts as a bridge between using the internet as a medium 
             to share and curate art, and the internet being used as the medium itself. With the prototype, I attempted 
             to turn aspects of the functionality of Instagram into a piece of art. The artwork, similar to projects 
             like ‘Mirroring’ and ‘Cameron’s World’, blends browser art and collage art by using browser art, A sub-genre 
             of internet art, browser art is a renegade artwork made as part of a URL that uses the computer as raw
              material, transforming the codes, the structure of the websites and the links between servers into visual 
              material, and presenting it in digital collage form.
          </Typography>
          <Typography paragraph>
          1.	Invisible design elements
          </Typography>
          <Typography>
          TThe artwork uses React and CSS to render the artwork as well as elements from social media platform UIs as 
          individual pieces that make up the artwork such as the like button (Park pg 4) 
          </Typography>
          <Typography>
          2.	Collaborative participation
          </Typography>
          <Typography>
          The artwork encourages the user to interact with it by incorporating interactive elements such as the popovers 
          and tooltips that prompt the user to engage with the message of the artwork. Ideally, in the final iteration of 
          the prototype, the aforementioned elements would further increase engagement by allowing the user to record the
           questions posed and have that information presented back to them in the form of poll results. This not only
            drives engagement but connects the user to others who have interacted with the artwork and ultimately driving
             a conversation around the artwork’s message. The user’s participation in the artwork is an important part of 
             the artwork itself (Park, 5). Without this level of engagement, the artwork would be missing a fundamental 
             aspect of what makes it net art: the ability to share it
          </Typography>
          <Typography>
          The non-linearity of the artwork also allows users to access the artwork whenever they want to (Park, 7).
          </Typography>
          <Typography>
          Challenges that came with this project was the implementation of overlaying the images in a way that would allow
           for a distorting effect to be created. A CSS component with glitching or image merging effects could be used to 
           make the distortion more effective. Integrating the popovers in a way that did not interfere with the rest of 
           the artwork’s interactive functionality would require either a close button or coding that would allow for dynamic 
           positioning of the modals when they appear.
          </Typography>
          <Typography>
          Moving forward, I believe it would be an interesting to turn the cursor into a magnifying glass where the original 
          image without any filters or editing can be revealed. This could tie in with the layering feature and allows the user 
          to “unmask” or see through all the layers of editing and distortion. 
          </Typography>
          <Typography>
          There could be a more focused idea on the information presented in the popovers and tooltips. A conversation could be 
          created between the user and the artwork to enhance the engagement of the artwork. Questions could be presented that 
          prompt the user to think about how they use and engage with face filters. Questions like, “How often do you take 
          pictures with a filter on?” could be integrated into a poll feature where yes/no buttons can be clicked to answer the 
          questions and have the information displayed around the artwork as the user continues to interact with it. This feature
           would, of course, be limited to my coding ability and time constraints. 
          </Typography>
          <Typography>
            References:
          </Typography>
          <Typography>
            
          </Typography>
          <Typography>
            
          </Typography>
          <Typography>
            
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


