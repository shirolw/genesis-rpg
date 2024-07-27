import { ElementType, PropsWithChildren } from "react";

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
  const HeadTag = `${titleLevel}` as ElementType;

  return (
    <div className="glass-card">
      <div>
        <HeadTag className="base-heading versalete">{title}</HeadTag>

        {children}
      </div>
    </div>
  );
}
