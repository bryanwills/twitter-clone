import Sidebar from '../components/Sidebar/Sidebar';
import Suggestions from '../components/Suggestions/Suggestions';

const Home = () => {
  return (
    <div className="main">
      <Sidebar />
      <Suggestions />
    </div>
  );
};

export default Home;
