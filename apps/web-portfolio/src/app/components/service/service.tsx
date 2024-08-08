import { HorizontalIconCard, HorizontalIconCardTypes } from '@portfolio/NexUI';
import { LayoutPaddingManager } from '..';
import * as Styles from './styles';

const Service = () => {
  return (
    <LayoutPaddingManager>
      <Styles.Service>
        <Styles.CardBlock>
          <HorizontalIconCard
            cardType={HorizontalIconCardTypes.PORTFOLIO_SERVICE_CARD}
          />
          <HorizontalIconCard
            cardType={HorizontalIconCardTypes.PORTFOLIO_SERVICE_CARD}
          />
          <HorizontalIconCard
            cardType={HorizontalIconCardTypes.PORTFOLIO_SERVICE_CARD}
          />
          <HorizontalIconCard
            cardType={HorizontalIconCardTypes.PORTFOLIO_SERVICE_CARD}
          />
        </Styles.CardBlock>
        service
      </Styles.Service>
    </LayoutPaddingManager>
  );
};

export default Service;
