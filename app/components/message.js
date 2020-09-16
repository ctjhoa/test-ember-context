import Component from '@glimmer/component';
import { inject as context } from '@alexlafroscia/ember-context';

export default class MessageComponent extends Component {

  get style() {
    const getColor = () => (Math.floor(Math.random() * 255))
    return `color: rgb(${getColor()},${getColor()},${getColor()})`
  }
}
