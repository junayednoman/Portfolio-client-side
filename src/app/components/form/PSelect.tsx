import { Col, Form, Select } from "antd";
import { Controller } from "react-hook-form";
import RInputError from "./PInputError";

const { Option } = Select;

type TSelectProps = {
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  colSpanLg?: number;
  colSpanMd?: number;
  options: { value: string | number | boolean | null; label: string }[];
  mode?: "multiple";
};

const PSelect = ({
  name,
  label,
  placeholder,
  disabled,
  colSpanLg,
  colSpanMd,
  options,
  mode,
}: TSelectProps) => {
  return (
    <Col
      span={24}
      lg={{ span: colSpanLg }}
      md={{ span: colSpanMd }}
      className="mx-auto"
    >
      <div className="flex items-center justify-center">
        <Controller
          name={name}
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          render={({ field, fieldState: error }) => (
            <div className="w-full">
              <Form.Item
                htmlFor={name}
                label={label}
                className="mb-3 font-semibold"
              >
                <Select
                  mode={mode}
                  {...field}
                  id={name}
                  placeholder={placeholder}
                  disabled={disabled}
                  className="block font-normal rounded-[4px] focus:border-accent focus:shadow-none hover:border-text border border-slate-300"
                  size="large"
                >
                  {options.map((option) => (
                    <Option key={String(option.value)} value={option.value}>
                      {option.label}
                    </Option>
                  ))}
                </Select>
                {error && (
                  <RInputError message={error?.error?.message as string} />
                )}
              </Form.Item>
            </div>
          )}
        />
      </div>
    </Col>
  );
};

export default PSelect;
