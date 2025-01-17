import { Link } from "react-router-dom";


const Navber = () => {
    return (
        <div className="w-10/12 mx-auto">
        <div className="navbar bg-base-100">
<div className="navbar-start">
<div className="dropdown">
  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
  </div>
  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
  <li className="btn btn-outline btn-success"><Link to="/">Home</Link></li>
  <li><Link to="/listedbooks">Listed Books</Link></li>
  <li><Link to="/pagesbooks">Pages of Books</Link></li>
  </ul>
</div>
<a className="btn btn-ghost text-xl">Book Vibe</a>
</div>
<div className="navbar-center hidden lg:flex">
<ul className="menu menu-horizontal px-1">
<li className="btn btn-outline btn-success"><Link to="/">Home</Link></li>
  <li><Link to="/listedbooks">Listed Books</Link></li>
  <li><Link to="/pagesbooks">Pages of Books</Link></li>
  
</ul>
</div>
<div className="navbar-end">
<a className="btn bg-[#23BE0A]">Sign In </a>
<a className="btn bg-[#59C6D2]">Sign up </a>
</div>

</div>
    </div>
    );
};

export default Navber;