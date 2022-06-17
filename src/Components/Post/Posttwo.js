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
        subheader="JUNE 9, 2022" // change
      />
      <CardMedia
        component="img"
        height="194"
        image="./Icons/glitter.jpg" //change
        
        alt="Post Image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Internet, society and design justice
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
          <Typography paragraph>Decolonising technology</Typography>
          <Typography paragraph>
          My experience with a need for decolonising technology is how I have seen that 
          AR filters on platforms like Snapchat and Instagram more so do not cater to black
           audiences. A person cannot adjust their skin tone and the default remains at a 
           setting where the person appears paler. Morgan Jerkins has emphasised how such a 
           change has “both racial and cultural implications” (Mulaudzi, 2017). It further 
           perpetuates colorism within ethnic communities by reinforcing that having Westernized 
           features such as lighter skin and a thin nose are better than ethnic ones.
          </Typography>
          <Typography paragraph>
          Colorism, which has been long prevalent in print media, has found itself seeping into 
          the digital space such as platforms like Snapchat, Instagram and now TikTok where whiter 
          faces are promoted more than darker ones (Appelman, 2021). An experience of mine was with 
          hair-changing colour filters that do not take black hairstyles into account. The filters 
          broke or did not render well on black hairstyles like braids, bantu knots and afros which 
          further led to an othering experience and exclusion. I tested this theory of mine by trying 
          the same hair colour filters when I had my hair straightened or had a straight-hair weave. 
          I found that the filters rendered better with full coverage of my hair and with brighter 
          colours. Buolamwini (2019) further elaborates on this bias in artificial intelligence by 
          noting how facial analysis software fails to detect darker skinned people due to these systems 
          being tested on predominantly white males (Buolamwini, 2019).
          </Typography>
          <Typography paragraph>
          Black people cannot use certain filters or have to conform to a Westernized appearance in order 
          to use these filters. This means that only hairstyles that conform to a Western appearance like 
          straight hair weaves and wigs will ensure efficacy in the use of the filter. ‘Beautify’ filters 
          are not excluded. Whereas hairstyles can easily be changed and adapted because how black people 
          choose to wear their hair does not determine their level of “blackness”, makeup filters do not 
          allow for such room and adaptability.  It is prevalent especially among Snapchat filters for there 
          to be skin lightening effects. Snapchat has remained a topic of controversy due to some of their 
          filters having whitewashed effects. Many users have noticed how filters like the flower crown and 
          pink flower crown not only lighten people of colour's skin tone but alter their features to suit 
          Western standards of beauty (Sherrington in Mulaudzi, 2017). The nose is slimmed down and on some 
          occasions even the lips. Some of the filters go as far as altering the eye colour to a bluish hue.
          </Typography>
          <Typography paragraph>
          This kind of exclusion forces us to question who these systems truly serve and how much does a person
           have to change themselves to function with technological systems that increasingly govern our lives 
           (Buolamwini, 2019). Not only that but how can these systems be fixed to avoid the harmful effects that 
           they have on people of colour.
          </Typography>
          <Typography paragraph>
            References:
          </Typography>
          <Typography paragraph>
          Appelman, N. (2021). Photo filters are keeping colorism alive. Available at: 
          https://racismandtechnology.center/2021/10/01/photo-filters-are-keeping-colorism-alive/ (Accessed 19 April 2022).
          </Typography>
          <Typography paragraph>
          Buolamwini, J. (2019). Artificial Intelligence Has a Problem With Gender and Racial Bias. Here’s How to Solve It. 
          Available at: https://time.com/5520558/artificial-intelligence-racial-gender-bias/ (Accessed 19 April 2022).
          </Typography>
          <Typography paragraph>
          Mulaudzi, M. (2017). Let’s Be Honest: Snapchat Filters Are A Little Racist. Available at: 
          https://www.huffingtonpost.co.uk/2017/01/25/snapchat-filters-are-harming-black-womens-self-image_a_21658358/ (Accessed 19 April 2022).
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


