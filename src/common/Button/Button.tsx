const Button: React.FC<
{ 
  btName: string;
   btClass?: string;
   btFunc? : () => void;
   btDisabled?: boolean;
  }
> = (props) => {

  const { btName, btClass, btFunc, btDisabled = false } = props;
  const buttonClass = btClass ? btClass : "bg-teal-400 w-32 rounded";
  // console.log('btDisabled',btDisabled)
  return (
    <button
    disabled={btDisabled}
      className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md flex items-center  ${buttonClass}`}
      onClick={btFunc}
    >
      {btName}
    </button>
  );
};

export default Button;
