import './About.css';

function About() {
  const teamMembers = [
    {
      name: 'Shahul',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugit sit quae doloribus asperiores assumenda provident, ipsum quas beatae numquam exercitationem laborum deleniti tempora perspiciatis tempore! Vero modi velit omnis.'
    },
    {
      name: 'Jade',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempore quam expedita repudiandae obcaecati magnam ad consequuntur doloribus similique porro ipsa commodi excepturi, mollitia corporis provident aspernatur aperiam iusto dolorem.'
    },
    {
      name: 'Weijie',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur voluptates, nihil molestias voluptatem ullam tenetur labore repellendus doloremque officiis, unde velit nisi explicabo est pariatur deleniti? Dolorum quod maxime at.'
    }
  ];

  return (
    <div className="about-page">
      <div className="about-container">
        <h1>About Us</h1>
        <h2>Group One</h2>
        {teamMembers.map((member) => (
          <div key={member.name} className="about-member">
            <h3>{member.name}</h3>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
