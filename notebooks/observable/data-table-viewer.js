// Title: Data Table Viewer
// Author: Taras Novak (@randomfractals)
// Version: 129
// https://observablehq.com/@randomfractals/data-table-viewer@129

import define1 from "/@observablehq/summary-table.js?v=3";

function _1(md) {
  return (
    md`# Data Table Viewer

Use this Data Table 🈸 Viewer 📓 to view sample datasets or preview any public
[Apache Arrow](https://observablehq.com/@randomfractals/apache-arrow),
**CSV**, [**GeoJSON**](https://www.rfc-editor.org/rfc/rfc7946.html) or **JSON array** data. Just paste your data url to fetch it.

Also, try [Data Table](https://github.com/RandomFractals/vscode-data-table) 🈸 notebook 📓 cell ⌗ output renderer extension in [VSCode Notebooks](https://marketplace.visualstudio.com/search?target=VSCode&category=Notebooks&sortBy=Installs) 📚.
`
  )
}

function _dataSet(Inputs, dataSets, html) {
  return (
    Inputs.select(dataSets, {
      label: html`<b>dataset</b>`
    })
  )
}

function _dataUrl(Inputs, html, dataUrlParam, dataSet) {
  return (
    Inputs.text({
      label: html`<b>dataUrl</b>`,
      placeholder: 'type data url and click fetch',
      value: `${dataUrlParam ? dataUrlParam : 'https://raw.githubusercontent.com/vega/vega-datasets/master/data/' + dataSet}`,
      submit: 'fetchData'
    })
  )
}

function _shareLink(md, dataUrl) {
  return (
    md`*share a link to your [data](https://observablehq.com/@randomfractals/data-table-viewer?dataUrl=${dataUrl})*`
  )
}

function _dataSummaryView(SummaryTable, data) {
  return (
    SummaryTable(data)
  )
}

function _dataSearchResults(Inputs, data) {
  return (
    Inputs.search(data)
  )
}

function _tableView(Inputs, dataSearchResults) {
  return (
    Inputs.table(dataSearchResults)
  )
}

function _data(fetchData, dataUrl) {
  return (
    fetchData(dataUrl)
  )
}

function _dataUrlParam(URLSearchParams, html) {
  return (
    new URLSearchParams(html`<a href>`.search).get('dataUrl')
  )
}

function _dataSets() {
  return (
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
  )
}

function _fetchData(d3, flattenGeoData, loadArrowData) {
  return (
    async function fetchData(dataUrl) {
      let data = [];
      console.log('fetchData:dataUrl:', dataUrl);
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
  )
}

function _flattenGeoData() {
  return (
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
          const { geometry: g, properties: p, ...restOfKeys } = feature;
          return { ...restOfKeys, ...properties, ...geometry };
        });
        return features;
      }
      return data;
    }
  )
}

function _loadArrowData(arrow) {
  return (
    async function loadArrowData(dataUrl) {
      const response = await fetch(dataUrl);
      const arrayBuffer = await response.arrayBuffer();
      const table = arrow.Table.from(new Uint8Array(arrayBuffer));
      const rows = Array(table.length);
      const fields = table.schema.fields.map(d => d.name);
      for (let i = 0, n = rows.length; i < n; ++i) {
        const proto = {};
        fields.forEach((fieldName, index) => {
          const column = table.getColumnAt(index);
          proto[fieldName] = column.get(i);
        });
        rows[i] = proto;
      }
      return rows;
    }
  )
}

function _tableStyles(html) {
  return (
    html`
<style>
/* add space for sort direction symbol */
thead th span {
  margin-left: 0 !important;
  padding-right: 0.4rem;
}
</style>`
  )
}

function _15(md) {
  return (
    md`## Imports`
  )
}

function _arrow(require) {
  return (
    require('apache-arrow@6.0.1')
  )
}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("viewof dataSet")).define("viewof dataSet", ["Inputs", "dataSets", "html"], _dataSet);
  main.variable(observer("dataSet")).define("dataSet", ["Generators", "viewof dataSet"], (G, _) => G.input(_));
  main.variable(observer("viewof dataUrl")).define("viewof dataUrl", ["Inputs", "html", "dataUrlParam", "dataSet"], _dataUrl);
  main.variable(observer("dataUrl")).define("dataUrl", ["Generators", "viewof dataUrl"], (G, _) => G.input(_));
  main.variable(observer("shareLink")).define("shareLink", ["md", "dataUrl"], _shareLink);
  main.variable(observer("viewof dataSummaryView")).define("viewof dataSummaryView", ["SummaryTable", "data"], _dataSummaryView);
  main.variable(observer("dataSummaryView")).define("dataSummaryView", ["Generators", "viewof dataSummaryView"], (G, _) => G.input(_));
  main.variable(observer("viewof dataSearchResults")).define("viewof dataSearchResults", ["Inputs", "data"], _dataSearchResults);
  main.variable(observer("dataSearchResults")).define("dataSearchResults", ["Generators", "viewof dataSearchResults"], (G, _) => G.input(_));
  main.variable(observer("tableView")).define("tableView", ["Inputs", "dataSearchResults"], _tableView);
  main.variable(observer("data")).define("data", ["fetchData", "dataUrl"], _data);
  main.variable(observer("dataUrlParam")).define("dataUrlParam", ["URLSearchParams", "html"], _dataUrlParam);
  main.variable(observer("dataSets")).define("dataSets", _dataSets);
  main.variable(observer("fetchData")).define("fetchData", ["d3", "flattenGeoData", "loadArrowData"], _fetchData);
  main.variable(observer("flattenGeoData")).define("flattenGeoData", _flattenGeoData);
  main.variable(observer("loadArrowData")).define("loadArrowData", ["arrow"], _loadArrowData);
  main.variable(observer("tableStyles")).define("tableStyles", ["html"], _tableStyles);
  main.variable(observer()).define(["md"], _15);
  const child1 = runtime.module(define1);
  main.import("SummaryTable", child1);
  main.variable(observer("arrow")).define("arrow", ["require"], _arrow);
  return main;
}