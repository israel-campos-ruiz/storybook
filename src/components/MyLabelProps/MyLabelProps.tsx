import { ReactNode } from 'react';
import '../../styles/components/MyLabel/MyLabel.css'

export interface Props {
  /**
   * Este comentario pone una descripción!
  */
  children:ReactNode,
  /**
   * ¿Qué tamaño de letra quieres? 
  */
  size?: 'small' | 'normal' | 'h1' | 'h2' | 'h3'
  /**
   * color de letra 
  */
  color?: 'primary' | 'secondary' | 'tertiary'

}

const MyLabelProps = ({size = "normal", children, color = 'primary'}:Props) => {
  return <span className={`${size} text-${color}`}>{children}</span>;
};

export default MyLabelProps;
