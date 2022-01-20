import { ComponentMeta, ComponentStory } from '@storybook/react';
import BarChartExample from '../../components/Chart/BarChartExample';
import { dataOne, dataTwo } from '../../helpers/data'


export default {
    title: 'Chart/basic',
    component:BarChartExample,
    argTypes: {
        background: { control: 'color' },
      }
}as ComponentMeta<typeof BarChartExample>

const Template: ComponentStory<typeof BarChartExample>  = (args) =>  <BarChartExample {...args} />


export const BasicChart = Template.bind({})
export const BasicChartTwo = Template.bind({})

BasicChart.args = {
  data: dataOne,
  height: 600,
  width:500,
}

BasicChartTwo.args = {
    data:dataTwo,
    height: 200,
    width:200,
}

