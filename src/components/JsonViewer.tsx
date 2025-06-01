import JsonTreeViewer from "./JsonTreeViewer";
import { JsonValue } from "../types/json";

type Props = {
  data: unknown;
};

/**
 * Questo componente riceve qualsiasi tipo di dato
 * e lo passa al visualizzatore ad albero.
 */
const JsonViewer = ({ data }: Props) => {
  // Se non abbiamo dati, non mostriamo nulla
  if (!data) return null;

  // Castiamo in JsonValue per usare il visualizzatore ad albero
  return (
    <div style={{ marginTop: 24 }}>
      <JsonTreeViewer data={data as JsonValue} />
    </div>
  );
};

export default JsonViewer;
