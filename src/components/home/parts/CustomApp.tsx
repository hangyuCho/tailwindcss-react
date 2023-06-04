type Props = {
  color?: string;
  content?: string;
};
const CustomApp: React.FC<Props> = ({ color = "bg-green-300", content }) => {
  return (
    <div className="w-full border">
      {/* */}
      <div>CustomApp</div>
    </div>
  );
};

export default CustomApp;
