// Title: Tabular Data Viewer
// Author: Taras Novak (@RandomFractals)
// Version: 323
// https://observablehq.com/@randomfractals/tabular-data-viewer@323

import define1 from "/@observablehq/summary-table.js?v=3";

function _1(md){return(
md`# Tabular Data Viewer 中

Use this [Tabular Data Viewer 中](https://twitter.com/hashtag/TabularDataViewer?src=hashtag_click) notebook 📓 to view sample datasets or preview any public
[Apache Arrow](https://observablehq.com/@randomfractals/apache-arrow),
**CSV**, [**GeoJSON**](https://www.rfc-editor.org/rfc/rfc7946.html) or **JSON array** data with [Summary Table](https://observablehq.com/@observablehq/summary-table) and [Tabulator](http://tabulator.info/). Just paste your data url to fetch it.

Also, try our [Data Table](https://github.com/RandomFractals/vscode-data-table/releases) 🈸 notebook 📓 cell ⌗ output renderer extension with [VSCode Notebooks](https://marketplace.visualstudio.com/search?target=VSCode&category=Notebooks&sortBy=Installs) 📚.`
)}

function _dataSet(Inputs,dataSets,html){return(
Inputs.select(dataSets, {
  label: html`<b>dataset</b>`
})
)}

function _dataUrl(Inputs,html,dataUrlParam,dataSet){return(
Inputs.text({
  label: html`<b>dataUrl</b>`,
  placeholder: 'type data url and click fetch',
  value: `${dataUrlParam ? dataUrlParam : 'https://raw.githubusercontent.com/vega/vega-datasets/master/data/' + dataSet}`,
  submit: 'fetchData'
})
)}

function _shareLink(md,dataUrl){return(
md `*share a link to your [data](https://observablehq.com/@randomfractals/tabular-data-viewer?dataUrl=${dataUrl})*`
)}

function _dataSummaryView(SummaryTable,data){return(
SummaryTable(data)
)}

function _6(md){return(
md`## Tabular Data View`
)}

function _tableOptions(Inputs,table){return(
Inputs.form([
  Inputs.button('Download', {reduce: () => table.download('csv', 'data.csv')}),
])
)}

function _tableContainer(html){return(
html `<div id="table-container" style="height: 600px">
</div>`
)}

function _table(Tabulator,columnHeaderMenu,tableLayout,movableColumns,movableRows,selectableRows,rowContextMenu,pagination,paginationSize,pageSizes,data,dataUrl){return(
new Tabulator('#table-container', {
  height: 645,
  autoColumns: true,
  columnDefaults: {
    headerMenu: columnHeaderMenu
  },
  clipboard: true, // eanble clipboard copy and paste
  clipboardPasteAction: 'replace',
  layout: tableLayout,
  layoutColumnsOnNewData: true,
  movableColumns: movableColumns,
  movableRows: movableRows,
  selectable: selectableRows,
  rowContextMenu: rowContextMenu,
  pagination: pagination,
  paginationSize: paginationSize,
  paginationSizeSelector: pageSizes,
  renderVerticalBuffer: 300, // set virtual DOM buffer to 300px
  debugInvalidOptions: true, // tabulator warnings
  debugEventsExternal: ['tableBuilding', 'dataLoaded', 'tableBuilt'], // log specified tabulator events
 	data: data,
  persistenceMode: 'local',
  persistenceID: dataUrl,
  persistentLayout: true,
  persistence: {
    sort: true,
    filter: true,
    group: true,
    columns: true,
  }
})
)}

function _10(md){return(
md`### Table UX Tips
- Hold **CTRL** or **Shift** key when clicking on column headers to **Sort** table data by multiple columns.
- See [Clipboard](http://tabulator.info/docs/5.0/clipboard) options for the clipboard copy and paste data options.
- Use row context menu to **Delete** or **Freeze** a row.`
)}

function _11(md){return(
md`## Table Toggles`
)}

function _tableLayout(Inputs,tableLayouts){return(
Inputs.select(tableLayouts, {value: 'fitDataStretch', label: 'Table Layout'})
)}

function _pagination(Inputs){return(
Inputs.toggle({label: 'Pagination', value: true})
)}

function _paginationSize(Inputs,pageSizes){return(
Inputs.select(pageSizes, {value: 100000, label: 'Page Size'})
)}

function _movableColumns(Inputs){return(
Inputs.toggle({label: 'Movable Columns', value: true})
)}

function _movableRows(Inputs){return(
Inputs.toggle({label: 'Movable Rows', value: true})
)}

function _selectableRows(Inputs){return(
Inputs.toggle({label: 'Selectable Rows', value: true})
)}

function _tableLayouts(){return(
[
  'fitData',
  'fitDataFill',
  'fitDataStretch',
  'fitDataTable',
  'fitColumns'
]
)}

