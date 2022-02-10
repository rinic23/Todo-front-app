import { withStart } from 'effector-next';
import type { NextPage } from 'next';
import MainPage from '../src/mainPage';
import { pageLoaded } from '../src/mainPage/models';

//@ts-ignore
const enhance = withStart(pageLoaded);

const Home: NextPage = () => {
  return <MainPage />;
};

export default enhance(Home);
