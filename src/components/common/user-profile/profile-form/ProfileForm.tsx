import type React from "react";
import type { UserProfileType } from "../profileData";

export function ProfileForm({
    profile,
    setProfile
}: {
    profile: UserProfileType;
    setProfile: React.Dispatch<React.SetStateAction<UserProfileType>>;
}) {
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProfile({ ...profile, name: e.target.value });
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProfile({ ...profile, email: e.target.value });
    };

    const handleBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setProfile({ ...profile, bio: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`Profile Updated!\nName: ${profile.name}\nEmail: ${profile.email}`);
    };

    return (
        <form className="profile-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    type="text"
                    value={profile.name}
                    onChange={handleNameChange}
                    placeholder="Enter your name"
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    type="email"
                    value={profile.email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="bio">Bio:</label>
                <textarea
                    id="bio"
                    value={profile.bio}
                    onChange={handleBioChange}
                    placeholder="Tell us about yourself"
                    rows={5}
                />
            </div>

            <button type="submit" className="submit-btn">
                Update Profile
            </button>
        </form>
    );
}
