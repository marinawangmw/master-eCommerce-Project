import React from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-up.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { createUserProfileDocument, auth } from '../../firebase/firebase.utils';

class SignUp extends React.Component{
    constructor(){
        super();

        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmedPassword:''
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name] : value })
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmedPassword } = this.state;

        if (password !== confirmedPassword){
            alert("Passwords don't match");
            return;
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password)

            await createUserProfileDocument(user,{ displayName })

            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmedPassword:''
            })
        } catch(err) {
            console.log(err.message)
        }
    }

    render() {
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>

                <form 
                    onSubmit={this.handleSubmit}
                    className='sign-up-form'>
                    <FormInput
                        type='text'
                        name='displayName'
                        label='name'
                        value={this.state.displayName}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        label='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        label='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmedPassword'
                        label='confirmed password'
                        value={this.state.confirmedPassword}
                        onChange={this.handleChange}
                        required
                    />
                    <CustomButton type='submit'> Sign Up</CustomButton>
                </form> 
            </div>
        )
    }
}

export default SignUp;