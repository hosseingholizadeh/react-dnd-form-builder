import {
  Button,
  Carousel,
  Divider,
  Dropdown,
  Image,
  Input,
  Menu,
  Progress,
  Radio,
  Rate,
  Steps,
  Switch,
  Tabs,
  Table,
} from "antd";
import React from "react";

export const ElementType = {
  button: 1,
  input: 2,
  dropdown: 3,
  progress: 4,
  steps: 5,
  radio: 6,
  tab: 7,
  switch: 8,
  image: 9,
  rate: 10,
  carousel: 11,
  divider: 12,
  table: 13,
};
const { Search } = Input;
const { TabPane } = Tabs;
const { Step } = Steps;
const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export function buttonElement(t) {
  return (
    <Button type="primary" class="mt-2 mb-2 ml-5 mr-5">
      Button
    </Button>
  );
}

export function inputElement(t) {
  return (
    <Input
      style={{ width: "93.1%" }}
      class="mt-2 mb-2 ml-5 mr-5"
      placeholder="input text"
      allowClear
      size="middle"
      enterButton
    />
  );
}

export function searchElement(t) {
  return (
    <Search
      style={{ width: "93.1%" }}
      class="mt-2 mb-2 ml-5 mr-5"
      placeholder="input search text"
      allowClear
      size="middle"
      enterButton
    />
  );
}

export function dividerElement(t) {
  return <Divider />;
}

export function carouselElement(t) {
  return (
    <Carousel>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
    </Carousel>
  );
}

export function imageElement(t) {
  return (
    <Image.PreviewGroup>
      <Image
        width={200}
        src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
      />
    </Image.PreviewGroup>
  );
}

export function tabElement(t) {
  return (
    <Tabs class="mt-2 mb-2 ml-5 mr-5" defaultActiveKey="1">
      <TabPane tab="تب اول" key="1">
        توضیحات تب اول
      </TabPane>
      <TabPane tab="تب دوم" key="2">
        توضیحات تب دوم
      </TabPane>
    </Tabs>
  );
}

export function rateElement(t) {
  return <Rate class="mt-2 mb-2 ml-5 mr-5" allowHalf defaultValue={0} />;
}

export function switchElement(t) {
  return <Switch class="mt-2 mb-2 ml-5 mr-5" style={{ width: "50px" }} />;
}

export function radioElement(t) {
  return (
    <Radio.Group>
      <Radio value={1}>1</Radio>
      <Radio value={2}>2</Radio>
      <Radio value={3}>3</Radio>
    </Radio.Group>
  );
}

export function stepsElement(t) {
  return (
    <Steps>
      <Step status="finish" title="مرحله اول" />
      <Step status="finish" title="مرحله دوم" />
      <Step status="process" title="مرحله آخر" />
    </Steps>
  );
}

export function progressElement(t) {
  return (
    <Progress
      class="mt-2 mb-2 ml-5 mr-5"
      type="circle"
      percent={100}
      width={80}
    />
  );
}

export function dropdownElement(t) {
  return (
    <Dropdown
      class="mt-2 mb-2 ml-5 mr-5"
      overlay={menu}
      placement="bottomCenter"
      arrow
    >
      <Button>Dropdown</Button>
    </Dropdown>
  );
}

export function tableElement(t) {
  return <Table />;
}

export const buttonIcon = () => (
  <ion-icon name="tablet-landscape-outline"></ion-icon>
);

export const inputIcon = () => (
  <ion-icon name="tablet-landscape-outline"></ion-icon>
);

export const dropdownIcon = () => (
  <ion-icon name="tablet-landscape-outline"></ion-icon>
);

export const tableIcon = () => <ion-icon name="grid-outline"></ion-icon>;
