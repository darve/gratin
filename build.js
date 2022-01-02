
const jf = require('jsonfile');
const fs = require('fs');
const data = require('./content/index');

const output = [];
const _output = {};

data.map( (v,i) => {

    let meta = require(`./content/${v}/meta`);
    let content = null;

    if (meta.type === 'post') content = fs.readFileSync(`./content/${v}/content.md`).toString();
    output.push({
        slug: v,
        content,
        meta,
        public: ('public' in meta ? meta.public : true )
    });

    _output[v] = {
        slug: v,
        content,
        meta,
        public: ('public' in meta ? meta.public : true )
    };
});

jf.writeFileSync('./app/content-built.json', {
    list: output,
    items: _output
});
