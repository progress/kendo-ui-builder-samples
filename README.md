# Kendo UI Builder Samples

Collection of sample projects using Kendo UI Builder for OpenEdge.

## Importing an existing project into Kendo UI Builder

Existing projects can be imported into Kendo UI Builder using the following steps:
- Open the meta/app.json file in the project folder of the app.
- Open the workspaces.json file in the Kendo UI Builder install folder.
- Add an entry to the JSON array in workspaces.json with the following properties *name*, *dir*, and *uniqueID*

> {
>     "name": "<name>",
>     "dir": "<path-to-project>",
>     "uniqueID": "<uniqueID>"
> }

*Example: workspaces.json*
>[
>    {
>        "name": "grid-image",
>        "dir": "C:\\KUIBWork\\grid-image",
>        "uniqueID": "297b3b29-623f-4321-8e07-a799be94126e"
>    },
>    {
>        "name": "form-with-crud",
>        "dir": "C:\\KUIBWork\\form-with-crud",
>        "uniqueID": "ff869a5c-6d0a-40a0-b190-d591a10a2d30"
>    }
>]


## grid-image

This example shows how to display a static image on a grid using a row template function defined in src/scripts/<view-name>/view-factory.js. The "Row Template Function" is specified via the Properties pane in the designer.

The static images are located in src/assets/images.

## form-with-crud

This example shows a form with various types of controls with navigation and CRUD capabilities.
A single row is displayed at a time and updates can be performed on the row. Navigation takes advantage of paging support of the datasource by setting pagesize to 1. In this way, binding between the datasource's row, the model, and the control is done automatically.
	
The Age combobox uses a local datasource.
	
Note:
- In order to prevent the automatic setting of the main datasource by the combobox at design time, a dummy datasource was added. A local datasource is set at runtime.
  
## form-external-paging

This example shows a form with navigation, CRUD capabilities, and also implements server paging. It is an extension of the form-with-crud app, but specifies server paging for its DataSource
	with a pagesize set to 5.
	
	
The Age combobox uses a local datasource.
	
Note:
- In order to prevent the automatic setting of the main datasource by the combobox at design time, a dummy datasource was added. A local datasource is set at runtime.
  
## grid-foreignkey 
  
This example shows a grid component. One of the columns display data found in a related table.

ListView_FormWithCRUD

This example uses a list view and a form to provide CRUD operations.
 
## hierarchical-grid

This example shows a parent / child relationship using a nested grid (hierarchical).
	
The parent grid is defined via the designer, whereas the child grid is defined programmatically.

## grid-external-filtering
	
This example shows how to filter a grid by multiple fields using a single search text-box.
	
This is done by specifying a function in the "Change Event Function" property of the search text-box in the Component Properties pane.
The function itself is specified in the src/scripts/<view-name>/view-factory.js.

Access to the data is done using the dsService helper class.
