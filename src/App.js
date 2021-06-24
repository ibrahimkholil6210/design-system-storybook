import styled from 'styled-components';
import {PrimaryButton,SecondaryButton,TertiaryButton} from './components/Button';

const CenterElement = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 15px;
  flex-wrap: wrap;
`;

const GroupElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 100%;
`;

const App = () => {
  return (
    <CenterElement>
      <GroupElement>
        <PrimaryButton>Primary</PrimaryButton>
        <SecondaryButton>Secondary</SecondaryButton>
        <TertiaryButton>Tertiary</TertiaryButton>
      </GroupElement>
      <GroupElement>
        <PrimaryButton modifiers="small">Primary</PrimaryButton>
        <SecondaryButton modifiers="large">Primary</SecondaryButton>
      </GroupElement>
      <GroupElement>
        <PrimaryButton modifiers={["small","warning", "primaryButtonWarning"]}>Primary</PrimaryButton>
        <PrimaryButton modifiers={["small","success", "tertiaryButtonSuccess"]}>Tertiary Success</PrimaryButton>
        <PrimaryButton modifiers={["large","error", "primaryButtonError"]}>Primary Error</PrimaryButton>
        <PrimaryButton modifiers={["large","error", "tertiaryButtonError"]}>Tertiary Error</PrimaryButton>
        <PrimaryButton modifiers={["large","success","primaryButtonSuccess"]}>Primary</PrimaryButton>
        <SecondaryButton modifiers={["large","warning","secondaryButtonWarning"]}>Secondary</SecondaryButton>
      </GroupElement>
    </CenterElement>
  );
}

export default App;
