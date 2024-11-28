import { Routes, Route } from "react-router-dom";
import {
  Home,
  Explore,
  Saved,
  CreatePost,
  Profile,
  EditPost,
  PostDetails,
  UpdateProfile,
  AllUsers,
} from "@/_root/pages";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import SignupForm from "@/_auth/forms/SignupForm";
import SigninForm from "@/_auth/forms/SigninForm";
import { Toaster } from "@/components/ui/toaster";
import { FaRegSnowflake } from "react-icons/fa";
import Snowfall from "react-snowfall";
import { useState } from "react";
import "./globals.css";

const App = () => {
  const [snowfall, setSnowfall] = useState(false);

  return (
    <main className="flex h-screen">
      
      {snowfall && <Snowfall changeFrequency={200}  snowflakeCount={200} radius={[0.5, 3.6]} wind={[-0.5, 3.0]} />}

      <Routes>
       
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        {/* private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:id" element={<EditPost />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/profile/:id/*" element={<Profile />} />
          <Route path="/update-profile/:id" element={<UpdateProfile />} />
        </Route>
      </Routes>

      <FaRegSnowflake
        onClick={() => setSnowfall(prev => !prev)}
        className="absolute right-4 cursor-pointer text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl"
        style={{ top: "118px" }}
      />



      <Toaster />
    </main>
  );
};

export default App;
