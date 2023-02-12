import Wrapper from "../assets/wrappers/SmallSidebar";
import { FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../features/user/userSlice";
import NavLinks from "./NavLinks";

const SmallSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user); //niye isSidebarOpen'i destructure ediyoruz burada?
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button
            className="close-btn"
            onClick={() => dispatch(toggleSidebar())}
          >
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks toggle={() => dispatch(toggleSidebar())} />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
