interface Props {
  label?: string
}
const MenuItem: React.FC<Props> = ({ label }) => {
  return (
    <div className="w-28 p-2 flex bg-blue-50 justify-center flex-col rounded-md">
      {/* icon */}
      <div className="px-10 py-5 bg-gray-400"></div>
      {/* label */}
      <div className="flex justify-center text-sm sm:text-xs">{label ?? ""}</div>
    </div>
  )
}

export default MenuItem
