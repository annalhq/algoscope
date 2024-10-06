import React from 'react';
import { UserCircle } from 'lucide-react';

interface TeamMember {
  name: string;
  Algorithm: string;
  photo: string;
}

const teamMembers: TeamMember[] = [
  { name: 'Annalhq Shaikh', Algorithm: 'SSSP', photo: '/images/1.jpeg' },
  { name: 'Aarsh Vaidya', Algorithm: 'Stacks', photo: '/images/2.jpeg' },
  { name: 'Aryan Nakil',Algorithm: 'Sorting', photo: '/images/3.jpg' },
  { name: 'Atharva Kulkarni',Algorithm: 'Hashing', photo: '/images/4.jpg' },
];

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-4xl font-bold mb-6 flex justify-center py-5">ALGOSCOPE</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">About the Project</h2>
        <p className="text-lg">
        <b>Algoscope</b> is an educational platform designed to simplify the learning of data structures and algorithms. The project focuses on enhancing understanding through interactive visualizations, allowing users to see algorithms in action. To assess progress, we provide pre and post tests, along with comprehensive theory and resources.
        This project aims to create an engaging and effective learning experience for students and developers, ensuring mastery of fundamental computer science concepts.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 ">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-4">
              {member.photo ? (
                <img 
                  src={member.photo} 
                  alt={member.name} 
                  className="w-24 h-24 rounded-full object-cover"
                />
              ) : (
                <UserCircle size={96} className="text-gray-400" />
              )}
              <div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.Algorithm}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;