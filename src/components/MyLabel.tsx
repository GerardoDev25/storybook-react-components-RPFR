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
}

export const MyLabel = ({
  label = 'No Label',
  size = 'normal',
}: MyLabelProps) => {
  return <span className={`${size} ${size}`}>{label}</span>;
};
