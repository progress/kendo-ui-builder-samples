import BaseController from './controller.js'

class ChartsChartsDemoCtrl extends BaseController {
    constructor($scope, $injector, stateData) {
        super($scope, $injector);

        // Creating DataSource for Quota per individual Salesrep
        // DataSource is used for the BarChart
        // 
        this.monthlyQuotaDS = new kendo.data.DataSource({
            data: [
                {Month: 'Jan', Quota: 0},
                {Month: 'Feb', Quota: 0},
                {Month: 'Mar', Quota: 0},
                {Month: 'Apr', Quota: 0},
                {Month: 'May', Quota: 0},
                {Month: 'Jun', Quota: 0},
                {Month: 'Jul', Quota: 0},
                {Month: 'Aug', Quota: 0},
                {Month: 'Sep', Quota: 0},
                {Month: 'Oct', Quota: 0},
                {Month: 'Nov', Quota: 0},
                {Month: 'Dec', Quota: 0}
            ]
        });

        // Creating DataSource for Team year quota for each Salesrep
        // DataSource is used for the PieChart
        this.teamQuotaDS = new kendo.data.DataSource({
            data: []
        });

        // Bar Chart configuration        
        this.$components.barcharts0.options.categoryAxis = {
            field: 'Month',
            labels: {
                format: '{0}',
                rotation: {
                    angle: '0'
                }
            }
        };
        this.$components.barcharts0.options.series = [{
            field: 'Quota',
            name: ''
        }];
        this.$components.barcharts0.options.dataSource = this.monthlyQuotaDS;

        // Pie Chart configuration
        this.$components.piecharts0.options.series = [{
            field: 'YearQuota',
            categoryField: 'SalesRep',
            startAngle: 90
        }];
        this.$components.piecharts0.options.dataSource = this.teamQuotaDS;
    }

    // Fired when custom html section is loaded
    includeContentLoaded() {

    }

    // Fired when custom html section loading failed
    includeContentError(e) {

    }

    // Fired when view content is loaded
    onShow($scope) {
        console.log('Show');
    }

    // Sets the DataSource for the PieChart based on the Salesrep's data
    // Calculates the quota percentages for each salesrep
    setPieChartDS(data) {
        var i, j,
            array = [],
            yearQuota,
            totalQuotas = 0;

        // Calculate the year quota and total for the new DataSource
        data.forEach(function(record) {
            yearQuota = 0;
            for (i = 1; i <= 12; i += 1) {
                yearQuota += record['MonthQuota_' + i];
            }
            array.push({
                SalesRep: record.SalesRep,
                YearQuota: yearQuota,
                Percentage: 0
            });
            totalQuotas += yearQuota
        });

        // Calculate percentages for the new DataSource        
        array.forEach(function(record) {
            record.Percentage = record.YearQuota / totalQuotas * 100;
            record.Percentage = Math.round(record.Percentage * 100) / 100;
        });

        this.$components.piecharts0.widget.setDataSource(new kendo.data.DataSource({
            data: array
        }));
    }

    onDataBound(e) {
        // On data load, select the first row in grid
        this.$components.grid0.widget.select('tr[data-uid]:eq(0)');

        this.setPieChartDS(this.$ds.SalesrepDS.data());
    }

    onRowSelect(e) {
        var dataItem = e.sender.dataItem(e.sender.select()),
            i;

        console.log('onRowSelect: ' + dataItem.SalesRep);

        for(i = 0; i < 12; i += 1) {
            this.monthlyQuotaDS.at(i).Quota = dataItem['MonthQuota_' + (i + 1)];
        }
        this.$components.barcharts0.widget.setDataSource(this.monthlyQuotaDS);

        this.$components.barcharts0.widget.setOptions({
            title: 'Monthly Quota for ' + dataItem.SalesRep
        });
    }

    // Specifies the label for the invidual slices in the PieChart
    pieChartLabelTemplate(dataItem) {
        var template = kendo.template('#= category #: \n #= dataItem.Percentage#%');
        return template(dataItem);
    }
}

ChartsChartsDemoCtrl.$inject = ['$scope', '$injector', 'stateData'];

export default ChartsChartsDemoCtrl