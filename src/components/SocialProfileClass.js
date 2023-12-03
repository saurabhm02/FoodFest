import { Component } from "react";
import { SiLinkedin , SiGithub, SiInstagram, SiTwitter  } from "react-icons/si";
import {
    Git_link,
    Linkedin_Link,
    Insta_link,
    Twitter_Link,
} from "../config";

class SocialProfileClass extends Component {
  constructor(props) {
    super(props);
    // console.log("SocialProfileClass child constructor");
  }

  async componentDidMount() {
    // console.log("SocialProfileClass child componentDidMount");
  }

  componentDidUpdate() {
    // console.log("SocialProfileClass child componentDidUpdate");
  }

  componentWillUnmount() {
    // console.log("SocialProfileClass child componentWillUnmount");
  }

  render() {
    // console.log("SocialProfileClass child render");
    return (
      <div className="social-media-container ">
        <a
          href={Git_link}
          className="icon-button github  "
          target="_blank"
           >
          <i >
            <SiGithub/>
          </i>
        </a>

        <a
          href={Linkedin_Link}
          className="icon-button linkedin"
          target="_blank"
        >
          <i>
            <SiLinkedin />
          </i>
        </a>

        
        <a href={Twitter_Link} className="icon-button twitter" target="_blank">
          <i>
            <SiTwitter />
          </i>
        </a>

        <a href={Insta_link} className="icon-button instagram" target="_blank">
          <i>
            <SiInstagram />
          </i>
        </a>
      </div>
    );
  }
}

export default SocialProfileClass;