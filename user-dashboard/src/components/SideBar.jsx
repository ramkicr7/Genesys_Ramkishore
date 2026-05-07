const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-5 fixed top-16 left-0 hidden md:block">
      <ul className="space-y-4">
        <li className="hover:text-blue-400 cursor-pointer">Home</li>
        <li className="hover:text-blue-400 cursor-pointer">Users</li>
        <li className="hover:text-blue-400 cursor-pointer">Settings</li>
        <li className="hover:text-blue-400 cursor-pointer">Profile</li>
      </ul>
    </aside>
  );
};

export default Sidebar;