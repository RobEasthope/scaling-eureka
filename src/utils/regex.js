export const textRegex = /^[a-zA-Z]*$/;
export const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const phoneRegex = /^(\+44\s?\d{10}|0044\s?\d{10}|0\s?\d{10})?$/;
export const passwordRegex = /(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$/;
