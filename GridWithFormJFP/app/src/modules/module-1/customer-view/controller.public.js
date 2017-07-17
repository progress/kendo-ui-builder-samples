import BaseController from './controller.js'

class Module1CustomerViewCtrl extends BaseController {
    constructor($scope, $injector, stateData) {
        super($scope, $injector);
    }

    // Fired when custom html section is loaded
    includeContentLoaded() {

    }

    // Fired when custom html section loading failed
    includeContentError(e) {

    }

    // Fired when view content is loaded
    onShow($scope) {
		var that = this;
		this.scope = $scope;
		
		this.selectedRow = 0;

//                  Selection of the first row in the grid is done using onDataBound
//					instead of kendoWidgetCreated because it occurs too early				
//					$scope.$on("kendoWidgetCreated", function(event, widget){
//						console.log("DEBUG: kendoWidgetCreated: " + widget.options.name);
//						if (widget.options.name === "Grid") {
//							console.log("DEBUG: grid: kendoWidgetCreated: " + widget);							
//						}
//					});					
	}

	onRowSelect(e) {
		console.log("DEBUG: onRowSelect: ");
		// The CustomerDSModel is not up-to-date on the row select event yet.
		// Use the model from the selected row.
		var item = angular.element("#grid0").data("kendoGrid").select(),
			model = angular.element("#grid0").data("kendoGrid").dataItem(item);
		this.selectedRow = angular.element("tr", angular.element("#grid0").tbody).index(angular.element(item).closest("tr")) - 1;
					
//					console.log("CustomerModel: " + this.$viewModels.CustomerDSModel.uid + " " + this.$viewModels.CustomerDSModel.CustNum + " " + this.$viewModels.CustomerDSModel.Name);
		console.log("Selected record: " + model.uid + " " + model.CustNum + " " + model.Name);
		
		this.displaySalesrep(model);
		this.displayCountry(model);
	}
	
	onDataBound(e) {
		console.log("DEBUG: onDataBound: ");
		
		this.createCountryDropDownList();
		if (this.selectedRow) {
			angular.element("#grid0").data("kendoGrid").select("tr:eq(" + this.selectedRow + ")");
			if (angular.element("#grid0").data("kendoGrid").select().length === 0) {
				// Select first row on the grid
				angular.element("#grid0").data("kendoGrid").select("tr:eq(0)");
			}
		} else {
			// Select first row on the grid
			angular.element("#grid0").data("kendoGrid").select("tr:eq(0)");
		}
	}
	
	onClickToolbar(e) {
		switch (e.id) {
		case "btnNew":
			this.addCustomer();
			break;
		case "btnSave":
			this.saveCustomer();
			break;
		case "btnDelete":
			this.removeCustomer();
			break;
		}
	}
	
	addCustomer() {
		var that = this;
		angular.element("#grid0").data("kendoGrid").addRow();
	}
	
	saveCustomer() {
		var customerDS = this.$ds.CustomerDS,
			dataItem = customerDS.getByUid(this.$viewModels.CustomerDSModel.uid),
			fields = customerDS.transport.jsdo.getSchema();

		console.log("DEBUG: save: ");
		console.log("CustomerModel: " + this.$viewModels.CustomerDSModel.uid + " " +
					this.$viewModels.CustomerDSModel.CustNum + " " + this.$viewModels.CustomerDSModel.Name);
		
		// Set SalesRep and Country in the Customer model from the controls
		// The Country Drop Down List is created dynamically using a custom HTML component					
		// The SalesRep Drop Down List is populated from the SalesRep datasource
		// The Country Drop Down List is populated from local data
		this.$viewModels.CustomerDSModel.SalesRep = angular.element("#salesreps").data("kendoComboBox").value();
		this.$viewModels.CustomerDSModel.Country = angular.element("#country").data("kendoDropDownList").value();

		// Update to the datasource is done automatically for the grid.
		// The following code is not required.
		// Set datasource from data in the model.
		// Cycling through fields in the schema, and skipping internal fields.
		/*
		for (var i = 0; i < fields.length; i += 1) {
			if (fields[i].name.startsWith("_") 
				|| ((typeof(fields[i].semanticType) === "string") 
					&& (fields[i].semanticType === "Internal"))) {
				continue;
			}
			dataItem.set(fields[i].name, this.$viewModels.CustomerDSModel[fields[i].name]);
		}
		*/
		
		customerDS.sync().fail(function () {
			customerDS.cancelChanges();
		});
	}
	
