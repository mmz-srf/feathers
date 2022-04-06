export interface IconProps {
  modifier?:
    | "success"
    | "danger"
    | "info"
    | "branding"
    | "small"
    | "tiny"
    | "rotatable"
    | "rotated-180";
  children?: JSX.Element;
  alt?: string;
  noStroke?: boolean;
}
