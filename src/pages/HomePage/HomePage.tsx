import LoginForm from './components/LoginForm';

const HomePage = () => (
    <div className="HomePage h-full w-full bg-sky-50 flex justify-end items-center ">
      <div className="HomePage-card flex flex-col justify-center  mr-200px w-400px h-300px bg-gray-300 rounded-3xl box-sizing px-30px py-10px">
        <h3 className="HomePage-card_title text-center font-800"> 后台管理 </h3>
        <LoginForm />
      </div>
    </div>
  );

export default HomePage;
