import Image from "next/image";

export const metadata = { title: "Gallery — Suman Gajurel" };

export default function GalleryPage() {
  const imgs = ["/images/field1.jpg","/images/field2.jpg","/images/lab.jpg","/images/talk.jpg"];
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold">Gallery</h1>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
        {imgs.map(src => (
          <div key={src} className="overflow-hidden rounded-2xl border">
            <Image src={src} alt="" width={800} height={600} className="h-44 w-full object-cover" />
          </div>
        ))}
      </div>
    </main>
  );
}
