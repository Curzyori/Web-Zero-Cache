import Image from "next/image";

interface PreviewImage {
  src: string;
  alt: string;
  caption?: string;
}

interface PreviewProps {
  images: PreviewImage[];
}

export function Preview({ images }: PreviewProps) {
  if (images.length === 0) return null;

  const isGifs = images.every((img) => img.src.endsWith(".gif"));

  return (
    <section className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <div key={index} className="text-center">
              {isGifs ? (
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="mx-auto rounded-xl shadow-lg max-w-full h-auto"
                  unoptimized={image.src.endsWith(".gif")}
                />
              ) : (
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="mx-auto rounded-xl shadow-lg max-w-full h-auto"
                  loading="lazy"
                />
              )}
              {image.caption && (
                <p className="mt-3 text-sm text-foreground/60">{image.caption}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
