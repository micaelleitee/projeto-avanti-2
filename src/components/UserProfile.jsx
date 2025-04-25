import React from "react"
import "../css/UserProfile.css"

function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <div className="profile-header"></div>

      <div className="profile-content">
        <div className="profile-avatar">
          <img
            src={user.avatar_url}
            alt={`${user.name || user.login}'s avatar`}
          />
        </div>

        <div className="profile-info">
          <h2>{user.name || user.login}</h2>
          {user.bio && <p className="profile-bio">{user.bio}</p>}
        </div>
      </div>
    </div>
  )
}

export default UserProfile
