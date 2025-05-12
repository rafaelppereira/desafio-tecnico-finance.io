import { ElementType } from "react";
import { NavLinkContainer, NavLinkShortly } from "./styles";
import { usePathname } from "next/navigation";

interface NavItemProps {
  url: string;
  title: string;
  icon: ElementType;
  disabled?: boolean;
  isShortly?: boolean;
}

export function NavItem({ url, icon: Icon, title, isShortly, disabled }: NavItemProps) {
  const pathname = usePathname()
  const isActive = pathname === url

  return (
    <NavLinkContainer href={isShortly || disabled ? "" : url} $isActive={isActive}>
      <div>
        <Icon />
        <span>{title}</span>
      </div>

      {isShortly && (
        <NavLinkShortly>Em breve</NavLinkShortly>
      )}
    </NavLinkContainer>
  );
}
