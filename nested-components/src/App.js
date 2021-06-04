import styled from 'styled-components';
import SeperateComponent from './SeperateComponent';
import NestedComponent from './NestedComponent';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const SubLayout = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 20px;
    width: 200px;
  }

  button {
    width: 100px;
  }
`;

function App() {
  return (
    <Container>
      <SubLayout>
        <h1>Avoid: Nested-Declared Component</h1>
        <p>
          React will re-render all inputs when you type, the input will lose
          focus for every single key typed
        </p>
        <NestedComponent />
      </SubLayout>

      <SubLayout>
        <h1>Recommended: Separate Components</h1>
        <p>React won't re-render the whole list, the input still have focus</p>
        <SeperateComponent />
      </SubLayout>
    </Container>
  );
}

export default App;
