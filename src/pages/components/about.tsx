import React from 'react';


// const About = () => {
//   return (
//     <p>
//         Someone who loves building things and solving problems, has experience with python and java and web technologies (HTML, JavaScript, CSS), computer networking topics (LAN, WAN, firewalls, server management).
//          {/* I am passionate about learning and enjoy putting my skills to work to create solutions. Outside of tech, i enjoy doing sports such as badminton and bowling or something to fuel my creativity such as photography and even building Lego sets or assembling Gundam models. */}
//     </p>
//   )
// }

// export default About; 
const About = () => {
  const keywords = [
    'Python',
    'Java',
    'HTML/CSS/JS',
    'WAN/LAN infrastructure ',
    'Linux',
    // 'Gaming',
    // 'Bowling',
    // 'Badminton',
    // 'Photography',
  ]

  return (
    <section className="px-8 py-12 mx-auto">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <div className="flex flex-wrap gap-4">
        {keywords.map((word) => (
          <span key={word} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full">
            {word}
          </span>
        ))}
      </div>
    </section>
  )
}

export default About