	removeCustomer() {
		var customerDS = this.$ds.CustomerDS,
			dataItem = customerDS.getByUid(this.$viewModels.CustomerDSModel.uid);
		customerDS.remove(dataItem);
		customerDS.sync().fail(function () {
			// Call cancelChanges() to restore the record to the datasource
			customerDS.cancelChanges();
		});
	}
	
	// Creates a Kendo DropDownList control using the custom HTML component.
	// Attaches a local datasource.
	createCountryDropDownList() {
		angular.element("#customhtml0").html("<input id='country' />");
		if (!angular.element("#country").data("kendoDropDownList")) {
			angular.element("#country").kendoDropDownList({
				dataTextField: "name",
				dataValueField: "code",
				dataSource: {
					data: this.getCountries()
				}
			});
		}
	}
	
	// Displays the RepName for the specified Customer model.
	displaySalesrep(customerModel) {
		if (customerModel.SalesRep) {
			angular.element("#salesreps").data("kendoComboBox").value(customerModel.SalesRep);
		} else {
			angular.element("#salesreps").data("kendoComboBox").value("");
		}
	}
	
	// Displays the country for the specified Customer model.				
	displayCountry(customerModel) {
		angular.element("#country").data("kendoDropDownList").value(customerModel.Country);
	}
	
