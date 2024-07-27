import { Fragment, PropsWithChildren } from "react";
import { RecoilRoot } from "recoil";

import Universe from "@/presentation/components/common/applicationBackground/Universe";
import Header from "@/presentation/components/common/Header";

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
        <div className="grow-0">
          <Header />
        </div>

        <div className="grow">
          <main className="w-full max-w-7xl grid-cols-12 mx-auto my-2 px-6 lg:px-10">
            {children}
          </main>
        </div>

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
