import React from 'react';
import { portfolioList } from '../../data/portfolio';

const Portfolio = () => {
  return (
    <section id="port">
        <div className="port__inner">
            <div className="port__title">
                portfolio <em>포폴 작업물</em>
            </div>
            <div className="port__wrap">
                {portfolioList.map((port, key) => (
                    <article className={`port__item p${key + 1}`} key={key}>
                        <span className="num">{port.num}.</span>
                        <a href={port.code} target="_blank" className="img" rel="noreferrer">
                            <img src={port.img} alt={port.name} />
                        </a>
                        <h3 className="title">{port.title}</h3>
                        <p className="desc">{port.desc}</p>
                        <a href={port.view} target="_blank" className="site" rel="noreferrer">사이트 보기</a>
                    </article>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Portfolio;