import { Alert } from "antd";

type Props = { message: string };

const ErrorAlert = ({ message }: Props) => (
  <div style={{ marginTop: 24 }}>
    <Alert type="error" message="Errore" description={message} showIcon />
  </div>
);
export default ErrorAlert;