	getCountries() {
		var countries = [
			{code: "USA", name: "United States"},
			{code: "Afghanistan", name: "Afghanistan"},
			{code: "Albania", name: "Albania"},
			{code: "Algeria", name: "Algeria"},
			{code: "Andorra", name: "Andorra"},
			{code: "Angola", name: "Angola"},
			{code: "Antigua and Barbuda", name: "Antigua and Barbuda"},
			{code: "Argentina", name: "Argentina"},
			{code: "Armenia", name: "Armenia"},
			{code: "Aruba", name: "Aruba"},
			{code: "Australia", name: "Australia"},
			{code: "Austria", name: "Austria"},
			{code: "Azerbaijan", name: "Azerbaijan"},
			{code: "Bahamas, The", name: "Bahamas, The"},
			{code: "Bahrain", name: "Bahrain"},
			{code: "Bangladesh", name: "Bangladesh"},
			{code: "Barbados", name: "Barbados"},
			{code: "Belarus", name: "Belarus"},
			{code: "Belgium", name: "Belgium"},
			{code: "Belize", name: "Belize"},
			{code: "Benin", name: "Benin"},
			{code: "Bhutan", name: "Bhutan"},
			{code: "Bolivia", name: "Bolivia"},
			{code: "Bosnia and Herzegovina", name: "Bosnia and Herzegovina"},
			{code: "Botswana", name: "Botswana"},
			{code: "Brazil", name: "Brazil"},
			{code: "Brunei ", name: "Brunei "},
			{code: "Bulgaria", name: "Bulgaria"},
			{code: "Burkina Faso", name: "Burkina Faso"},
			{code: "Burma", name: "Burma"},
			{code: "Burundi", name: "Burundi"},
			{code: "Cambodia", name: "Cambodia"},
			{code: "Cameroon", name: "Cameroon"},
			{code: "Canada", name: "Canada"},
			{code: "Cabo Verde", name: "Cabo Verde"},
			{code: "Central African Republic", name: "Central African Republic"},
			{code: "Chad", name: "Chad"},
			{code: "Chile", name: "Chile"},
			{code: "China", name: "China"},
			{code: "Colombia", name: "Colombia"},
			{code: "Comoros", name: "Comoros"},
			{code: "Congo, Democratic Republic of the", name: "Congo, Democratic Republic of the"},
			{code: "Congo, Republic of the", name: "Congo, Republic of the"},
			{code: "Costa Rica", name: "Costa Rica"},
			{code: "Cote d'Ivoire", name: "Cote d'Ivoire"},
			{code: "Croatia", name: "Croatia"},
			{code: "Cuba", name: "Cuba"},
			{code: "Curacao", name: "Curacao"},
			{code: "Cyprus", name: "Cyprus"},
			{code: "Czechia", name: "Czechia"},
			{code: "Denmark", name: "Denmark"},
			{code: "Djibouti", name: "Djibouti"},
			{code: "Dominica", name: "Dominica"},
			{code: "Dominican Republic", name: "Dominican Republic"},
			{code: "Timor-Leste", name: "Timor-Leste"},
			{code: "Ecuador", name: "Ecuador"},
			{code: "Egypt", name: "Egypt"},
			{code: "El Salvador", name: "El Salvador"},
			{code: "Equatorial Guinea", name: "Equatorial Guinea"},
			{code: "Eritrea", name: "Eritrea"},
			{code: "Estonia", name: "Estonia"},
			{code: "Ethiopia", name: "Ethiopia"},
			{code: "Fiji", name: "Fiji"},
			{code: "Finland", name: "Finland"},
			{code: "France", name: "France"},
			{code: "Gabon", name: "Gabon"},
			{code: "Gambia, The", name: "Gambia, The"},
			{code: "Georgia", name: "Georgia"},
			{code: "Germany", name: "Germany"},
			{code: "Ghana", name: "Ghana"},
			{code: "Greece", name: "Greece"},
			{code: "Grenada", name: "Grenada"},
			{code: "Guatemala", name: "Guatemala"},
			{code: "Guinea", name: "Guinea"},
			{code: "Guinea-Bissau", name: "Guinea-Bissau"},
			{code: "Guyana", name: "Guyana"},
			{code: "Haiti", name: "Haiti"},
			{code: "Holy See", name: "Holy See"},
			{code: "Honduras", name: "Honduras"},
			{code: "Hong Kong", name: "Hong Kong"},
			{code: "Hungary", name: "Hungary"},
			{code: "Iceland", name: "Iceland"},
			{code: "India", name: "India"},
			{code: "Indonesia", name: "Indonesia"},
			{code: "Iran", name: "Iran"},
			{code: "Iraq", name: "Iraq"},
			{code: "Ireland", name: "Ireland"},
			{code: "Israel", name: "Israel"},
			{code: "Italy", name: "Italy"},
			{code: "Jamaica", name: "Jamaica"},
			{code: "Japan", name: "Japan"},
			{code: "Jordan", name: "Jordan"},
			{code: "Kazakhstan", name: "Kazakhstan"},
			{code: "Kenya", name: "Kenya"},
			{code: "Kiribati", name: "Kiribati"},
			{code: "Korea, North", name: "Korea, North"},
			{code: "Korea, South", name: "Korea, South"},
			{code: "Kosovo", name: "Kosovo"},
			{code: "Kuwait", name: "Kuwait"},
			{code: "Kyrgyzstan", name: "Kyrgyzstan"},
			{code: "Laos", name: "Laos"},
			{code: "Latvia", name: "Latvia"},
			{code: "Lebanon", name: "Lebanon"},
			{code: "Lesotho", name: "Lesotho"},
			{code: "Liberia", name: "Liberia"},
			{code: "Libya", name: "Libya"},
			{code: "Liechtenstein", name: "Liechtenstein"},
			{code: "Lithuania", name: "Lithuania"},
			{code: "Luxembourg", name: "Luxembourg"},
			{code: "Macau", name: "Macau"},
			{code: "Macedonia", name: "Macedonia"},
			{code: "Madagascar", name: "Madagascar"},
			{code: "Malawi", name: "Malawi"},
			{code: "Malaysia", name: "Malaysia"},
			{code: "Maldives", name: "Maldives"},
			{code: "Mali", name: "Mali"},
			{code: "Malta", name: "Malta"},
			{code: "Marshall Islands", name: "Marshall Islands"},
			{code: "Mauritania", name: "Mauritania"},
			{code: "Mauritius", name: "Mauritius"},
			{code: "Mexico", name: "Mexico"},
			{code: "Micronesia", name: "Micronesia"},
			{code: "Moldova", name: "Moldova"},
			{code: "Monaco", name: "Monaco"},
			{code: "Mongolia", name: "Mongolia"},
			{code: "Montenegro", name: "Montenegro"},
			{code: "Morocco", name: "Morocco"},
			{code: "Mozambique", name: "Mozambique"},
			{code: "Namibia", name: "Namibia"},
			{code: "Nauru", name: "Nauru"},
			{code: "Nepal", name: "Nepal"},
			{code: "Netherlands", name: "Netherlands"},
			{code: "New Zealand", name: "New Zealand"},
			{code: "Nicaragua", name: "Nicaragua"},
			{code: "Niger", name: "Niger"},
			{code: "Nigeria", name: "Nigeria"},
			{code: "North Korea", name: "North Korea"},
			{code: "Norway", name: "Norway"},
			{code: "Oman", name: "Oman"},
			{code: "Pakistan", name: "Pakistan"},
			{code: "Palau", name: "Palau"},
			{code: "Palestinian Territories", name: "Palestinian Territories"},
			{code: "Panama", name: "Panama"},
			{code: "Papua New Guinea", name: "Papua New Guinea"},
			{code: "Paraguay", name: "Paraguay"},
			{code: "Peru", name: "Peru"},
			{code: "Philippines", name: "Philippines"},
			{code: "Poland", name: "Poland"},
			{code: "Portugal", name: "Portugal"},
			{code: "Qatar", name: "Qatar"},
			{code: "Romania", name: "Romania"},
			{code: "Russia", name: "Russia"},
			{code: "Rwanda", name: "Rwanda"},
			{code: "Saint Kitts and Nevis", name: "Saint Kitts and Nevis"},
			{code: "Saint Lucia", name: "Saint Lucia"},
			{code: "Saint Vincent and the Grenadines", name: "Saint Vincent and the Grenadines"},
			{code: "Samoa ", name: "Samoa "},
			{code: "San Marino", name: "San Marino"},
			{code: "Sao Tome and Principe", name: "Sao Tome and Principe"},
			{code: "Saudi Arabia", name: "Saudi Arabia"},
			{code: "Senegal", name: "Senegal"},
			{code: "Serbia", name: "Serbia"},
			{code: "Seychelles", name: "Seychelles"},
			{code: "Sierra Leone", name: "Sierra Leone"},
			{code: "Singapore", name: "Singapore"},
			{code: "Sint Maarten", name: "Sint Maarten"},
			{code: "Slovakia", name: "Slovakia"},
			{code: "Slovenia", name: "Slovenia"},
			{code: "Solomon Islands", name: "Solomon Islands"},
			{code: "Somalia", name: "Somalia"},
			{code: "South Africa", name: "South Africa"},
			{code: "South Korea", name: "South Korea"},
			{code: "South Sudan", name: "South Sudan"},
			{code: "Spain", name: "Spain"},
			{code: "Sri Lanka", name: "Sri Lanka"},
			{code: "Sudan", name: "Sudan"},
			{code: "Suriname", name: "Suriname"},
			{code: "Swaziland", name: "Swaziland"},
			{code: "Sweden", name: "Sweden"},
			{code: "Switzerland", name: "Switzerland"},
			{code: "Syria", name: "Syria"},
			{code: "Taiwan", name: "Taiwan"},
			{code: "Tajikistan", name: "Tajikistan"},
			{code: "Tanzania", name: "Tanzania"},
			{code: "Thailand", name: "Thailand"},
			{code: "Timor-Leste", name: "Timor-Leste"},
			{code: "Togo", name: "Togo"},
			{code: "Tonga", name: "Tonga"},
			{code: "Trinidad and Tobago", name: "Trinidad and Tobago"},
			{code: "Tunisia", name: "Tunisia"},
			{code: "Turkey", name: "Turkey"},
			{code: "Turkmenistan", name: "Turkmenistan"},
			{code: "Tuvalu", name: "Tuvalu"},
			{code: "Uganda", name: "Uganda"},
			{code: "Ukraine", name: "Ukraine"},
			{code: "United Arab Emirates", name: "United Arab Emirates"},
			{code: "United Kingdom", name: "United Kingdom"},
			{code: "Uruguay", name: "Uruguay"},
			{code: "Uzbekistan", name: "Uzbekistan"},
			{code: "Vanuatu", name: "Vanuatu"},
			{code: "Venezuela", name: "Venezuela"},
			{code: "Vietnam", name: "Vietnam"},
			{code: "Yemen", name: "Yemen"},
			{code: "Zambia", name: "Zambia"},
			{code: "Zimbabwe ", name: "Zimbabwe "}
		];
		return countries;
	}
	
}

Module1CustomerViewCtrl.$inject = ['$scope', '$injector', 'stateData'];

export default Module1CustomerViewCtrl

