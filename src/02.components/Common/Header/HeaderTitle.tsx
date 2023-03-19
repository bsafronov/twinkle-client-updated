import { useAppSelector } from "@/01.shared/hooks/useRedux";
import { useMemo } from "react";
import { AiFillFire } from "react-icons/ai";

const HeaderTitle = () => {
  const isAuth = useAppSelector((state) => state.user.isAuth);

  const styles = useMemo(() => getStyles(), [isAuth]);

  function getStyles() {
    const styles = {
      wrapper: "",
      title: "",
    };

    if (isAuth) {
      styles.wrapper = "flex w-14 translate-x-1 gap-2 xl:w-44";
      styles.title = "hidden xl:block";
    } else {
      styles.wrapper = "flex w-44 translate-x-1 gap-2";
      styles.title = "";
    }

    return styles;
  }

  return (
    <div className={styles.wrapper}>
      <AiFillFire size={24} className="text-slate-500" />

      <h3 className={styles.title}>Огонёк</h3>
    </div>
  );
};

export default HeaderTitle;
