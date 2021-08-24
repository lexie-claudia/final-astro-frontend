import React from 'react'
import NavBar from './NavBar';
import ShowCase from './ShowCase'
import Boxes from './Boxes';
import LearnSection from './LearnSection';
import Footer from './Footer';

const MainScreen = () => {
    const box = [
        {
          header: 'Join our Network',
          title: 'Get access to comments and reviews from thousands of students about their internships.',
          color: 'dark'                                                    
        },
        {
          header: 'Need Advice?',
          title: 'Our Career Advisors will help you find your streghts and which roles would be best for you.',
          color: 'dark'
        },
        {
            header: 'No Nasty Surprises',
            title: 'Our mentor programme gives you all the top tips to get ready for your internship.',
            color: 'dark'
        }
      ]
    return (
        <div>
            <NavBar title='Smart Intern'/>
            <br/><br/>
            <ShowCase desc1='Starting your first internship or graduate job can be daunting, so let us take the pressure off by answering all the questions for you!' button='View Reviews!'/>
            <Boxes content={box}/>
            <LearnSection/>
            <Footer/>
        </div>
    )
}

export default MainScreen
