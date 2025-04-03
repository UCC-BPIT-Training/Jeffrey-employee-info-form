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
        <div className='form_border'>
            <form onSubmit={handleOnSubmit}>
                <Input label='Name' type='text' onChange={handleNameOnChange} minLength="2"/>
                <Input label='Email' type='email' onChange={handleEmailOnChange}/>
                <Input label='Role' type='text' onChange={handleRoleOnChange} minLength="2"/>
                <Input label='Emergency Contact Person' type='text' onChange={handleECPersonOnChange} minLength="2"/>
                <Input label='Emergency Contact Number' type='number' onChange={handleECNumberOnChange}/>
                <Button type='submit'name='Submit'/>
            </form>
        </div>
    )
    
}