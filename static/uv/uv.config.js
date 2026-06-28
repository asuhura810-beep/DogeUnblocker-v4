self.__uv$config = {
    prefix: '/service/',
    // 複数のBare Serverを切り替えるか、別のURLを指定
    bare: 'https://proxy.student-corner.net/', 
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};

