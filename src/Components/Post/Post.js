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
        subheader="1 HOUR AGO" // change
      />
      <CardMedia
        component="img"
        height="194"
        image="./Icons/glitter.jpg" //change
        
        alt="Post Image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Net/Web Art Analysis - Tapered Analysis
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
          The act of getting your haircut is a very intimate “thing”. It is a culture
           that fosters a community where Barbers don’t just cut hair. Their clients see 
           them as confidants – therapists almost – whom they are able to share the most 
           intimate details of their lives with. Marvin Church, who holds numerous titles 
           as barber, educator, and influencer, describes barbershops as “safe havens” 
           where your barber is someone you can confidently share with (Moratto, 2021).
          </Typography>
          <Typography paragraph>
          The environment of barbershops stays the same as multiple generations go to the 
          same barber Tapered Throne by Brandon Tauszik is a set of black and white GIF 
          images that gives viewers an intimate look into the lives of African American barbers. 
          </Typography>
          <Typography paragraph>
          The “portrait of oakland’s black barbers“ highlights the numerous roles played by 
          these barbers in the development and sustenance of the black community outside of 
          making a living. They are a hub of storytelling, comradery, and authentic expression. 
          The accompanying essay “Tapered Throne Introduction” by Quincy T. Mills, Ph.D provides
           an insightful and informative analysis of Tauszik’s project by further elaborating on 
           the value of barbers in the black community. I believe Tapered Throne functions well 
           as net/web art as it brings a deeper dimension to the traditional black and white 
           photograph. The project is about black barbers and the kinds of relationships they 
           foster with their clients and other black people in the community. For them, being a 
           barber is not just about cutting hair but providing a space where people can come and 
           express themselves freely and revel in their ‘blackness’. The author of the book 
           “You Next”, Antonio Johnson notes that “these were more than just places to get a trim”. 
           The setting is in Oakland, California; a place that residents have described as taken 
           over by crime and poverty.
          </Typography>
          <Typography paragraph>
          The GIFs, that depict barbers from different barber shops around Oakland, are accompanied 
          by a caption by the featured barber and a profile that lists their name, shop, the year the
           portrait was captured and the number of frames that make up the gif. Some of the themes 
           that appear throughout the portraits include the passion and skill that comes with cutting
            black hair. It is not seen as just skilled labour but an art.
          </Typography>
          <Typography paragraph>
          I believe the seamless loop of the gifs mimics the up and down rhythmic strokes of the hair clippers.
          All the GIFs are captured in black and white which helps to bring attention to the subjects of the 
          image without the distraction of colour (Rehman, 2021). It encourages the viewer to pause and look at
           the composition and feel the emotions captured in the frame.
           “Barbers tend to look like the boys they serve…” - Alvin Irby.
           The building of a community where generations of clients get their hair cut at one shop is not
          uncommon. Sometimes the clients go on to become the barbers themselves which results in a holistic experience of
          knowing what it is like to be in the chair and to hold the clippers.
          </Typography>
          <Typography paragraph>References:</Typography>
          <Typography paragraph>
            Dawson, M. (2020). Why the culture of black barbershops is so important. Available at: 
            https://nypost.com/2020/09/05/why-the-culture-of-black-barbershops-is-so-important/ (Accessed 09 March 2022).
          </Typography>
          <Typography paragraph>
            Mills, T. (2015). Tapered Throne Introduction. Available at: http://taperedthrone.com/ (Accessed 09 March 2022).
          </Typography>
          <Typography paragraph>
            Moratto, A. (2021). Black Barbershops: Much More Than a PLace to Get a Haircut. Available at: 
            https://www.modernsalon.com/1072854/black-barbershops-much-more-than-a-place-to-get-a-haircut (Accessed 09 March 2022).
          </Typography>
          <Typography paragraph>
            Rehman, R. (2021). Black and White Photography Advantages and Disadvantages. Available at: 
            https://www.thecubicfeetdesign.com/blog/black-and-white-photography-advantages-and-disadvantages/ (Accessed 09 March 2022).
          </Typography>
          <Typography paragraph>
            Tauszik, B. (2015). Tapered Throne. Available at: http://taperedthrone.com/ (Accessed 09 March 2022).
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


