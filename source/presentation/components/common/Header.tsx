import { useEffect, useState } from "react";

import useWindowDimensions from "@/presentation/hooks/useWindowDimensions";
import Bars3Icon from "@heroicons/react/24/solid/Bars3Icon";
import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon";
import NavigationList from "./NavigationList";

export default function Header(): JSX.Element {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const { width } = useWindowDimensions();

  function handleOpenSidebar(): void {
    setIsOpenSidebar(true);
  }

  function handleCloseSidebar(): void {
    setIsOpenSidebar(false);
  }

  function handleToggleSidebarVisibility(): void {
    if (isOpenSidebar) {
      handleCloseSidebar();

      return;
    }

    handleOpenSidebar();
  }

  useEffect(() => {
    if (width >= 1024) handleCloseSidebar();
  }, [width]);

  return (
    <div className="header-wrapper">
      <div>
        <p>GenesisRPG</p>

        <header>
          <NavigationList />
        </header>

        {isOpenSidebar && (
          <div className="sidebar-container">
            <NavigationList />
          </div>
        )}

        <button
          className="toggle-button"
          onClick={handleToggleSidebarVisibility}
        >
          {isOpenSidebar && <XMarkIcon className="size-6" />}

          {!isOpenSidebar && <Bars3Icon className="size-6" />}
        </button>
      </div>
    </div>
  );
}
