import Controller from '@ember/controller';
import { action } from '@ember/object';
import FormValidation from '../../validation/form';
import { service } from '@ember/service';

export default class ArticlesNewController extends Controller {
  @service store;

  FormValidation = FormValidation;

  @action
  async submit(model) {
    await model.save();
    try {
      this.store.createRecord('article', {
        title: model.title,
        author: model.author,
        category: model.category,
        published_date: new Date(),
        image: 'some image',
        description: model.description,
      });
      console.log('successfully submitted');

      form.reset();
    } catch {
      console.log('some error happen');
    }
  }
}
