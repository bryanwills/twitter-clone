import Search from './Search';
import News from './News';
import './Suggestions.scss';

const Suggestions = () => {
  return (
    <aside className="suggestions">
      <div className="suggestions-container">
        <Search />
        <News />
      </div>
    </aside>
  );
};

export default Suggestions;
