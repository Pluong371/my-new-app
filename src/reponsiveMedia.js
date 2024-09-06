import React, { useState, useEffect, useRef } from "react";

const ResponsiveMedia = ({ src, type }) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);
  const mediaRef = useRef(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (mediaRef.current) {
        const { naturalWidth, naturalHeight, videoWidth, videoHeight } =
          mediaRef.current;
        const aspectRatio =
          type === "video"
            ? videoWidth / videoHeight
            : naturalWidth / naturalHeight;

        let width = containerRef.current.offsetWidth;
        let height = width / aspectRatio;

        
        if (height > containerRef.current.offsetHeight) {
          height = containerRef.current.offsetHeight;
          width = height * aspectRatio;
        }

        setDimensions({ width, height });
      }
    };

    window.addEventListener("resize", updateDimensions);
    if (type === "image") {
      const img = new Image();
      img.onload = updateDimensions;
      img.src = src;
    } else {
      updateDimensions();
    }

    return () => window.removeEventListener("resize", updateDimensions);
  }, [src, type]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {type === "image" ? (
        <img
          ref={mediaRef}
          src={src}
          alt="Responsive content"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            width: `${dimensions.width}px`,
            height: `${dimensions.height}px`,
            objectFit: "contain",
          }}
        />
      ) : (
        <video
          ref={mediaRef}
          src={src}
          controls
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            width: `${dimensions.width}px`,
            height: `${dimensions.height}px`,
          }}
        />
      )}
    </div>
  );
};

export default ResponsiveMedia;
