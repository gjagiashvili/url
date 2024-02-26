import styles from "../modules/Body.module.scss";
import bodyImg from "../assets/images/illustration.svg";

const Body = () => {
  return (
    <div className={styles["body"]}>
      <div className={styles["text"]}>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </p>
        <button className={styles["button"]}>Get Started</button>
      </div>
      <div className={styles["image-container"]}>
        <img src={bodyImg} />
      </div>
    </div>
  );
};

export default Body;
