import Sidebar from '../components/Sidebar/Sidebar';
import Suggestions from '../components/Suggestions/Suggestions';

const Profile = () => {
  return (
    <div className="main">
      <Sidebar />
      <section>
        <h1>Profile page</h1>
      </section>
      <Suggestions />
    </div>
  );
};

export default Profile;
