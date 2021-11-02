import React from 'react';
import styled from 'styled-components';

interface Props {
  youtubeVideoKey: string;
}

const MovieTrailer = ({ youtubeVideoKey }: Props) => {
  return (
    <Container>
      <iframe
        width="1280"
        height="720"
        src={`https://www.youtube.com/embed/${youtubeVideoKey}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
  margin-bottom: 1rem;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export default MovieTrailer;
