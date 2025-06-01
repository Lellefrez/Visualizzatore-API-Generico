import { Layout, Typography } from "antd";
import { useState, useEffect } from "react";
import InputUrl from "./components/InputUrl";
import Spinner from "./components/Spinner";
import ErrorAlert from "./components/ErrorAlert";
import UrlHistory from "./components/UrlHistory";
import JsonViewer from "./components/JsonViewer";
import { useFetchJson } from "./hooks/useFetchJson";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const App = () => {
  const [apiUrl, setApiUrl] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>([]);

  const { data, error, loading } = useFetchJson(apiUrl);

  // Al primo render carico la cronologia salvata nel localStorage
  useEffect(() => {
    const stored = localStorage.getItem("apiHistory");
    if (stored) {
      setHistory(JSON.parse(stored));
    }
  }, []);

  const handleUrlSubmit = (url: string) => {
    setApiUrl(url);

    // Se non è già in cronologia lo aggiungo (ho impostato un limiteMax a 10)
    if (!history.includes(url)) {
      const updated = [url, ...history].slice(0, 10);
      setHistory(updated);
      localStorage.setItem("apiHistory", JSON.stringify(updated));
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ backgroundColor: "#001529", padding: "0 24px" }}>
        <Title
          level={3}
          style={{ color: "white", margin: 0, lineHeight: "64px" }}
        >
          Visualizzatore API
        </Title>
      </Header>

      <Content style={{ padding: "24px", width: "100%", margin: "0 auto" }}>
        <>
          <div style={{ textAlign: "center" }}>
            <Paragraph>
              Inserisci un URL di un'API pubblica che restituisce JSON per
              visualizzarne il contenuto in modo leggibile.
            </Paragraph>
          </div>

          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <InputUrl onSubmit={handleUrlSubmit} />
            <UrlHistory history={history} onSelect={handleUrlSubmit} />
          </div>

          {loading && <Spinner />}

          {error && <ErrorAlert message={error} />}

          {data && !loading && !error && (
            <div style={{ marginTop: 24 }}>
              <JsonViewer data={data} />
            </div>
          )}
        </>
      </Content>

      <Footer style={{ textAlign: "center" }}>
        Test Frezzato Manuel {new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};

export default App;
