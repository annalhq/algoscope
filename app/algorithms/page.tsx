import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="flex justify-center py-20">
        <h1 className="text-4xl font-bold text-black-800">ALGOSCOPE</h1>
      </div>

      {/* About Section */}
      <div className="flex flex-col py-2">
        <h2 className="text-2xl font-bold text-black-800">About Us</h2>
        <p className="text-lg text-gray-600">
          <b>Algoscope</b> is an educational platform designed to simplify the
          learning of data structures and algorithms. The project focuses on
          enhancing understanding through interactive visualizations, allowing
          users to see algorithms in action. To assess progress, we provide pre
          and post tests, along with comprehensive theory and resources. This
          project aims to create an engaging and effective learning experience
          for students and developers, ensuring mastery of fundamental computer
          science concepts.
        </p>
      </div>

      {/* Team Members Section */}
      <div className="flex flex-wrap justify-center py-20">
        <h2 className="text-2xl font-bold text-black-800">Our Team</h2>
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-4 py-10">
          <TeamMember
            className="shadow-md hover:shadow-lg transition duration-300 ease-in-out hover:scale-110"
            name="Aarsh Vaidya"
            algorithm="Stacks"
            image="https://via.placeholder.com/150"
          />
          <TeamMember
            className="shadow-md hover:shadow-lg transition duration-300 ease-in-out"
            name="Annalhq Shaikh"
            algorithm="SSSP"
            image="https://via.placeholder.com/150"
          />
          <TeamMember
            className="shadow-md hover:shadow-lg transition duration-300 ease-in-out"
            name="Aryan Nakil"
            algorithm="Sorting"
            image="https://via.placeholder.com/150"
          />
          <TeamMember
            className="shadow-md hover:shadow-lg transition duration-300 ease-in-out"
            name="Atharva Kulkarni"
            algorithm="Hashing"
            image="https://via.placeholder.com/150"
          />
        </div>
      </div>
    </div>
  );
};

const TeamMember = ({
  name,
  algorithm,
  image,
  className,
}: {
  name: string;
  algorithm: string;
  image: string;
  className: string;
}) => {
  return (
    <div className={`flex flex-col items-center py-10 ${className}`}>
      <img src={image} alt={name} className="w-24 h-24 rounded-full" />
      <h3 className="text-lg font-bold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-600">{algorithm}</p>
    </div>
  );
};

export default HomePage;
