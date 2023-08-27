import { PlusOutlined } from "@ant-design/icons";
import { Form, Input, InputNumber, Radio, Upload } from "antd";
import { useState } from "react";
import Button from "../../../components/Button";
import { CustomService } from "../../../services/custom.service";
import "./Create.scss";

export default function Create() {
  const [type, setType] = useState("create");
  const [file, setFile] = useState([]);
  const [image, setImage] = useState("");
  const beforceUpload = async (fileUpload) => {
    setFile([fileUpload]);
    const base64code = await CustomService.getBase64(fileUpload);
    setImage(base64code);
    return false;
  };
  const createFormList = [
    {
      name: "name",
      label: "Món ăn ",
      rule: [
        {
          required: true,
          message: "Please input NFT name!",
        },
      ],
      children: <Input />,
    },
    {
      name: "symbol",
      label: "ký tự món ăn",
      rule: [
        {
          required: true,
          message: "Please input NFT symbol!",
        },
      ],
      children: <Input />,
    },
    {
      name: "description",
      label: "Mô tả",
      rule: [
        {
          required: true,
          message: "Please input NFT description!",
        },
      ],
      children: <Input.TextArea />,
    },
    {
      name: "royalty",
      label: "Phí chuyển  ",
      initialValue: 1,
      rule: [
        {
          required: true,
          message: "Please input NFT royalty!",
        },
      ],
      children: <InputNumber min={1} />,
    },
    {
      name: "price",
      label: "Giá tiền",
      initialValue: 0,
      rule: [
        {
          required: true,
          message: "Please input NFT price!",
        },
      ],
      children: <InputNumber min={1} addonAfter="MBE" />,
    },
    {
      name: "file",
      label: "Hình ảnh ",
      rule: [
        {
          required: true,
          message: "Please input NFT image!",
        },
      ],
      children: (
        <>
          {image ? (
            <div className="preview-img">
              <img src={image} alt="preview image" />
              {/* <p>uploaded</p> */}
            </div>
          ) : (
            <Upload
              beforeUpload={beforceUpload}
              fileList={file}
              listType="picture-card"
              showUploadList={false}
            >
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            </Upload>
          )}
        </>
      ),
    },
  ];
  const handleSubmit = (value) => {
    console.log(value);
    console.log(value.file.file);
    console.log("aaa");
  };
  const handleSubmitFail = (errorInfo) => {
    console.log(errorInfo);
  };
  return (
    <main className="create-nft container">
      <div className="create-nft__type">
        <h2 className="create-nft__type-title">
          {CustomService.capitalizeFirstLetter(type)} NFT
        </h2>
        <Radio.Group
          onChange={(e) => setType(e.target.value)}
          value={type}
          optionType="button"
        >
          <Radio value={"create"}>Create</Radio>
          <Radio value={"upload"} disabled>
            Upload
          </Radio>
        </Radio.Group>
      </div>
      <div className="create-nft__content">
        {type === "create" ? (
          <Form
            name="create-nft"
            initialValues={{}}
            labelCol={{ span: 2 }}
            wrapperCol={{ span: 22 }}
            onFinish={handleSubmit}
            onFinishFailed={handleSubmitFail}
            autoComplete="off"
          >
            {createFormList.map((formItem, idx) => (
              <Form.Item
                key={idx}
                label={formItem.label}
                name={formItem.name}
                rules={formItem.rule}
                initialValue={formItem.initialValue || ""}
              >
                {formItem.children}
              </Form.Item>
            ))}

            <Form.Item wrapperCol={{ offset: 12 }}>
              <Button
                onClick={() => {
                  return;
                }}
                disable={false}
                size="s"
              >
                Create
              </Button>
            </Form.Item>
          </Form>
        ) : (
          <h1>upload</h1>
        )}
      </div>
    </main>
  );
}
