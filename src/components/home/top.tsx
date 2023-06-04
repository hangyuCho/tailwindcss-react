import MenuItem from "./parts/MenuItem.tsx";
import Notice from "./parts/Notice.tsx";
import CustomApp from "./parts/CustomApp.tsx";
import LatestInfo from "./parts/LatestInfo.tsx";
import Schedule from "./parts/Schedule.tsx";

function Top() {
  return (
    /* top */
    <div>
      <div className="w-full">
        {/* first line */}
        <div className="w-full flex justify-between items-center bg-black text-white">
          {/* left side */}
          <div className="p-2 flex items-center gap-8">
            {/* top logo */}
            <div>
              <p>Office</p>
            </div>
            {/* top icon */}
            <ul className="gap-2 hidden lg:flex">
              <li className="p-3 bg-gray-500"></li>
              <li className="p-3 bg-gray-500"></li>
              <li className="p-3 bg-gray-500"></li>
              <li className="p-3 bg-gray-500"></li>
            </ul>
            {/* search */}
            <div className="hidden px-2 bg-white lg:flex">
              <input className="px-1" placeholder="検索" type="text" />
              <p>🔍</p>
            </div>
          </div>
          {/* right side */}
          <div className="h-full bg-gray-800">
            {/* right button group */}
            <div className="h-full flex">
              <button
                className="h-full px-2 border-l border-gray-600"
                type="button"
              >
                🔔
              </button>
              <button
                className="h-full px-2 border-l border-gray-600"
                type="button"
              >
                アプリ一覧
              </button>
              <button
                className="h-full px-2 border-l border-gray-600"
                type="button"
              >
                リンク
              </button>
              <button
                className="h-full px-2 border-l border-gray-600 flex items-center"
                type="button"
              >
                {/* login user */}
                <div className="flex flex-row items-center gap-2">
                  <div className="p-2 bg-white"></div>
                  <div>田中 一郎</div>
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* second line */}
        <div className="w-full">
          {/* button content group */}
          <div className="flex justify-center bg-blue-200 flex-wrap gap-2">
            {/* MenuItem */}
            <MenuItem label="トップページ" />
            <MenuItem label="スケジュール" />
            <MenuItem label="施設予約" />
            <MenuItem label="電話メモ" />
            <MenuItem label="メール" />
            <MenuItem label="個人フォルダ" />
            <MenuItem label="掲示板" />
            <MenuItem label="ファイル管理" />
            <MenuItem label="ワークフロー" />
            <MenuItem label="アドレス帳" />
            <MenuItem label="報告書" />
            <MenuItem label="ToDoリスト" />
            <MenuItem label="ユーザー名簿" />
            <MenuItem label="タイムカード" />
            <MenuItem label="プロジェクト" />
            <MenuItem label="リンク集" />
            <MenuItem label="カスタムアプリ" />
          </div>
          {/* bottom line */}
          <div className="bg-blue-300 flex justify-center">
            <div className="text-xs bg-blue-500 px-14 rounded-sm text-white">
              ▲
            </div>
          </div>
        </div>
      </div>
      <Notice content="8月の立替金申請は9月5日(木)までにお願いします" />
      {/* main content */}
      <div>
        {/* Schedule */}
        <Schedule />
        {/* CustomApp */}
        <div className="flex">
          <CustomApp />
          <LatestInfo />
        </div>
        {/* LatestInfo */}
      </div>
    </div>
  );
}

export default Top;
