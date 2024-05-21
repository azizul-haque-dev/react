import styles from "./Button.module.css";

const Button = () => {
  const btnArr = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    "."
  ];
  return (
    <div className={styles.buttonsContainer}>
      {btnArr.map(function (btn) {
        return (
          <button key={btn} className={styles.button}>
            {btn}
          </button>
        );
      })}
    </div>
  );
};
export default Button;
