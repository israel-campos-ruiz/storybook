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
  color?: 'primary' | 'secondary' | 'tertiary',

  background?:string
}

const MyLabelCustomArgs = ({size = "normal", children, color = 'primary', background}:Props) => {
  return (
      <div style={{background}}>
           <span className={`${size} text-${color} ${background}`}>{children}</span>;
      </div>
  )
};

export default MyLabelCustomArgs;
