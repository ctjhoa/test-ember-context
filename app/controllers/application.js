import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @tracked value = { message: "Hello world", count: 0 };

  @action
  increment() {
    this.value = { ...this.value, count: this.value.count + 1 };
  }

  @action
  changeMsg() {
    this.value = { ...this.value, message: "Coucou" };
  }
}
