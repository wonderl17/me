import { Table } from "antd";
import React from "react";
export const urlLink = (url: string): JSX.Element => {
  return (
    <a href={url} target="_blank">
      {url}
    </a>
  );
};
interface UtilsTableProps {
  dataSource?: { name: string; address: string | JSX.Element }[];
}

const _dataSource = [
  {
    name: "修改ip代理的工具",
    address: urlLink("https://www.91ajs.com/"),
  },
  {
    name: "vpn",
    address: urlLink("https://hello-shudong.com/user"),
  },
];

export default function UtilsTable({
  dataSource = _dataSource,
}: UtilsTableProps) {
  const shownData = dataSource.map((item) => {
    return {
      ...item,
      address:
        typeof item.address === "string" ? urlLink(item.address) : item.address,
    };
  });

  const columns = [
    {
      title: "名称",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "地址",
      dataIndex: "address",
      key: "address",
    },
  ];

  return (
    <>
      <Table dataSource={shownData} columns={columns}></Table>
    </>
  );
}
