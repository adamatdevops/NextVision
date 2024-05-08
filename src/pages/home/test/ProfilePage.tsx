import { useParams } from "react-router-dom";

export default function ProfilePage() {
    const params = useParams();

    return (
        <div>
            <h1>Profile {params.profileId}</h1>
            <p>Welcome to your profile page.</p>
        </div>
    );
}