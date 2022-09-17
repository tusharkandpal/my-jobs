const ApplicantCard = ({ email, name, skills }) => {
  return (
    <div className="border border-slate-400 break-all rounded p-2 w-64 bg-white">
      <div className="flex items-center">
        <span className="inline-block text-center rounded-full p-1 bg-sky-100 mr-2 w-8">
          {name[0]}
        </span>
        <div className="">
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-gray-700">{email}</p>
        </div>
      </div>
      <div className="p-2 mt-2">
        <h3 className="font-medium text-gray-700">Skills:</h3>
      <p className="text-sm">{skills}</p>
      </div>
    </div>
  );
};

export { ApplicantCard };
