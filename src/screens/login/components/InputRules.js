const errorMessage = {
  signupEmailRequired: 'Please provide an email address',
  signupEmailPattern: 'This email address is not valid',
  signupFullNameRequired: 'Please enter your full name',
  signupFullNameMinLength: 'Minimum 6 characters required',
  signupPasswordRequired: 'Create a new password',
  signupPasswordMinLength: 'Minimum 8 characters required',
  signupPasswordPattern: 'Password too weak',
  signupConfirmPasswordRequired: 'Please confirm your password',
  loginEmailRequired: 'Please enter your email',
  loginPasswordRequired: 'Please enter your password',
};

export const InputRules = {
  email: {
    required: {
      value: true,
      message: errorMessage.signupEmailRequired,
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: errorMessage.signupEmailPattern,
    },
  },
  fullName: {
    required: {
      value: true,
      message: errorMessage.signupFullNameRequired,
    },
    minLength: {
      value: 6,
      message: errorMessage.signupFullNameMinLength,
    },
  },
  password: {
    required: {
      value: true,
      message: errorMessage.signupPasswordRequired,
    },
    minLength: {
      value: 8,
      message: errorMessage.signupPasswordMinLength,
    },
    pattern: {
      value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      message: errorMessage.signupPasswordPattern,
    },
  },
  confirmPassword: {
    required: {
      value: true,
      message: errorMessage.signupConfirmPasswordRequired,
    },
  },
  loginEmail: {
    required: {
      value: true,
      message: errorMessage.loginEmailRequired,
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: errorMessage.signupEmailPattern,
    },
  },
  loginPassword: {
    required: {
      value: true,
      message: errorMessage.loginPasswordRequired,
    },
    minLength: {
      value: 8,
      message: errorMessage.signupPasswordMinLength,
    },
  },
};
