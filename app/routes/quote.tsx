import styles from "app/styles/routes/quote.module.css";

export default function Quote() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Get a Quote</h1>

      <iframe
        src="https://www.cdserver1.com/WebBooking/WebBooking5.aspx?ID=2af9c03f-5ff7-4440-9bbe-7820e0d49637"
        className={styles.cdsForm}
      />
    </div>
  );
}
