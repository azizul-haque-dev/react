import Display from "./Component/Display";
import Button from "./Component/Button";
import styles from "./App.module.css";
function App() {
  return (
    <>
      <div className={styles.calculator}>
        <Display></Display>
        <Button></Button>
      </div>
    </>
  );
}

export default App;
