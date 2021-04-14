import React from 'react';
import useInput from './useInput';

function UserForm() {


    const [fName, bindFName, resetFName] = useInput('');
    const [LName, bindLName, resetLName] = useInput('');



    const submitHandler = e => {
        e.preventDefault();
        alert(`Hello ${fName} and ${LName}`);
        resetFName();
        resetLName();
    };


    return (
        <div className='border border-success'>
            <h1 align='center'>UseInput()</h1>
          <p align='center'>
              <form onSubmit={submitHandler} >
                  <div>
                      <label>First name</label>
                      <input {...bindFName}
                             type="text"
                      />
                  </div>
                  <div>
                      <label>Last name</label>
                      <input {...bindLName}
                             type="text"
                      />
                  </div>

                  <button>Submit</button>

              </form>

          </p>
        </div>
    )


}


export default UserForm;