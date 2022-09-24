export interface colors {
  hex_value: string;
  colour_name: string;
}

export interface obj {
  api_featured_image: string;
  brand: string;
  category: string;
  created_at: string;
  currency: string;
  description: string;
  id: number;
  image_link: string;
  name: string;
  price: string;
  price_sign: string;
  product_api_url: string;
  product_colors: colors[];
  product_link: string;
  product_type: string;
  tag_list: string[];
  updated_at: string;
  website_link: string;
}

export type data = obj[];
