type Props = {
  color?: string;
  content?: string;
};
const Notice: React.FC<Props> = ({ color = "bg-green-300", content }) => {
  return (
    <div className={[color, "p-2 flex gap-4 items-center m-3"].join(" ")}>
      <div className="border-2 border-white rounded-full bg-green-300 px-2">
        <p className="text-white">i</p>
      </div>
      {/* inline  */}
      <div className="w-full bg-white h-8 flex items-center justify-center font-bold text-2xl">
        <p className="bg-yellow-200">{content}</p>
      </div>
    </div>
  );
};

export default Notice;
