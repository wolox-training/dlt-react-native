export const required = value => (value ? undefined : 'Field is required.');

export const minLength = value => (value.length > 7 ? undefined : 'Field must be 7 characters long.');
