import React, { createContext, FC, useState } from "react";
import "./style.scss";
import Select from "../../molecules/select/select";
import TableFile from "../../molecules/table-file/table-file";
import PaginationBar from "../../molecules/pagination-bar/pagination-bar";
export const ManageFileContext = createContext<any>(null);
interface ManageFileProps {
    className?:string;
}

const datas = [
  {
    fileName: "010-02562-520",
    username: "NK0011111",
    time: "19-11-2024",
    size: "1.7MB",
  },
  {
    fileName: "010-02562-50",
    username: "NK001",
    time: "19-11-2024",
    size: "1.7MB",
  },
  {
    fileName: "010-02562-50",
    username: "NK001",
    time: "19-11-2024",
    size: "1.7MB",
  },
  {
    fileName: "010-02562-50",
    username: "NK001",
    time: "19-11-2024",
    size: "1.7MB",
  },
  {
    fileName: "010-02562-50",
    username: "NK001",
    time: "19-11-2024",
    size: "1.7MB",
  },
  {
    fileName: "010-02562-50",
    username: "NK001",
    time: "19-11-2024",
    size: "1.7MB",
  },
  {
    fileName: "010-02562-50",
    username: "NK001",
    time: "19-11-2024",
    size: "1.7MB",
  },
  {
    fileName: "010-02562-50",
    username: "NK001",
    time: "19-11-2024",
    size: "1.7MB",
  },
  {
    fileName: "010-02562-50",
    username: "NK001",
    time: "19-11-2024",
    size: "1.7MB",
  },
  {
    fileName: "010-02562-50",
    username: "NK001",
    time: "19-11-2024",
    size: "1.7MB",
  },
  {
    fileName: "010-02562-50",
    username: "NK001",
    time: "19-11-2024",
    size: "1.7MB",
  },
  {
    fileName: "010-02562-50",
    username: "NK001",
    time: "19-11-2024",
    size: "1.7MB",
  },
  {
    fileName: "010-02562-50",
    username: "NK001",
    time: "19-11-2024",
    size: "1.7MB",
  },
  {
    fileName: "010-02562-50",
    username: "NK001",
    time: "19-11-2024",
    size: "1.7MB",
  },
  {
    fileName: "010-02562-50",
    username: "NK001",
    time: "19-11-2024",
    size: "1.7MB",
  },
  {
    fileName: "010-02562-50",
    username: "NK001",
    time: "19-11-2024",
    size: "1.7MB",
  },
  {
    fileName: "010-02562-50",
    username: "NK001",
    time: "19-11-2024",
    size: "1.7MB",
  },
  {
    fileName: "010-02562-50",
    username: "NK001",
    time: "19-11-2024",
    size: "1.7MB",
  },
  {
    fileName: "010-02562-50",
    username: "NK001",
    time: "19-11-2024",
    size: "1.7MB",
  },
  {
    fileName: "010-02562-50",
    username: "NK001",
    time: "19-11-2024",
    size: "1.7MB",
  },
  {
    fileName: "010-02562-50",
    username: "NK001",
    time: "19-11-2024",
    size: "1.7MB",
  },
  {
    fileName: "010-02562-50",
    username: "NK001",
    time: "19-11-2024",
    size: "1.7MB",
  },
  {
    fileName: "010-02562-50",
    username: "NK001",
    time: "19-11-2024",
    size: "1.7MB",
  },
  {
    fileName: "010-02562-50",
    username: "NK001",
    time: "19-11-2024",
    size: "1.7MB",
  },
  {
    fileName: "010-02562-50",
    username: "NK001",
    time: "19-11-2024",
    size: "1.7MB",
  },
  {
    fileName: "010-02562-50",
    username: "NK001",
    time: "19-11-2024",
    size: "1.7MB",
  },
  {
    fileName: "010-02562-50",
    username: "NK001",
    time: "19-11-2024",
    size: "1.7MB",
  },
  {
    fileName: "010-02562-50",
    username: "NK001",
    time: "19-11-2024",
    size: "1.7MB",
  },
  {
    fileName: "010-02562-50",
    username: "NK001",
    time: "19-11-2024",
    size: "1.7MB",
  },
  {
    fileName: "010-02562-50",
    username: "NK001",
    time: "19-11-2024",
    size: "1.7MB",
  },
  {
    fileName: "010-02562-50",
    username: "NK001",
    time: "19-11-2024",
    size: "1.7MB",
  },
  {
    fileName: "010-02562-50",
    username: "NK001",
    time: "19-11-2024",
    size: "1.7MB",
  },
  {
    fileName: "010-02562-50",
    username: "NK001",
    time: "19-11-2024",
    size: "1.7MB",
  },
  {
    fileName: "010-02562-50",
    username: "NK001",
    time: "19-11-2024",
    size: "1.7MB",
  },
  {
    fileName: "010-02562-50",
    username: "NK001",
    time: "19-11-2024",
    size: "1.7MB",
  },
  {
    fileName: "010-02562-50",
    username: "NK001",
    time: "19-11-2024",
    size: "1.7MB",
  },
  {
    fileName: "010-02562-50",
    username: "NK001",
    time: "19-11-2024",
    size: "1.7MB",
  },
  {
    fileName: "010-02562-50",
    username: "NK001",
    time: "19-11-2024",
    size: "1.7MB",
  },
  {
    fileName: "010-02562-50",
    username: "NK001",
    time: "19-11-2024",
    size: "1.7MB",
  },
  {
    fileName: "010-02562-50",
    username: "NK001",
    time: "19-11-2024",
    size: "1.7MB",
  },
  {
    fileName: "010-02562-50",
    username: "NK001",
    time: "19-11-2024",
    size: "1.7MB",
  },
  {
    fileName: "010-02562-50",
    username: "NK001",
    time: "19-11-2024",
    size: "1.7MB",
  },
  {
    fileName: "010-02562-50",
    username: "NK001",
    time: "19-11-2024",
    size: "1.7MB",
  },
  {
    fileName: "010-02562-50",
    username: "NK001",
    time: "19-11-2024",
    size: "1.7MB",
  },
  {
    fileName: "010-02562-50",
    username: "NK001",
    time: "19-11-2024",
    size: "1.7MB",
  },
  {
    fileName: "010-02562-50",
    username: "NK001",
    time: "19-11-2024",
    size: "1.7MB",
  },
];
const ManageFile : FC<ManageFileProps> = ({className}) => {
  const [index, setIndex] = useState(1);
  return (
    <ManageFileContext.Provider value={{index,setIndex}}>
      <div className={`${className} o-manage-file__container`}>
        <Select /> <TableFile size={5} datas={datas}  /> <PaginationBar pages={ Math.ceil(datas.length/5)}/>
      </div>
    </ManageFileContext.Provider>
  );
};

export default ManageFile;
