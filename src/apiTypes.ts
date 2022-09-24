export type obj = {
  key: string;
  value: string | string[] | { key: string; value: string };
};

export type data = obj[];

export interface response {
  data: data;
}
