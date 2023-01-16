export const inputRules = {
  email: {
    required: {
      value: true,
      message: 'Please provide an email address',
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'This email address is not valid',
    },
  },
  fullName: {
    required: {
      value: true,
      message: 'Please enter your full name',
    },
    minLength: {
      value: 6,
      message: 'Minimum 6 characters required',
    },
  },
  password: {
    required: {
      value: true,
      message: 'Create a new password',
    },
    minLength: {
      value: 8,
      message: 'Minimum 8 characters required',
    },
    pattern: {
      value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      message: 'Password too weak',
    },
  },
  confirmPassword: {
    required: {
      value: true,
      message: 'Please confirm your password',
    },
  },
};
