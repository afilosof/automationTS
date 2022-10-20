class RegistrarionForm {
  minPasswordLength = 10;
  emailLengthVerification(email: string) {
    if (email.length > 0) {
      return true;
    }
  }

  emailCharactersVerification(email: string) {
    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return validEmail.test(email);
  }

  passwordLengthVerification(password: string) {
    if (password.length >= this.minPasswordLength) {
      return true;
    }
  }

  passwordAlphabeticVerification(password: string) {
    const validPassword = /^[a-zA-Z0-9!@#$%^&*]+$/;
    return validPassword.test(password);
  }

  passwordCharactersVerification(password: string) {
    const validPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*]).*$/;
    return validPassword.test(password);
  }

  confirmPasswordVerification(password: string, confirmPassword: string) {
    return password === confirmPassword;
  }

  formValidation(email: string, password: string, confirmPassword: string) {
    if (this.emailLengthVerification(email)) {
      if (this.emailCharactersVerification(email)) {
        if (this.passwordLengthVerification(password)) {
          if (this.passwordAlphabeticVerification(password)) {
            if (this.passwordCharactersVerification(password)) {
              if (this.confirmPasswordVerification(password, confirmPassword)) {
                return 'Registration is successful';
              }
              return 'Passwords do not match';
            }
            return 'Password must contain at least one number and a special symbol';
          }
          return 'Password might contain only numbers, Latin alphabet characters, and special symbols';
        }
        return 'Password should be longer than 10 characters';
      }
      return 'Email is not valid';
    }
    return 'Email is empty';
  }
}

export const registrationForm = new RegistrarionForm();
