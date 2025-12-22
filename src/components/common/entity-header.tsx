import Image from "next/image";

/**
 * Common entity header (for projects, work, education)
 */
function EntityHeader({
  imageSrc,
  title,
  subtitle,
}: {
  imageSrc?: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="grid gap-6">
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={title}
          width={48}
          height={48}
          className="rounded-sm border object-cover size-14"
        />
      )}
      <h3>{title}</h3>
      <p className="text-muted-foreground">{subtitle}</p>
    </div>
  );
}

export default EntityHeader;
