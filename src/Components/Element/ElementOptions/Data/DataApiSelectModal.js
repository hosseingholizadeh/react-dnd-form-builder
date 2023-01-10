import React from "react";
import { Modal, Button, Table } from "antd";
import { ApiStore } from "../../../Store/ApiStore";

export default function DataApiSelectModal({
  t,
  visible,
  close,
  setSelectedApi,
}) {
  ApiStore.LoadApis();
  const columns = [
    {
      dataIndex: "title",
      title: t("api"),
    },
  ];

  return (
    <Modal
      destroyOnClose={true}
      maskClosable={false}
      zIndex={10}
      title={t("selectApi")}
      centered
      open={visible}
      onCancel={() => close()}
      okText={t("save")}
      cancelText={t("cancel")}
      width={450}
      style={{ height: 450 }}
      footer={[
        <Button
          onClick={() => {
            close();
          }}
        >
          {t("close")}
        </Button>,
        <Button
          type="primary"
          onClick={() => {
            close();
          }}
        >
          {t("select")}
        </Button>,
      ]}
    >
      <Table
        size="small"
        bordered
        scroll={{ y: 420 }}
        style={{ height: 430, maxHeight: 430 }}
        columns={columns}
        pagination={false}
        onRow={(record, index) => {
          return {
            onClick: (e) => {
              setSelectedApi(record);
            },
            onDoubleClick: (event) => {
              setSelectedApi(record);
              close();
            },
          };
        }}
        dataSource={[...ApiStore.getApis]}
      />
    </Modal>
  );
}
