import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error( error );

    return (
        <div id="error-page">
            Sorry, an unexpected error has occurred.
                <Link to="/">Return to the home page</Link>
        </div>
    );
}