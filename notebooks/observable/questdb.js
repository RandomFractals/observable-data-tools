// Title: QuestDB
// Author: Taras Novak (@RandomFractals)
// Version: 290
// https://observablehq.com/@randomfractals/questdb@290

import define1 from "/@nebrius/indented-toc.js?v=3";
import define2 from "/@observablehq/questdb.js?v=3";
import define3 from "/@observablehq/summary-table.js?v=3";
import define4 from "/@uwdata/arquero.js?v=3";
import define5 from "/@observablehq/data-wrangler.js?v=3";
import define6 from "/@mbostock/saving-svg.js?v=3";

function _1(md) {
  return (
    md`# QuestDB

[QuestDB](https://github.com/questdb/questdb) is a high-performance, open-source SQL database for applications in financial services, IoT, machine learning, DevOps and observability. It includes endpoints for PostgreSQL wire protocol, high-throughput schema-agnostic ingestion using InfluxDB Line Protocol, and a REST API for queries, bulk imports, and exports.`
  )
}

function _2(toc) {
  return (
    toc()
  )
}

function _3(md) {
  return (
    md`## QuestDB Client`
  )
}

function _4(md) {
  return (
    md`We'll use [QuestDB](https://observablehq.com/@observablehq/questdb?collection=@observablehq/database-clients) Observable [DatabaseClient](https://observablehq.com/@observablehq/database-client-specification) implementation to connect to the [QuestDB demo](https://demo.questdb.io/) database instance and run [QuestDB SQL](https://questdb.io/docs/concept/sql-execution-order) queries:`
  )
}

function _db(QuestDatabaseClient) {
  return (
    new QuestDatabaseClient("https://demo.questdb.io")
  )
}

function _6(md) {
  return (
    md`## Database Tables

QuestDB [\`SHOW\`](https://questdb.io/docs/reference/sql/show) SQL lists database tables and columns:`
  )
}

function _7(db) {
  return (
    db.sql`SHOW TABLES`
  )
}

function _tables(db) {
  return (
    db.sql(['SHOW TABLES;'])
  )
}

function _9(md) {
  return (
    md`## Table Columns

*Select table:*`
  )
}

function _table(Inputs, tables, md) {
  return (
    Inputs.select(tables.map(table => table.table)
      // filter out system tables
      .filter(tableName => tableName !== 'sys.column_versions_purge_log')
      .sort().reverse(),
      {
        label: md`## Table`
      })
  )
}

function _11(Inputs, tableColumns) {
  return (
    Inputs.table(tableColumns)
  )
}

function _tableColumns(db, table) {
  return (
    db.sql([`SHOW COLUMNS FROM ${table};`])
  )
}

function _13(rowLimit, table, md) {
  return (
    md`## Table Summary

Table summary of the max last ${rowLimit} rows from the \`${table}\` table using [Summary Table](https://observablehq.com/@observablehq/summary-table) Observable cell:`
  )
}

function _rowLimit(Inputs) {
  return (
    Inputs.select([1000, 10000, 50000], { label: 'Row Limit:' })
  )
}

function _tableSummary(SummaryTable, data, table) {
  return (
    SummaryTable(data, { label: table })
  )
}

function _16(table, md) {
  return (
    md`## Table Data

**${table}**`
  )
}

function _searchResults(Inputs, data) {
  return (
    Inputs.search(data)
  )
}

function _18(Inputs, searchResults) {
  return (
    Inputs.table(searchResults)
  )
}

function _data(db, table, rowLimit) {
  return (
    db.sql([`SELECT * FROM ${table} LIMIT -${rowLimit}`])
  )
}

function _20(table, md) {
  return (
    md`## Data Wrangler

Query and transform QuestDB \`${table}\` data with [Arquero](https://uwdata.github.io/arquero/) in Observable [Data Wrangler](https://observablehq.com/@observablehq/data-wrangler) cell with auto-generated JS data transformations code:`
  )
}

function _queryEditor(Wrangler, data) {
  return (
    Wrangler(data)
  )
}

function _22(md) {
  return (
    md`## Table Data SQL

Query QuestDB tables with Observable [SQL cell](https://observablehq.com/@observablehq/sql-cell):`
  )
}

