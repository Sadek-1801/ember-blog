import {
  validatePresence,
  validateLength,
  validateInclusion,
} from 'ember-changeset-validations/validators';

export default {
  firstName: [validatePresence(true), validateLength({ min: 3, max: 40 })],
  lastName: [validatePresence(true), validateLength({ min: 3, max: 40 })],
};
