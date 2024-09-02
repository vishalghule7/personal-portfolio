export const Header = () => {
  return (
    <div className="left-1/2 transform -translate-x-1/2 fixed top-6 z-10">
      <nav className=" flex gap-0.5 border border-white/15 rounded-full bg-white/10 backdrop:blur">
        <a className="nav-item" href="#">Home</a>
        <a className="nav-item" href="#">Project</a>
        <a className="nav-item" href="#">About</a>
        <a className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-700" href="#">Contact</a>
      </nav>
    </div>
  )
};
