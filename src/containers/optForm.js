import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from "yup";
import { OptForm } from '../components';
import InputField from '../custom-fields/inputField';
import {AiOutlineRight} from 'react-icons/ai';

const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
});

export function OptFormContainer() {
    return (
        <Formik
            initialValues={{
                email: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
                console.log(values);
            }}
        >
            {({
                errors,
                touched,
                values
                }) => {
                return (
                <OptForm>
                    <Form>
                        <OptForm.Title>Ready to watch? Enter your email to create or restart your membership.</OptForm.Title>
                        <OptForm.Group>
                            <InputField
                                name="email" 
                                label="Email address" 
                                error={touched.email && errors.email}
                                className={touched.email && values.email ? "hasText" : ""}
                            />
                            <OptForm.Btn type="submit">Get Started <AiOutlineRight size={32} /></OptForm.Btn>
                        </OptForm.Group>
                    </Form>
                </OptForm>
            )}}
        </Formik>
    );
};

