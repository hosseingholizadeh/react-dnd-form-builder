import {
  Button,
  Carousel,
  Checkbox,
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
  let { backgroundColorRgb, colorRgb } = style ?? {};

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
    <Button style={renderElementStyle(options?.style)} type="primary">
      {element.title ?? t("button")}
    </Button>
  );
}

export function inputElement(t, element) {
  let { options } = element;
  return (
    <Input
      style={renderElementStyle(options?.style)}
      placeholder="input"
      size="middle"
    />
  );
}

export function searchElement(t, element) {
  let { options } = element;
  return (
    <Search
      style={renderElementStyle(options?.style)}
      placeholder="input search text"
      allowClear
      size="middle"
    />
  );
}

export function dividerElement(t, element) {
  let { options } = element;
  return <Divider style={renderElementStyle(options?.style)} />;
}

export function carouselElement(t, element) {
  let { options } = element;
  return (
    <Carousel style={renderElementStyle(options?.style)}>
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
  let { options } = element;
  return (
    <Image.PreviewGroup style={renderElementStyle(options?.style)}>
      <Image
        width={200}
        src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
      />
    </Image.PreviewGroup>
  );
}

export function tabElement(t, element) {
  let { options } = element;
  return (
    <Tabs defaultActiveKey="1" style={renderElementStyle(options?.style)}>
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
  let { options } = element;
  return (
    <Rate
      style={renderElementStyle(options?.style)}
      allowHalf
      defaultValue={0}
    />
  );
}

export function switchElement(t, element) {
  let { options } = element;
  return <Switch style={renderElementStyle(options?.style)} />;
}

export function radioElement(t, element) {
  let { options } = element;
  return (
    <Radio.Group style={renderElementStyle(options?.style)}>
      <Radio value={1}>1</Radio>
      <Radio value={2}>2</Radio>
      <Radio value={3}>3</Radio>
    </Radio.Group>
  );
}

export function checkboxElement(t, element) {
  let { options } = element;
  const plainOptions = ["Apple", "Pear", "Orange"];
  const defaultCheckedList = ["Apple", "Orange"];

  return (
    <Checkbox.Group
      style={renderElementStyle(options?.style)}
      options={plainOptions}
      value={defaultCheckedList}
    />
  );
}

export function stepsElement(t, element) {
  let { options } = element;
  return (
    <Steps style={renderElementStyle(options?.style)}>
      <Step status="finish" title="مرحله اول" />
      <Step status="finish" title="مرحله دوم" />
      <Step status="process" title="مرحله آخر" />
    </Steps>
  );
}

export function progressElement(t, element) {
  let { options } = element;
  return (
    <Progress
      style={renderElementStyle(options?.style)}
      type="circle"
      percent={100}
      width={80}
    />
  );
}

export function dropdownElement(t, element) {
  let { options } = element;
  return (
    <Dropdown
      style={renderElementStyle(options?.style)}
      overlay={menu}
      placement="bottomCenter"
      arrow
    >
      <Button>Dropdown</Button>
    </Dropdown>
  );
}

export function tableElement(t, element) {
  let { options } = element;
  return <Table bordered style={renderElementStyle(options?.style)} />;
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
