import './mylabel.css';

export interface MyLabelProps {
  /**
   * this is the message to show in the tag
   */
  label: string;
  /**
   * this is the tag's size
   */
  size: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * define if the text will be uppercase or not.
   */
  allCaps?: boolean;
  /**
   * define the color of the tag.
   */
  color?: 'primary' | 'secundary' | 'tertiary';
  /**
   * define the background color of the component.
   */
  backgroundColor?: string;
}

export const MyLabel = ({
  allCaps = false,
  color = 'primary',
  label = 'No Label',
  size = 'normal',
  backgroundColor,
}: MyLabelProps) => {
  return (
    <span className={`label ${size} text-${color}`} style={{ backgroundColor }}>
      {allCaps ? label.toLocaleUpperCase() : label}
    </span>
  );
};
