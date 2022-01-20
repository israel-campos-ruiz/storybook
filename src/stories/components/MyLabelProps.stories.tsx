import MyLabelProps from '../../components/MyLabelProps/MyLabelProps';
import { ComponentMeta, ComponentStory } from '@storybook/react';


/*
  ComponentMeta es un tipado para las propiedades de storybook 
*/
export default {
    title:'Basics/args',
    component:MyLabelProps
}as ComponentMeta<typeof MyLabelProps>


/*
 con ComponentStory es un génerico que recibe como tipo el componente con la interfaz para poder hacer
 un tipado en los args de la función Template
*/
const Template: ComponentStory<typeof MyLabelProps>  = (args) =>  <MyLabelProps {...args} />

export const Basic = Template.bind({})
Basic.args = {
    children:'soy el child',
    size: 'h1'
}