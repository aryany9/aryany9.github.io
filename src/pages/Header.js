import React from 'react';

function Header(props) {
  return (
    <header class="bg-white py-6 fixed w-full top-0 shadow-lg z-10">
      <div class="container mx-auto flex justify-between items-center px-6">
        <a href="#" class="text-xl font-semibold text-black">Aryan Yadav</a>
        <nav>
          <ul class="flex items-center">
            <li>
              <a onClick={() => props.click(props.multiRef[0])} class="text-black hover:text-black  font-semibold px-3 rounded hover:bg-blue-700 hover:cursor-pointer hover:text-white">About Me</a>
            </li>
            <li>
              <a onClick={() => props.click(props.multiRef[1])} class="text-black hover:text-black  font-semibold px-3 rounded hover:bg-blue-700 hover:cursor-pointer hover:text-white">Experience</a>
            </li>
            <li>
              <a onClick={() => props.click(props.multiRef[2])} class="text-black hover:text-black  font-semibold px-3 rounded hover:bg-blue-700 hover:cursor-pointer hover:text-white">Skillset</a>
            </li>
            <li>
              <a onClick={() => props.click(props.multiRef[3])} class="text-black hover:text-black  font-semibold px-3 rounded hover:bg-blue-700 hover:cursor-pointer hover:text-white">Resume</a>
            </li>
            
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;