import { defineConfig } from "tsdown"

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['esm'],
    platform: 'node',
    target: 'node22',
    clean: true,
    noExternal: [/.*/],
    external: [
        'kerberos',
        'snappy',
        '@mongodb-js/zstd',
        'mongodb-client-encryption',
        '@aws-sdk/credential-providers',
        'gcp-metadata',
        'socks',
        'aws4',
    ],
})