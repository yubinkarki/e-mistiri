const errorMessage = {
  signupEmailRequired: 'Please provide an email address',
  signupEmailPattern: 'This email is not valid',
  signupFullNameRequired: 'Please enter your full name',
  signupFullNameMinLength: 'Minimum 6 characters required',
  signupPasswordRequired: 'Create a new password',
  signupPasswordMinLength: 'Minimum 5 characters required',
  signupPasswordPattern: 'Must contain 1 number, letter and special character',
  signupConfirmPasswordRequired: 'Please confirm your password',
  loginEmailRequired: 'Please enter your email',
  loginPasswordRequired: 'Please enter your password',
  editProfileFullNameRequired: 'Full name can not be blank',
  editProfilePhoneRequired: 'Phone number can not be blank',
  editProfilePhoneMinLength: 'Minimum 10 numbers',
  editProfilePhoneMaxLength: 'Maximum 14 numbers',
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
      value: 5,
      message: errorMessage.signupPasswordMinLength,
    },
    pattern: {
      // Uppercase, lowercase, number, special character -> /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
      value: /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$/,
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
      value: 5,
      message: errorMessage.signupPasswordMinLength,
    },
  },
  editProfileFullName: {
    required: {
      value: true,
      message: errorMessage.editProfileFullNameRequired,
    },
  },
  editProfilePhone: {
    required: {
      value: true,
      message: errorMessage.editProfilePhoneRequired,
    },
    minLength: {
      value: 10,
      message: errorMessage.editProfilePhoneMinLength,
    },
    maxLength: {
      value: 14,
      message: errorMessage.editProfilePhoneMaxLength,
    },
  },
};
