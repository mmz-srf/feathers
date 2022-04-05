export interface TooltipProps {
  modifier?: 'f-tooltip--always-open' | 'f-tooltip--space-filling' | 'f-tooltip--no-min-width' | 'f-tooltip--show-delayed' | 'f-tooltip--validation' | 'f-tooltip--max-parent-width' | 'f-tooltip--no-word-wrap' | 'f-tooltip--no-border' | 'f-tooltip--no-margin';
  text: string;
  // text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  direction?: 'up' | 'right' | 'down' | 'left' | 'down-edge-left' | 'down-edge-right';
  content: string;
}
