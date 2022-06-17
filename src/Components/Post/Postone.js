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
          Design and Aesthetics
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
          1. Invisible design elements
          </Typography>
          <Typography paragraph>
          Net artists have used the net as a medium and created for the web itself, 
          not just for display purposes (Park, 2007). How I have come to understand 
          this is that net art cannot exist outside of the web. For example, the format
           of a GIF cannot exist without the web. There are similar ways in which they 
           can be displayed, such as videos (mp4s), but the way artists such as 
           Tauszik (Tapered Throne) have compiled their art means that the impact of their 
           work would lose its efficacy if exhibited offline. 
           Glitch art is a perfect example of the internet being used as material and canvas 
           (Park, 2007). Elements of the web are turned into elements of art that are changed, 
           broken and redefined to create something new. The art itself subverts the idea that
            different forms on the net are unchangeable programmed components (Park, 2007) 
            because artists are able to go into the programming itself manipulating it into 
            something new that can be viewed as art.
          </Typography>
          <Typography paragraph>
          2. Collaborative participation
          </Typography>
          <Typography paragraph>
          The internet has allowed artists on opposite ends of the globe to participate as well
           as audiences from different parts of the world being able to view and participate in 
           these interactive experiences. Audiences become contributors to the artworks, thus, 
           blurring the line between artist and viewer. The user’s participation in the artwork 
           is all part of the process (Park, 2007) as the artwork would not exist without the 
           interactive component. An example of this is World of female avatars. A public call 
           for women to submit pictures of their body and personal statements about their bodies 
           was used to create a digital collage with accounts from women from different cultural 
           backgrounds around the world. By having the participants as a part of the artwork, the 
           artists are able to simultaneously create and disseminate the information which gives 
           the users power to control it due to their intrinsic role as the material, the subject 
           and object of the art (Park, 2007).
          </Typography>
          <Typography>
          3. Anarchic structure
          </Typography>
          <Typography paragraph>
          The importance of communication of net art is not simple communication to deliver 
          information but share experiences online without restrictions (Park, 2007).
          </Typography>
          <Typography paragraph>
          “Man With a Movie Camera: The Global Remake is a participatory video shot by people around 
          the world who are invited to record images interpreting the original script of Vertov's Man 
          With A Movie Camera and upload them to this site.
        Software developed specifically for this project archives, sequences and streams the submissions as a 
        film. Anyone can upload footage. When the work streams your contribution becomes part of a worldwide 
        montage, in Vertov's terms the decoding of life as it is.
          </Typography>
          <Typography paragraph>
          THE MOVIE
          </Typography>
          <Typography paragraph>
          Everyday a new version of the movie is built. On the left is Vertov's original. On the right 
          is a shot uploaded from a participant. The uploaded shots are rotated each day if there is more
           than one. So the built movie may never be quite the same.” (net-art).
            In the case of “Man With A Movie Camera”, all participants are equal contributors as artists. 
            There is no clear definition of artist and audience as it melts into an online interactive experience 
            (Park, 2007).
          </Typography>
          <Typography paragraph>
          4. Non-linear communication
          </Typography>
          <Typography paragraph>
          Many net artists have explored the non-linearity of the web in their artworks. Some of their art remains
           ongoing due to the user’s ability to interact with the work and others remain time capsules that remain 
           accessible to users to view by continuously visiting the website or being able to download parts of it 
           (Park, 2007).
          </Typography>
          <Typography paragraph>
          It’s doing it is an online group exhibition of computer-generated images that autonomously updates on a 
          daily basis over the course of 45 days (itsdoingit, 2015). Users have the option of following their Facebook 
          and Twitter accounts to get updates on the generated images. There is also a dropdown menu on the website 
          that let’s users browse through previous exhibition dates.
          </Typography>
          <Typography paragraph>
          References:
          </Typography>
          <Typography paragraph>
          Bard, P. (2007). Man With A Movie Camera. Available at: https://artbase.rhizome.org/wiki/Q4102 (Accessed 25 April 2022).
          </Typography>
          <Typography paragraph>
          Ferriss, A., Parrish, A., Schwarz, D., Wicks, D., Haider, G., Hollenbach, K., Dorfelt, M., Nobrega, M., Mendoza, N. (2016).
           Available at: https://www.itsdoing.it/ (Accessed 25 April 2022).
          </Typography>
          <Typography paragraph>
          Kodzoman, J., Stermitz, E., Perkovic, L., Zbigniew, L. (). World Of Female Avatars. Available at:
           https://world-of-female-avatars.net/main.html (Accessed 25 April 2022).
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


