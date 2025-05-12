import Image from "next/image";
import {
  SidebarContainer,
  SidebarContent,
  SidebarContentSeparator,
  SidebarFooterContainer,
  SidebarInputSearchContainer,
} from "./styles";
import {
  ChartNoAxesGanttIcon,
  CircleUserIcon,
  LayoutDashboardIcon,
  LifeBuoyIcon,
  LogOutIcon,
  NotepadTextIcon,
  SearchIcon,
  Users2Icon,
} from "lucide-react";
import { NavItem } from "../nav-item";
import {
  SidebarAccountMenuContainer,
  SidebarAccountMenuContent,
} from "../nav-item/styles";
import { useRouter } from "next/navigation";

export function Sidebar() {
  const router = useRouter()

  function handleLogout() {
    localStorage.removeItem('auth-token');
    router.push('/sign-in');
  }
  
  return (
    <SidebarContainer>
      <Image
        width={160}
        height={35}
        src="/logo.svg"
        alt="Imagem da logo do Finance.IO"
      />

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
  );
}
