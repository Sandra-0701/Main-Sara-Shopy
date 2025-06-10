import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import Image from "next/image";

export default function OurTeam() {
  const teamMembers = [
    {
      name: "Raj Sharma",
      position: "Founder & CEO",
      description:
        "With over 15 years in retail, Raj's vision and leadership drive our mission to revolutionize grocery shopping.",
      social: [
        { icon: <FaLinkedinIn />, url: "#" },
        { icon: <FaTwitter />, url: "#" },
        { icon: <FaFacebookF />, url: "#" },
      ],
    },
    {
      name: "Priya Patel",
      position: "Operations Director",
      description:
        "Priya ensures our operations run smoothly, from inventory management to last-mile delivery.",
      social: [
        { icon: <FaLinkedinIn />, url: "#" },
        { icon: <FaTwitter />, url: "#" },
        { icon: <FaInstagram />, url: "#" },
      ],
    },
    {
      name: "Arjun Kumar",
      position: "Technology Head",
      description:
        "Arjun leads our tech team, developing innovative solutions to enhance your shopping experience.",
      social: [
        { icon: <FaLinkedinIn />, url: "#" },
        { icon: <FaGithub />, url: "#" },
        { icon: <FaTwitter />, url: "#" },
      ],
    },
    {
      name: "Sara Mehta",
      position: "Quality Assurance",
      description:
        "Sara ensures that every product meets our strict quality standards before reaching you.",
      social: [
        { icon: <FaLinkedinIn />, url: "#" },
        { icon: <FaInstagram />, url: "#" },
        { icon: <FaFacebookF />, url: "#" },
      ],
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-green-600 mb-8 text-center relative pb-2">
        Meet Our Team
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-green-600"></span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm p-5 text-center"
          >
            <div className="w-32 h-32 mx-auto mb-4 relative rounded-full overflow-hidden">
              <Image
                src={`https://via.placeholder.com/150/28a745/FFFFFF?text=${member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}`}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <h4 className="text-lg font-semibold mb-1">{member.name}</h4>
            <p className="text-green-600 text-sm mb-4">{member.position}</p>
            <p className="text-gray-600 text-sm mb-4">{member.description}</p>
            <div className="flex justify-center space-x-3">
              {member.social.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-green-600 hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
