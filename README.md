# Kendo UI Builder Samples

Collection of sample projects using Kendo UI Builder for OpenEdge.

## Importing an existing project into Kendo UI Builder 2.0

Existing projects can be imported into Kendo UI Builder using the Import App option in Kendo UI Builder.
For projects from a previous version can be migrated to the new version by selecting the project from the main page in Kendo UI Builder. This will update the metadata. Custom code should be migrated manually.

## Running the sample apps

Kendo UI Builder apps can be run in several ways:
- Using the Preview option in Kendo UI Builder
- Using "npm start" from the app/ folder and accessing the app at http://localhost:4200
- Using Publish in Kendo UI Builder to create the build-output/debug or build-output/release folder, copy the folder to a web server and accessing index.html

Notes:
* This repository does not include the app/node_modules folder nor the build-output folder (optional in Kendo UI Builder 2.0).
    - Use Generate or Preview in Kendo UI Builder to create the app/node_modules folder.
    - Use Publish to create the build-output folder for get a static version of the app with a debug or a release version.
    - Alternatively, you can use "npm install" from the app/ folder to download the modules needed during development.

## Changing the Data Source

The Data Provider information in Kendo UI Builder is read-only. However, if you want to change the Data Provider used by a sample app to use your own OpenEdge backend, you could manually modify the corresponding JSON file in the meta/dataProviders folder in the project.
(Change serviceUri and catalogUris to change the location.)

# Projects

## charts

This example shows a view created using the Blank option.
It demos a Grid for the Salesrep table, and a corresponding BarChart for the selected row.
Additionally, it displays a PieChart showing data for all the rows.

Both charts are placed into a TabStrip control.

It creates local data sources to transform the Salerep data into required data models for the corresponding charts.

## form-external-paging

This example shows a form with navigation, CRUD capabilities, and also implements server paging. It is an extension of the form-with-crud app, but specifies server paging for its DataSource
	with a pagesize set to 5.
	
	
The Age combobox uses a local datasource.
	
Note:
- In order to prevent the automatic setting of the main datasource by the combobox at design time, a dummy datasource was added. A local datasource is set at runtime.

## form-with-crud

This example shows a form with various types of controls with navigation and CRUD capabilities.
A single row is displayed at a time and updates can be performed on the row. Navigation takes advantage of paging support of the datasource by setting pagesize to 1. In this way, binding between the datasource's row, the model, and the control is done automatically.
	
The Age combobox uses a local datasource.
	
Note:
- In order to prevent the automatic setting of the main datasource by the combobox at design time, a dummy datasource was added. A local datasource is set at runtime.
  
## grid-external-filtering
	
This example shows how to filter a grid by multiple fields using a single search text-box.
	
This is done by specifying a function in the "Change Event Function" property of the search text-box in the Component Properties pane.
The function itself is specified in the app/src/modules/<module-name>/<view-name>/controller.public.js.

Access to the data is done using the dsService helper class.

## grid-foreignkey 
  
This example shows a view with grid component. One of the columns on the display data found in a related table.
Another view shows a grid component where one of the columns uses a DropDownList to input values from a related table.

## grid-image

This example shows how to display a static image on a grid using a row template function defined in app/src/modules/<module-name>/<view-name>/controller.public.js. The "Row Template Function" is specified via the Properties pane in the designer.

The static images are located in app/src/images.

## GridWithFormJFP

This example shows a grid component and a form with CRUD capabilities.
The JSON Filter Pattern (JFP) is used to provide server paging, filtering and sorting for the Customer grid.
	
This example showcases a Salesrep Drop Down List using data from data source specified for the view.
The view also shows a Country Drop Down List using local data from a data source created programmatically.

## ListView_FormWithCRUD

This example uses a list view and a form to provide CRUD operations.

## list-view-crud-with-validation

This example shows how to provide a more complex template for items in a list view.
	
This is done by specifying an HTML-based template in the app/src/modules/<module-name>/<view-name>/topSection.html and then specifying the id of the template in "Template Id" property in the list view's Component Properties pane.
	
This example also showcases validation on form fields.

The validation is implemented with code in app/src/modules/<module-name>/<view-name>/controller.public.js. See the code for more details.
	
Access to the data is done using the dsService helper class.


