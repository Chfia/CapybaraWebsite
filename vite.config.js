export default {
    build: {
        outDir: 'public',
        rollupOptions: {
            input: {
                main: './index.html',
                about: './about.html',
            }
        }
    }
}
