import LayOutPaddingManager from '../layout-padding-manager/layout-padding-manager';
import * as Styles from './styles';

const DeskTopNav = () => {
  return (
    <LayOutPaddingManager>
      <Styles.DeskTopNav>
        <Styles.NavItem>1</Styles.NavItem>
        <Styles.NavItem>1</Styles.NavItem>
        <Styles.NavItem>1</Styles.NavItem>
      </Styles.DeskTopNav>
    </LayOutPaddingManager>
  );
};

export default DeskTopNav;
