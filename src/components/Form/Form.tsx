import React, { FC, useState } from 'react';
import './styles.css';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { Action } from '../../state/actions';
import { ActionType } from '../../state/action-types';

// describe shape of form input 
export interface FormInput {
  heading?: string;
  'sub-heading'?: string;
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
    let heading = document.querySelector<HTMLInputElement>('#heading')!;
    let subHeading = document.querySelector<HTMLInputElement>('#sub-heading')!;
    let summary = document.querySelector<HTMLTextAreaElement>('#summary')!;

    heading.value.length < 1 ? heading.style.outline = '1px solid red' : heading.style.outline = '1px solid rgba(60, 179, 113, 0.4)';
    subHeading.value.length < 1 ? subHeading.style.outline = '1px solid red' : subHeading.style.outline = '1px solid rgba(60, 179, 113, 0.4)';
    summary.value.length < 1 ? summary.style.outline = '1px solid red' : summary.style.outline = '1px solid rgba(60, 179, 113, 0.4)';

    setFormState({
      ...formState,
      [e.target.name]: e.target.value // find name attribute for each field, set local state based on field name and value   
    });
  };

  const resetForm = (): void => {
    setFormState({ ...initialState });
  };

  const handleErrors = () => {
    let heading = document.querySelector<HTMLInputElement>('#heading')!;
    let subHeading = document.querySelector<HTMLInputElement>('#sub-heading')!;
    let summary = document.querySelector<HTMLTextAreaElement>('#summary')!;

    !formState.heading ? heading.style.outline = '1px solid red' : heading.style.outline = '1px solid rgba(0, 0, 0, 0.4)';
    !formState['sub-heading'] ? subHeading.style.outline = '1px solid red' : subHeading.style.outline = '1px solid rgba(0, 0, 0, 0.4)';
    !formState.summary ? summary.style.outline = '1px solid red' : summary.style.outline = '1px solid rgba(0, 0, 0, 0.4)';
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

    handleErrors();
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
          <h3>Fill all text fields to submit the form</h3>

          <div className="msform-fieldset-div">
            <label htmlFor="heading">Heading</label>
            <input
              id="heading"
              className="msform-field"
              type="text"
              name="heading"
              value={formState.heading}
              placeholder="Heading"
              onChange={handleChange}
            />
            {errors.heading && !formState.heading && <ErrorOutlineIcon className="input-error-icon error-icon" />}
            {errors.heading && !formState.heading && <p className="alert">{errors.heading}</p>}
          </div>

          <div className="msform-fieldset-div">
            <label htmlFor="sub-heading">Sub-Heading</label>
            <input
              id="sub-heading"
              className="msform-field"
              type="text"
              name="sub-heading"
              value={formState['sub-heading']}
              placeholder="Sub-Heading"
              onChange={handleChange}
            />
            {errors['sub-heading'] && !formState['sub-heading'] && <ErrorOutlineIcon className="input-error-icon error-icon" />}
            {errors['sub-heading'] && !formState['sub-heading'] && <p className="alert">{errors['sub-heading']}</p>}
          </div>

          <div className="msform-fieldset-div">
            <label htmlFor="summary">Summary</label>
            <textarea
              id="summary"
              className="msform-field"
              name="summary"
              value={formState.summary}
              placeholder="Summary"
              onChange={handleChange}
            />
            {errors.summary && !formState.summary && <ErrorOutlineIcon className="textarea-error-icon error-icon" />}
            {errors.summary && !formState.summary && <p className="alert">{errors.summary}</p>}
          </div>

          <button type="submit">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  )
}

export default Form;