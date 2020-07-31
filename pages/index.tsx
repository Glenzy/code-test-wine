import { GetStaticProps } from 'next';
import { API_ENDPOINT } from 'utilities/constants';
import { StyledMain } from 'styles/GlobalStyles';
import Search from 'components/Search';
import { WineProps } from 'types/index';

interface MainProps {
  wines?: WineProps[];
  error?: string;
}

const Main = ({ wines, error }: MainProps) => {
  if (error) return `${error}`;
  return (
    <StyledMain>
      <h1>Wine Manager 4000</h1>
      <Search wines={wines} />
    </StyledMain>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const result = await (await fetch(`${API_ENDPOINT}/getAllWine`)).json();
    return {
      props: {
        wines: result,
      },
    };
  } catch (error) {
    return {
      props: {
        error: `${error}`,
      },
    };
  }
};

export default Main;
