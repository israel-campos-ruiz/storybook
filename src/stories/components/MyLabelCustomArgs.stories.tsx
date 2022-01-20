import { ComponentMeta, ComponentStory } from '@storybook/react';
import MyLabelCustomArgs from '../../components/MyLabelCustomArgs/MyLabelCustomArgs';




/*
  los argTypes son propiedades que no necesariamente estan fijas, por ejemplo colores dinamicos
  en un componente pero se puede personalizar desde storybook
*/
export default {
    title:'Basics/argsTypes',
    component:MyLabelCustomArgs,
    argTypes: {
      background: { control: 'color' },
    }
}as ComponentMeta<typeof MyLabelCustomArgs>



const Template: ComponentStory<typeof MyLabelCustomArgs>  = (args) =>  <MyLabelCustomArgs {...args} />

export const BasicArgs = Template.bind({})
BasicArgs.args = {
    children:'soy el child',
    size: 'h1',
}