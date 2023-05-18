import Button from "../../common/Button/Button";

const MainHeader:React.FC<{checkoutCount: number}> = (props) => {
    const { checkoutCount } = props
    return (
        <div className="p-8 mb-4  bg-slate-800 text-white flex justify-center justify-items-center">
            <div>
                <h1 id="main-head" className=" text-xl font-bold"> Find Your Next Book</h1>
                <p className="text-base mt-3" >Where would you like to go next ? </p>
                <Button btName='Explorer Top Book ' btClass="bg-teal-400 w-36 rounded mt-3"/>
                <h5>checkout Books : {checkoutCount}</h5>
            </div>
        </div>
    )
};

export default MainHeader;