export default function Navbar() {
  return (
    <div className="bg-neutral-800 flex justify-between items-center py-4 px-6">
      <div className="flex items-center space-x-4">
        <img src="./logo.png" alt="Logo" className="h-8" />
      </div>
      <div className="flex items-center space-x-4">
        <ul className="flex space-x-4">
          <li>
            <a className="text-white hover:text-gray-300" href="/">Home</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-300" href="/about">About</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

