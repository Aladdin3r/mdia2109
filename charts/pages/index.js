import styles from "@/styles/Home.module.css";
import BarChart from "@/components/BarChart";
import { Bar } from "react-chartjs-2";
import HorizontalBarChart from "@/components/HorizontalBarChart";
import PieChart from "@/components/PieChart";

export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
        <BarChart/>
        <HorizontalBarChart/>
        <PieChart/>
      </main>
    </>
  );
}
