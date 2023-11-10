import { Input } from "@/components/ui/input";
import React from "react";

const Profile = () => {
  return (
    <div>
      <h1>Update Profile</h1>
      <form>
        <div>
          <label>Name</label>
          <Input type="text" />
        </div>
        <div>
          <label>Email</label>
          <Input type="text" />
        </div>
        <div>
          <label>Password</label>
          <Input type="password" />
        </div>
        <div>
          <label>Confirm Password</label>
          <input type="password" />
        </div>
        <div>
          <label>Gender</label>
          <select>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Profile;
