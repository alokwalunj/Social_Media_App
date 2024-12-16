import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts"

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://www.google.com/imgres?q=nature%20images&imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fthumbnails%2F024%2F669%2F489%2Fsmall_2x%2Fmountain-countryside-landscape-at-sunset-dramatic-sky-over-a-distant-valley-green-fields-and-trees-on-hill-beautiful-natural-landscapes-of-the-carpathians-generative-ai-variation-5-photo.jpeg&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-photos%2Fbeautiful-nature&docid=HyNOtmNBwQ7y2M&tbnid=0AMPLwJAXBqAdM&vet=12ahUKEwiQvKSTw6qKAxWXwvACHR9rAdMQM3oECHwQAA..i&w=714&h=400&hcb=2&ved=2ahUKEwiQvKSTw6qKAxWXwvACHR9rAdMQM3oECHwQAA"
          alt=""
          className="cover"
        />
        <img
          src="https://www.google.com/imgres?q=nature%20images&imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fthumbnails%2F024%2F669%2F489%2Fsmall_2x%2Fmountain-countryside-landscape-at-sunset-dramatic-sky-over-a-distant-valley-green-fields-and-trees-on-hill-beautiful-natural-landscapes-of-the-carpathians-generative-ai-variation-5-photo.jpeg&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-photos%2Fbeautiful-nature&docid=HyNOtmNBwQ7y2M&tbnid=0AMPLwJAXBqAdM&vet=12ahUKEwiQvKSTw6qKAxWXwvACHR9rAdMQM3oECHwQAA..i&w=714&h=400&hcb=2&ved=2ahUKEwiQvKSTw6qKAxWXwvACHR9rAdMQM3oECHwQAA"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Jane Doe</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>USA</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>lama.dev</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
      <Posts/>
      </div>
    </div>
  );
};

export default Profile;
