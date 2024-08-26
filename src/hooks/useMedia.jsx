import React from "react";

const useMedia = (media) => {
  const [match, setMatch] = React.useState(null);

  const changeMatch = () => {
    const { matches } = window.matchMedia(media);
    setMatch(matches);
  };

  React.useEffect(() => {
    changeMatch();
  }, []);
  React.useEffect(() => {
    window.addEventListener("resize", changeMatch);
    return () => {
      window.removeEventListener("resize", changeMatch);
    };
  }, [media]);
  return match;
};

export default useMedia;
