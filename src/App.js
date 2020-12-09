import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Profile/Profile';
function App() {
  const createSkillObj = (name, experience) => ({name, experience});
  const createImageObj = (url, alt) => ({url, alt});
  const createProfileObj = (fullName, phoneNumber, eMail, city, skills,image) => ({fullName, phoneNumber, eMail, city, skills, image});
  const skills1 = [createSkillObj('skill1', 2), createSkillObj('skill2', 4), createSkillObj('skill3', 1)];
  const skills2 = [createSkillObj('skill1', 1), createSkillObj('skill2', 3), createSkillObj('skill3', 2), createSkillObj('skill4', 1)];
  const skills3 = [createSkillObj('skill1', 2), createSkillObj('skill2', 1)];
  const image1 = createImageObj('https://cdn.now.howstuffworks.com/media-content/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg', 'photo1');
  const image2 = createImageObj('https://mindbodygreen-res.cloudinary.com/images/w_767,q_auto:eco,f_auto,fl_lossy/usr/RetocQT/sarah-fielding.jpg', 'photo2');
  const image3 = createImageObj('https://www.theglobeandmail.com/resizer/mEimHgpCxc7JB-O0GDRkWpS62_U=/1200x0/filters:quality(80)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/KCRVJFVYN5DQNOKI5YFY4PGAXE.jpg', 'photo3');
  const profile1 = createProfileObj('fullname1', '+380980000000', 'mail1@gmail.com', 'city1', skills1, image1);
  const profile2 = createProfileObj('fullname2', '+380981111111', 'mail2@mail.ru', 'city2', skills2, image2);
  const profile3 = createProfileObj('fullname3', '+380982222222', 'mail3@mail.ru', 'city3', skills3, image3);
 
  return (
    <div>
      <Profile profile={profile1}></Profile>
      <Profile profile={profile2}></Profile>
      <Profile profile={profile3}></Profile>
    </div>
  );
}

export default App;
