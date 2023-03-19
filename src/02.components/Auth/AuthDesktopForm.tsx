import { AuthProps } from "./AuthForm";

const AuthDesktopForm = ({ handleLogin }: AuthProps) => {
  return (
    <form className="rounded-lg text-gray-800 dark:text-gray-100 md:min-w-[10rem] lg:sticky lg:flex lg:w-[10rem] lg:max-w-[10rem] lg:flex-col">
      <div className="mb-2 w-full">
        <h5>Почта</h5>
        <input type="email" className="input w-full" />
      </div>
      <div className="mb-4 w-full">
        <h5>Пароль</h5>
        <input type="password" className="input w-full" />
      </div>
      <button className="btn-primary mb-4" onClick={handleLogin}>
        Войти
      </button>
      <p className="text-[.9rem] font-semibold">
        Нет аккаунта?{" "}
        <button className="p-0 text-blue-500 hover:underline">
          Регистрация
        </button>
      </p>
    </form>
  );
};

export default AuthDesktopForm;
