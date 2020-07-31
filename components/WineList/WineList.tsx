import Link from 'next/link';
import { StyledListItem } from './WineList.styles';
import { WineProps } from 'types/index';

interface WineListProps {
  wines?: WineProps[];
}

const WineList = ({ wines }: WineListProps) => {
  if (wines === null || wines === undefined) return;
  return (
    <ul>
      {wines.map((wine, index) => {
        return (
          <StyledListItem key={index}>
            <Link href="/wine/[lotCode]" as={`/wine/${wine.lotCode}`}>
              <a>
                Lot Code: <b>{wine.lotCode}</b>
                <p>{wine.description}</p>
              </a>
            </Link>
          </StyledListItem>
        );
      })}
    </ul>
  );
};

export default WineList;
