import * as Styles from './style';

const Main = () => {
  return (
    <Styles.Main>
      <img
        src="/assets/images/background.jpg"
        width="100%"
        alt="image"
        style={{ position: 'absolute', zIndex: '-1' }}
      />
    </Styles.Main>
  );
};

export default Main;
