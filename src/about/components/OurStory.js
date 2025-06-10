import Image from "next/image";

export default function OurStory() {
  return (
    <section className="mb-12">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold text-green-600 mb-6 relative pb-2">
            Our Story
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-green-600"></span>
          </h2>
          <p className="mb-4">
            Fresh Basket began with a simple idea: to make grocery shopping
            easy, convenient, and affordable for everyone. What started as a
            small local delivery service in 2015 has grown into one of the
            region's most trusted online grocery platforms.
          </p>
          <p className="mb-4">
            Our founder, Raj Sharma, experienced firsthand the challenges of
            balancing work and home life, often struggling to find time for
            grocery shopping. This personal experience sparked the vision for
            Fresh Basket - to create a service that delivers quality groceries
            right to your doorstep, saving you time and effort.
          </p>
          <p>
            Today, we serve thousands of customers daily, connecting local
            farmers and producers with consumers while maintaining our
            commitment to freshness, quality, and sustainability.
          </p>
        </div>
        <div className="lg:w-1/2">
          <Image
            src="https://via.placeholder.com/600x400/28a745/FFFFFF?text=Our+Story"
            alt="Our Story"
            width={600}
            height={400}
            className="rounded-lg w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
