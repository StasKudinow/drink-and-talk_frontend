export function validateLogin(value) {
  if (!value) {
    return 'Заполните это поле!'
  }
}

export function validateBarName(value) {
  if (!value) {
    return 'Заполните это поле!'
  }
}

export function validateEmail(value) {
  if (!value) {
    return 'Заполните это поле!'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Некорректный Email!'
  }
}

export function validatePassword(value) {
  if (!value) {
    return 'Заполните это поле!'
  } else if (!/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g.test(value)) {
    return 'Пароль должен состоять минимум из 6 символов, содержать минимум 1 цифру, 1 латинскую букву в нижнем регистре, 1 латинскую букву в верхнем регистре'
  }
}

export function validateConfirmPassword(value) {
  if (!value) {
    return 'Заполните это поле!'
  } else if (!/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g.test(value)) {
    return 'Пароль должен состоять минимум из 6 символов, содержать минимум 1 цифру, 1 латинскую букву в нижнем регистре, 1 латинскую букву в верхнем регистре'
  }
}

export function validateOldPassword(value) {
  if (!value) {
    return 'Заполните это поле!'
  } else if (!/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g.test(value)) {
    return 'Пароль должен состоять минимум из 6 символов, содержать минимум 1 цифру, 1 латинскую букву в нижнем регистре, 1 латинскую букву в верхнем регистре'
  }
}
