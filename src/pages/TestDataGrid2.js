import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name", // row data에서 사용한 필드명
    headerName: "이름", // 보여지는 이름
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "나이",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "tel",
    headerName: "전화번호",
    width: 160,
  },
];

// JSON 데이터 형식
const rows = [
  { id: 1, name: "일길동", age: 21, tel: "010-1111-1234" },
  { id: 2, name: "이길동", age: 22, tel: "010-2222-1234" },
  { id: 3, name: "삼길동", age: 23, tel: "010-3333-1234" },
  { id: 4, name: "사길동", age: 24, tel: "010-4444-1234" },
  { id: 5, name: "오길동", age: 25, tel: "010-5555-1234" },
  { id: 6, name: "육길동", age: 26, tel: "010-6666-1234" },
  { id: 7, name: "칠길동", age: 27, tel: "010-7777-1234" },
  { id: 8, name: "팔길동", age: 28, tel: "010-8888-1234" },
  { id: 9, name: "구길동", age: 29, tel: "010-9999-1234" },
  { id: 10, name: "십길동", age: 30, tel: "010-0000-1234" },
];

export default function TestDataGrid2() {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5, // 한 페이지에서 보여질 데이터 갯수
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection // 체크박스 유무
        disableRowSelectionOnClick
      />
    </Box>
  );
}
