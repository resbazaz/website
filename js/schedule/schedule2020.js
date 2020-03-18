/* globals less */
import { Model } from './lib/uki.esm.js';
import MapView from './MapView/MapView.js';

class Controller extends Model {
  constructor () {
    super();
    this.map = new MapView();
    window.onresize = () => {
      this.renderAllViews();
    };
    (async () => {
      await less.pageLoadFinished;
      this.renderAllViews();
    })();
  }
  renderAllViews () {
    this.map.render();
  }
}
window.controller = new Controller();
