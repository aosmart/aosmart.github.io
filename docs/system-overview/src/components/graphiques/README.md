## `Chart.astro`

This file contains the code for the component responsible for creating the frontend charts, such as the following:

<img width="990" height="456" alt="Time series chart" src="https://github.com/user-attachments/assets/dee38420-1514-4fca-bc98-4a605b9fa398" />

<img width="499" height="451" alt="Single-line chart" src="https://github.com/user-attachments/assets/1e6c3c2e-eaec-4fcf-90a4-d9d8577db393" />

<img width="981" height="456" alt="Multi-line chart" src="https://github.com/user-attachments/assets/d5479985-b3ae-4a3f-8e49-a410eff92f76" />

### Notes

- The component receives `datasets` as a parameter. This string represents the path to the corresponding JSON file containing the graph data.
- The JSON files are usually located in `public/graphData`.
- For graphs with multiple datasets (plots) (such as dendrometers, sapflows, and particulate data), the JSON file also specifies the color of each line. The units that appear on the left side of the graphs are also specified in the JSON file.
- If there is only one dataset, the component uses the default color `#3F51B5`:

```js
if (datasets.length === 1) {
  const color = "#3F51B5";

  datasets[0].borderColor = color;
  datasets[0].backgroundColor = color;
}
```

## `Tower.astro`

This component is responsible for generating the chart corresponding to the AP200 system.

<img width="983" height="883" alt="AP200 chart" src="https://github.com/user-attachments/assets/d63f5230-7e81-4f8c-9b53-367cc44c2b6e" />


