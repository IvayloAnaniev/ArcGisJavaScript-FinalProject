require([
  "esri/config",
  "esri/WebMap",
  "esri/views/MapView",
  "esri/widgets/Home",
  "esri/widgets/LayerList",
  "esri/widgets/BasemapGallery"],
  function (
    esriConfig,
    WebMap,
    MapView,
    Home,
    LayerList,
    BasemapGallery,
  ) {
    esriConfig.apiKey = "AAPKc0d231b3177f4c7aa4f8fd4cc33d408eFr2xfZB6UcOjXi_RSt5Wf0akFMAjpgs38v03BbLMmZ6YAhkj3X7qwjsqhe6tv9sN";
    const webmap = new WebMap({
      portalItem: {
        id: "232b4d297d054b2a831a3ce629ac8495"
      }
    });

    const view = new MapView({
      container: "viewDiv",
      map: webmap
    });

    const homeBtn = new Home({
      view
    });

    view.ui.add(homeBtn, "top-left");

    const layerlist = new LayerList({
      view,
    });
    view.ui.add("layer-list-btn", "top-right");
    view.ui.add(layerlist, "top-right");
    view.ui.add("basemap-gallery-btn", "top-right")

    const basemapGalery = new BasemapGallery({
      view
    });

    view.ui.add(basemapGalery, "top-right");

    document.getElementById("layer-list-btn").addEventListener("click", function () {
      toggleButton();
    });

    document.getElementById("basemap-gallery-btn").addEventListener("click", function () {
      toggleButton();
    });

    function toggleButton() {
      const layerListEl = document.getElementsByClassName("esri-layer-list")[0];
      const currentProp = layerListEl.style.getPropertyValue("display");

      layerListEl.style.setProperty("display", currentProp == "none" ? "block" : "none");

      const galleryEl = document.getElementsByClassName("esri-basemap-gallery")[0];
      const currentPropGallery = galleryEl.style.getPropertyValue("display");
      galleryEl.style.setProperty("display", currentPropGallery == "none" ? "block" : "none");
    }



  });