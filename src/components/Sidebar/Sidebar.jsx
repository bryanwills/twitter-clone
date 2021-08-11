import Nav from './Nav';
import Btn from '../common/Btn';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-container">
        <Logo className="sidebar__logo" />
        <Nav />
        <Btn classProp="sidebar__btn" text="Tweet" />
      </div>
    </aside>
  );
};

export default Sidebar;
