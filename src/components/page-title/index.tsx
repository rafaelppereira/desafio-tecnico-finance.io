"use client";

import {
  PageTitleContainer,
  PageTitleDescription,
  PageTitleIconContainer,
} from "./styles";
import styled from "styled-components";
import { HandshakeIcon, PlusIcon } from "lucide-react";

interface PageTitleProps {
  title: string;
  iconName: keyof typeof icons;
  description: string;
}

const icons = {
  HandshakeIcon,
  PlusIcon
}

export function PageTitle({
  title,
  iconName,
  description,
}: PageTitleProps) {

  const Icon = icons[iconName]

  const PageTitleIcon = styled(Icon)`
    width: 1rem;
    height: 1rem;
  `;

  return (
    <div>
      <PageTitleContainer>
        <PageTitleIconContainer>
          <PageTitleIcon />
        </PageTitleIconContainer>

        <h2>{title}</h2>
      </PageTitleContainer>

      <PageTitleDescription>{description}</PageTitleDescription>
    </div>
  );
}
