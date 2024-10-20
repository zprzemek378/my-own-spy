type ResultsBarProps = {
  names: string[];
  points: number[];
};

const ResultsBar = ({ names, points }: ResultsBarProps) => {
  console.log(names);
  const resultElements = names.map((name, index) => (
    <div
      className="px-5 w-1/3 poppins-extralight flex justify-between"
      key={index}
    >
      {name.slice(0, 3)}:
      <span className="poppins-regular mr-8">{points[index]}</span>
    </div>
  ));

  return (
    <div className="z-[10000] flex flex-wrap py-2 opacity-60 absolute bg-slate-700 w-full rounded-b-lg">
      {resultElements}
    </div>
  );
};

export default ResultsBar;
