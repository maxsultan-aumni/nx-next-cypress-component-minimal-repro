import Link from 'next/link';
import styled from 'styled-components';
import {add} from '@next-cypress-component/utils'

const StyledSharedComponents = styled.div`
  color: pink;
`;

export function SharedComponents() {
  return (
    <StyledSharedComponents>
      <h1>Welcome to SharedComponents!</h1>
      <Link href="#home">Home {add(1,2)}</Link>
    </StyledSharedComponents>
  );
}

export default SharedComponents;
