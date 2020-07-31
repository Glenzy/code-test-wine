import { useState } from 'react';
import SearchResults from 'react-filter-search';
import { StyledInput, StyledLabel, StyledInputWrapper } from './Search.styles';
import WineList from 'components/WineList';

const Search = ({ wines }) => {
  const [value, setValue] = useState<string>('');

  return (
    <>
      <StyledInputWrapper>
        <StyledLabel aria-labelledby="filter">Search Filter: </StyledLabel>
        <StyledInput id="filter" value={value} onChange={(e) => setValue(e.target.value)} />
      </StyledInputWrapper>
      <SearchResults
        value={value}
        data={wines}
        renderResults={(results) => <WineList wines={results} />}
      />
    </>
  );
};

export default Search;
