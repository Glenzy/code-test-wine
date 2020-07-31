import { DynamicWineProps } from 'types/index';
import {
  StyledSection,
  StyledTable,
  StyledTableRow,
  StyledTableHeader,
  StyledTableColumn,
} from './Table.styles';

const Table = ({ wine }: DynamicWineProps) => {
  return (
    <StyledSection>
      <StyledTable>
        <tbody>
          {Object.entries(wine).map(([key, value]) => {
            if (key === 'components') return;
            return (
              <StyledTableRow key={key}>
                <StyledTableHeader>{key}</StyledTableHeader>
                <StyledTableColumn>{value}</StyledTableColumn>
              </StyledTableRow>
            );
          })}
        </tbody>
      </StyledTable>
    </StyledSection>
  );
};

export default Table;
