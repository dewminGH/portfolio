'use client';

import * as Styles from './styles';
import { PaddingManagerProps } from './type';

const LayOutPaddingManager: React.FC<PaddingManagerProps> = ({ children }) => {
  return (
    <Styles.LayoutPadding>
      <Styles.LayoutMaxWidth>{children}</Styles.LayoutMaxWidth>
    </Styles.LayoutPadding>
  );
};

export default LayOutPaddingManager;
