import { useContext } from "react";
import { GadgetContext } from "../Root/Root";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";

const BarChart = () => {
  const gadget = useContext(GadgetContext);
  console.log(gadget[1]);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart
        width={500}
        height={400}
        data={gadget[1]}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="product_title" scale="band" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="price" fill="#bf87ed" stroke="#f4ebfc" />
        <Bar dataKey="price" barSize={20} fill="#9538E2" />
        <Line type="monotone" dataKey="price" stroke="#bf87ed" />
        <Scatter dataKey="price" fill="#f4ebfc" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default BarChart;
