// this is the only way you can make a component stateful 
// (if you want it to change you neeed this function)
import { useState } from 'react';
import React from 'react';


// all the code from line 8 -111 is backend code for the RegistrationForm and must not be put in and <div>
const RegistrationForm = () => {

    // RegistrationForm can go through 5 states
    // states: (1) initial, (2) loading, (3) validationFailed, (4) successful, (5) unsucessful
    // the below is an array with two different states. we use them to create a function 'useState'
    const [state, setState] = useState("initial");

    // errorsState is for tracking the validation errors
    const [errorsState, setErrorsState] = useState([]);
    
    // Declare undefined variables for the ref props
    // They are underfined because when JS is processing the lines the things are not yet rendered
    let firstNameField;
    let lastNameField;
    let emailField;
    let passwordField;
    let phoneNumberField;
    let avatarInput;
    let termsAndConditionsCheckbox;

    // FormData is a construct for creating an object
    // that works like an HTLM form element
    const formData = new FormData();


    const register = () => {


        const errors = [];
        
        // 1. Validate all of the required fields
        if( firstNameField.value.length === 0 ) {
            errors.push("Please enter your first name");
        }
        if( lastNameField.value.length === 0 ) {
            errors.push("Please enter your last name");
        }
        if( emailField.value.length === 0 ) {
            errors.push("Please enter valid email");
        }
        if( passwordField.value.length === 0 ) {
            errors.push("Please enter valid password");
        }
        if( termsAndConditionsCheckbox.checked === false ) {
            errors.push("Please accept the terms & conditions");
        }

        // 1.1 If there are errors, set the state to "validationFailed"
        // these are the errors that show up on our web page if we don't fill in a part of the form it will tell us incorrect
        if(errors.length > 0) {
            setState("validationFailed");
            setErrorsState(errors);
        }

        // 1.2 If there are no errors, set the state to "loading"/ set a pre-loader to show something is happening
        // this makes sure the backed in successful and links to the schema
        else {
            setState("loading");
            setErrorsState([]);
            
            // preparing the form data for submission
            formData.append('firstName', firstNameField.value);
            formData.append('lastName', lastNameField.value);
            formData.append('email', emailField.value);
            formData.append('password', passwordField.value);
            formData.append('phoneNumber', phoneNumberField.value);

            fetch(
                `http://localhost:7000/users/create`,
                {
                    method: 'POST',
                    body:formData
                }
            )
            // The .json(will convert a 'stringified' object into a JavaScript object
            .then(
                (backendRepsonseJson) => backendRepsonseJson.json()
            )

            // 2.1 If the submission is successful, set state to "successful" 
            // When the backend responds with "success" status
            // this shows a green bar that you have been successful filling in the form using a FETCH request
            .then(
                (backendResponse) => {
                    console.log(backendResponse);
                    if( backendResponse.status === "successful" ) {
                        setState("successful");
                    } else {
                        setState("unsuccessful");
                    }
                }
            )
            
            // 2.2 If the submission is successful, set state to "unsucessful"
            .catch(
                (err) => {
                    console.log(err);
                    setState("unsuccessful");
                }
            )
            
        }

    }

    // you must put <div> only around code where it says 'return' as this retunrs HTLM code.
    // Used the showcase method on this to add design to the pag
    
    return (
        <div className="container" id="registrationForm" style={{"marginTop": "5em", "max-width": "40em"}}>
            
            <h1>Register your Interest</h1>
            <br/>

            <label>Enter your firstname *</label>
            <input ref={(element)=>{ firstNameField =  element}} className="field form-control" name="firstName" type="text" />

            <label>Enter your lastname *</label>
            <input ref={(element)=>{ lastNameField =  element}} className="field form-control" name="lastName" type="text" />

            <label>Enter your email *</label>
            <input ref={(element)=>{ emailField =  element}} className="field form-control" name="email" type="text" />

            <label>Enter a password *</label>
            <input ref={(element)=>{ passwordField =  element}} className="field form-control" name="password" autocomplete="off" type="password" />

            <label>Enter your phone (optional)</label>
            <input ref={(element)=>{ phoneNumberField =  element}} className="field form-control" name="phoneNumber" type="text" />

            <br/><br/>

            <label>Upload your profile picture</label>
            <input ref={(element)=>{ avatarInput = element}} className="field form-control" id="photo" name="file" type="file" multiple="multiple"/>

            <br/><br/>

            <label>Do you agree to terms &amp; conditions? *</label>
            <input ref={(element)=>termsAndConditionsCheckbox = element} className="checkbox" name="termsConditions" type="checkbox" /> Yes

            <br/><br/>

            {
                state !== "loading" &&
                <div>
                    <button 
                    onClick={register}
                    className="btn btn-primary"
                    style={{"padding": "10px", "font-size": "16px"}}>
                        Submit
                    </button><br/><br/>
                </div>
            }

            {
                state === "validationFailed" &&
                <div className="alert alert-danger">

                    <ul>
                        {
                            errorsState.map(
                                (error) => {
                                    return <li>{error}</li>
                                }
                            )
                        }
                    </ul>

                </div>
            }

            {
                state === "successful" &&
                <div className="alert alert-success">You have a successfully created an account</div>
            }
            {
                state === "unsuccessful" &&
                <div className="alert alert-danger">An error occured, please try again</div>
            }
            {
                state === "loading" &&
                <p>Loading...</p>
            }
        </div>
    )
};

export default RegistrationForm;