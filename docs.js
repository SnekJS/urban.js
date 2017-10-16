/* eslint-disable */
const Docma = require('docma'), Package = require('./package'); Docma.create().build({ app: { title: Package.name, base: '/', entrance: 'content:main', routing: 'query', server: Docma.ServerType.GITHUB }, markdown: { gfm: !0, tables: !0, breaks: !1, pedantic: !1, sanitize: !1, smartLists: !1, smartypants: !1, tasks: !1, emoji: !0 }, src: Package.Docma.src, dest: './docs', jsdoc: { plugins: ['jsdoc-dynamic'] }, template: { options: { title: Package.name, navItems: Package.Docma.nav } } }).catch(console.error);
