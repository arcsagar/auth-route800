import Button from "../Button/Button";


const PopUp: React.FC<{
    popFun: () => void
}> = ({popFun}) => {



  return (
    <div className="absolute  top-6 bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl w-80% h-300">
      <div>
        <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
          Sign Up Form
        </span>
      </div>
      <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
        Enter User Name and Password
      </h3>
      <form className="text-slate-500 dark:text-slate-400 mt-2 text-sm flex flex-col space-y-4 h-150">
        <input type="email" placeholder="email" required />

        <input type="password" placeholder="Enter you password" required />

        <Button btName="Sign Up" btFunc={popFun} />
        <Button btName="close" btFunc={popFun} />
      </form>
    </div>
  );
};

export default PopUp;
