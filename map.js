require([
  "esri/config",
  "esri/WebMap",
  "esri/views/MapView",
  "esri/widgets/Home",
  "esri/widgets/LayerList",
  "esri/widgets/BasemapGallery",
  "esri/widgets/Directions",
  "esri/layers/RouteLayer",
  "esri/widgets/ScaleBar",
  "esri/widgets/Search",
],
  function (
    esriConfig,
    WebMap,
    MapView,
    Home,
    LayerList,
    BasemapGallery,
    Directions,
    RouteLayer,
    ScaleBar,
    Search
  ) {
    esriConfig.apiKey = "AAPKc0d231b3177f4c7aa4f8fd4cc33d408eFr2xfZB6UcOjXi_RSt5Wf0akFMAjpgs38v03BbLMmZ6YAhkj3X7qwjsqhe6tv9sN";

    const routeLayer = new RouteLayer();

    const webmap = new WebMap({
      portalItem: {
        id: "232b4d297d054b2a831a3ce629ac8495"
      }
    });

    webmap.layers.add(routeLayer);

    const view = new MapView({
      container: "viewDiv",
      map: webmap
    });

    const directionWidget = new Directions({
      layer: routeLayer,
      apiKey: esriConfig.apiKey,
      view

    });

    const scaleBar = new ScaleBar({
      view
    });

    view.ui.add(scaleBar, {
      position: "bottom-right"
    });

    const homeBtn = new Home({
      view
    });

    view.ui.add(homeBtn, { position: "top-left" });

    const layerlist = new LayerList({
      view,
    });

    const basemapGalery = new BasemapGallery({
      view
    });

    const searchWidget = new Search({
      view
    });

    view.ui.add("layer-list-btn", "top-right");
    view.ui.add(layerlist, "top-right");
    view.ui.add("basemap-gallery-btn", "top-right")
    view.ui.add(basemapGalery, "top-right");
    view.ui.add("search-btn", "bottom-left");
    view.ui.add(searchWidget, "bottom-left");

    document.getElementById("layer-list-btn").addEventListener("click", function () {
      toggleButton("layer-list");
    });

    document.getElementById("basemap-gallery-btn").addEventListener("click", function () {
      toggleButton("gallery");
    });

    document.getElementById("search-btn").addEventListener("click", function () {
      toggleButton("search");
    });

    document.getElementById("direction-btn").addEventListener("click", function (){
      toggleButton("directions");
    })

    function toggleButton(element) {
      if (element == "layer-list") {
        const layerListEl = document.getElementsByClassName("esri-layer-list")[0];
        const currentProp = layerListEl.style.getPropertyValue("display");
        layerListEl.style.setProperty("display", currentProp == "none" ? "block" : "none");
      } else if (element == "gallery") {
        const galleryEl = document.getElementsByClassName("esri-basemap-gallery")[0];
        const currentPropGallery = galleryEl.style.getPropertyValue("display");
        galleryEl.style.setProperty("display", currentPropGallery == "none" ? "block" : "none");
      } else if (element == "search") {
        const searchEl = document.getElementsByClassName("esri-search")[0];
        const currentPropSearch = searchEl.style.getPropertyValue("display");
        searchEl.style.setProperty("display", currentPropSearch == "none" ? "block" : "none");
      } else if (element == "directions") {
        const directionEl = document.getElementsByClassName("esri-icon-direction")[0];
        const currentPropDirections = directionEl.style.getPropertyValue("display");
        directionEl.style.setProperty("display", currentPropDirections == "none" ? "block" : "none")
      }
    }

  });