function _pageSizes(){return(
[20, 100, 1000, 10000, 100000, 1000000, 10000000]
)}

function _columnHeaderMenu(){return(
[
  {
    label: 'Hide Column',
    action: function (e, column) {
      column.hide();
    }
  },
  {
    label: "Freeze Column",
    action: function (e, column) {
      column.updateDefinition({ frozen: true });
    }
  },
  {
    label: 'Delete Column',
    action: function (e, column) {
      column.delete();
    }
  }
]
)}

function _rowContextMenu(){return(
[
  {
    label: "<i class='fas fa-trash'></i> Delete Row",
    action: function(e, row) {row.delete()}
  },
  {
    label: "Freeze Row",
    action: function (e, row) { row.freeze(); }
  }
]
)}

function _22(md){return(
md`## Data`
)}

function _data(fetchData,dataUrl){return(
fetchData(dataUrl)
)}

function _dataUrlParam(URLSearchParams,html){return(
new URLSearchParams(html`<a href>`.search).get('dataUrl')
)}

function _dataSets(){return(
[
  'airports.csv', 'co2-concentration.csv', 'disasters.csv', 'flights-3m.csv', 'flights-airport.csv',
  'gapminder-health-income.csv', 'github.csv', 'iowa-electricity.csv', 'la-riots.csv', 'lookup_groups.csv',
  'lookup_people.csv', 'population_engineers_hurricanes.csv', 'seattle-temps.csv', 'seattle-weather.csv',
  'sf-temps.csv', 'sp500.csv', 'stocks.csv', 'us-employment.csv', 'weather.csv', 'windvectors.csv', 'zipcodes.csv',
  'barley.json', 'birdstrikes.json', 'budget.json', 'budgets.json', 'burtin.json', 'cars.json', 'climate.json',
  'countries.json', 'crimea.json', 'driving.json', 'flare-dependencies.json', 'flare.json',
  'flights-2k.json', 'flights-5k.json', 'flights-10k.json', 'flights-20k.json',
  'flights-200k.json', 'flights-200k.arrow',
  'gapminder.json', 'income.json', 'iris.json', 'jobs.json', 'londonCentroids.json',
  'monarchs.json', 'movies.json', 'normal-2d.json', 'points.json',
  'udistrict.json', 'unemployment-across-industries.json', 'us-state-capitals.json',
  'weball26.json', 'wheat.json'
]
)}

function _fetchData(d3,flattenGeoData,loadArrowData){return(
async function fetchData(dataUrl) {
  let data = [];
  if (dataUrl.endsWith('.csv')) {
    data = await d3.csvParse(await d3.text(dataUrl), d3.autoType);
  }
  else if (dataUrl.endsWith('.json') || dataUrl.endsWith('.geojson')) {
    data = await d3.json(dataUrl);
    if (data.features) {
      data = flattenGeoData(data);
    }
  }
  else if (dataUrl.endsWith('.arrow')) {
    data = loadArrowData(dataUrl);
  }
  return data;
}
)}

function _flattenGeoData(){return(
function flattenGeoData(data) {
  if (data.features) {
    const features = data.features.map(feature => {
      let geometry = {};
      Object.keys(feature?.geometry).forEach(key => {
        geometry[`geometry.${key}`] = feature.geometry[key];
      });
      let properties = {};
      Object.keys(feature?.properties).forEach(key => {
        properties[`${key}`] = feature.properties[key];
      });
      const {geometry: g, properties: p, ...restOfKeys} = feature;
      return {...restOfKeys, ...properties, ...geometry};
    });
    return features;
  }
  return data;
}
)}

function _loadArrowData(arrow){return(
async function loadArrowData(dataUrl){
  const response = await fetch(dataUrl);
  const arrayBuffer = await response.arrayBuffer();
  const table = arrow.Table.from(new Uint8Array(arrayBuffer));
  const rows = Array(table.length);
  const fields = table.schema.fields.map(d => d.name);
  for (let i=0, n=rows.length; i<n; ++i) {
    const proto = {};
    fields.forEach((fieldName, index) => {
      const column = table.getColumnAt(index);
      proto[fieldName] = column.get(i);
    });
    rows[i] = proto;
  }
  return rows;
}
)}

function _29(md){return(
md`## Table Styles`
)}

function _tableStyles(html){return(
html `
<style>
/* add space for sort direction symbol */
thead th span {
  margin-left: 0 !important;
  padding-right: 0.4rem;
}

.tabulator .tabulator-tableholder{
  background-color: aliceblue;
}
</style>`
)}

function _31(html){return(
html`<link href='https://unpkg.com/tabulator-tables@5.3.1/dist/css/tabulator.min.css' rel='stylesheet' />
tabulator.min.css`
)}

function _32(md){return(
md`## Imports`
)}

