import Image from "next/image";

const Profile = () => {
  const services = [
    { link: "/sr-1.jpg", name: "Service 1" },
    { link: "/sr-4.jpg", name: "Service 4" },
    { link: "/sr-2.jpg", name: "Service 2" },
    { link: "/sr-3.jpg", name: "Service 3" },
    { link: "/sr-5.jpg", name: "Service 5" },
  ];
  return (
    <section
      id="profile"
      className="flex flex-col items-center lg:items-start gap-10 py-8 lg:py-16 md:gap-28 xl:flex-row mb-4 max-w-6xl mx-auto px-4 lg:px-0"
    >
      <Image
        src="/profile-muaz.jpeg"
        alt="Profile"
        width={640}
        height={640}
        className="rounded-full w-64 h-64 md:w-64 md:h-64 lg:w-64 lg:h-64 flex justify-center items-center object-cover"
      />

      <div>
        <h1 className="text-4xl font-bold mb-4">MUAZ MAAROF (HT001432)</h1>
        <div className="font-bold">YOUR COWAY PARTNER</div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          dolorum quasi laborum, laboriosam ratione qui animi reprehenderit
          quod! Consequuntur officiis consectetur, animi nobis exercitationem
          rem at placeat minima cupiditate laborum neque perspiciatis assumenda
          impedit et ea, minus ipsam quia explicabo modi obcaecati ab officia
          laudantium recusandae. Illo repudiandae eius modi.
        </div>
        <div className="flex mt-8 gap-8 elipsis overflow-x-auto">
          {services.map((service, index) => (
            <Image
              className="w-auto object-cover rounded-sm"
              src={service.link}
              alt={service.name}
              width={150}
              height={150}
              key={index}
            />
          ))}
        </div>
        <div className="my-12 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <Image
                  src="/star-1.png"
                  alt="Star"
                  width={20}
                  height={20}
                  key={index}
                />
              ))}
            <span className="text-lg font-bold">5.0</span>
            <span className="text-lg text-gray-500">(1194 Reviews)</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Profile;
