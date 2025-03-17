import { useState } from "react";
import { auth, updateProfile } from "../auth";  
import "./css/Profile.css";


function Profile() {
    const user = auth.currentUser;
    let username = user.displayName || user.email;

    const [error, setError] = useState('') // Reset error message  
    const [successMessage, setSuccessMessage] = useState(''); // Reset success message  
    const [updateDisplayName, setDisplayName] = useState('');
    const [tempUsername, setTempUsername] = useState(username);
    const [isEditing, setIsEditing] = useState(false);

    const handleUpdate = async (e) => {
        e.preventDefault();
        await updateProfile(user, {
            displayName: updateDisplayName,
        });
        await setDisplayName(tempUsername);
        setIsEditing(false);
    }

    const handleCancel = () => {
        setTempUsername(username);
        setIsEditing(false);
    };

    return (
        <div className="profile-container" style={{height: 1024,}}>
          {/* Avatar */}
          <div className="avatar-wrapper">
            <img
              src={user.photoURL || "../public/ava.jpg"}
              alt="Avatar"
              className="avatar"
            />
          </div>
    
          {/* Email */}
          <p className="email">{user.email}</p>
    
          {/* Username */}
          <div className="username-wrapper">
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={tempUsername}
                  onChange={(e) => setTempUsername(e.target.value)}
                  className="username-input"
                />
                <button onClick={handleUpdate} className="save-button">Save</button>
                <button onClick={handleCancel} className="cancel-button">Cancel</button>
              </>
            ) : (
              <>
                <span className="username-text">{username}</span>
                <button
                  onClick={() => setIsEditing(true)}
                  className="edit-button"
                >
                  ✏️
                </button>
              </>
            )}
          </div>
        </div>
      );

}
export default Profile; 