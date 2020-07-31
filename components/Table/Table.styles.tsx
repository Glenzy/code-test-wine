import styled from 'styled-components';

export const StyledSection = styled.section`
  padding: 1rem;
`;

export const StyledTable = styled.table`
  width: 100%;
  display: table;
  margin: 0;
  text-align: left;
`;
export const StyledTableRow = styled.tr`
  display: table-row;
  background: #fff;
  border-bottom: 1px solid lightgrey;
  padding-top: 1rem;
  padding-bottom: 1rem;
  &:hover {
    background: #eee;
  }
`;

export const StyledTableColumn = styled.td`
  margin: 0;
  padding-left: 0.5rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid lightgrey;
`;

export const StyledTableHeader = styled.th.attrs({ scope: 'row' })`
  border-bottom: 1px solid lightgrey;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  h4: {
    font-weight: bold;
  }
`;
