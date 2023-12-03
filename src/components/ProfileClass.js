import { Component } from "react";
import ProfileUserClass from "./ProfileUserClass";
import ProfileRepoClass from "./ProfileRepoClass";
import { Github_UserApi, 
  Github_UserName,
   options 
  } from "../config";


class Profile extends Component{
  constructor(props){
    super(props);
    this.state = {
      UserInfo:{
        name: "",
        bio: "",
      },
    };
  }

  async componentDidMount(){
    const data = await fetch(Github_UserApi + Github_UserName , options);  // for fething data from gitthub
    const json = await data.json();
    this.setState({
      UserInfo:json,
    });

  }


  componentDidUpdate(){

  }

  render(){
    const {UserInfo} = this.state;
    return (
      <div className="ProfileClass-container">
        <div className="prof-container">
          <h1 className="Profile-title font-bold">My Stuff</h1>
          <ProfileUserClass data={UserInfo} />

        </div>

        <div className="Repository-container">
          <h1 className="repo-title"> Food<span>Fest</span> App Repository</h1>
          <ProfileRepoClass repos = {UserInfo.repos} />
        </div>
      </div>
    )
    
  }
}

export default Profile;