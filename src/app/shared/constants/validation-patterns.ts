

export const VALIDATION_PATTERNS = {
  EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  NAME: /^[a-zA-Z0-9!@#$%^&*'?><(){}:;.,_+=/\~` -]+$/i,
  PASSWORD: /^[a-zA-Z0-9!@#$%^&*]+$/i,
  PHONE: /\d{10}/,
  USERNAME: /^[a-z0-9A-Z]+$/i,
  POSITIVE_INTEGER: /^[0-9," "]+$/i,
  REQUIRED: 'required'
};

export const VALIDATION_TYPES = {
  REQUIRED: 'required',
  PATTERN: 'pattern',
  MIN_LENGTH: 'minlength',
  MAX_LENGTH: 'maxlength',
  PHONE_NUMBER: 'phoneNumber',
  WHITE_SPACE: 'whitespace'
};

export const FORM_TYPES = {
  EMAIL: 'email',
  NUMBER: 'number',
  TEXT: 'text',
  PASSWORD: 'password',
  CHECKBOX: 'checkbox',
  RADIO: 'radio',
  BUTTON: 'button',
  LINK: 'link',
  SUBMIT: 'submit',
  RESET: 'reset'
};

