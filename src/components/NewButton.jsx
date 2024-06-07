import { Link } from "react-router-dom";

export default function NewButton({ children }) {
  return (
    <Link>
      <button className="text-1xl py-2 px-6 mr-2 rounded-full font-bold bg-customBlack text-white hover:bg-customGreen">
        {children}
      </button>
    </Link>
  );
}
