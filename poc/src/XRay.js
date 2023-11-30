import React, { useEffect, useRef } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import ImageLayer from "ol/layer/Image";
import ImageStatic from "ol/source/ImageStatic";
import Zoom from "ol/control/Zoom"; // Import Zoom control explicitly
import xrayImage from "./xray.png";
import Static from "ol/source/ImageStatic";
import Projection from "ol/proj/Projection";
import { getCenter } from "ol/extent";

const XRay = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const extent = [-100, -100, 100, 100]; // Adjust the extent based on your image size
    const projection = new Projection({
      code: "xray-image",
      units: "pixels",
      extent: extent,
    });

    const xrayImageLayer = new ImageLayer({
      source: new Static({
        attributions: "© Your Attribution Here", // Add your attributions or remove if not needed
        url: xrayImage,
        projection: projection,
        imageExtent: extent,
      }),
    });

    const map = new Map({
      layers: [xrayImageLayer],
      target: mapRef.current,
      view: new View({
        projection: projection,
        center: getCenter(extent),
        zoom: 2,
        maxZoom: 8,
      }),
    });

    return () => map.setTarget(null);
  }, []);

  return (
    <div
      ref={mapRef}
      style={{ border: "solid 2px", width: "300px", height: "300px" }}
    ></div>
  );
};

export default XRay;
