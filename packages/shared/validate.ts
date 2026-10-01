import { z } from 'zod'
import type { Collection, Field } from './types'

function fieldSchema(f: Field): z.ZodTypeAny {
    let s: z.ZodTypeAny;
    switch (f.type) {
        case 'text':     s = z.string(); break;
        case 'richtext': s = z.record(z.unknown()); break;   // TipTap JSON
        case 'number':   s = z.number(); break;
        case 'boolean':  s = z.boolean(); break;
        case 'date':     s = z.coerce.date(); break;
        case 'select':   s = z.enum(f.options as [string, ...string[]]); break;
        case 'media':    s = z.string(); break;               // media ID
    }
  return f.required ? s : s.optional().nullable();
}

export function buildValidator(c: Collection) {
  return z.object(
    Object.fromEntries(c.fields.map((f) => [f.name, fieldSchema(f)]))
  ).strict();  // reject fields that aren't in the schema
}