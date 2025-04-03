import { useState } from 'react';
import { Input } from './input';
import { Button } from './button';

export function Form(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [ecperson, setECPerson] = useState('');
    const [ecnumber, setECNumber] = useState('');
    // Add your other state

    const handleOnSubmit = (e) => {
        e.preventDefault();
        //console.log(e.target[0].value)
        // console.log('Success!');
        // console.log('name:', name);
        // console.log('email:', email);
        // console.log('role:', role);
        // console.log('ecperson:', ecperson);
        // console.log('ecnumber:', ecnumber);
        alert(  'Submitted Sucessfully!\n' + 
                'Name: ' + name + '\n' +
                'Email: ' + email + '\n' +
                'Role: ' + role + '\n' +
                'Emergency Contact Person: ' + ecperson + '\n' +
                'Emergency Contact Number: ' + ecnumber + '\n'
        )

        let inputs = document.querySelectorAll("input");
        inputs.forEach((input) => (input.value = ""));

        handleNameOnChange(e);
        handleEmailOnChange(e);
        handleRoleOnChange(e);
        handleECPersonOnChange(e);
        handleECNumberOnChange(e);
    };

    const handleNameOnChange = (e) => {
        setName(e.target.value)
        //console.log(e.target.value)
    }

    const handleEmailOnChange = (e) => {
        setEmail(e.target.value)
    }

    const handleRoleOnChange = (e) => {
        setRole(e.target.value)
    }

    const handleECPersonOnChange = (e) => {
        setECPerson(e.target.value)
    }
    

    const handleECNumberOnChange = (e) => {
        setECNumber(e.target.value)
    }


    return(
        <>
        <h1 className='horizontal_center_text'>EMPLOYEE REGISTRATION</h1>
        <div className='form_border'>
            <form onSubmit={handleOnSubmit}>
                <div className='input_box'>
                    <div className='input_left'>
                        <Input label='Name' placeholder='John Doe' type='text' onChange={handleNameOnChange} minLength="2" pattern="^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)"/>
                        <Input label='Email' placeholder='johndoe@email.com' type='email' onChange={handleEmailOnChange}/>
                        <Input label='Role' placeholder="Project Manager" type='text' onChange={handleRoleOnChange} minLength="2"/> 
                    </div>
                    <div className='input_right'>
                        <Input label='Emergency Contact Person' placeholder="John Doe Sr." type='text' onChange={handleECPersonOnChange} minLength="2" pattern="^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)"/>
                        <Input label='Emergency Contact Number' placeholder="+63/0 9xx.xxx.xxxx" type='tel' onChange={handleECNumberOnChange} pattern="((\+[0-9]{2})|0)[.\- ]?9[0-9]{2}[.\- ]?[0-9]{3}[.\- ]?[0-9]{4}"/>
                    </div>
                </div>
                
                <Button type='submit'name='Submit'/>
            </form>
        </div>
        </>
        
    )
    
}