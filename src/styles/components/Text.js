import styled from 'styled-components';

export const Text = styled.p`
  font-weight: ${props => {
    if (props.mb) return 'var(--font-weight-mb)';
    if (props.bold) return 'var(--font-weight-lg)';
    return 'var(--regular)';
  }};
  font-size: ${props => {
    if (props.big) return 'var(--fz-title)';
    if (props.h1) return 'var(--fz-heading)';
    if (props.h2) return 'var(--fz-xxl)';
    if (props.h3) return 'var(--fz-xl)';
    if (props.h4) return 'var(--fz-lg)';
    if (props.subtitle) return 'var(--fz-md)';
    if (props.caption) return 'var(--fz-sm)';
    if (props.small) return 'var(--fz-xxs)';
  }};
  color: ${props => {
    if (props.primary) return 'var(--primary)';
    if (props.secondary) return 'var(--secondary)';
    if (props.grey) return 'var(--color-grey)';
    if (props.white) return 'var(--color-white)';
  }};

  padding: ${props => props.padding};
  margin: ${props => props.margin};

  text-transform: ${props => props.transform};
  letter-spacing: ${props => props.spacing};
  line-height: ${props => props.height};
  text-align: ${props => {
    if (props.center) return 'center';
    return props.align;
  }};
  font-family: ${props => {
    if (props.poppins) return 'var(--font-title)';
  }};
  opacity: ${props => {
    if (props.opac1) return 'var(--opacity)';
  }};

  line-height: ${props => props.line};
  margin: ${props => props.margin || 0};
  margin-top: ${props => props.mt};
  margin-bottom: ${props => props.mb};

  ${props => props.styles};
`;
