import { Spin } from "antd";

const Spinner = () => (
  <div style={{ marginTop: 24, textAlign: "center" }}>
    <Spin tip="Caricamento...">
      <div style={{ minHeight: 40 }} />
    </Spin>
  </div>
);
/**
 * il div dentro spin serve solo per evitare un messaggio in console
 * perchè Spin funziona solo in modalità nested o fullscreen
 */

export default Spinner;
