import{j as i,o as n,_ as o,g as l,k as e,l as c}from"./entry.1fec6108.js";import{_ as s}from"./ArticleWidget.006c78c7.js";import"./projects.a559748d.js";import"./MarkdownViewWidget.5e6f7945.js";function p(t,r,u,d,m,g){const a=s;return n(),i(a,{article:t.article,lang:t.lang},null,8,["article","lang"])}const _=l({head(t){return{title:"Blog - "+e.by_id[c().params.article_id].title.en+" | Nikita Logos"}},data(){return{article:null}},computed:{lang(){return this.$route.query.lang||"en"}},created(){this.article=e.by_id[this.$route.params.article_id]}},"$ZVDlfDU7xq"),k=o(_,[["render",p]]);export{k as default};