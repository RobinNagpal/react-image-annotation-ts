import React from 'react';
import styled from 'styled-components';
import { IAnnotation } from '../../types/index';

const Container = styled.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;

interface RectangleProps {
  annotation: IAnnotation;
  className?: string;
  style?: object;
  active?: boolean;
}

function Rectangle(props: RectangleProps) {
  const { geometry } = props.annotation;
  if (!geometry) return null;

  return (
    <Container
      className={props.className}
      style={{
        position: 'absolute',
        left: `${geometry.x}%`,
        top: `${geometry.y}%`,
        height: `${geometry.height}%`,
        width: `${geometry.width}%`,
        boxShadow: props.active ? '0 0 2px 2px yellow inset' : '',
        ...props.style,
      }}
    />
  );
}

export default Rectangle;
