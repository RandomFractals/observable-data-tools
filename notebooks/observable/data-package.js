// Title: Data Package 📦
// Author: Taras Novak (@RandomFractals)
// Version: 398
// https://observablehq.com/@randomfractals/data-package@398

function _1(md) {
  return (
    md`# Data Package 📦

View <a href="https://specs.frictionlessdata.io/data-package/" target="_blank" title="Data Package Specification">Frictionless Data Package</a> **tabular** data resources with <a href="https://github.com/frictionlessdata/datapackage-js" target="_blank" title="Data Hub">datapackage JS</a> library.

Sample datasets from: <a href="https://github.com/datasets" target="_blank" title="Data Packaged Core Datasets">https://github.com/datasets</a>.`
  )
}

function _2(md) {
  return (
    md`## Data Package 📦

Select a data package to view resources:`
  )
}

function _dataPackageName(Inputs, dataPackageNames, html) {
  return (
    Inputs.select(dataPackageNames, {
      label: html`<b>Datapackage</b>`
    })
  )
}

function _dataRepositoryLink(md, dataPackageName) {
  return (
    md`**Repository** &nbsp; ⟶ [datasets/${dataPackageName}](https://github.com/datasets/${dataPackageName})`
  )
}

function _dataPackageUrl(Inputs, html, dataPackageUrlParam, dataPackageName) {
  return (
    Inputs.text({
      label: html`<b>Datapackage Url</b>`,
      placeholder: 'type data url and click fetch',
      value: `${dataPackageUrlParam ? dataPackageUrlParam : `https://raw.githubusercontent.com/datasets/${dataPackageName}/master/datapackage.json`}`,
      submit: 'fetchData'
    })
  )
}

function _shareLink(md, dataPackageUrl) {
  return (
    md`*share a link to this [datapackage notebook](https://observablehq.com/@randomfractals/data-package?dataPackageUrl=${dataPackageUrl})*`
  )
}

function _dataPackageInfo(dataPackageUrl) {
  return (
    fetch(dataPackageUrl).then(response => response.json())
  )
}

function _8(dataPackageInfo, md) {
  return (
    md`### ${dataPackageInfo.title}

${dataPackageInfo.description ? dataPackageInfo.description : ''}`
  )
}

function _9(md) {
  return (
    md`### Resources`
  )
}

function _resourceName(Inputs, dataPackage, html) {
  return (
    Inputs.select(dataPackage.resourceNames.filter(resourceName => resourceName !== 'validation_report'), {
      label: html`<b>Resource</b>`
    })
  )
}

function _resourceTable(Inputs, resourceInfo) {
  return (
    Inputs.table([resourceInfo.descriptor], {
      format: {
        datahub: d => d.type
      }
    })
  )
}

function _resourceLink(md, resourceInfo) {
  return (
    md`**${resourceInfo.descriptor.path}**`
  )
}

function _searchResults(Inputs, resourceData) {
  return (
    Inputs.search(resourceData)
  )
}

function _14(Inputs, searchResults) {
  return (
    Inputs.table(searchResults)
  )
}

async function _resourceData(resource) {
  if (resource.tabular) {
    return await resource.read({ keyed: true })
  }
  return [];
}


function _16(md) {
  return (
    md`## Data Package API`
  )
}

function _dataPackageUrlParam(URLSearchParams, html) {
  return (
    new URLSearchParams(html`<a href>`.search).get('dataPackageUrl')
  )
}

function _dataPackageNames() {
  return (
    [
      'world-cities',
      'country-codes',
      'geo-countries',
      'geoip2-ipv4',
      'fips-10-4',
      'un-locode',
      'airport-codes',
      'language-codes',
      'population',
      'population-city',
      'gdp',
      'gdp-uk',
      'gdp-us',
      'cash-surplus-deficit',
      'dac-and-crs-code-lists',
      'unece-units-of-measure',
      'currency-codes',
      's-and-p-500-companies',
      'nasdaq-listings',
      'nyse-other-listings',
      'finance-vix',
      'cpi',
      'cpi-us',
      'exchange-rates',
      'employment-us',
      'house-prices-us',
      'house-prices-uk',
      'house-prices-global',
      'household-income-us-historical',
      'oil-prices',
      'natural-gas',
      'expenditure-on-research-and-development',
      'usa-education-budget-analysis',
      'pharmaceutical-drug-spending',
      'genome-sequencing-costs',
      'covid-19',
      'iso-container-codes',
      'global-temp',
      'global-temp-anomalies',
      'co2-ppm',
      'co2-fossil-by-nation',
      'top-level-domain-names',
      'unicode-emojis',
      'registry'
    ]
  )
}

