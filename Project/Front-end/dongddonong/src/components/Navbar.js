import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-20 border-black border-b">
      <div class="flex justify-between items-center h-20 max-w-7xl mx-4 mb:m-auto">
        <Link to="/">
          <img
            className="h-14"
            src={`${process.env.PUBLIC_URL}/logo.png`}
            alt="로고"
          />
        </Link>
        <ul class="w-1/2 flex justify-between md:w-1/3">
          <li className="hidden md:block">홈</li>
          <Link to="/game">
            <li className="transition-all border-b border-white duration-500 hover:border-orange">
              경기
            </li>
          </Link>
          <li className="transition-all border-b border-white duration-500 hover:border-orange">
            기록실
          </li>
          <li className="transition-all border-b border-white duration-500 hover:border-orange">
            로그인
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
