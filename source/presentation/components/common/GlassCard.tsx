import { PropsWithChildren, ReactNode } from "react";

type TTitleLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface IGlassCardProps extends PropsWithChildren {
  title: string;

  titleLevel?: TTitleLevel;
}

export default function GlassCard({
  title,
  children,
  titleLevel = "h1",
}: IGlassCardProps): JSX.Element {
  return (
    <div className="rounded-lg bg-primary/90 px-4 py-6 shadow-lg bg-clip-padding backdrop-blur border border-gray-200 w-full">
      <div>
        {title}
        {children}
      </div>
    </div>
  );
}
