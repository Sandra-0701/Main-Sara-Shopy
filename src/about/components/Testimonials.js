import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Fresh Basket has transformed my weekly grocery shopping. The produce is always fresh, and I love that I can get everything delivered within minutes. Their customer service is exceptional!",
      author: "Anita Mehta",
      role: "Loyal Customer Since 2018",
    },
    {
      quote:
        "As a busy professional, I rarely have time for grocery shopping. Fresh Basket's convenient delivery and wide product range have been a life-saver. Their app is intuitive and makes ordering a breeze!",
      author: "Vikram Rao",
      role: "Loyal Customer Since 2020",
    },
    {
      quote:
        "I appreciate Fresh Basket's commitment to sustainability. Their eco-friendly packaging and support for local farmers align perfectly with my values. Plus, their prices are reasonable for the quality they offer.",
      author: "Nisha Sen",
      role: "Loyal Customer Since 2021",
    },
    {
      quote:
        "The variety of products available on Fresh Basket is impressive. From exotic fruits to specialty international items, they have it all. Their 19-minute delivery promise is the cherry on top!",
      author: "Rahul Joshi",
      role: "Loyal Customer Since 2019",
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-green-600 mb-8 text-center relative pb-2">
        What Our Customers Say
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-green-600"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm p-6 relative"
          >
            <span className="absolute top-0 left-2 text-5xl text-gray-200">
              "
            </span>
            <p className="text-lg italic text-gray-700 mb-6 pl-6">
              {testimonial.quote}
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 relative rounded-full overflow-hidden mr-4">
                <Image
                  src={`https://via.placeholder.com/50/28a745/FFFFFF?text=${testimonial.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}`}
                  alt={testimonial.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h5 className="font-medium">{testimonial.author}</h5>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>[]
          </div>
        ))}
      </div>
    </section>
  );
}
