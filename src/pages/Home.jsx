import React from 'react';
import Main from '../components/section/Main';
import Portfolio from '../components/contents/Portfolio'
import Today from '../components/contents/Today'
import Intro from '../components/contents/Intro'
import Developer from '../components/contents/Developer'

import { developerText } from '../data/developer';
const Home = () => {
  return (
    <Main>
      <Portfolio />
      <Today />
      <Intro />
      <Developer videos={developerText} title="😪 추천 개발자를 소개합니다." id="developer" />
    </Main>
  );
};

export default Home;