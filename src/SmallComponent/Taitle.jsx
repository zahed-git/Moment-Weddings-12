

const Taitle = ({heading,subheading}) => {
    return (
        <div className="w-3/12 mx-auto text-center ">
            <p className="text-yellow-600">---{subheading}---</p>
            <h2 className="uppercase border-dashed border-y-2 border-slate-400 py-2 text-3xl mb-6 font-bold">{heading}</h2>
        </div>
    );
};

export default Taitle;