function _23(db) {
  return (
    db.sql`SELECT * FROM weather LIMIT -1000`
  )
}

function _24(md) {
  return (
    md`**tip:** use [QuestDB SQL](https://questdb.io/docs/concept/sql-execution-order/) docs and tables diagram below to draft your SQL cell queries.`
  )
}

function _25(md) {
  return (
    md`## Tables Diagram

[Graphviz](https://graphviz.org) tables diagram with table column names and column data types:

**tip**: click on the \`tablesDiagram\` cell vertical ... menu below to download it in SVG or PNG format.`
  )
}

function _tablesDiagram(diagram, db) {
  return (
    diagram(db)
  )
}

function _27(md) {
  return (
    md`### [Mermaid ER Diagram](https://mermaid-js.github.io/mermaid/#/entityRelationshipDiagram)

TODO: get all the tables to show in this mermaid diagram as in the dot diagram above.`
  )
}

function _mermaidTablesDiagram(mermaidDiagram, db) {
  return (
    mermaidDiagram(db)
  )
}

async function _29(html, DOM, rasterize, mermaidTablesDiagram, serialize) {
  return (
    html`
${DOM.download(await rasterize(mermaidTablesDiagram), `questdb-tables-diagram.png`, "Save as PNG")}
${DOM.download(await serialize(mermaidTablesDiagram), `questdb-tables-diagram.svg`, "Save as SVG")}
`
  )
}

function _mermaidDiagram(describe, mermaid) {
  return (
    async function mermaidDiagram(db) {
      // get database tables and colulmns
      const tables = await describe(db);
      const tableColumns = await Promise.all(tables.map(table => db.sql([`SHOW COLUMNS FROM ${table};`])));

      // create table nodes mermaid diagram string
      const tableNodes = tables.map((table, index) =>
        `${table} {
      ${tableColumns[index].map((column) => `${column.column} ${column.type}`).join('\n')}
    }`).join('\n');

      return mermaid`erDiagram
    ${tableNodes}
  `;
    }
  )
}

function _diagram(describe, dot) {
  return (
    async function diagram(db) {
      // get database tables and colulmns
      const tables = await describe(db);
      const tableColumns = await Promise.all(tables.map(table => db.sql([`SHOW COLUMNS FROM ${table};`])));

      // create table nodes dot diagram string with html table labels
      const tableNodes = tables.map((table, index) =>
        `"${table}" [shape=none, label=<
    <table bgcolor="#cccccc" border="0" cellborder="0" cellspacing="1" cellpadding="3">
      <tr>
        <td colspan="2" bgcolor="skyblue">
          <b>${table}</b>
        </td>
      </tr>${tableColumns[index].map((column) => `
      <tr>
        <td port="${column.column}" align="left" bgcolor="white">${column.column}</td>
        <td align="left" bgcolor="white">${column.type}</td>
      </tr>`).join('')}}
    </table>
    >]`).join('\n');

      return dot`digraph Tables {
    node [fontsize=12]
    rankdir = LR;
    ${tableNodes}
  }`;
    }
  )
}

function _describe() {
  return (
    async function describe(db) {
      // get database table names
      return (await db.sql(['SHOW TABLES;'])).map(table => table.table) // table name
        .filter(tableName => tableName !== 'sys.column_versions_purge_log') // skip system tables
    }
  )
}

function _layout(html, graphviz) {
  return (
    function layout(layout) {
      return function* (parts, ...args) {
        yield html`<div>...loading...</div>`;

        const str = parts
          .map((s, i) => s + (i < args.length ? args[i] : ""))
          .join("");
        yield graphviz.layout(str, "svg", layout).then(svg => {
          return html`<div>${svg}</div>`;
        });
      };
    }
  )
}

function _dot(layout) {
  return (
    layout('neato')
  )
}

function _35(md) {
  return (
    md`## Appendix`
  )
}

async function _graphviz(require) {
  const path = await require.resolve("@hpcc-js/wasm");
  const hpccWasm = await require(path);
  //  Setting wasmFolder is not typically needed ---
  const pathParts = path.split("/");
  pathParts.pop();
  hpccWasm.wasmFolder(pathParts.join("/"));
  return hpccWasm.graphviz;
}


