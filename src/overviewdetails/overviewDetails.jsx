import styles from "./overviewDetails.module.css";
function OverviewDetails(props) {
  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <div style={{backgroundColor: props.theme,border:`1px solid ${props.border} `}}>{props.svg}</div>
        <div>
          <h3>{props.header}</h3>
        </div>
      </div>

      <div
        style={{
          backgroundColor: props.theme,
        }}
        className={`${styles.value}`}
      >
        {props.value}
      </div>
    </div>
  );
}

export default OverviewDetails;
