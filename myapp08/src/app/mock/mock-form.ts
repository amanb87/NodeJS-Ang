import {FormData} from '../models/form-data';

export const MockForm: FormData[] = [
{
    controlName: 'Username',
    controlType: 'text',
    valueType: 'text',
    placeholder: 'Enter username',
    validators: {
    required: true,
    minlength: 5
    }
},
{
    controlName: 'Telephone',
    placeholder: 'Enter Phone',
    valueType: 'tel',
    controlType: 'text',
    validators: {
    required: true,
    minlength: 7,
    maxlength: 10
    }
},
{
    controlName: 'Email',
    valueType: 'email',
    placeholder: 'Enter email',
    controlType: 'text',
    validators: {
    required: true
    }
},
{
    controlName: 'Gender',
    placeholder: 'Select gender',
    controlType: 'select',
    options: [{
    optionName: 'Male',
    value: 'male'
    }, {
    optionName: 'Female',
    value: 'female'
    }],
    validators: {
    required: true
    }
}

];