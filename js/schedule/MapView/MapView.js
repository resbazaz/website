/* globals d3 */
import { View } from '../lib/uki.esm.js';

class MapView extends View {
  constructor () {
    const d3el = d3.select('.schedule2020')
      .append('div').classed('MapView', true);
    super(d3el, [
      { type: 'less', url: '/js/schedule/MapView/style.less' },
      { type: 'text', url: '/js/schedule/MapView/map.svg' }
    ]);
    this.selectedRoom = null;
  }
  setup () {
    this.d3el.html(this.resources[1]);

    const self = this;
    this.d3el.selectAll('[data-room]')
      .on('click', function () {
        if (self.selectedRoom === this.dataset.room) {
          self.selectedRoom = null;
        } else {
          self.selectedRoom = this.dataset.room;
        }
        self.render();
      });
  }
  draw () {
    const self = this;
    this.d3el.selectAll('[data-room]')
      .classed('selected', function () {
        return this.dataset.room === self.selectedRoom;
      });
  }
}

export default MapView;
