import { motion } from "framer-motion";
import { AuthProps } from "./AuthForm";

const AuthMobileForm = ({ handleLogin }: AuthProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed top-0 left-0 right-0 bottom-0 z-[1000] backdrop-blur-md"
    >
      <motion.form
        initial={{ y: 0, x: "-50%", height: 0, rotate: 20, scale: 0.5 }}
        animate={{ y: -60, height: "auto", rotate: 0, scale: 1 }}
        exit={{ y: 0, height: 0, rotate: 45, scale: 0 }}
        className="fixed bottom-0 left-1/2 z-[1000] overflow-hidden rounded-lg border border-slate-200 bg-white text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
      >
        <div className="bg-slate-100 p-4 dark:bg-gray-900">
          <h5>Авторизация</h5>
          <p className="text-[12px]">
            Нет аккаунта?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Регистрация
            </a>
          </p>
        </div>
        <hr />
        <div className="w-full p-4">
          <h5>Почта</h5>
          <input type="email" className="input w-full" />
        </div>
        <div className="mb-4 w-full px-4">
          <h5>Пароль</h5>
          <input type="password" className="input w-full" />
        </div>
        <hr />
        <div className="bg-slate-100 py-4 dark:bg-gray-900">
          <button
            className="btn-primary ml-auto mr-4 block self-end"
            onClick={handleLogin}
          >
            Войти
          </button>
        </div>
        {/* <p className="text-[.9rem] font-semibold">
        Нет аккаунта?{" "}
        <button className="p-0 text-blue-500 hover:underline">
          Регистрация
        </button>
      </p> */}
      </motion.form>
    </motion.div>
  );
};

export default AuthMobileForm;
