import React from 'react';
import pinkSpace from '../images/pink-space.jpg'
import nomanSky from '../images/no-man-sky.jpg';
import dota2 from '../images/dota2.png';

import Card from '../commons/card';

const Home: React.FC = () => {
  const listOfGames = [
    {
      id: 0,
      title: `Dota 2`,
      img: dota2,
      path: 'https://www.dota2.com/home',
      description: `Dota 2 is a multiplayer online battle arena (MOBA) 
      video game in which two teams of five players compete to collectively destroy 
      a large structure defended by the opposing team known as the "Ancient", whilst defending their own.`
    },
    {
      id: 1,
      title: `No Man's Sky`,
      img: nomanSky,
      path: 'https://www.nomanssky.com/about/',
      description: `Inspired by the adventure and imagination that we love from classic science-fiction, No Man's Sky presents 
      you with a galaxy to explore, filled with unique planets and lifeforms, and constant danger and action.`
    },
    {
      id: 2,
      title: `Counter Strike Global Offensive`,
      path: '/',
      img: 'https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg?t=1631908705',
      description: `Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was 
      launched 19 years ago.      `
    },
    {
      id: 3,
      title: `Grand Theft Auto V`,
      path: '/',
      img: 'https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg?t=1618856444',
      description: `When a young street hustler, a retired bank robber and a terrifying psychopath find themselves entangled with some of the most 
      frightening and deranged elements of the criminal underworld, the U.S. government and the entertainment industry, they must pull off 
      a series of dangerous heists to survive in a ruthless city in which they can trust nobody, least of all each other.`
    },
  ];
  return (
    <div className="container mx-auto bg-blue-50 h-full">
      <div className="grid py-5 grid-cols-1">
        <div className="custom-container px-16">
          <p className="centered font-bold uppercase text-4xl sm:text-lg lg:text-2xl">My List of Games</p>
          <img className="w-full lg:h-52 sm:h-24 rounded-xl" src={pinkSpace} alt="No Man's Sky"></img>
        </div>
      </div>
      <div className="grid py-5 lg:grid-cols-3 sm:grid-cols-1 gap-10 px-16">
        {listOfGames.map(v => {
          return (
            <div key={v.id}>
              <Card title={v.title} img={v.img} path={v.path} description={v.description} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
