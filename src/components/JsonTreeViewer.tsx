import { Collapse, Typography } from "antd";
import { JsonValue } from "../types/json";
const { Panel } = Collapse;
const { Text } = Typography;

type Props = {
  data: JsonValue;
  label?: string; // Etichetta opzionale, utile per le chiamate ricorsive
};

/**
 * Questo componente mostra un oggetto JSON in una vista ad albero.
 */
const JsonTreeViewer = ({ data, label }: Props) => {
  // Se è un array, mostriamo tutti gli elemento come un nodo
  if (Array.isArray(data)) {
    return (
      <Collapse style={{ marginTop: 8 }}>
        <Panel header={label ?? "Array"} key={label ?? "array"}>
          {data.map((item, index) => (
            <JsonTreeViewer key={index} data={item} label={`[${index}]`} />
          ))}
        </Panel>
      </Collapse>
    );
  }

  // Se il dato è un oggetto, mostriamo ogni chiave come pannello o riga
  if (typeof data === "object" && data !== null) {
    return (
      <Collapse style={{ marginTop: 8 }}>
        <Panel header={label ?? "Oggetto"} key={label ?? "object"}>
          {Object.entries(data).map(([key, value]) => (
            <div key={key} style={{ marginLeft: 16 }}>
              {typeof value === "object" && value !== null ? (
                <JsonTreeViewer data={value} label={key} />
              ) : (
                <Text>
                  <strong>{key}:</strong> {String(value)}
                </Text>
              )}
            </div>
          ))}
        </Panel>
      </Collapse>
    );
  }

  // Se il dato è un valore primitivo (stringa, numero, booleano, null)
  return (
    <div style={{ marginTop: 8, marginLeft: 16 }}>
      {label && (
        <Text>
          <strong>{label}:</strong> {String(data)}
        </Text>
      )}
    </div>
  );
};

export default JsonTreeViewer;
