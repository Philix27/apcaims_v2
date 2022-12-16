import styled from "styled-components";

export interface CustomTextProps {
    readonly color?: string;
    readonly margin?: number | string;
    readonly padding?: number;
    readonly title?: boolean;
    readonly subheading?: boolean;
    readonly large?: boolean;
    readonly medium?: boolean;
    readonly small?: boolean;
    readonly tiny?: boolean;
    readonly extraTiny?: boolean;
    readonly light?: boolean;
    readonly heavy?: boolean;
    readonly bold?: boolean;
    readonly black?: boolean;
    readonly center?: boolean;
    readonly right?: boolean;
  }

  export const Text = styled.p<CustomTextProps>`
  color: ${({ color }) => color ?? '#dbdbdb'};
  font-family: 'Montserrat';
  margin: ${props => props.margin ?? 0};
  padding: ${props => props.padding ?? 0};

  /* Font Size */
  ${({ title, subheading, large, medium, small, tiny, extraTiny }) => {
    switch (true) {
      case title:
        return `font-size: 32px;`;
      case subheading:
        return `font-size: 24px;`;
      case large:
        return `font-size: 18px;`;
      case medium:
        return `font-size: 15px;`;
      case small:
        return `font-size: 11px;`;
      case tiny:
        return `font-size: 10px;`;
      case extraTiny:
        return `font-size: 9px;`;
      default:
        return 'font-size: 13px;';
    }
  }}

  /* Font Weight */
  ${({ light, bold, heavy, black }) => {
    switch (true) {
      case light:
        return `font-family: 'MonserratLight';`;
      case bold:
        return `font-family: 'MontserratSemiBold';`;
      case heavy:
        return `font-family: 'MontserratBold';`;
      case black:
        return `font-family: 'MontserratBlack';`;
      default:
        return `font-family: 'Montserrat';`;
    }
  }}

  /* Alignment */

  ${({ center, right }) => {
    switch (true) {
      case center:
        return `text-align: center;`;
      case right:
        return `text-align: right;`;
      default:
        return `text-align: left`;
    }
  }}
`;


