require(["esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer"], (Map, MapView, FeatureLayer) => {
        const map = new Map({
          basemap: "hybrid"
        });

        const view = new MapView({
          container: "viewDiv",
          map: map,
          center: [-96.021,38.302],
          scale: 10836023
          });
          

         

        /********************
         * Add feature layer
         ********************/

        // Carbon storage of trees in Warren Wilson College.
        const featureLayer = new FeatureLayer({
          url: "https://services2.arcgis.com/FiaPA4ga0iQKduv3/arcgis/rest/services/North_American_Rail_Lines_-_OGC_Features/OGCFeatureServer"
        });

        map.add(featureLayer);
  
  var featureLayer_1 = new FeatureLayer({
  url: "https://services2.arcgis.com/FiaPA4ga0iQKduv3/arcgis/rest/services/North_American_Rail_Lines_v1/FeatureServer"
});

map.add(featureLayer_1);
  
var featureLayer_2 = new FeatureLayer({
  url: "https://services1.arcgis.com/fBc8EJBxQRMcHlei/arcgis/rest/services/Lewis_and_Clark_Trail_Historic_Route/FeatureServer"
});

map.add(featureLayer_2);  

      });
