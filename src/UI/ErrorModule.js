import styles from "./ErrorModule.module.css";
import Card from "./Card";
function ErrorModule(props) {
  return (
    <div className={styles.backdrop} onClick={props.onConfirm}>
      <Card className={styles.module}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>{props.message}</div>
        <footer className={styles.actions}>
          <button onClick={props.onConfirm}>Okay</button>
        </footer>
      </Card>
    </div>
  );
}
export default ErrorModule;
