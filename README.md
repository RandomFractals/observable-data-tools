# observable-data-tools

![Observable Data Tools & Notebooks](https://github.com/RandomFractals/observable-data-tools/blob/main/docs/images/tabular-data-tools.png?raw=true
 "Observable Data Tools & Notebooks")

[Random Fractals](https://observablehq.com/@randomfractals?tab=collections) stash of [Observable](https://observablehq.com/explore) Data [Tools](https://twitter.com/search?q=(%23dataTools)%20(from%3ATarasNovak)&src=typed_query&f=live) 🛠️ and [Notebooks](https://twitter.com/search?q=(%23dataNotebooks)%20(from%3ATarasNovak)&src=typed_query&f=live) 📚 in [ES Modules](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) `.js`, `.nb.json`, `.ojs`, `.omd`, `.html` and `.qmd` document formats for Data Previews in a browser and in [VSCode IDE](https://code.visualstudio.com/) with [Observable JS](https://marketplace.visualstudio.com/items?itemName=GordonSmith.observable-js) extension, [Quarto](https://marketplace.visualstudio.com/items?itemName=quarto.quarto) extension, and new [Quarto publishing](https://quarto.org/docs/publishing/) tools.

## Observable Data Notebooks

Our [Tables Notebook Collection 📚](https://observablehq.com/collection/@randomfractals/tables) provides a list of generic data notebooks utilizing built-in and custom Observable input controls and widgets to load, preview, search, and query data from various data sources in a browser or in VSCode IDE.

| Notebook | Description |
| --- | --- |
| [Data Table Viewer](https://observablehq.com/@randomfractals/data-table-viewer?collection=@randomfractals/tables) | Simple data notebook to view public data files in `.csv`, `.arrow`, `.json` array, and `.geojson` data formats. Allows to load a data file accessible via `https://` with `dataUrl` query parameter and share data table viewer notebook with the loaded data with others. Provides a list of sample [vega-datasets](https://github.com/vega/vega-datasets/tree/next/data) to preview. Includes simple Observable [`Inputs.table`](https://observablehq.com/@observablehq/input-table) data view cell and [Summary Table](https://observablehq.com/@observablehq/summary-table) cell for a quick overview of dataset columns, total rows, data snapshot graph, missing, mean, median and standard deviation info for the numeric data fields. |
| [Tabular Data Viewer 中](https://observablehq.com/@randomfractals/tabular-data-viewer?collection=@randomfractals/tables) | Use this Tabular Data Viewer 中 Notebook 📓 to view sample datasets or preview any public [Apache Arrow](https://observablehq.com/@randomfractals/apache-arrow), **CSV**, [**GeoJSON**](https://www.rfc-editor.org/rfc/rfc7946.html) or **JSON array** data with [Summary Table](https://observablehq.com/@observablehq/summary-table) and [Tabulator](http://tabulator.info/). Just paste your data url to fetch it. Also, try our [Data Table](https://github.com/RandomFractals/vscode-data-table/releases) 🈸 notebook 📓 cell ⌗ output renderer extension with [VSCode Notebooks](https://marketplace.visualstudio.com/search?target=VSCode&category=Notebooks&sortBy=Installs) 📚. |
| [Data Package 📦](https://observablehq.com/@randomfractals/data-package?collection=@randomfractals/tables) | View <a href="https://specs.frictionlessdata.io/data-package/" target="_blank" title="Data Package Specification">Frictionless Data Package</a> **tabular** data resources with <a href="https://github.com/frictionlessdata/datapackage-js" target="_blank" title="Data Hub">datapackage JS</a> library. This notebook includes sample datasets from <a href="https://github.com/datasets" target="_blank" title="Data Packaged Core Datasets">https://github.com/datasets</a> for some quick tabular data previews. |
| [Datapackage 📦 Tables 🗗 Diagram](https://observablehq.com/@randomfractals/datapackage-diagram?collection=@randomfractals/tables) | Create [Data Package 📦](https://observablehq.com/@randomfractals/data-package) [Graphviz](https://graphviz.org/) and [Mermaid ER](https://mermaid-js.github.io/mermaid/#/entityRelationshipDiagram) diagrams of [Tabular Data Resources](https://specs.frictionlessdata.io/tabular-data-resource/) from public `datapackage.json` and `datapackage.yml` data descriptor files. |
| [Datapackage 📦 Query Editor](https://observablehq.com/@randomfractals/datapackage-query-editor?collection=@randomfractals/tables) | Query [Frictionless Data Package](https://specs.frictionlessdata.io/data-package/) **tabular** data resources with [datapackage-js](https://github.com/frictionlessdata/datapackage-js), [Observable Data Wrangler](https://observablehq.com/@observablehq/data-wrangler) and [Arquero JS](https://uwdata.github.io/arquero) without writing any data query code. |
| [SQLite ER Diagram](https://observablehq.com/@randomfractals/sqlite-er-diagram?collection=@randomfractals/tables) | Create SQLite [ER Diagram](https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model) with [Graphviz html-like node labels](https://graphviz.org/doc/info/shapes.html#html). This notebook uses [`chinook.db`](https://www.sqlitetutorial.net/sqlite-sample-database/) sample [SQLite](https://www.sqlite.org/about.html) database from Observable [`FileAttachment`](https://observablehq.com/@observablehq/file-attachments) as an example. |
| [Datasette 📼 ER Diagram](https://observablehq.com/@randomfractals/datasette-er-diagram?collection=@randomfractals/tables) | Load and view [Datasette examples](https://datasette.io/examples) data, database schema, tables, and [Graphviz](https://graphviz.org/) ER diagram using Observable [Datasette Client API](https://observablehq.com/@ambassadors/datasette-client), and query it with new Observable [SQL cell](https://observablehq.com/@observablehq/sql-cell) tool. |
| [QuestDB](https://observablehq.com/@randomfractals/questdb?collection=@randomfractals/tables) | Use [QuestDB](https://observablehq.com/@observablehq/questdb?collection=@observablehq/database-clients) Observable [DatabaseClient](https://observablehq.com/@observablehq/database-client-specification) implementation to connect to the [QuestDB demo](https://demo.questdb.io/) database instance and run [QuestDB SQL](https://questdb.io/docs/concept/sql-execution-order) queries. This QuestDB intro notebook displays database tables and columns, table data and summary, Graphviz and Mermaid ER diagrams, and lets you query data via no code Data Wrangler UI or Sql editor cell tools. |
| [DuckDB Data Tables](https://observablehq.com/@randomfractals/duckdb-data-tables?collection=@randomfractals/duckdb) | DuckDB Data Tables notebook covers sample `.json`, `.csv`, and .`parquet` data loading from Observable [FileAttachments](https://observablehq.com/@observablehq/file-attachments). It lists created DuckDB tables, lets you pick a table and view table schema and data summary with Observable [Summary Table](https://observablehq.com/@observablehq/summary-table) data tool. You can also view and search table data results via standard Observable [`Inputs.search`](https://observablehq.com/@observablehq/input-search) and [`Inputs.table`](https://observablehq.com/@observablehq/input-table) controls, using [Data Wrangler](https://observablehq.com/@observablehq/data-wrangler) with [Arguero](https://uwdata.github.io/arquero/), or query selected table data with new Observable [`SQL cell`](https://observablehq.com/@observablehq/sql-cell). This DuckDB Data Tables intro notebook also creates Tables diagrams from the loaded data files with  [Graphviz html tables](https://graphviz.org/doc/info/shapes.html#html) and [Mermaid ER Diagram](https://mermaid-js.github.io/mermaid/#/entityRelationshipDiagram), and briefly covers DuckDB [Information Schema](https://duckdb.org/docs/sql/information_schema) views, [Pragmas](https://duckdb.org/docs/sql/pragmas), and created DuckDB instance [Configuration Options](https://duckdb.org/docs/sql/configuration). |
| [Datapackage 📦 DuckDB](https://observablehq.com/@randomfractals/datapackage-duckdb?collection=@randomfractals/duckdb) | DataPackage DuckDB notebook lets you load tabular data described in [Data Package](https://specs.frictionlessdata.io/data-package/) format by changing `datapackage.json` Url. It creates tabular data resources list, data package tables diagram, lists selected table data, imports tabular data into new DuckDB instance, shows db tables diagram, and lets you filter and query imported data with Observable [Data table cell](https://observablehq.com/@observablehq/data-table-cell) and [SQL cell](https://observablehq.com/@observablehq/sql-cell) tools. You can learn more about Data Package format in our [Datapackage Observable notebooks](https://observablehq.com/@randomfractals/data-package?collection=@randomfractals/datapackage) collection. |
| [DuckDB Data Import](https://observablehq.com/@randomfractals/duckdb-data-import?collection=@randomfractals/duckdb) | This notebook lets you import data into new DuckDB instance from public data Url. Supported data files include: `.csv`, `.json` array, `.geojson`, `.arrow` and `.parquet`. In case of GeoJSON we flatten it similar to how [github flat data viewer](https://github.com/githubocto/flat-viewer) handles geo data loading and display. The usual set of Observable data table, SQL cell, and Table Summary data tools are provided in this notebook to preview loaded data and created DuckDB tables. Try Sample Data Files in that notebook and loading your own data and sharing it with notebook `dataUrl` query param. |
| [SQLite to DuckDB](https://observablehq.com/@randomfractals/sqlite-to-duckdb?collection=@randomfractals/duckdb) | The last notebook in our [DuckDB Notebooks 📚](https://observablehq.com/@randomfractals/duckdb-data-tables?collection=@randomfractals/duckdb) collection loads sample [SQLite](https://www.sqlite.org/about.html) `chinook.db` from Observable [FileAttachments](https://observablehq.com/@observablehq/file-attachments), lists loaded SQLite DB tables, creates SQLite Tables Diagram, DuckDB [`CREATE TABLE`](https://duckdb.org/docs/sql/statements/create_table) statements, creates new DuckDB instance and tables and shows created DuckDB Tables Diagram. The last remaining task to finish this notebook is to add bulk data insert pending `PRAGMA foreign_keys = on/off` (#4201) and `ALTER TABLE ADD CONSTRAINT .. FOREIGN KEY` (#4203) features implementation in duckdb. |
| [Database Viewer](https://observablehq.com/@randomfractals/database-viewer?collection=@randomfractals/tables) | Database Viewer Notebook 📓 contains notes on designing new generic Database Client tools that will be implemented in the future, and will use our Tabular Data Viewer and generic SQL query editor to view and query any database with [DatabaseClient Specification](https://observablehq.com/@observablehq/database-client-specification) implementation on Observable. |