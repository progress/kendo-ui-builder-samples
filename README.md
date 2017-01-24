# Kendo UI Builder Samples

Collection of sample projects using Kendo UI Builder for OpenEdge.

## Importing an existing project into Kendo UI Builder

Existing projects can be imported into Kendo UI Builder using the following steps:
- Open the meta/app.json file in the project folder of the app.
- Open the workspaces.json file in the Kendo UI Builder install folder.
- Add an entry to the JSON array in workspaces.json with the following properties *name*, *dir*, and *uniqueID*

> {
>     "name": "&lt;name&gt;",
>     "dir": "&lt;path-to-project&gt;",
>     "uniqueID": "&lt;uniqueID&gt;"
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

# Projects

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
The function itself is specified in the src/scripts/<view-name>/view-factory.js.

Access to the data is done using the dsService helper class.

## grid-foreignkey 
  
This example shows a grid component. One of the columns display data found in a related table.

## grid-image

This example shows how to display a static image on a grid using a row template function defined in src/scripts/<view-name>/view-factory.js. The "Row Template Function" is specified via the Properties pane in the designer.

The static images are located in src/assets/images.

## GridWithFormJFP

This example shows a grid component and a form with CRUD capabilities.
The JSON Filter Pattern (JFP) is used to provide server paging, filtering and sorting for the Customer grid.
	
This example showcases a Salesrep Drop Down List using data from data source specified for the view.
The view also shows a Country Drop Down List using local data from a data source created programmatically.
  
## hierarchical-grid

This example shows a parent / child relationship using a nested grid (hierarchical).
	
The parent grid is defined via the designer, whereas the child grid is defined programmatically.

## ListView_FormWithCRUD

This example uses a list view and a form to provide CRUD operations.

## list-view-crud-with-validation

This example shows how to provide a more complex template for items in a list view.
	
This is done by specifying an HTML-based template in the src/html/<view-name>/topSection.html and then specifying the id of the template in "Template Id" property in the list view's Component Properties pane.
	
This example also showcases validation on form fields.

The validation is implemented with code in src/scripts/<view-name>/view-factory.js. See the code for more details.
	
Access to the data is done using the dsService helper class.

## master-detail-grids

This example shows a parent / child record relation in a master grid followed by a detail grid.

Filtering is implemented by using an Angular watch on the model of the parent.
When a row is selected, the model for the parent is set automatically, and the watch handler sets the filter for the detail grid.
See code in src/scripts/<view-name>/view-factory.js.
	
The OrderDate's "Format" property is set in the Grid Columns Properties for display purposes.
