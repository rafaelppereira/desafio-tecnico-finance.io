import Image from "next/image";
import {
  HeaderContainer,
  SidebarAccountMenuContainer,
  SidebarAccountMenuContent,
  SidebarContainer,
  SidebarContent,
  SidebarContentSeparator,
  SidebarFooterContainer,
  SidebarHeaderContainer,
  SidebarInputSearchContainer,
} from "./styles";
import {
  ChartNoAxesGanttIcon,
  CircleUserIcon,
  LayoutDashboardIcon,
  LifeBuoyIcon,
  LogOutIcon,
  NotepadTextIcon,
  PanelLeftCloseIcon,
  PanelRightCloseIcon,
  SearchIcon,
  Users2Icon,
} from "lucide-react";
import { NavItem } from "../nav-item";

import { useRouter } from "next/navigation";
import { UsedPlanWidget } from "../used-plan-widget";
import { useState } from "react";

export function Sidebar() {
  const router = useRouter();
  const [hasToggleSidebar, setHasToggleSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setHasToggleSidebar(!hasToggleSidebar);
  };

  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    router.push("/sign-in");
  };

  return (
    <>
      <HeaderContainer>
        <button
          type="button"
          onClick={handleToggleSidebar}
          title="Clique para abrir o menu lateral"
        >
          <PanelRightCloseIcon />
        </button>

        {!hasToggleSidebar && (
          <Image
            width={160}
            height={35}
            src="/logo.svg"
            alt="Imagem da logo do Finance.IO"
          />
        )}
      </HeaderContainer>

      <SidebarContainer $hasToggleSidebar={hasToggleSidebar}>
        <SidebarHeaderContainer>
          <Image
            width={160}
            height={35}
            src="/logo.svg"
            alt="Imagem da logo do Finance.IO"
          />

          <button
            type="button"
            onClick={handleToggleSidebar}
            title="Clique para fechar o menu lateral"
          >
            <PanelLeftCloseIcon />
          </button>
        </SidebarHeaderContainer>

        <SidebarContent>
          <SidebarInputSearchContainer>
            <input type="text" placeholder="Pesquisar" />

            <SearchIcon />
          </SidebarInputSearchContainer>

          <nav>
            <NavItem title="Home" icon={LayoutDashboardIcon} url="/" />
            <NavItem
              title="Usuários"
              icon={Users2Icon}
              url="/usuarios"
              isShortly
            />
            <NavItem
              title="Relatórios"
              icon={NotepadTextIcon}
              url="/relatorios"
              isShortly
            />
          </nav>

          <SidebarContentSeparator />

          <nav>
            <NavItem
              title="Gestão"
              icon={ChartNoAxesGanttIcon}
              url="/gestao"
              isShortly
            />
          </nav>

          <SidebarFooterContainer>
            <nav>
              <NavItem
                disabled
                url="/suporte"
                title="Suporte"
                icon={LifeBuoyIcon}
              />
              <NavItem
                disabled
                url="/perfil"
                title="Perfil"
                icon={CircleUserIcon}
              />
            </nav>

            <UsedPlanWidget />

            <SidebarContentSeparator />

            <SidebarAccountMenuContainer>
              <Image
                width={40}
                height={40}
                alt="Image de perfil do Rafael Pereira"
                src="https://github.com/rafaelppereira.png"
              />

              <SidebarAccountMenuContent>
                <h2>Rafael Pereira</h2>

                <span>rafael@rpdesenvolvimentos.com.br</span>
              </SidebarAccountMenuContent>

              <button type="button" onClick={handleLogout}>
                <LogOutIcon />
              </button>
            </SidebarAccountMenuContainer>
          </SidebarFooterContainer>
        </SidebarContent>
      </SidebarContainer>
    </>
  );
}
