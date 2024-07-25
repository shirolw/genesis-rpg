import { Fragment, PropsWithChildren } from "react";
import { RecoilRoot } from "recoil";
import Universe from "../common/applicationBackground/Universe";

type TBackground = "universe" | "none";

interface IDefaultLayoutProps extends PropsWithChildren {
  backgroundType?: TBackground;
}

const BACKGROUND: Record<TBackground, JSX.Element> = {
  none: <Fragment />,
  universe: <Universe />,
};

export default function DefaultLayout({
  children,
  backgroundType = "none",
}: IDefaultLayoutProps): JSX.Element {
  return (
    <RecoilRoot>
      <div className="flex flex-col min-h-screen w-screen max-w-[100vw] overflow-x-hidden relative">
        <div className="grow-0">{/* HEADER SLOT */}</div>

        <div className="grow">{children}</div>

        <div className="grow-0">{/* FOOTER SLOT */}</div>

        {backgroundType !== "none" && (
          <div className="application-background">
            {BACKGROUND[backgroundType]}
          </div>
        )}
      </div>
    </RecoilRoot>
  );
}
