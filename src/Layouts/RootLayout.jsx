import { NavLink, Outlet } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <span>HearthStone</span>
          <NavLink to="/">Home</NavLink>
          <NavLink to="hearthstone">HearthStone</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
