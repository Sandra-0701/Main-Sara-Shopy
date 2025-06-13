import {
  FaLeaf,
  FaTruck,
  FaHandsHelping,
  FaRecycle,
  FaTags,
  FaUserShield,
} from "react-icons/fa";

export default function OurValues() {
  const values = [
    {
      icon: <FaLeaf className="text-4xl text-[#ffd400] mb-5" />,
      title: "Freshness Guaranteed",
      description:
        "We source our products directly from local farms and suppliers, ensuring that you receive the freshest groceries possible. Our quality control team checks every item before it reaches you.",
    },
    {
      icon: <FaTruck className="text-4xl text-[#ffd400] mb-5" />,
      title: "Speedy Delivery",
      description:
        "We understand the value of your time. That's why we've invested in an efficient delivery system that brings your groceries to your doorstep within minutes of ordering.",
    },
    {
      icon: <FaHandsHelping className="text-4xl text-[#ffd400] mb-5" />,
      title: "Community Support",
      description:
        "We believe in supporting local communities. By partnering with local farmers and producers, we help sustain local economies and reduce our carbon footprint.",
    },
    {
      icon: <FaRecycle className="text-4xl text-[#ffd400] mb-5" />,
      title: "Sustainability",
      description:
        "We're committed to environmentally friendly practices, from sourcing products to packaging and delivery. Our eco-friendly bags and packaging materials are biodegradable.",
    },
    {
      icon: <FaTags className="text-4xl text-[#ffd400] mb-5" />,
      title: "Affordable Prices",
      description:
        "We believe quality groceries shouldn't break the bank. By eliminating unnecessary middlemen, we offer competitive prices without compromising on quality.",
    },
    {
      icon: <FaUserShield className="text-4xl text-[#ffd400] mb-5" />,
      title: "Customer First",
      description:
        "Your satisfaction is our priority. Our dedicated customer service team is available 24/7 to address your concerns and ensure a seamless shopping experience.",
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-[#ffd400] mb-8 text-center relative pb-2">
        Our Values
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-[#ffd400]"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((value, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm p-6 text-center"
          >
            {value.icon}
            <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
            <p className="text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
