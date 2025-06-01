import { Button, Space, Typography } from "antd";

type Props = {
  history: string[];
  onSelect: (url: string) => void;
};

const UrlHistory = ({ history, onSelect }: Props) => {
  if (history.length === 0) return null;

  return (
    <div style={{ marginTop: 16, maxWidth: 600, marginInline: "auto" }}>
      <Typography.Text strong>URL recenti:</Typography.Text>
      <Space wrap style={{ marginTop: 8 }}>
        {history.map((url) => (
          <Button key={url} size="small" onClick={() => onSelect(url)}>
            {url}
          </Button>
        ))}
      </Space>
    </div>
  );
};

export default UrlHistory;
