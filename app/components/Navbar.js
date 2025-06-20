"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    // if (pathname != "/studio") {
    //     return (
    //         <nav className="" style = {{ background: "var(--navbar-background)" }}>
    //             <div className="h-14 max-w-7xl p-4 mx-auto flex items-center justify-between">
    //                 <ul className="flex items-center justify-end space-x-4 text-lg font-larde">
    //                     <li className="md:hover:underline">
    //                         <Link href="/blog"> grunge history! </Link>
    //                     </li>
    //                     <li className="md:hover:underline">
    //                         <Link href="/photos"> find a new album! </Link>
    //                     </li>
    //                 </ul>
    //             </div>
    //         </nav>
    //     );
    // }
    return (
      <div>
         <button id="toggleBtn" className="md:hidden p-4 bg-gray-800 text-white absolute top-0 left-0 z-10">
          ☰
        </button>

{/* /* className=" w-64 h-full p-4 space-y-2 flex-col absolute md:relative top-0 left-0 transform md:translate-x-0 -translate-x-full transition-transform duration-300 ease-in-out"> */}

        <div id="sidebar" className="bg-[#9DD575] text-white">
          <a href="/about" className="navbar">about me!</a>
          <a href="/experience" className="block px-3 py-2 rounded hover:bg-gray-700">experience!</a>
          <a href="/projects" className="block px-3 py-2 rounded hover:bg-gray-700">projects!</a>
          <a href="/contact" className="block px-3 py-2 rounded hover:bg-gray-700">contact me!</a>
          <br/>
          <div className="flex items-center">
            <p>github</p>
            <p>linkedin</p>
          </div>
          <p>Ava Nunes  &copy; {new Date().getFullYear()}</p>
        </div>
      </div>
       
    )
    
    
}

{/* <script>
    const toggleBtn = document.getElementById('toggleBtn');
    const sidebar = document.getElementById('sidebar');

    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('-translate-x-full');
    });
  </script> */}

