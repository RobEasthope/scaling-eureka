import React from 'react';
import { Box, Flex, Text } from 'rebass';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

import {
  textRegex,
  phoneRegex,
  emailRegex,
  passwordRegex,
} from '../utils/regex';
import FormField from '../components/FormField';
import Button from '../components/Button';

const Form = () => {
  // Set initial form field state
  const [firstName, setFirstName] = React.useState({
    value: '',
    valid: false,
  });

  const [secondName, setSecondName] = React.useState({
    value: '',
    valid: false,
  });

  const [email, setEmail] = React.useState({
    value: '',
    valid: false,
  });

  const [phone, setPhone] = React.useState({
    value: '',
    valid: false,
  });

  const [password, setPassword] = React.useState({
    value: '',
    valid: false,
  });

  // Form state
  const [formValidated, setFormValidated] = React.useState(false);
  const [validForm, setValidForm] = React.useState(false);

  // TODO: Merge into a single function
  const handleFirstNameChange = event => {
    setFirstName({ value: event.target.value });
  };

  const handleSecondNameChange = event => {
    setSecondName({ value: event.target.value });
  };
  const handleEmailChange = event => {
    setEmail({ value: event.target.value });
  };
  const handlePhoneChange = event => {
    setPhone({ value: event.target.value });
  };
  const handlePasswordChange = event => {
    setPassword({ value: event.target.value });
  };

  // Form field config
  const formFields = [
    {
      id: 'firstName',
      label: 'First Name',
      fieldData: firstName,
      setHook: setFirstName,
      regex: textRegex,
      onChange: handleFirstNameChange,
      errMsg: 'Please enter a first name using text only',
    },
    {
      id: 'secondName',
      label: 'Second Name',
      fieldData: secondName,
      setHook: setSecondName,
      regex: textRegex,
      onChange: handleSecondNameChange,
      errMsg: 'Please enter a second name using text only',
    },
    {
      id: 'email',
      label: 'Email address',
      fieldData: email,
      setHook: setEmail,
      regex: emailRegex,
      onChange: handleEmailChange,
      errMsg: 'Please enter an email address',
    },
    {
      id: 'phone',
      label: 'Phone number',
      fieldData: phone,
      setHook: setPhone,
      regex: phoneRegex,
      onChange: handlePhoneChange,
      errMsg: 'Please enter a phone number',
    },
    {
      id: 'password',
      label: 'Password',
      fieldData: password,
      setHook: setPassword,
      regex: passwordRegex,
      onChange: handlePasswordChange,
      errMsg:
        'Please enter a password eight characters long containing at least one special character',
    },
  ];

  const validation = fieldsToValidate => {
    fieldsToValidate.map(field => {
      if (
        field.fieldData.value.length !== 0 &&
        field.regex.test(field.fieldData.value)
      ) {
        field.setHook({
          value: field.fieldData.value,
          valid: true,
        });

        setFormValidated(true);
        return setValidForm(true);
      }
      field.setHook({
        value: field.fieldData.value,
        valid: false,
      });

      setFormValidated(true);
      return setValidForm(false);
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!validForm) {
      validation(formFields);
    }
  };

  const { width, height } = useWindowSize();

  return (
    <React.Fragment>
      {validForm && <Confetti width={width} height={height} run={validForm} />}
      <Flex width={1 / 1} flexWrap="wrap">
        <Box
          as="form"
          width={1 / 2}
          onSubmit={handleSubmit}
          flexDirection="row"
          flexWrap="wrap"
        >
          {/* Form fields */}
          {formFields.map(field => (
            <Box key={field.id} width={1 / 1} mb="3">
              <FormField
                id={field.id}
                label={field.label}
                fieldData={field.fieldData}
                onChange={field.onChange}
                errMsg={field.errMsg}
                formValidated={formValidated}
              />
            </Box>
          ))}

          {/* Submit button */}
          <Box width={1 / 1}>
            <Button as="input" mb="4" type="submit" value="Submit" />
            <Text width={1 / 1}>{validForm ? 'Valid form' : ''}</Text>
          </Box>
        </Box>
      </Flex>
    </React.Fragment>
  );
};

export default Form;
