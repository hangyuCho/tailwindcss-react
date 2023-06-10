import { ReactNode } from "react"

type Props = {
  color?: string
  content?: string
}

type ButtonProps = {
  children?: ReactNode
}

type TaskProps = {
  color: "red" | "green" | "blue" | "indigo" | "sky" | "yellow"
  content: string
  badgeText: string
  startTime: `${number | ""}${number}:${number}${number}`
  endTime: `${number | ""}${number}:${number}${number}`
}

const Task: React.FC<TaskProps> = ({ color, content, startTime, endTime, badgeText }) => {
  let frame: string[] = "p-1 border flex items-center gap-1 rounded-sm".split(" ")
  frame.push(`border-${color}-200`)
  frame.push(`bg-${color}-50`)

  let badge: string[] = "text-xs rounded-sm px-1 text-white font-bold flex items-center whitespace-nowrap mt-1".split(
    " "
  )
  badge.push(`bg-${color}-400`)
  return (
    <div className="pt-1">
      <div className={frame.join(" ")}>
        <div className="flex flex-col">
          <p className="font-medium">
            {startTime}-{endTime}
          </p>
          <div className="flex items-start gap-1 pl-2">
            <p className={badge.join(" ")}>{badgeText}</p>
            <p className={`text-sky-600 font-bold`}>{content}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
const BasicButton: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button
      className="border border-gray-400 bg-gradient-to-t to-white from-gray-300 rounded-sm text-sm px-2 text-sky-700 font-extrabold"
      type="button"
    >
      {children}
    </button>
  )
}
const Schedule: React.FC<Props> = ({ color = "bg-green-300", content }) => {
  return (
    <div className="w-full border">
      {/* schedule contents */}
      <div>
        {/* schedule top */}
        <div className="p-2 items-center">
          {/* group */}
          <div className="flex justify-between">
            {/* group left */}
            <div className="flex gap-2 items-center">
              <p className="text-2xl">グループ</p>
              <input className="border border-gray-300 rounded-md w-60" type="text" placeholder="(グループ表示)" />
            </div>
            {/* group center */}
            <p className="font-bold text-2xl">2019年8月19日(月)</p>
            {/* group right */}
            <div className="flex gap-2">
              <BasicButton>⏪　前週</BasicButton>
              <BasicButton>◀️ 前日</BasicButton>
              <BasicButton>今日</BasicButton>
              <BasicButton>翌日 ▶️ </BasicButton>
              <BasicButton>翌週　⏩</BasicButton>
            </div>
          </div>
        </div>
        {/* schedule center */}
        <div className="table w-full">
          {/* header */}
          <div className="table-row w-full">
            <div className="table-cell border border-gray-400 text-center w-2/12 bg-gray-100"></div>
            <div className="table-cell border border-gray-400 text-center bg-gray-100 font-bold">19 (月)</div>
            <div className="table-cell border border-gray-400 text-center bg-gray-100 font-bold">20 (火)</div>
            <div className="table-cell border border-gray-400 text-center bg-gray-100 font-bold">21 (水)</div>
            <div className="table-cell border border-gray-400 text-center bg-gray-100 font-bold">22 (木)</div>
            <div className="table-cell border border-gray-400 text-center bg-gray-100 font-bold">23 (金)</div>
            <div className="table-cell border border-gray-400 text-center bg-gray-100 font-bold">24 (土)</div>
            <div className="table-cell border border-gray-400 text-center bg-gray-100 font-bold">25 (日)</div>
          </div>
          {/* body */}
          <div className="table-row w-full">
            <div className="table-cell border border-gray-400 w-2/12 p-2">
              <p className="text-sky-600 font-bold">高橋 健太</p>
              <p className="text-sky-600 font-medium">月予定</p>
              <p className="text-sky-600 font-medium">電話メモ履歴</p>
              <p className="text-sky-600 font-medium">担当確認</p>
            </div>
            <div className="table-cell border border-gray-400 p-2 w-1/6">
              <p className="text-sky-600 font-bold">(東京)</p>
              <Task badgeText="会議" content="営業会議" color="green" startTime="9:00" endTime="10:00"></Task>
              <Task badgeText="会議" content="総務部定例" color="green" startTime="13:00" endTime="14:30"></Task>
              <Task
                badgeText="会議"
                content="人事制度について(非公開)"
                color="green"
                startTime="16:00"
                endTime="17:00"
              ></Task>
            </div>
            <div className="table-cell border border-gray-400 p-2 w-1/6">
              <p className="text-sky-600 font-bold">(東京)</p>
              <Task badgeText="往訪" content="さとう商事" color="red" startTime="10:00" endTime="12:00"></Task>
              <Task badgeText="来訪" content="フラワー運輸" color="sky" startTime="13:00" endTime="14:00"></Task>
            </div>
            <div className="table-cell border border-gray-400 p-2 w-1/6">
              <p className="text-sky-600 font-bold">(東京)</p>
              <Task badgeText="会議" content="新製品プロジェクト" color="green" startTime="9:00" endTime="10:00"></Task>
              <Task badgeText="来訪" content="白黒銀行様" color="sky" startTime="11:00" endTime="12:00"></Task>
            </div>
            <div className="table-cell border border-gray-400 p-2 w-1/6">
              <p className="text-sky-600 font-bold">(東京)</p>
              <Task badgeText="来訪" content="サクセス会計事務所" color="sky" startTime="10:00" endTime="11:00"></Task>
              <Task badgeText="往訪" content="すすき製作所" color="red" startTime="15:00" endTime="16:00"></Task>
              <Task badgeText="セミナー" content="HRセミナー" color="yellow" startTime="17:00" endTime="19:00"></Task>
            </div>
            <div className="table-cell border border-gray-400 p-2 w-1/6">
              <p className="text-sky-600 font-bold">(東京)</p>
              <Task badgeText="会議" content="経営・部長会" color="green" startTime="9:00" endTime="10:00"></Task>
              <Task badgeText="来訪" content="中途採用面談" color="sky" startTime="10:30" endTime="11:30"></Task>
              <Task badgeText="出張" content="大阪出張" color="indigo" startTime="12:00" endTime="20:00"></Task>
            </div>
            <div className="table-cell border border-gray-400 p-2 w-1/6">
              <p className="text-sky-600 font-bold">(東京)</p>
              <Task badgeText="セミナー" content="英会話" color="yellow" startTime="13:00" endTime="19:00"></Task>
            </div>
            <div className="table-cell border border-gray-400 p-2 w-1/6">
              <p className="text-sky-600 font-bold">(東京)</p>
            </div>
          </div>
        </div>
        {/* schedule bottom */}
        <div></div>
      </div>
    </div>
  )
}

export default Schedule
