import React from "react";
import useFireStore from "../hooks/useFirestore";

const ImageGrid = ({ setSelectedImage }) => {
  const { docs } = useFireStore("images");

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => {
          return (
            <div
              className="img-wrap"
              key={doc.id}
              onClick={() => setSelectedImage(doc.url)}
            >
              <img src={doc.url} alt="cool bild" />
            </div>
          );
        })}
    </div>
  );
};

export default ImageGrid;
