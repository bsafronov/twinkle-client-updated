import MainLayout from "@/02.components/Common/Layouts/MainLayout";

const ErrorPage = () => {
  return (
    <MainLayout>
      <div className="card box text-center flex flex-col gap-4">
        <h1>Этой страницы не существует!</h1>
        <h2>Вы уверены, что хотели попасть сюда?..</h2>
      </div>
    </MainLayout>
  );
};

export default ErrorPage;
