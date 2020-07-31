import { GetServerSideProps } from 'next';
import { API_ENDPOINT } from 'utilities/constants';
import { StyledMain } from 'styles/GlobalStyles';
import { DynamicWineProps } from 'types/index';
import Table from 'components/Table';
import Button from 'components/Button';
import Charts from 'components/Charts';

interface ComponentsProps {
  byYear: any;
  byVariety: any;
  byRegion: any;
  byYearVariety: any;
}

/**
 *
 * @param wine,
 * @param byYear,
 * @param byVariety,
 * @param byRegion,
 * @param byYearVariety,
 *
 * This is a dynamic routing component. It's currently using getServerSideProps, however with more time
 * I'd like ot set it up using getStaticProps as best practice dictates. There's no major negatives to this method but removes
 * the ability to staticly serve this page via cdn.
 */

const Wine = ({
  wine,
  byYear,
  byVariety,
  byRegion,
  byYearVariety,
}: DynamicWineProps & ComponentsProps) => {
  const a11yLabel = 'Return to the main page';
  return (
    <StyledMain>
      <h1>Lot Code: {wine.lotCode}</h1>
      <Button a11yLabel={a11yLabel} href="/" children="Go back" />
      <Table wine={wine} />
      <h2>Wine Components</h2>
      <Charts data={{ byYear, byVariety, byRegion, byYearVariety }} />
    </StyledMain>
  );
};
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { lotCode } = params;
  try {
    const result = await (await fetch(`${API_ENDPOINT}/getWine/${lotCode}`)).json();
    const byYear = await (await fetch(`${API_ENDPOINT}/getYearBreakdown/${lotCode}`)).json();
    const byVariety = await (await fetch(`${API_ENDPOINT}/getVarietyBreakdown/${lotCode}`)).json();
    const byRegion = await (await fetch(`${API_ENDPOINT}/getRegionBreakdown/${lotCode}`)).json();
    const byYearVariety = await (
      await fetch(`${API_ENDPOINT}/getYearAndVarietyBreakdown/${lotCode}`)
    ).json();
    return {
      props: {
        wine: result,
        byYear: byYear,
        byVariety: byVariety,
        byRegion: byRegion,
        byYearVariety: byYearVariety,
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

export default Wine;
