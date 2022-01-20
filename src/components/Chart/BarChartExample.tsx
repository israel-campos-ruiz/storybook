import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { dataOne } from "../../helpers/data";

export interface Data {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}
export interface Props {
  /**
   * pon los datos que necesites
   */
  data?: Data[];
  /**
   * escoge el color que quieras son infinitos
   */
  background?: string;
  /**
   * va con números
   */
  height: number;
  /**
   * va con un número
   */
  width: number;
}

const BarChartExample = ({
  data,
  background = "#8884d8",
  height = 500,
  width = 400,
}: Props) => {
  console.log(data);
  return (
    
      <BarChart width={width} height={height} data={data}>
        <Bar dataKey="uv" fill={background} />
      </BarChart>
 
  );
};

export default BarChartExample;
