import "./InsightsItem3.css";
import { useEffect, useRef } from "react";
import { Root, percent, RadialGradient, Legend } from "@amcharts/amcharts5";
import { PieChart } from "@amcharts/amcharts5/.internal/charts/pie/PieChart";
import { PieSeries } from "@amcharts/amcharts5/.internal/charts/pie/PieSeries";

import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const InsightsItem3 = function () {
  const chartDivRef = useRef(null);
  const rootRef = useRef(null);
  useEffect(() => {
    if (!rootRef.current) {
      // Create root element
      // https://www.amcharts.com/docs/v5/getting-started/#Root_element
      const root = Root.new(chartDivRef.current);
      // Set themes
      // https://www.amcharts.com/docs/v5/concepts/themes/
      root.setThemes([am5themes_Animated.new(root)]);
      rootRef.current = root;
    }

    const root = rootRef.current;

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
    if (!root.children) {
      root.children = [];
    }
    var chart = PieChart.new(root, {
      radius: percent(90),
      innerRadius: percent(50),
      layout: root.horizontalLayout,
    });
    root.children.push(chart);

    // Create series
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
    var series = PieSeries.new(root, {
      name: "Series",
      valueField: "sales",
      categoryField: "country",
    });
    chart.series.push(series);

    // Set data
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
    series.data.setAll([
      {
        country: "Lithuania",
        sales: 501.9,
      },
      {
        country: "Czechia",
        sales: 301.9,
      },
      {
        country: "Ireland",
        sales: 201.1,
      },
      {
        country: "Germany",
        sales: 165.8,
      },
      {
        country: "Australia",
        sales: 139.9,
      },
      {
        country: "Austria",
        sales: 128.3,
      },
      {
        country: "UK",
        sales: 99,
      },
      {
        country: "Belgium",
        sales: 60,
      },
      {
        country: "The Netherlands",
        sales: 50,
      },
    ]);

    // Disabling labels and ticks
    series.labels.template.set("visible", false);
    series.ticks.template.set("visible", false);

    // Adding gradients
    series.slices.template.set("strokeOpacity", 0);
    series.slices.template.set(
      "fillGradient",
      RadialGradient.new(root, {
        stops: [
          {
            brighten: -0.8,
          },
          {
            brighten: -0.8,
          },
          {
            brighten: -0.5,
          },
          {
            brighten: 0,
          },
          {
            brighten: -0.5,
          },
        ],
      })
    );

    // Create legend
    // https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/
    var legend = Legend.new(root, {
      centerY: percent(50),
      y: percent(50),
      layout: root.verticalLayout,
    });
    chart.children.push(legend);
    // set value labels align to right
    legend.valueLabels.template.setAll({ textAlign: "right" });
    // set width and max width of labels
    legend.labels.template.setAll({
      maxWidth: 140,
      width: 140,
      oversizedBehavior: "wrap",
    });

    legend.data.setAll(series.dataItems);

    // Play initial series animation
    // https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
    series.appear(1000, 100);
  }, []);

  return <div ref={chartDivRef} id="chartdiv"></div>;
};

export default InsightsItem3;
