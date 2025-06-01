//mantengo tutti i json in un solo file, non lo riscrivo ogni volta e riutilizzabile

export type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonObject
  | JsonArray;
export type JsonObject = { [key: string]: JsonValue };
export type JsonArray = JsonValue[];
