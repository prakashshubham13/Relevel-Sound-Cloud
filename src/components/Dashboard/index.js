import React from 'react';
import Card from '../Card';
import Footer from '../Footer';
import Header from '../Header';
import Loading from '../Loading';
import { useSelector } from 'react-redux';
import CardContainer from '../CardConatiner';

const Dashboard = () => {
    const musicData = useSelector(state=>state.musicData);
    const loading = useSelector(state=>state.loading);
  return (
    <div>
      <Header />
      {loading ? <Loading/> :   <CardContainer>
        {musicData.map((d)=>(
          <Card key={d.id} img={d.img} title={d.title} detail={d.detail} duration={d.duration} rating={d.rating} />
        ))}
        </CardContainer>
  }
      <Footer />
    </div>
  );
};

export default Dashboard;
