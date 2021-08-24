import RegistrationForm from './RegistrationScreenComponents/RegistrationForm';
// import the nav bar so we can navigate to different screens
import RegistrationFormNavBar from './RegistrationScreenComponents/RegistrationFormNavBar';
//import Footer from './Footer.js'

function RegistrationScreen() {
    return (
        <div>
            <RegistrationFormNavBar logo='Frontend Bootcamp'/> 

            <div className="row flex-column-reverse flex-md-row">
                <div className="col-12 col-md-6">
                    <RegistrationForm/>
                </div>
                <div className="col-12 col-md-6">
                    <img className="img-fluid w-60 h-50 d-none d-md-block registrationImage" 
                    style={{"marginTop":"230px","marginLeft":"110px"}}
                    src="../img/working_from.svg"/>
                </div>
            </div>       
           
        </div>
    )
};

export default RegistrationScreen;