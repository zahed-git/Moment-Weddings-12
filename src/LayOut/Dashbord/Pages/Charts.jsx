
import { PieChart, Pie, Sector, Cell, Tooltip, Legend} from 'recharts';
import useStatus from '../../../Hooks/useStatus';
import useBiodata from '../../../Hooks/useBiodata';

const Charts = () => {
  const [biodata] = useBiodata()
    const boys = biodata.filter(people => people.biodataType === "Male")
    const girls = biodata.filter(people => people.biodataType === "Female")
  const [stats] = useStatus()
  const total = stats.result
  const marred = stats.marred
  const revenue=stats.revenue
  const boysle=boys.length
  const girlsle=girls.length
  const data = [
    { name: 'Toal', value: total },
    { name: 'Marred', value: marred },
    { name: 'Boys', value: boysle },
    { name: 'Girls', value: girlsle },
    { name: 'Revenue', value: revenue },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','red', 'pink'];
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };


    return (
        <div className='mx-auto'>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
           
            
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
        </div>
    );
};

export default Charts;