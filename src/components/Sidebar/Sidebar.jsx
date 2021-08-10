import Nav from './Nav';
import Btn from '../common/Btn';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import './Sidebar.scss';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Logo className="sidebar__logo" />
      <Nav />
      <Btn classProp="sidebar__btn" text="Tweet" />
    </aside>
  );
};

export default Sidebar;
