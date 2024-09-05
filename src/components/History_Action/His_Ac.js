import React from "react";
import "./His_Ac.css";
import avatar from "../../pic/Avatars.png";
import His_Ac_Com from "./His_Ac_Com";
const activities = [
  {
    id: 1,
    name: "long bui",
    action: 'vừa tạo mới bài viết "".',
    time: "cách đây 3 phút trước",
  },
  {
    id: 2,
    name: "nguyễn tiến nam",
    action: "đã tham gia nhóm Cenhomes.",
    time: "cách đây khoảng một tiếng trước",
  },
  {
    id: 3,
    name: "Nhà Đất Có Tất",
    action: "đã tham gia nhóm Cenhomes.",
    time: "cách đây khoảng một tiếng trước",
  },
  {
    id: 4,
    name: "Trịnh Nguyễn",
    action: 'đã thích bài viết " CHỈ 1,4 tỷ SƠ ...".',
    time: "cách đây khoảng một tiếng trước",
  },
  {
    id: 5,
    name: "bá nghĩa nguyễn",
    action: "đã tham gia nhóm Cenhomes.",
    time: "cách đây khoảng một tiếng trước",
  },
];

const His_Ac = () => {
  return (
    <div className="His_Ac_Container">
      <h3>Các hoạt động mới nhất</h3>
      <ul>
        {activities.map((activity) => (
        
            <His_Ac_Com
              key={activity.id}
              icon={avatar}
              name={activity.name}
              content={activity.action}
              time={activity.time}
            />
          
         
        ))}
      </ul>
    </div>
  );
};
export default His_Ac;
