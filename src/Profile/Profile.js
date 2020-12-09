import React from "react";
import Photo from "../Photo/Photo";
import './Profile.css';
const Profile = (props) => {
  console.log(props);
  const {profile} = props;
  return (
    <div style={{height: "500px"}} className="float-left m-2 card w-25 border-secondary">
      <div>
        <Photo image={profile.image} text={profile.fullName} />
      </div>
      <div className="m-2 float-left">
        <p>Phone number: {profile.phoneNumber}</p>
        <p>E-mail: {profile.eMail}</p>
        <p>City: {profile.city}</p>
        <p>Skills:</p>
        <ul>
          {profile.skills.map((skill) => (
            <li>
              {skill.name} - {skill.experience} years
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
