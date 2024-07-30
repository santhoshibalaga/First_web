import React ,{useState} from "react";
import './index.css';

function Register(){
    return (
        <div className="register-container" id="register">
          <h1 style={{ padding: '15px', textAlign: 'center', color:''}}>Register before proceed</h1>
          <div className="form-container">
            <form>
              <h2>From in React</h2>
              <label htmlFor="firstname">Firstname</label>
              <input type="text" id="firstname" name="firstname" placeholder="Enter first name" />
              
              <label htmlFor="lastname">Lastname*</label>
              <input type="text" id="lastname" name="lastname" placeholder="Enter last name" />
              
              <label htmlFor="email">Email*</label>
              <input type="email" id="email" name="email" placeholder="Enter email" />
              
              <label htmlFor="contact">Contact*</label>
              <input type="text" id="contact" name="contact" placeholder="Enter contact details" />
              
              <label>Gender*</label>
              <div>
                <input type="radio" id="male" name="gender" value="male" />
                <label htmlFor="male">Male</label>
                
                <input type="radio" id="female" name="gender" value="female" />
                <label htmlFor="female">Female</label>
                
                <input type="radio" id="other" name="gender" value="other" />
                <label htmlFor="other">Other</label>
              </div>
              
              <label>Your best subject</label>
              <div>
                <input type="checkbox" id="english" name="subject" value="english" />
                <label htmlFor="english">English</label>
                
                <input type="checkbox" id="maths" name="subject" value="maths" />
                <label htmlFor="maths">Maths</label>
                
                <input type="checkbox" id="physics" name="subject" value="physics" />
                <label htmlFor="physics">Physics</label>
              </div>
              
              <label htmlFor="resume">Upload Resume*</label>
              <input type="file" id="resume" name="resume" />
              
              <label htmlFor="url">Enter URL*</label>
              <input type="url" id="url" name="url" placeholder="Enter url" />
              
              <label>Select your choice</label>
              <select>
                <option value="ans1">Select your ans</option>
                {/* Add more options as needed */}
              </select>
              
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      );
}

export default Register;