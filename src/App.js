import styled from 'styled-components';
import {PrimaryButton,SecondaryButton,TertiaryButton} from './components/Button';

const CenterElement = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const App = () => {
  return (
    <CenterElement>
      <PrimaryButton>Primary</PrimaryButton>
      <SecondaryButton>Secondary</SecondaryButton>
      <TertiaryButton>Tertiary</TertiaryButton>
    </CenterElement>
  );
}

export default App;
