import Ember from 'ember';
import arcgisUtils from 'esri/arcgis/utils';

export default Ember.Component.extend({
  webmapId: null,
  didInsertElement: function() {
    arcgisUtils.createMap(this.get('webmapId'), this.get('elementId')).then(response => {
      this.set('map', response.map);
    });
  },
});
