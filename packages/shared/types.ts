export type FieldType = 'text' | 'richtext' | 'number' | 'boolean' | 'date' | 'select' | 'media';

export interface Field {
    name: string;
    label: string;
    type: FieldType;
    required?: boolean;
    options?: string[];
}

export interface Collection {
    _id: string;
    name: string;
    label: string;
    fields: Field[]
    createdAt: Date;
    updatedAt: Date;
}

export interface Entry {
  _id: string;
  collection: string;    // "posts"
  slug: string;
  status: 'draft' | 'published';
  data: Record<string, unknown>;  // shaped by the collection's fields
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date | null;
}