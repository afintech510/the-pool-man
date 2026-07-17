/**
 * Renders a JSON-LD structured-data block. Pass a schema.org object (or array of
 * objects) and it is serialized into a <script type="application/ld+json">.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here — the data is app-controlled, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
