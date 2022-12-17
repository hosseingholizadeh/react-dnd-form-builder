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
  Table,
  Tabs,
} from "antd";
import React from "react";

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

function renderElementStyle(style) {
  let { backgroundColorRgb, colorRgb } = style;

  return {
    ...style,
    color: colorRgb
      ? `rgba(${colorRgb.r}, ${colorRgb.g}, ${colorRgb.b}, ${colorRgb.a})`
      : undefined,
    backgroundColor: backgroundColorRgb
      ? `rgba(${backgroundColorRgb.r}, ${backgroundColorRgb.g}, ${backgroundColorRgb.b}, ${backgroundColorRgb.a})`
      : undefined,
  };
}

export function buttonElement(t, element) {
  let { options } = element;
  return (
    <Button style={renderElementStyle(options.style)} type="primary">
      {element.title ?? t("button")}
    </Button>
  );
}

export function inputElement(t, element) {
  return <Input placeholder="input" size="middle" />;
}

export function searchElement(t, element) {
  return (
    <Search
      style={{ width: "93.1%" }}
      placeholder="input search text"
      allowClear
      size="middle"
    />
  );
}

export function dividerElement(t, element) {
  return <Divider />;
}

export function carouselElement(t, element) {
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

export function imageElement(t, element) {
  return (
    <Image.PreviewGroup>
      <Image
        width={200}
        src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
      />
    </Image.PreviewGroup>
  );
}

export function tabElement(t, element) {
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

export function rateElement(t, element) {
  return <Rate class="mt-2 mb-2 ml-5 mr-5" allowHalf defaultValue={0} />;
}

export function switchElement(t, element) {
  return <Switch class="mt-2 mb-2 ml-5 mr-5" style={{ width: "50px" }} />;
}

export function radioElement(t, element) {
  return (
    <Radio.Group>
      <Radio value={1}>1</Radio>
      <Radio value={2}>2</Radio>
      <Radio value={3}>3</Radio>
    </Radio.Group>
  );
}

export function stepsElement(t, element) {
  return (
    <Steps>
      <Step status="finish" title="مرحله اول" />
      <Step status="finish" title="مرحله دوم" />
      <Step status="process" title="مرحله آخر" />
    </Steps>
  );
}

export function progressElement(t, element) {
  return (
    <Progress
      class="mt-2 mb-2 ml-5 mr-5"
      type="circle"
      percent={100}
      width={80}
    />
  );
}

export function dropdownElement(t, element) {
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

export function tableElement(t, element) {
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
