import ResourceCard from "@/components/ResourceCard/ResourceCard";

export default function Home() {
  return (
    <div className="w-screen min-h-screen">
      <div className="w-screen relative z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-amber-50 text-5xl font-mono italic">
          {`Let's get it.`}
        </div>
        <img
          alt="main banner"
          src="/banner.png"
          className="w-screen"
          loading="lazy"
        ></img>
      </div>
      <div className="max-w-7xl mx-auto py-16">
        <div className="grid sm:grid-cols-2 sm:gap-2 sm:gap-y-3.5 md:grid-cols-3 md:gap-9 lg:grid-cols-4 lg:gap-9 ">
          <ResourceCard src="/banner.png" alt="img" />
          <ResourceCard src="/banner.png" alt="img" />
          <ResourceCard src="/banner.png" alt="img" />
          <ResourceCard src="/banner.png" alt="img" />
          <ResourceCard src="/banner.png" alt="img" />
          <ResourceCard src="/banner.png" alt="img" />
          <ResourceCard src="/banner.png" alt="img" />
          <ResourceCard src="/banner.png" alt="img" />
          <ResourceCard src="/banner.png" alt="img" />
        </div>
      </div>
    </div>
  );
}
