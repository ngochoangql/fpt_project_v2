import React, { FC, useContext } from "react";
import "./style.scss";
import { ManageFileContext } from "../../organisms/mange-file/manage-file";
import Icon from "../../atoms/icon/icon";
interface TableFileProps {
  className?: string;
  datas: any;
  size: number;
}

const TableFile: FC<TableFileProps> = ({ className, datas, size }) => {
  const { index } = useContext(ManageFileContext);
  const renderData = () => {
    const render = [];
    for (
      let i = (index - 1) * size;
      i <
      ((index - 1) * size + size < datas.length
        ? (index - 1) * size + size
        : datas.length);
      i++
    ) {
      render.push(
        <tr key={i} className={`${i % 2 === 0 && "m-table-file--gray"}`}>
          <td>{datas[i].fileName}</td>
          <td>{datas[i].username}</td>
          <td>{datas[i].time}</td>
          <td>{datas[i].size}</td>
          <td>
            <div className="m-table-file__icons">
              <Icon src="images/delete.png" alt="delete" />
              <Icon src="images/details.png" alt="detail" />
            </div>
          </td>
        </tr>
      );
    }
    return render;
  };
  return (
    <div className="m-table-file__container">
      <table>
        <tr>
          <th>Tên</th>
          <th>Ngày đăng</th>
          <th>Người đăng</th>
          <th>Kích cỡ tệp</th>
          <th></th>
        </tr>
        {renderData().map((data) => data)}
      </table>
    </div>
  );
};

export default TableFile;
