import styles from "@/app/ui/loading.module.css";

const Loading = () => {
  return (
    <div className={`${styles.loaderWrapper}`}>
      <div className={`${styles.loader}`}></div>
      <p className={`${styles.loaderText}`}>Loading ...</p>
    </div>
  );
};

export default Loading;
