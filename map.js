require([ "esri/config", "esri/WebMap", "esri/views/MapView", ], function(esriConfig, WebMap, MapView) {
    esriConfig.apiKey = "AAPKc0d231b3177f4c7aa4f8fd4cc33d408eFr2xfZB6UcOjXi_RSt5Wf0akFMAjpgs38v03BbLMmZ6YAhkj3X7qwjsqhe6tv9sN";
    const webmap = new WebMap({
        portalItem: {
          id: "232b4d297d054b2a831a3ce629ac8495"
        }
      });

      const view = new MapView({
        container: "viewDiv",
        map: webmap
      })
})