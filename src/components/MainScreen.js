import React from 'react'
import NavBar from './NavBar';
import ShowCase from './ShowCase'
import Boxes from './Boxes';
import LearnSection from './LearnSection';
import Footer from './Footer';

const MainScreen = () => {
    const box = [
        {
          header: 'In Person',
          title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
          color: 'dark'                                                    
        },
        {
          header: 'In person',
          title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
          color: 'secondary'
        },
        {
            header: 'In Person',
            title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
            color: 'secondary'
        }
      ]
    return (
        <div>
            <NavBar title='Frontend Bootcamp'/>
            <br/><br/>
            <ShowCase desc1='Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, consequuntur. Sapiente, quaerat, quam similique iure quod alias nobis itaque' button='Start Here'/>
            <Boxes content={box}/>
            <LearnSection/>
            <Footer/>
        </div>
    )
}

export default MainScreen