export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer()).define(["toc"], _2);
  main.variable(observer()).define(["md"], _3);
  main.variable(observer()).define(["md"], _4);
  main.variable(observer("db")).define("db", ["QuestDatabaseClient"], _db);
  main.variable(observer()).define(["md"], _6);
  main.variable(observer()).define(["db"], _7);
  main.variable(observer("tables")).define("tables", ["db"], _tables);
  main.variable(observer()).define(["md"], _9);
  main.variable(observer("viewof table")).define("viewof table", ["Inputs", "tables", "md"], _table);
  main.variable(observer("table")).define("table", ["Generators", "viewof table"], (G, _) => G.input(_));
  main.variable(observer()).define(["Inputs", "tableColumns"], _11);
  main.variable(observer("tableColumns")).define("tableColumns", ["db", "table"], _tableColumns);
  main.variable(observer()).define(["rowLimit", "table", "md"], _13);
  main.variable(observer("viewof rowLimit")).define("viewof rowLimit", ["Inputs"], _rowLimit);
  main.variable(observer("rowLimit")).define("rowLimit", ["Generators", "viewof rowLimit"], (G, _) => G.input(_));
  main.variable(observer("viewof tableSummary")).define("viewof tableSummary", ["SummaryTable", "data", "table"], _tableSummary);
  main.variable(observer("tableSummary")).define("tableSummary", ["Generators", "viewof tableSummary"], (G, _) => G.input(_));
  main.variable(observer()).define(["table", "md"], _16);
  main.variable(observer("viewof searchResults")).define("viewof searchResults", ["Inputs", "data"], _searchResults);
  main.variable(observer("searchResults")).define("searchResults", ["Generators", "viewof searchResults"], (G, _) => G.input(_));
  main.variable(observer()).define(["Inputs", "searchResults"], _18);
  main.variable(observer("data")).define("data", ["db", "table", "rowLimit"], _data);
  main.variable(observer()).define(["table", "md"], _20);
  main.variable(observer("viewof queryEditor")).define("viewof queryEditor", ["Wrangler", "data"], _queryEditor);
  main.variable(observer("queryEditor")).define("queryEditor", ["Generators", "viewof queryEditor"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], _22);
  main.variable(observer()).define(["db"], _23);
  main.variable(observer()).define(["md"], _24);
  main.variable(observer()).define(["md"], _25);
  main.variable(observer("tablesDiagram")).define("tablesDiagram", ["diagram", "db"], _tablesDiagram);
  main.variable(observer()).define(["md"], _27);
  main.variable(observer("mermaidTablesDiagram")).define("mermaidTablesDiagram", ["mermaidDiagram", "db"], _mermaidTablesDiagram);
  main.variable(observer()).define(["html", "DOM", "rasterize", "mermaidTablesDiagram", "serialize"], _29);
  main.variable(observer("mermaidDiagram")).define("mermaidDiagram", ["describe", "mermaid"], _mermaidDiagram);
  main.variable(observer("diagram")).define("diagram", ["describe", "dot"], _diagram);
  main.variable(observer("describe")).define("describe", _describe);
  main.variable(observer("layout")).define("layout", ["html", "graphviz"], _layout);
  main.variable(observer("dot")).define("dot", ["layout"], _dot);
  main.variable(observer()).define(["md"], _35);
  const child1 = runtime.module(define1);
  main.import("toc", child1);
  const child2 = runtime.module(define2);
  main.import("QuestDatabaseClient", child2);
  const child3 = runtime.module(define3);
  main.import("SummaryTable", child3);
  const child4 = runtime.module(define4);
  main.import("aq", child4);
  main.import("op", child4);
  const child5 = runtime.module(define5);
  main.import("Wrangler", child5);
  main.import("op", child5);
  const child6 = runtime.module(define6);
  main.import("rasterize", child6);
  main.import("serialize", child6);
  main.variable(observer("graphviz")).define("graphviz", ["require"], _graphviz);
  return main;
}