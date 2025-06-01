import { Input, Button, Space, message } from "antd";
import { SetStateAction, useState } from "react";

type Props = {
  onSubmit: (url: string) => void;
};

const InputUrl = ({ onSubmit }: Props) => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  //  controllo è un URL valido
  const isValidHttpUrl = (value: string) => {
    try {
      const parsed = new URL(value);
      return parsed.protocol === "http:" || parsed.protocol === "https:";
    } catch {
      return false;
    }
  };

  const handleSubmit = () => {
    if (!isValidHttpUrl(url)) {
      message.error("Inserisci un URL valido");
      return;
    }

    setLoading(true);
    onSubmit(url);
    setTimeout(() => setLoading(false), 300);
  };

  return (
    <Space.Compact style={{ width: "100%" }}>
      <Input
        placeholder="Inserisci l'URL dell'API"
        value={url}
        onChange={(e: { target: { value: SetStateAction<string> } }) =>
          setUrl(e.target.value)
        }
        onPressEnter={handleSubmit}
      />
      <Button type="primary" onClick={handleSubmit} loading={loading}>
        Invia
      </Button>
    </Space.Compact>
  );
};

export default InputUrl;
