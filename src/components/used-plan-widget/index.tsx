import {
  UsedPlanWidgetContainer,
  UsedPlanWidgetProgressBar,
  UsedPlanWidgetTitleContainer,
} from "./styles";

export function UsedPlanWidget() {
  return (
    <UsedPlanWidgetContainer>
      <UsedPlanWidgetTitleContainer>
        <span>Uso do plano</span>
        <p>Seu time já utilizou 80% do plano, de um upgrade!</p>
      </UsedPlanWidgetTitleContainer>

      <UsedPlanWidgetProgressBar>
        <div />
      </UsedPlanWidgetProgressBar>
    </UsedPlanWidgetContainer>
  );
}
