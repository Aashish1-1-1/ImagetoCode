export default function Footer() {
  return (
    <div className="bg-neutral-800 fixed bottom-0 w-full flex justify-between items-center py-4 px-6">
      <div className="flex items-center space-x-4">
        <ul className="flex space-x-4">
          <li>
            <a className="text-white hover:text-gray-300" href="/about">Copyright@2024</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

