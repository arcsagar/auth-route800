import { NavLink } from "react-router-dom";
// import "./NavLinkActive.scss";
import styless from './NavLinkButton.module.scss';
const NavLinkButton: React.FC<{
  btName: string;
  btClass?: string;
  btId?: string;
  path: string;
}> = (props) => {
  const { btName, btClass, path, btId } = props;
  const buttonClass = btClass ? btClass : "bg-teal-400 w-32 rounded";

  return (
    <NavLink
    id={btId}
    key={btName}
      to={path}
      activeClassName={styless['navactive']}
      className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold 
      py-2 px-4 rounded-md flex items-center  ${buttonClass} `}
    >
      {btName}
    </NavLink>
  );
};

export default NavLinkButton;
