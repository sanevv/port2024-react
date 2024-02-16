import Main from '../components/section/Main';
import { PortfolioList } from '../data/porfolio';
import { Link, Routes, Route } from 'react-router-dom';

const Portfolio = () => {

  return (
    <Routes>
      <Main
        title = "포트폴리오"
        description="포트폴리오 페이지입니다.">
        <section id='porfolioPage'>
          {PortfolioList.map((pf, key) => (
                <div className='pf__inner' key={key}>
                    <div className='pf__thumb play__icon'>
                        <Link to={pf.page}>
                            <img src={pf.img} alt={pf.title} />
                        </Link>
                    </div>
                    <div className='pf__text'>
                        <span className='pf'>pf!</span>
                        <h3 className='title'>
                            <Link to={pf.page}>{pf.title}</Link>
                        </h3>
                        <p className='desc'>{pf.desc}</p>
                        <div className='info'>
                            <span className='author'>
                                <Link to={`/channel/${pf.channelId}`}>{pf.author}</Link>
                            </span>
                            <span className='date'>{pf.date}</span>
                        </div>
                    </div>
                </div>
            ))}
        </section>
      </Main>
    </Routes>
  );
};

export default Portfolio;