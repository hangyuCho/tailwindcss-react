type Props = {
  color?: string;
  content?: string;
};
const Schedule: React.FC<Props> = ({ color = "bg-green-300", content }) => {
  return (
    <div className="w-full border">
      {/* top line */}
      <div className="w-full px-2 py-2 bg-blue-200 flex border-sky-500 border-t-4 justify-between">
        {/* top line left */}
        <div className="flex gap-2">
          {/* label area */}
          <div className="flex gap-2">
            <div className="w-2 p-3 bg-gray-500"></div>
            <p className="font-extrabold text-xl text-sky-700">スケジュール</p>
          </div>
          {/* search */}
          <div className="flex gap-2">
            <div className="w-2 p-3 bg-gray-500"></div>
            <input type="input" />
            <button
              className="border border-gray-400 bg-gradient-to-t to-white from-gray-300 rounded-sm text-sm px-2 text-sky-700 font-extrabold"
              type="button"
            >
              ユーザー/施設検索
            </button>
          </div>
        </div>
        {/* top line right */}
        <div className="">
          <button
            className="border border-gray-400 bg-gradient-to-t to-white from-gray-300 rounded-sm text-sm px-2 py-1 text-sky-700 font-extrabold"
            type="button"
          >
            ▼
          </button>
        </div>
      </div>
      {/* schedule contents */}
      <div>
        {/* schedule top */}
        <div className="p-2 items-center">
          {/* group */}
          <div className="flex justify-between">
            {/* group left */}
            <div className="flex gap-2 items-center">
              <p className="text-2xl">グループ</p>
              <input
                className="border border-gray-300 rounded-md w-60"
                type="text"
                placeholder="(グループ表示)"
              />
            </div>
            {/* group center */}
            <p className="font-bold text-2xl">2019年8月19日(月)</p>
            {/* group right */}
            <div className="flex gap-2">
              <button
                className="border border-gray-400 bg-gradient-to-t to-white from-gray-300 rounded-sm text-sm px-2 py-1 text-sky-700 font-extrabold"
                type="button"
              >
                ⏪　前週
              </button>
              <button
                className="border border-gray-400 bg-gradient-to-t to-white from-gray-300 rounded-sm text-sm px-2 py-1 text-sky-700 font-extrabold"
                type="button"
              >
                ◀️ 前日
              </button>
              <button
                className="border border-gray-400 bg-gradient-to-t to-white from-gray-300 rounded-sm text-sm px-2 py-1 text-sky-700 font-extrabold"
                type="button"
              >
                今日
              </button>
              <button
                className="border border-gray-400 bg-gradient-to-t to-white from-gray-300 rounded-sm text-sm px-2 py-1 text-sky-700 font-extrabold"
                type="button"
              >
                翌日 ▶️
              </button>
              <button
                className="border border-gray-400 bg-gradient-to-t to-white from-gray-300 rounded-sm text-sm px-2 py-1 text-sky-700 font-extrabold"
                type="button"
              >
                翌週　⏩
              </button>
            </div>
          </div>
        </div>
        {/* schedule center */}
        <div className="table w-full">
          {/* header */}
          <div className="table-row w-full">
            <div className="table-cell border border-gray-400 text-center w-2/12"></div>
            <div className="table-cell border border-gray-400 text-center">
              19 (月)
            </div>
            <div className="table-cell border border-gray-400 text-center">
              20 (火)
            </div>
            <div className="table-cell border border-gray-400 text-center">
              21 (水)
            </div>
            <div className="table-cell border border-gray-400 text-center">
              22 (木)
            </div>
            <div className="table-cell border border-gray-400 text-center">
              23 (金)
            </div>
            <div className="table-cell border border-gray-400 text-center">
              24 (土)
            </div>
            <div className="table-cell border border-gray-400 text-center">
              25 (日)
            </div>
          </div>
          {/* body */}
          <div className="table-row w-full">
            <div className="table-cell border border-gray-400 w-2/12 p-2">
              <p>高橋 健太</p>
              <p>月予定</p>
              <p>電話メモ履歴</p>
              <p>担当確認</p>
            </div>
            <div className="table-cell border border-gray-400 p-2">(東京)</div>
            <div className="table-cell border border-gray-400 p-2">(東京)</div>
            <div className="table-cell border border-gray-400 p-2">(東京)</div>
            <div className="table-cell border border-gray-400 p-2">(東京)</div>
            <div className="table-cell border border-gray-400 p-2">(東京)</div>
            <div className="table-cell border border-gray-400 p-2">(東京)</div>
            <div className="table-cell border border-gray-400 p-2">(東京)</div>
          </div>
        </div>
        {/* schedule bottom */}
        <div></div>
      </div>
    </div>
  );
};

export default Schedule;
