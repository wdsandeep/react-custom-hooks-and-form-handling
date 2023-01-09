import useInput from "../hooks/use-rinput";

const BasicForm = (props) => {

  const {
    value:fnameValue,
    isValid: fnameIsValid,
    hasError:fnameHasError,
    valueChangeHandler: fnameChangeHandler,
    valueBlurHandler: fnameBlurHandler,
    reset: fnameReset
  } = useInput(value => value.trim() !== '' );

  const {
    value:lnameValue,
    isValid: lnameIsValid,
    hasError: lnameHasError,
    valueChangeHandler: lnameChangeHandler,
    valueBlurHandler: lnameBlurHandler,
    reset: lnameReset
  } = useInput(value => value.trim() !== '' );

  const {
    value:emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: emailReset
  } = useInput(value => value.trim().includes('@') );

  const formIsValid = fnameIsValid && lnameIsValid && emailIsValid;

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if(!formIsValid){
      return;
    }

    console.log(fnameValue);
    console.log(lnameValue);
    console.log(emailValue);
    fnameReset();
    lnameReset();
    emailReset();
  }

  const firstNameClasses = fnameHasError ? 'form-control invalid' : 'form-control'
  const lastNameClasses = lnameHasError ? 'form-control invalid' : 'form-control'
  const emailClasses = emailHasError ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input value={fnameValue} onChange={fnameChangeHandler} onBlur={fnameBlurHandler} type='text' id='fname' />
          {fnameHasError && <p className="error-text">First name is not valid.</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input value={lnameValue} onChange={lnameChangeHandler} onBlur={lnameBlurHandler} type='text' id='lname' />
          {lnameHasError && <p className="error-text">Last name is not valid.</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input value={emailValue} onChange={emailChangeHandler} onBlur={emailBlurHandler} type='email' id='email' />
        {emailHasError && <p className="error-text">Email is not valid.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
