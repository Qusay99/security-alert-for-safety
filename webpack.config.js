{
    test: /\.(html|svelte)$/,
    use:[
      { loader: "babel-loader" },
      {
        loader: "svelte-loader",
        options: {
          emitCss: true,
        },
      },
    ],
}