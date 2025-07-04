import styles from "app/styles/components/vehicle.module.css";

interface Props {
  children?: React.ReactNode,
  className?: string,
}

export default function Vehicle({
  children,
  className = "",
}: Props) {
  return (
    <div className={`${styles.vehicle} ${className}`}>
      <h1>Vehicle</h1>
      <p>This is the vehicle component.</p>
    </div>
  )
}