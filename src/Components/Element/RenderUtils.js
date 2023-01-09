export function renderStyle(style) {
  let { backgroundColorRgb, colorRgb } = style ?? {};

  return {
    ...style,
    color: colorRgb
      ? `rgba(${colorRgb.r}, ${colorRgb.g}, ${colorRgb.b}, ${colorRgb.a})`
      : undefined,
    backgroundColor: backgroundColorRgb
      ? `rgba(${backgroundColorRgb.r}, ${backgroundColorRgb.g}, ${backgroundColorRgb.b}, ${backgroundColorRgb.a})`
      : undefined,
  };
}

export function renderElementContainerStyle(top, left) {
  return {
    top: top,
    left: left,
  };
}
