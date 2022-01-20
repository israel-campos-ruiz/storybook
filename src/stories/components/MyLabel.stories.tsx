import MyLabel from "../../components/MyLabel/MyLabel";


//Esto es el titulo  del componente
export default {
    title:'Basics/Example2', // esta es la ruta si le pones un slash antes es un path completo y lo pondra en un titulo distinto
    component:MyLabel
}
// esto es para dibujar  el componente en storybook la función 
//recibe args pero ahorita no tenemos pero regresa la instancia del componente
const Template = () => <MyLabel/>

// esto es para las "paginas de una historia genial ya que crea una historia pero rompe las referencias con el componente"
export const Basic = Template.bind({})
