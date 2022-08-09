import React from "react";

// Components:
import GradientLayout from "../components/gradientLayout";

const Home = () => {
  return (
    <GradientLayout
      color="red"
      subtitle="profile"
      title="Some Name"
      description="10 public playlists"
      image="https://dl.dropboxusercontent.com/s/bgiv0ssz3xpotz9/peep.png?dl=0"
      roundImage
    >
      <div>Home Page</div>
    </GradientLayout>
  );
};

export default Home;
