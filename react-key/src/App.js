import styled from 'styled-components';
import { ListOfStatelessComponents } from './ListOfStatelessComponents';
import { ListOfStatefulComponents } from './ListOfStatefulComponents';
import { ListOfStatefulComponentsWithCorrectKeys } from './ListOfStatefulComponentsWithCorrectKeys';

const Container = styled.div`
  width: 95vw;
  height: 100vh;
  display: flex;
  margin: 20px;
`;

const SubLayout = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: 50px;

  button {
    width: 100px;
  }

  div {
    p {
      height: 40px;
      line-height: 40px;
      cursor: pointer;
      margin-bottom: 10px;
      padding-left: 10px;
      border: 1px solid black;
      color: black;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      span {
        flex: 1;
      }
    }
  }
`;

function App() {
  return (
    <Container>
      <SubLayout>
        <h1>Stateless Items</h1>
        <p>
          That's OK to use index as key if items in the list are stateless
          components
        </p>
        <div>
          <ListOfStatelessComponents />
        </div>
      </SubLayout>

      <SubLayout>
        <h1>Stateful Items</h1>
        <p>
          When items in list are stateful components, using index as key will
          cause problem if we change orders of them (add, delete, sort, filter,
          etc.)
        </p>
        <div>
          <ListOfStatefulComponents />
        </div>
      </SubLayout>

      <SubLayout>
        <h1>Stateful Items + Correct Key</h1>
        <p>
          When items in list are stateful components, we should use its unique
          property for key, or generate a unique one if the data itself doesn't
          have any candidate
        </p>
        <div>
          <ListOfStatefulComponentsWithCorrectKeys />
        </div>
      </SubLayout>
    </Container>
  );
}

export default App;
