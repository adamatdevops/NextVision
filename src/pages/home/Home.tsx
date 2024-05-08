import { Link } from "react-router-dom";
import GettingStarted from "./GettingStarted";
import Login from "./Login";

export default function HomePage() {
    const homePage = [GettingStarted, Login]

    return (
        <div>
            {homePage.map((home, index) => (
                <Link key={index} to={`/homePage/${home}`} >
                Profile {home}
                </Link>
            ))}
        </div>
    );
}