function _dataPackage(fetchData, dataPackageUrl) {
  return (
    fetchData(dataPackageUrl)
  )
}

function _resourceNames(dataPackage) {
  return (
    dataPackage.resourceNames.filter(resourceName => resourceName !== 'validation_report')
  )
}

function _resources(dataPackage) {
  return (
    dataPackage.resources
  )
}

function _resourceUrl(resourceInfo) {
  return (
    `${resourceInfo._basePath}/${resourceInfo.descriptor.path}`
  )
}

function _resourceInfo(dataPackage, resourceName) {
  return (
    dataPackage.getResource(resourceName)
  )
}

function _resource(DataPackage, resourceUrl) {
  return (
    DataPackage.Resource.load({ path: resourceUrl })
  )
}

function _fetchData(DataPackage) {
  return (
    async function fetchData(dataPackageUrl) {
      return await DataPackage.Package.load(dataPackageUrl);
    }
  )
}

function _26(md) {
  return (
    md`## Imports`
  )
}

function _DataPackage(require) {
  return (
    require('https://unpkg.com/datapackage@1.1.10/dist/datapackage.min.js')
  )
}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer()).define(["md"], _2);
  main.variable(observer("viewof dataPackageName")).define("viewof dataPackageName", ["Inputs", "dataPackageNames", "html"], _dataPackageName);
  main.variable(observer("dataPackageName")).define("dataPackageName", ["Generators", "viewof dataPackageName"], (G, _) => G.input(_));
  main.variable(observer("dataRepositoryLink")).define("dataRepositoryLink", ["md", "dataPackageName"], _dataRepositoryLink);
  main.variable(observer("viewof dataPackageUrl")).define("viewof dataPackageUrl", ["Inputs", "html", "dataPackageUrlParam", "dataPackageName"], _dataPackageUrl);
  main.variable(observer("dataPackageUrl")).define("dataPackageUrl", ["Generators", "viewof dataPackageUrl"], (G, _) => G.input(_));
  main.variable(observer("shareLink")).define("shareLink", ["md", "dataPackageUrl"], _shareLink);
  main.variable(observer("dataPackageInfo")).define("dataPackageInfo", ["dataPackageUrl"], _dataPackageInfo);
  main.variable(observer()).define(["dataPackageInfo", "md"], _8);
  main.variable(observer()).define(["md"], _9);
  main.variable(observer("viewof resourceName")).define("viewof resourceName", ["Inputs", "dataPackage", "html"], _resourceName);
  main.variable(observer("resourceName")).define("resourceName", ["Generators", "viewof resourceName"], (G, _) => G.input(_));
  main.variable(observer("resourceTable")).define("resourceTable", ["Inputs", "resourceInfo"], _resourceTable);
  main.variable(observer("resourceLink")).define("resourceLink", ["md", "resourceInfo"], _resourceLink);
  main.variable(observer("viewof searchResults")).define("viewof searchResults", ["Inputs", "resourceData"], _searchResults);
  main.variable(observer("searchResults")).define("searchResults", ["Generators", "viewof searchResults"], (G, _) => G.input(_));
  main.variable(observer()).define(["Inputs", "searchResults"], _14);
  main.variable(observer("resourceData")).define("resourceData", ["resource"], _resourceData);
  main.variable(observer()).define(["md"], _16);
  main.variable(observer("dataPackageUrlParam")).define("dataPackageUrlParam", ["URLSearchParams", "html"], _dataPackageUrlParam);
  main.variable(observer("dataPackageNames")).define("dataPackageNames", _dataPackageNames);
  main.variable(observer("dataPackage")).define("dataPackage", ["fetchData", "dataPackageUrl"], _dataPackage);
  main.variable(observer("resourceNames")).define("resourceNames", ["dataPackage"], _resourceNames);
  main.variable(observer("resources")).define("resources", ["dataPackage"], _resources);
  main.variable(observer("resourceUrl")).define("resourceUrl", ["resourceInfo"], _resourceUrl);
  main.variable(observer("resourceInfo")).define("resourceInfo", ["dataPackage", "resourceName"], _resourceInfo);
  main.variable(observer("resource")).define("resource", ["DataPackage", "resourceUrl"], _resource);
  main.variable(observer("fetchData")).define("fetchData", ["DataPackage"], _fetchData);
  main.variable(observer()).define(["md"], _26);
  main.variable(observer("DataPackage")).define("DataPackage", ["require"], _DataPackage);
  return main;
}