function _Tabulator(require){return(
require('https://unpkg.com/tabulator-tables@5.3.1')
)}

function _arrow(require){return(
require('apache-arrow@6.0.1')
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("viewof dataSet")).define("viewof dataSet", ["Inputs","dataSets","html"], _dataSet);
  main.variable(observer("dataSet")).define("dataSet", ["Generators", "viewof dataSet"], (G, _) => G.input(_));
  main.variable(observer("viewof dataUrl")).define("viewof dataUrl", ["Inputs","html","dataUrlParam","dataSet"], _dataUrl);
  main.variable(observer("dataUrl")).define("dataUrl", ["Generators", "viewof dataUrl"], (G, _) => G.input(_));
  main.variable(observer("shareLink")).define("shareLink", ["md","dataUrl"], _shareLink);
  main.variable(observer("viewof dataSummaryView")).define("viewof dataSummaryView", ["SummaryTable","data"], _dataSummaryView);
  main.variable(observer("dataSummaryView")).define("dataSummaryView", ["Generators", "viewof dataSummaryView"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], _6);
  main.variable(observer("viewof tableOptions")).define("viewof tableOptions", ["Inputs","table"], _tableOptions);
  main.variable(observer("tableOptions")).define("tableOptions", ["Generators", "viewof tableOptions"], (G, _) => G.input(_));
  main.variable(observer("tableContainer")).define("tableContainer", ["html"], _tableContainer);
  main.variable(observer("table")).define("table", ["Tabulator","columnHeaderMenu","tableLayout","movableColumns","movableRows","selectableRows","rowContextMenu","pagination","paginationSize","pageSizes","data","dataUrl"], _table);
  main.variable(observer()).define(["md"], _10);
  main.variable(observer()).define(["md"], _11);
  main.variable(observer("viewof tableLayout")).define("viewof tableLayout", ["Inputs","tableLayouts"], _tableLayout);
  main.variable(observer("tableLayout")).define("tableLayout", ["Generators", "viewof tableLayout"], (G, _) => G.input(_));
  main.variable(observer("viewof pagination")).define("viewof pagination", ["Inputs"], _pagination);
  main.variable(observer("pagination")).define("pagination", ["Generators", "viewof pagination"], (G, _) => G.input(_));
  main.variable(observer("viewof paginationSize")).define("viewof paginationSize", ["Inputs","pageSizes"], _paginationSize);
  main.variable(observer("paginationSize")).define("paginationSize", ["Generators", "viewof paginationSize"], (G, _) => G.input(_));
  main.variable(observer("viewof movableColumns")).define("viewof movableColumns", ["Inputs"], _movableColumns);
  main.variable(observer("movableColumns")).define("movableColumns", ["Generators", "viewof movableColumns"], (G, _) => G.input(_));
  main.variable(observer("viewof movableRows")).define("viewof movableRows", ["Inputs"], _movableRows);
  main.variable(observer("movableRows")).define("movableRows", ["Generators", "viewof movableRows"], (G, _) => G.input(_));
  main.variable(observer("viewof selectableRows")).define("viewof selectableRows", ["Inputs"], _selectableRows);
  main.variable(observer("selectableRows")).define("selectableRows", ["Generators", "viewof selectableRows"], (G, _) => G.input(_));
  main.variable(observer("tableLayouts")).define("tableLayouts", _tableLayouts);
  main.variable(observer("pageSizes")).define("pageSizes", _pageSizes);
  main.variable(observer("columnHeaderMenu")).define("columnHeaderMenu", _columnHeaderMenu);
  main.variable(observer("rowContextMenu")).define("rowContextMenu", _rowContextMenu);
  main.variable(observer()).define(["md"], _22);
  main.variable(observer("data")).define("data", ["fetchData","dataUrl"], _data);
  main.variable(observer("dataUrlParam")).define("dataUrlParam", ["URLSearchParams","html"], _dataUrlParam);
  main.variable(observer("dataSets")).define("dataSets", _dataSets);
  main.variable(observer("fetchData")).define("fetchData", ["d3","flattenGeoData","loadArrowData"], _fetchData);
  main.variable(observer("flattenGeoData")).define("flattenGeoData", _flattenGeoData);
  main.variable(observer("loadArrowData")).define("loadArrowData", ["arrow"], _loadArrowData);
  main.variable(observer()).define(["md"], _29);
  main.variable(observer("tableStyles")).define("tableStyles", ["html"], _tableStyles);
  main.variable(observer()).define(["html"], _31);
  main.variable(observer()).define(["md"], _32);
  const child1 = runtime.module(define1);
  main.import("SummaryTable", child1);
  main.variable(observer("Tabulator")).define("Tabulator", ["require"], _Tabulator);
  main.variable(observer("arrow")).define("arrow", ["require"], _arrow);
  return main;
}
