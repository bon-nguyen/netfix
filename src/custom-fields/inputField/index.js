import React from 'react';
import { ErrorMessage, FastField } from 'formik';
import {FormGroup,FormItem, FormError } from './styles/inputField';
export default function InputField({ name, label, placeholder, type, ...restProps }) {
 
    return (
        <FormGroup>
            <FormItem>
                <FastField
                    name={name}
                    {...restProps}

                    type={type}
                    placeholder={placeholder}

                />
               {label && <label htmlFor={name}>{label}</label>}
            </FormItem>
            <ErrorMessage name={name} component={FormError} />
        </FormGroup>
        
    );
  }

