import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    useEffect(() => {
        document.querySelector("html").setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    return (
        <div>
            <button onClick={toggleTheme} className="btn btn-ghost btn-circle" aria-label="Toggle Theme">
                {theme === 'light' ?
                    (<MdDarkMode  className="text-gray-700" size={22} />)
                    :
                    (<MdLightMode  className="text-yellow-400" size={22} />)}
            </button>
        </div>
    );
};

export default ThemeToggle;