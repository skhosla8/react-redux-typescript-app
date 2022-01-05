import React, { FC, useState } from 'react';
import './styles.css';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { Action } from '../../state/actions';
import { ActionType } from '../../state/action-types';

// describe shape of form input 
export interface FormInput {
  heading?: string;
  'sub-heading'?: string | number;
  summary?: string;
}

const Form: FC = () => {
  // use local state for initial user input data since it doesn't need to persist
  const initialState: FormInput = {
    heading: '',
    'sub-heading': '',
    summary: '',
  };

  const [formState, setFormState] = useState<FormInput>(initialState); // make form a controlled component
  const [errors, setErrors] = useState({} as any);

  const dispatch = useDispatch<Dispatch<Action>>();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>
  ): void => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value // find name attribute for each field, set local state based on field name and value   
    });
  };

  const resetForm = (): void => {
    setFormState({ ...initialState });
  };

  const validateForm = (): boolean => {
    let key: keyof FormInput;
    const currErrors: FormInput = {};

    let isValid = true;

    for (key in formState) {
      if (!formState[key]) {
        isValid = false;
        currErrors[key] = `Please enter a valid ${key}`;
      }
    }

    // handle error messages for all text fields
    if (!isValid) {
      setErrors({ ...currErrors });
    } else {
      setErrors({});
    }

    return isValid;
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault(); // prevent browser reload since data is not being sent to backend

    const validated = validateForm();

    if (validated) { // if all text fields are filled, proceed with dispatch  
      dispatch({ type: ActionType.SET_DATA, payload: formState }); // on form submit, store data in Redux store

      setTimeout(() => {
        resetForm();
      }, 500);
    }
  };

  return (
    <div className="form-wrapper">
      <form className="msform" autoComplete="off" onSubmit={handleSubmit}>
        <fieldset className="msform-fieldset">
          <h2>Create Post</h2>
          <h3>Fill all required text fields to submit the form</h3>
          {errors.heading && <p className="alert">{errors.heading}</p>}
          <input
            className="msform-field"
            type="text"
            name="heading"
            value={formState.heading}
            placeholder="Heading"
            onChange={handleChange}
          />
          {errors['sub-heading'] && <p className="alert">{errors['sub-heading']}</p>}
          <input
            className="msform-field"
            type="text"
            name="sub-heading"
            value={formState['sub-heading']}
            placeholder="Sub-Heading"
            onChange={handleChange}
          />
          {errors.summary && <p className="alert">{errors.summary}</p>}
          <textarea
            className="msform-field"
            name="summary"
            value={formState.summary}
            placeholder="Summary"
            onChange={handleChange}
          />
          <button type="submit">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  )
}

export default Form;