import * as Styles from './style';
import { HorizontalIconCardProps, HorizontalIconCardTypes } from './type';

const HorizontalIconCard: React.FC<HorizontalIconCardProps> = ({
  cardType,
}) => {
  const stylesConfig = () => {
    switch (cardType) {
      case HorizontalIconCardTypes.PORTFOLIO_SERVICE_CARD:
        return {
          width: '260px',
          height: '60px',
          border: '2px solid #FFFFFF',
          background: 'lightblue',
        };
      default:
        return { width: '260px', height: '60px' };
    }
  };
  const stylesList = stylesConfig();
  return (
    <Styles.HorizontalIconCard
      height={stylesList.height}
      width={stylesList.width}
      border={stylesList?.border}
      background={stylesList?.background}
    >
      <Styles.IconContainer>icons</Styles.IconContainer>
      <Styles.DetailsContainer>details</Styles.DetailsContainer>
    </Styles.HorizontalIconCard>
  );
};

export default HorizontalIconCard;
