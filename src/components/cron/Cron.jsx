import { Statistic } from "antd";
const { Countdown } = Statistic;

export default function Cron({ onFinish, minutos, hide }) {
  const deadline = Date.now() + 1000 * 60 * minutos;

  return (
    <div style={{color: 'red'}}>
    <Countdown
      title={hide ? "" : "Tiempo de Examen"}
      value={deadline}
      format="mm:ss"
      onFinish={onFinish}
      color="blue"
      
    />
    </div>  
  );
}
